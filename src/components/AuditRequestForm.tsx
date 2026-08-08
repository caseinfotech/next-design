"use client";

import Script from "next/script";
import { FormEvent, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import HoldToSubmitButton from "@/components/HoldToSubmitButton";

type AuditRequestFormProps = { siteKey: string };
type FormState = { type: "idle" | "loading" | "success" | "error"; message?: string };

export default function AuditRequestForm({ siteKey }: AuditRequestFormProps) {
  const [state, setState] = useState<FormState>({ type: "idle" });
  const [turnstileComplete, setTurnstileComplete] = useState(false);
  const turnstileContainer = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);

  function renderTurnstile() {
    if (!window.turnstile || !turnstileContainer.current || turnstileWidgetId.current) return;
    turnstileWidgetId.current = window.turnstile.render(turnstileContainer.current, {
      sitekey: siteKey,
      theme: "dark",
      size: "flexible",
      action: "audit",
      callback: () => setTurnstileComplete(true),
      "expired-callback": () => setTurnstileComplete(false),
      "error-callback": () => setTurnstileComplete(false),
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state.type === "loading") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const turnstileToken = String(data.get("cf-turnstile-response") || "");

    if (!turnstileToken) {
      setState({ type: "error", message: "Please complete the security check and try again." });
      return;
    }

    setState({ type: "loading", message: "Sending your audit request…" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          projectType: data.get("audit-option"),
          siteUrl: data.get("site-url"),
          businessGoal: data.get("business-goal"),
          concern: data.get("concern"),
          details: `${data.get("business-goal") || ""}\n\nBiggest concern:\n${data.get("concern") || ""}`,
          website: data.get("website"),
          turnstileToken,
        }),
      });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "The audit request could not be sent.");
      form.reset();
      window.turnstile?.reset(turnstileWidgetId.current || undefined);
      setTurnstileComplete(false);
      setState({ type: "success", message: "Your audit request is in. I’ll review your website and reply within one business day." });
    } catch (error) {
      window.turnstile?.reset(turnstileWidgetId.current || undefined);
      setTurnstileComplete(false);
      setState({ type: "error", message: error instanceof Error ? error.message : "Something went wrong. Please try again." });
    }
  }

  return <>
    {siteKey && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={renderTurnstile} />}
    <form className="auditForm" onSubmit={handleSubmit}>
      <div className="auditFormRow">
        <label>Name<input required name="name" autoComplete="name" maxLength={100} placeholder="Your name" /></label>
        <label>Email<input required name="email" type="email" autoComplete="email" maxLength={254} placeholder="you@company.com" /></label>
      </div>
      <div className="auditFormRow">
        <label>Company or brand<input name="company" autoComplete="organization" maxLength={120} placeholder="Optional" /></label>
        <label>Website URL<input required name="site-url" type="url" inputMode="url" maxLength={500} placeholder="https://yourwebsite.com" /></label>
      </div>
      <label>Audit option<select required name="audit-option" defaultValue=""><option value="" disabled>Select an audit</option><option>Free Mini Review</option><option>$499 Professional Audit</option><option>Redesign Strategy</option></select></label>
      <label>What is the main goal for your website?<textarea required name="business-goal" minLength={10} maxLength={2500} rows={3} placeholder="More qualified inquiries, stronger credibility, better local visibility…" /></label>
      <label>What is your biggest concern right now?<textarea required name="concern" minLength={10} maxLength={2500} rows={3} placeholder="Low conversion, confusing navigation, an outdated look, slow performance…" /></label>
      <label className="auditHoneypot" aria-hidden="true">Leave blank<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <div className="auditTurnstile">
        {siteKey ? <div ref={turnstileContainer} className="turnstile-widget" /> : <p>Secure form delivery is being configured. Email <a href="mailto:info@nextdesign.dev">info@nextdesign.dev</a> in the meantime.</p>}
      </div>
      <div className="auditFormFooter"><span>No pressure. Just a thoughtful first review.</span><HoldToSubmitButton disabled={!siteKey || !turnstileComplete} loading={state.type === "loading"} label="request your audit" /></div>
      {state.type !== "idle" && <p className={`auditFormStatus is-${state.type}`} role="status" aria-live="polite">{state.type === "success" && <CheckCircle2 size={17} />} {state.message}</p>}
    </form>
  </>;
}
