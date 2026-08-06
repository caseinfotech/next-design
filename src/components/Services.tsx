"use client";

import { Building2, Music2, Gem, PanelsTopLeft } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  [Building2,"Real Estate","Premium agent and brokerage sites, property storytelling, lead systems, SEO architecture, MLS and IDX-ready experiences."],
  [Music2,"Music & Creative","Artist websites, label platforms, music technology interfaces, campaigns, immersive launches, and creative experiments."],
  [Gem,"Boutique Brands","Distinctive, high-touch websites for businesses that care about presentation, credibility, and standing apart."],
  [PanelsTopLeft,"Custom Applications","SaaS interfaces, dashboards, AI tools, client portals, data products, and custom software experiences."]
] as const;
export default function Services(){return <section id="services" style={{padding:"120px 0"}}><div className="container"><div className="eyebrow">Capabilities</div><h2 className="section-title" style={{marginTop:22}}>Not just websites.</h2><div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:18,marginTop:52}} className="services-grid">{services.map(([Icon,t,d],i)=><motion.div key={t} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="glass" style={{borderRadius:28,padding:"clamp(26px,4vw,44px)"}}><Icon size={28}/><h3 style={{fontSize:30,letterSpacing:"-.04em",margin:"34px 0 14px"}}>{t}</h3><p style={{color:"var(--muted)",lineHeight:1.7,margin:0}}>{d}</p></motion.div>)}</div></div><style jsx>{`@media(max-width:720px){.services-grid{grid-template-columns:1fr!important}}`}</style></section>}
