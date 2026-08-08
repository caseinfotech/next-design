import type { Metadata } from "next";
import "./audit.css";

export const metadata: Metadata = {
  title: "Website Audit & UX Review | Next Design",
  description: "A focused website audit covering UX, mobile, performance, SEO, accessibility, and conversion opportunities—with a prioritized action plan.",
  alternates: { canonical: "https://nextdesign.dev/audit" },
};

const categories = [
  ["01", "UX + usability", "Navigation, content hierarchy, task flow, clarity, and friction across the customer journey."],
  ["02", "Visual design", "Brand consistency, typography, spacing, credibility, and the quality of the first impression."],
  ["03", "Mobile experience", "Responsive behavior, touch targets, readability, navigation, and mobile conversion paths."],
  ["04", "Performance", "Page weight, loading experience, image delivery, responsiveness, and Core Web Vitals risks."],
  ["05", "SEO foundation", "Metadata, page structure, crawlability, local signals, and content opportunities."],
  ["06", "Conversion flow", "Calls to action, forms, trust signals, offer clarity, and the path from interest to inquiry."],
  ["07", "Accessibility", "Keyboard access, contrast, semantics, form labeling, and common WCAG barriers."],
  ["08", "Technical health", "Broken experiences, browser issues, security basics, analytics, and implementation quality."],
];

const scores = [["UX design", "92"], ["Mobile", "88"], ["Performance", "91"], ["SEO", "84"], ["Accessibility", "90"], ["Conversion", "86"]];
const deliverables = [
  ["01", "Executive scorecard", "A clear snapshot of the site's health and the issues with the greatest business impact."],
  ["02", "Annotated findings", "Screen-by-screen observations that show exactly where visitors encounter friction."],
  ["03", "Prioritized action plan", "Recommendations sorted into quick wins, high-impact improvements, and longer-term opportunities."],
  ["04", "Review walkthrough", "A concise explanation of the findings so your team knows what to do next and why."],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function AuditPage() {
  return <main className="auditPage" id="top">
    <section className="auditHero">
      <div className="auditEyebrow"><span>Website intelligence / UX review</span><span>Next Design · Asheville, NC</span></div>
      <div className="auditHeroCopy"><p className="auditKicker">Clarity before costly changes.</p><h1>See what your<br />website is <em>really</em><br />doing.</h1><p className="auditIntro">A rigorous, human-led audit of your website's experience, performance, visibility, and conversion path—translated into a practical plan your team can act on.</p><div className="auditActions"><a href="#request">Request your audit <Arrow /></a><a href="#scope">Explore the review ↓</a></div></div>
      <div className="scanPanel" aria-label="Example website health score"><div className="scanTop"><span>Live analysis</span><i>Scanning</i></div><div className="scoreRing"><div><strong>89</strong><span>/ 100</span></div></div><p>Website health score</p><div className="signalGrid">{scores.slice(0, 4).map(([label, score]) => <div key={label}><span>{label}</span><b>{score}%</b><i style={{ "--score": `${score}%` } as React.CSSProperties} /></div>)}</div><small>Demonstration scorecard / Every audit is site-specific</small></div>
    </section>
    <section className="auditStatement"><p>Most websites do not need more opinions.</p><h2>They need a sharper diagnosis.</h2><span>We connect what visitors experience with what the business needs—then identify the few changes most likely to create meaningful improvement.</span></section>
    <section className="auditSection" id="scope"><div className="auditSectionHead"><p>01 / What we review</p><h2>Every signal.<br /><em>One clear picture.</em></h2></div><div className="auditCategoryGrid">{categories.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p><i>+</i></article>)}</div></section>
    <section className="dashboardSection"><div className="dashboardCopy"><p>02 / The scorecard</p><h2>Evidence you<br />can <em>act on.</em></h2><span>Not a generic automated report. Your scorecard connects real observations to business priorities, with enough detail to guide design, development, and marketing decisions.</span></div><div className="dashboardCard"><div className="dashboardTitle"><span>Example analysis / 01</span><b>Website health</b></div><div className="dashboardTotal"><strong>89</strong><span>Strong foundation<br />Clear opportunities</span></div><div className="dashboardBars">{scores.map(([label, score]) => <div key={label}><span>{label}</span><i><b style={{ width: `${score}%` }} /></i><strong>{score}</strong></div>)}</div></div></section>
    <section className="auditSection deliverables" id="deliverables"><div className="auditSectionHead"><p>03 / What you receive</p><h2>A report that<br /><em>moves work forward.</em></h2></div><div className="deliverableList">{deliverables.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="pricing" id="pricing"><div className="pricingHead"><p>04 / Choose your depth</p><h2>Start with the<br />right level of <em>clarity.</em></h2></div><div className="pricingGrid">
      <article><span>Mini review</span><h3>First look</h3><strong>Free</strong><p>A concise first-pass review identifying a few immediate opportunities.</p><ul><li>Homepage review</li><li>3–5 observations</li><li>Best for an initial conversation</li></ul><a href="#request">Request a mini review <Arrow /></a></article>
      <article className="featured"><span>Professional audit</span><h3>Full diagnosis</h3><strong>$499</strong><p>A comprehensive UX and website health review with a prioritized improvement plan.</p><ul><li>Multi-page audit</li><li>Seven review categories</li><li>Annotated PDF report</li><li>Prioritized recommendations</li><li>Review walkthrough</li></ul><a href="#request">Request your audit <Arrow /></a></article>
      <article><span>Redesign strategy</span><h3>Next chapter</h3><strong>Custom</strong><p>Audit, positioning, structure, and creative direction for a larger redesign engagement.</p><ul><li>Everything in the full audit</li><li>Content and page strategy</li><li>Redesign roadmap</li></ul><a href="#request">Discuss a redesign <Arrow /></a></article>
    </div></section>
    <section className="auditRequest" id="request"><div><p>05 / Start here</p><h2>Ready for the<br /><em>honest version?</em></h2></div><div className="requestCard"><span>Send your website URL and tell us what is not working—or what you want to improve.</span><a href="mailto:info@nextdesign.dev?subject=Website%20audit%20request&body=Website%20URL%3A%20%0A%0AMain%20goal%3A%20%0A%0AWhat%20I%27d%20like%20reviewed%3A%20">Request a website audit <Arrow /></a><small>info@nextdesign.dev</small></div></section>
  </main>;
}
