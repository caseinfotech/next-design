"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function FeaturedWork(){
  return <section id="work" style={{padding:"120px 0"}}><div className="container">
    <div className="eyebrow">Selected experiences</div>
    <h2 className="section-title" style={{marginTop:22,maxWidth:850}}>Work that makes the brand feel inevitable.</h2>
    <div style={{display:"grid",gap:28,marginTop:60}}>
      {projects.map((p,i)=><motion.article key={p.slug} initial={{opacity:0,y:60}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:.7}} className="glass" style={{borderRadius:32,overflow:"hidden",display:"grid",gridTemplateColumns:i%2?"1.05fr .95fr":".95fr 1.05fr"}}>
        <div style={{padding:"clamp(28px,5vw,58px)",order:i%2?2:1,display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <span className="eyebrow">0{i+1} / {p.category}</span>
          <h3 style={{fontSize:"clamp(2.2rem,5vw,4.6rem)",letterSpacing:"-.055em",lineHeight:.95,margin:"22px 0"}}>{p.title}</h3>
          <p style={{fontSize:17,lineHeight:1.65,color:"var(--muted)",maxWidth:530}}>{p.description}</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:9,marginTop:22}}>{p.technologies.map(t=><span key={t} className="pill" style={{padding:"8px 12px"}}>{t}</span>)}</div>
          <Link href={`/work/${p.slug}`} style={{marginTop:34,display:"inline-flex",gap:8,alignItems:"center",fontWeight:700}}>View case study <ArrowUpRight size={18}/></Link>
        </div>
        <div style={{position:"relative",minHeight:430,order:i%2?1:2,overflow:"hidden",background:"#0c0c10"}}><Image src={p.image} alt={`${p.title} project preview`} fill sizes="(max-width: 800px) 100vw, 55vw" style={{objectFit:"cover",objectPosition:"top",opacity:.9}} /></div>
      </motion.article>)}
    </div>
  </div><style jsx global>{`@media(max-width:850px){#work article{grid-template-columns:1fr!important}#work article>div{order:initial!important}#work article>div:last-child{min-height:300px!important}}`}</style></section>
}
