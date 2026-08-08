import type { Metadata } from "next";
import { ArrowUpRight, BarChart3, CheckCircle2, FileText, Gauge, MousePointerClick, Search, Smartphone, Sparkles } from "lucide-react";
import AuditRequestForm from "@/components/AuditRequestForm";
import "./audit.css";

export const metadata: Metadata = {
  title: "Website Audit & UX Review",
  description: "A strategic website and UX audit revealing conversion issues, design opportunities, performance problems, and a prioritized path forward.",
  alternates: { canonical: "https://www.nextdesign.dev/audit" },
};

const analysisAreas = [
  { icon: MousePointerClick, title: "User Experience", copy: "Navigation, content hierarchy, task flow, clarity, and friction across the customer journey." },
  { icon: Sparkles, title: "Visual Design", copy: "Brand consistency, typography, spacing, credibility, and the quality of the first impression." },
  { icon: Smartphone, title: "Mobile Optimization", copy: "Responsive behavior, touch targets, readability, navigation, and mobile conversion paths." },
  { icon: Gauge, title: "Conversion Flow", copy: "Calls to action, forms, trust signals, offer clarity, and the route from interest to inquiry." },
  { icon: Search, title: "SEO Foundation", copy: "Metadata, page structure, crawlability, local signals, and high-value content opportunities." },
  { icon: BarChart3, title: "Performance", copy: "Loading experience, page weight, image delivery, responsiveness, and Core Web Vitals risks." },
];

const auditProcess = [
  ["01", "Discovery", "Goals, audience, analytics context, and the business questions the audit needs to answer."],
  ["02", "UX Analysis", "A structured review of navigation, behavior, content hierarchy, and user friction."],
  ["03", "Design Review", "Visual credibility, responsive execution, accessibility, consistency, and brand alignment."],
  ["04", "Recommendations", "Specific improvements ranked by urgency, effort, and likely business impact."],
  ["05", "Action Plan", "A practical roadmap your team can use for quick wins, redesign work, or development."],
];

const reportItems = ["Annotated screenshots", "Priority-ranked fixes", "Conversion recommendations", "Performance and SEO findings", "Actionable implementation roadmap"];

export default function AuditPage() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

  return <main className="audit-page">
    <section className="audit-hero">
      <div className="audit-hero-glow" aria-hidden="true" />
      <div className="container audit-hero-grid">
        <div className="audit-hero-copy">
          <div className="eyebrow">Website intelligence / UX review</div>
          <h1>Find what is holding your <span>website back.</span></h1>
          <p>A strategic UX audit revealing conversion issues, design opportunities, performance problems, and improvements that turn visitors into customers.</p>
          <div className="audit-hero-actions">
            <a className="button hero-primary" href="#request">Request your UX audit <ArrowUpRight size={17} /></a>
            <a className="button" href="#analysis">See what we analyze <span>↓</span></a>
          </div>
          <div className="audit-hero-meta"><span>Human-led analysis</span><span>Prioritized recommendations</span><span>Actionable roadmap</span></div>
        </div>

        <div className="audit-visual" aria-label="Example website audit dashboard">
          <div className="audit-orbit audit-orbit-one" aria-hidden="true" />
          <div className="audit-orbit audit-orbit-two" aria-hidden="true" />
          <div className="audit-browser">
            <div className="audit-browser-bar"><i /><i /><i /><span>website-analysis.local</span></div>
            <div className="audit-browser-screen">
              <div className="audit-browser-head"><span>Website health</span><strong>Analysis 01</strong></div>
              <div className="audit-browser-score"><strong>89</strong><span>Overall<br />score</span></div>
              <div className="audit-browser-chart" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
              <div className="audit-browser-list"><span><b>✓</b> Clear primary offer</span><span><b>!</b> Mobile CTA friction</span><span><b>↑</b> Conversion opportunity</span></div>
            </div>
          </div>
          <div className="audit-score-card score-ux"><span>UX score</span><strong>92</strong><i><b /></i></div>
          <div className="audit-score-card score-mobile"><span>Mobile experience</span><strong>88</strong><i><b /></i></div>
          <div className="audit-score-card score-conversion"><span>Conversion flow</span><strong>84</strong><i><b /></i></div>
          <div className="audit-score-card score-performance"><span>Performance</span><strong>91</strong><i><b /></i></div>
        </div>
      </div>
    </section>

    <section className="audit-analysis container" id="analysis">
      <div className="audit-section-heading"><div><span className="eyebrow">What we analyze</span><h2>Every signal.<br /><em>One clear picture.</em></h2></div><p>We connect what visitors experience with what the business needs—then isolate the changes most likely to create meaningful improvement.</p></div>
      <div className="audit-analysis-grid">{analysisAreas.map(({ icon: Icon, title, copy }, index) => <article key={title}><span>0{index + 1}</span><Icon size={24} /><h3>{title}</h3><p>{copy}</p><i aria-hidden="true" /></article>)}</div>
    </section>

    <section className="audit-process-section">
      <div className="container">
        <div className="audit-section-heading"><div><span className="eyebrow">The audit process</span><h2>From uncertainty<br />to <em>direction.</em></h2></div><p>A focused process that turns observation into prioritized decisions—without burying your team in generic automated data.</p></div>
        <div className="audit-timeline">{auditProcess.map(([number, title, copy]) => <article key={number}><span>{number}</span><i aria-hidden="true" /><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div>
    </section>

    <section className="audit-deliverable container">
      <div className="audit-deliverable-copy"><span className="eyebrow">Your deliverable</span><h2>A report built to move work <em>forward.</em></h2><p>Your audit is a premium, practical decision tool—not a data dump. Every finding is explained, illustrated, and connected to a recommended next step.</p><ul>{reportItems.map(item => <li key={item}><CheckCircle2 size={17} />{item}</li>)}</ul></div>
      <div className="report-scene" aria-label="Example website intelligence PDF report">
        <div className="report-glow" aria-hidden="true" />
        <div className="report-page report-page-back" />
        <div className="report-page">
          <div className="report-brand"><span>NEXT <small>DESIGN</small></span><FileText size={18} /></div>
          <div className="report-label">Website intelligence report / 2026</div>
          <h3>UX &amp; Conversion<br />Audit</h3>
          <div className="report-score"><strong>89</strong><span>Overall website health</span></div>
          <div className="report-bars"><i><b /></i><i><b /></i><i><b /></i></div>
          <div className="report-summary"><span>Quick wins</span><span>High impact</span><span>Roadmap</span></div>
        </div>
        <div className="report-note note-one"><strong>12</strong><span>Priority findings</span></div>
        <div className="report-note note-two"><strong>05</strong><span>Quick wins</span></div>
      </div>
    </section>

    <section className="audit-opinion container">
      <div><span className="eyebrow">Need a second opinion on your website?</span><h2>See the experience<br />your customers see.</h2></div>
      <a className="button hero-primary" href="#request">Request your UX audit <ArrowUpRight size={18} /></a>
    </section>

    <section className="audit-request container" id="request">
      <div className="audit-request-intro"><span className="eyebrow">Start your audit</span><h2>Ready for the<br /><em>honest version?</em></h2><p>Share your website and what you want it to do better. We’ll review the request and recommend the right depth—without pushing you into more than you need.</p></div>
      <AuditRequestForm siteKey={turnstileSiteKey} />
    </section>
  </main>;
}
