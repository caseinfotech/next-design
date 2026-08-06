import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const principles = [
  ["01","Clarity over noise","Every screen should help someone understand, trust, or act. Decoration earns its place by supporting that goal."],
  ["02","Built for the real world","Fast loads, responsive behavior, accessible interactions, and maintainable systems are part of the design."],
  ["03","Distinct by design","The work should feel unmistakably connected to the client—not assembled from the same template as everyone else."],
];

export default function About(){return <main className="about-page">
  <section className="about-hero container">
    <div className="about-copy">
      <div className="eyebrow">About Next Design</div>
      <h1>Where technology meets <span>creativity.</span></h1>
      <p>Next Design is an independent digital studio creating immersive websites, custom applications, and brand experiences for ambitious businesses and creators.</p>
      <Link href="/contact" className="button hero-primary">Start a conversation <ArrowUpRight size={16}/></Link>
    </div>
    <div className="about-orbit" aria-hidden="true">
      <div className="orbit-ring orbit-ring-one"/><div className="orbit-ring orbit-ring-two"/><div className="orbit-ring orbit-ring-three"/>
      <div className="orbit-core">N</div>
      <span className="orbit-label orbit-label-one">Strategy</span>
      <span className="orbit-label orbit-label-two">Design</span>
      <span className="orbit-label orbit-label-three">Engineering</span>
    </div>
    <div className="about-stats">
      <div><strong>50+</strong><span>Projects completed</span></div>
      <div><strong>10+</strong><span>Industries served</span></div>
      <div><strong>100%</strong><span>Client focused</span></div>
    </div>
  </section>

  <section className="about-story container">
    <div><span className="eyebrow">The approach</span><h2>One studio.<br/>Every essential discipline.</h2></div>
    <div className="about-story-copy"><p>The best digital experiences are not divided into disconnected phases. Strategy shapes the content. Content shapes the interface. The interface shapes the engineering.</p><p>That integrated approach creates work that feels intentional from the first headline to the final interaction—and performs just as well as it looks.</p></div>
  </section>

  <section className="about-principles container">
    {principles.map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
  </section>

  <section className="about-cta container">
    <div className="eyebrow">Have something ambitious in mind?</div>
    <h2>Let&apos;s make it real.</h2>
    <Link href="/contact">Start your project <ArrowUpRight size={20}/></Link>
  </section>
</main>}
