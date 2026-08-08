"use client";

import Script from "next/script";
import { FormEvent, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import HoldToSubmitButton from "@/components/HoldToSubmitButton";

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

type ContactFormProps = { siteKey: string };
type FormState = { type: "idle" | "loading" | "success" | "error"; message?: string };

export default function ContactForm({siteKey}:ContactFormProps){
  const [state,setState]=useState<FormState>({type:"idle"});
  const [turnstileComplete,setTurnstileComplete]=useState(false);
  const turnstileContainer=useRef<HTMLDivElement>(null);
  const turnstileWidgetId=useRef<string | null>(null);

  function renderTurnstile(){
    if(!window.turnstile||!turnstileContainer.current||turnstileWidgetId.current)return;
    turnstileWidgetId.current=window.turnstile.render(turnstileContainer.current,{
      sitekey:siteKey,
      theme:"dark",
      size:"flexible",
      action:"contact",
      callback:()=>setTurnstileComplete(true),
      "expired-callback":()=>setTurnstileComplete(false),
      "error-callback":()=>setTurnstileComplete(false),
    });
  }

  async function handleSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    if(state.type==="loading")return;
    const form=event.currentTarget;
    const data=new FormData(form);
    const turnstileToken=String(data.get("cf-turnstile-response")||"");

    if(!turnstileToken){
      setState({type:"error",message:"Please complete the security check and try again."});
      return;
    }

    setState({type:"loading",message:"Sending your inquiry…"});
    try{
      const response=await fetch("/api/contact",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          name:data.get("name"),
          email:data.get("email"),
          company:data.get("company"),
          projectType:data.get("project-type"),
          details:data.get("details"),
          website:data.get("website"),
          turnstileToken,
        }),
      });
      const result=await response.json() as {message?:string};
      if(!response.ok)throw new Error(result.message||"The inquiry could not be sent.");
      form.reset();
      window.turnstile?.reset(turnstileWidgetId.current||undefined);
      setTurnstileComplete(false);
      setState({type:"success",message:"Thanks—your inquiry is on its way. I’ll be in touch within one business day."});
    }catch(error){
      window.turnstile?.reset(turnstileWidgetId.current||undefined);
      setTurnstileComplete(false);
      setState({type:"error",message:error instanceof Error?error.message:"Something went wrong. Please try again."});
    }
  }

  return <>
    {siteKey&&<Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={renderTurnstile} />}
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Name<input required name="name" autoComplete="name" maxLength={100} placeholder="Your name" /></label>
        <label>Email<input required name="email" type="email" autoComplete="email" maxLength={254} placeholder="you@company.com" /></label>
      </div>
      <label>Company or brand<input name="company" autoComplete="organization" maxLength={120} placeholder="Optional" /></label>
      <label>What are we building?<select defaultValue="" name="project-type" required><option value="" disabled>Select a project type</option><option>Real Estate Website</option><option>Music / Creative Platform</option><option>Boutique Brand Website</option><option>Technology / SaaS</option><option>Custom Application</option></select></label>
      <label>Project details<textarea required name="details" minLength={20} maxLength={5000} placeholder="Goals, audience, timeline, and anything else I should know…" rows={6}/></label>
      <label className="contact-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <div className="turnstile-row">
{siteKey?<div ref={turnstileContainer} className="turnstile-widget" />:<p>Secure form delivery is being configured. You can email <a href="mailto:info@nextdesign.dev">info@nextdesign.dev</a> in the meantime.</p>}
      </div>
      <div className="contact-form-footer">
        <span>No pressure. Just a thoughtful first conversation.</span>
        <HoldToSubmitButton disabled={!siteKey||!turnstileComplete} loading={state.type==="loading"} label="send inquiry" className="button hero-primary" />
      </div>
      {state.type!=="idle"&&<p className={`contact-form-status is-${state.type}`} role="status" aria-live="polite">{state.type==="success"&&<CheckCircle2 size={17}/>} {state.message}</p>}
    </form>
  </>;
}
