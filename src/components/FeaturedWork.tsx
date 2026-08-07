"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function FeaturedWork(){
  return <section id="work" className="featured-work"><div className="container">
    <motion.div className="work-heading" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.4}} transition={{duration:.7,ease:[.22,1,.36,1]}}>
      <div>
        <div className="eyebrow">Selected experiences</div>
        <h2 className="section-title">Digital experiences that make an impact.</h2>
      </div>
      <p>Strategy, design, and engineering brought together as one focused digital experience.</p>
    </motion.div>
    <div className="work-grid">
      {projects.map((p,i)=>{
        const showcaseImage=p.gallery?.[0];
        return <motion.article key={p.slug} initial={{opacity:0,y:60}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:.75,ease:[.22,1,.36,1]}} className={`work-card work-card-${p.accent}`}>
        <div className="work-card-copy" style={{order:i%2?2:1}}>
          <span className="eyebrow">0{i+1} / {p.category}</span>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <div className="work-tags">{p.technologies.map(t=><span key={t} className="pill">{t}</span>)}</div>
          <Link className="work-link" href={`/work/${p.slug}`}>View case study <ArrowUpRight size={18}/></Link>
        </div>
        <Link href={`/work/${p.slug}`} className={`work-media ${showcaseImage?"":"work-media-placeholder"} work-media-${p.slug}`} style={{order:i%2?1:2}} aria-label={`View ${p.title} case study`}>
          {showcaseImage ? <Image src={showcaseImage} alt={`${p.title} project preview`} fill sizes="(max-width: 850px) 100vw, 55vw" /> : <div className="work-placeholder"><span>Case study</span><strong>{p.title}</strong><p>{p.category}</p><i aria-hidden="true"/></div>}
        </Link>
      </motion.article>})}
    </div>
  </div></section>
}
