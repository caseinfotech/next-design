"use client";

import { Building2, Music2, Gem, PanelsTopLeft } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  [Building2,"Real Estate","Premium agent and brokerage sites, property storytelling, lead systems, SEO architecture, MLS and IDX-ready experiences."],
  [Music2,"Music & Creative","Artist websites, label platforms, music technology interfaces, campaigns, immersive launches, and creative experiments."],
  [Gem,"Boutique Brands","Distinctive, high-touch websites for businesses that care about presentation, credibility, and standing apart."],
  [PanelsTopLeft,"Custom Applications","SaaS interfaces, dashboards, AI tools, client portals, data products, and custom software experiences."]
] as const;
export default function Services(){return <section id="services" className="services-section"><div className="container services-layout"><div className="services-heading"><div className="eyebrow">What we do</div><h2>Digital solutions for modern businesses and creators.</h2></div><div className="services-grid">{services.map(([Icon,t,d],i)=><motion.div key={t} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.07,duration:.6}} className="service-card"><Icon size={24}/><h3>{t}</h3><p>{d}</p><a href="/contact">Learn more →</a></motion.div>)}</div></div></section>}
