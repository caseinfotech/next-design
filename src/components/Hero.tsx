"use client";

import { ArrowDownRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero(){
  return <section style={{minHeight:"100svh",display:"grid",alignItems:"center",position:"relative",padding:"150px 0 80px",overflow:"hidden"}}>
    <div className="grid-noise" />
    <motion.div initial={{opacity:0,scale:.85}} animate={{opacity:1,scale:1}} transition={{duration:1.2}} style={{position:"absolute",width:560,height:560,borderRadius:"50%",background:"radial-gradient(circle, rgba(124,58,237,.28), transparent 68%)",filter:"blur(18px)",right:"-9%",top:"8%"}} />
    <div className="container" style={{position:"relative",zIndex:2}}>
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="pill"><Sparkles size={15}/> Independent digital studio</motion.div>
      <motion.h1 initial={{opacity:0,y:45}} animate={{opacity:1,y:0}} transition={{delay:.12,duration:.9}} className="display" style={{marginTop:30}}>Websites are<br/>everywhere.<br/><span style={{color:"#777583"}}>Experiences are not.</span></motion.h1>
      <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.28}} style={{marginTop:34,display:"flex",justifyContent:"space-between",alignItems:"end",gap:30,flexWrap:"wrap"}}>
        <p style={{maxWidth:610,fontSize:"clamp(1rem,2vw,1.28rem)",lineHeight:1.6,color:"var(--muted)",margin:0}}>Next Design creates immersive websites, digital products, and custom applications for real estate, music, boutique brands, and ambitious companies.</p>
        <div style={{display:"flex",gap:12,flexWrap:"wrap"}}><Link className="btn btn-primary" href="#work">Explore work <ArrowDownRight size={17}/></Link><Link className="btn" href="/contact">Start a project</Link></div>
      </motion.div>
      <div style={{marginTop:65,display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}} className="hero-stats">
        {[['Design-led','Every experience starts with a distinct visual idea.'],['Technology-driven','Next.js, TypeScript, Supabase, WordPress and more.'],['Built to perform','Fast, responsive, accessible and conversion-aware.']].map(([t,d],i)=><motion.div key={t} initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.45+i*.1}} className="glass" style={{borderRadius:22,padding:22}}><strong>{t}</strong><p style={{margin:"9px 0 0",color:"#9694a0",fontSize:14,lineHeight:1.5}}>{d}</p></motion.div>)}
      </div>
    </div>
    <style jsx>{`@media(max-width:760px){.hero-stats{grid-template-columns:1fr!important}}`}</style>
  </section>
}
