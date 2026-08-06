const groups = {
  Frontend:["Next.js","React","TypeScript","Tailwind CSS","CSS"],
  Backend:["Supabase","PostgreSQL","APIs","Authentication"],
  Platforms:["WordPress","Custom WordPress","Elementor","Headless CMS"],
  Infrastructure:["GitHub","Vercel","Cloudflare","CI/CD"]
};
export default function TechStack(){return <section style={{padding:"120px 0"}}><div className="container glass" style={{borderRadius:34,padding:"clamp(28px,6vw,72px)"}}><div className="eyebrow">The engine behind the experience</div><h2 className="section-title" style={{marginTop:22}}>Built with the right tools—not a one-size-fits-all stack.</h2><div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:24,marginTop:58}} className="stack-grid">{Object.entries(groups).map(([g,items])=><div key={g}><h3 style={{fontSize:15,color:"#fff",marginBottom:18}}>{g}</h3><div style={{display:"grid",gap:11}}>{items.map(x=><span key={x} style={{color:"#9c9aa5",fontSize:14}}>{x}</span>)}</div></div>)}</div></div><style jsx>{`@media(max-width:800px){.stack-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:480px){.stack-grid{grid-template-columns:1fr!important}}`}</style></section>}
