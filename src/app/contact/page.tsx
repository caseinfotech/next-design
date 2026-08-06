import Link from "next/link";
import { Clock3, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Contact(){
  const turnstileSiteKey=process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY||"";
  return <main className="contact-page">
    <div className="contact-page-glow" aria-hidden="true" />
    <section className="contact-hero container">
      <div className="contact-intro">
        <div className="eyebrow">Start a project</div>
        <h1>Let&apos;s build something <span>unforgettable.</span></h1>
        <p>Tell me what you&apos;re building, who it needs to reach, and what a successful launch looks like.</p>
        <div className="contact-quick-info">
          <a href="mailto:hello@nextdesign.dev"><Mail size={17}/><span><small>Email</small>hello@nextdesign.dev</span></a>
          <div><MapPin size={17}/><span><small>Based in</small>Asheville, North Carolina</span></div>
          <div><Clock3 size={17}/><span><small>Typical response</small>Within one business day</span></div>
        </div>
      </div>

      <div className="contact-form-shell">
        <div className="contact-form-heading">
          <span>Project inquiry</span>
          <i>Available for select projects</i>
        </div>
        <ContactForm siteKey={turnstileSiteKey}/>
      </div>
    </section>
    <section className="contact-note container">
      <span>Not ready for a full project?</span>
      <p>Website audits and focused strategy engagements are also available.</p>
      <Link href="/#services">Explore capabilities →</Link>
    </section>
  </main>
}
