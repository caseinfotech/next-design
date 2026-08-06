import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MapPin } from "lucide-react";

export default function Contact(){
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
        <form action="mailto:hello@nextdesign.dev" method="post" encType="text/plain" className="contact-form">
          <div className="form-row">
            <label>Name<input required name="name" placeholder="Your name" /></label>
            <label>Email<input required name="email" type="email" placeholder="you@company.com" /></label>
          </div>
          <label>Company or brand<input name="company" placeholder="Optional" /></label>
          <label>What are we building?<select defaultValue="" name="project-type"><option value="" disabled>Select a project type</option><option>Real Estate Website</option><option>Music / Creative Platform</option><option>Boutique Brand Website</option><option>Custom Application</option></select></label>
          <label>Project details<textarea required name="details" placeholder="Goals, audience, timeline, and anything else I should know…" rows={6}/></label>
          <div className="contact-form-footer">
            <span>No pressure. Just a thoughtful first conversation.</span>
            <button type="submit" className="button hero-primary">Send inquiry <ArrowUpRight size={16}/></button>
          </div>
        </form>
      </div>
    </section>
    <section className="contact-note container">
      <span>Not ready for a full project?</span>
      <p>Website audits and focused strategy engagements are also available.</p>
      <Link href="/#services">Explore capabilities →</Link>
    </section>
  </main>
}
