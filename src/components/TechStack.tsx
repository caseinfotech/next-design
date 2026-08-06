"use client";

const groups = {
  Frontend:["Next.js","React","TypeScript","Tailwind CSS","CSS"],
  Backend:["Supabase","PostgreSQL","APIs","Authentication"],
  Platforms:["WordPress","Custom WordPress","Elementor","Headless CMS"],
  Infrastructure:["GitHub","Vercel","Cloudflare","CI/CD"]
};
export default function TechStack(){return <section className="tech-section"><div className="container tech-layout"><div className="tech-heading"><div className="eyebrow">Technology</div><h2>Modern stack.<br/>Limitless possibilities.</h2></div><div className="stack-grid">{Object.entries(groups).map(([g,items])=><div className="stack-group" key={g}><h3>{g}</h3><div>{items.map(x=><span key={x}>{x}</span>)}</div></div>)}</div></div></section>}
