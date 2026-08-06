"use client";

import Script from "next/script";
import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

declare global {
  interface Window {
    turnstile?: { reset: () => void };
  }
}

type ContactFormProps = { siteKey: string };
type FormState = { type: "idle" | "loading" | "success" | "error"; message?: string };

export default function ContactForm({siteKey}:ContactFormProps){
  const [state,setState]=useState<FormState>({type:"idle"});

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
      window.turnstile?.reset();
      setState({type:"success",message:"Thanks—your inquiry is on its way. I’ll be in touch within one business day."});
    }catch(error){
      window.turnstile?.reset();
      setState({type:"error",message:error instanceof Error?error.message:"Something went wrong. Please try again."});
    }
  }

  return <>
    {siteKey&&<Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />}
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
        {siteKey?<div className="cf-turnstile" data-sitekey={siteKey} data-theme="dark" data-size="flexible" data-action="contact" data-refresh-expired="auto" />:<p>Secure form delivery is being configured. You can email <a href="mailto:hello@nextdesign.dev">hello@nextdesign.dev</a> in the meantime.</p>}
      </div>
      <div className="contact-form-footer">
        <span>No pressure. Just a thoughtful first conversation.</span>
        <button type="submit" disabled={!siteKey||state.type==="loading"} className="button hero-primary">{state.type==="loading"?"Sending…":"Send inquiry"} <ArrowUpRight size={16}/></button>
      </div>
      {state.type!=="idle"&&<p className={`contact-form-status is-${state.type}`} role="status" aria-live="polite">{state.type==="success"&&<CheckCircle2 size={17}/>} {state.message}</p>}
    </form>
  </>;
}
