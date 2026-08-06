"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["Work", "/#work"], ["Services", "/#services"], ["Lab", "/lab"], ["About", "/about"], ["Contact", "/contact"]];
  return <>
    <header style={{position:"fixed",top:18,left:0,right:0,zIndex:50}}>
      <div className="container glass" style={{borderRadius:999,padding:"12px 16px 12px 22px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <Link href="/" style={{fontWeight:800,letterSpacing:"-.04em"}}>NEXT DESIGN</Link>
        <nav style={{display:"flex",gap:24,alignItems:"center"}} className="desktop-nav">
          {links.map(([label, href]) => <Link key={href} href={href} style={{fontSize:13,color:"#c4c2cb"}}>{label}</Link>)}
          <Link href="/contact" className="btn btn-primary" style={{padding:"10px 16px",fontSize:13}}>Start a project</Link>
        </nav>
        <button aria-label="Toggle navigation" onClick={()=>setOpen(!open)} className="mobile-toggle" style={{background:"transparent",border:0,color:"white"}}>{open?<X/>:<Menu/>}</button>
      </div>
    </header>
    {open && <div style={{position:"fixed",inset:0,zIndex:40,background:"rgba(5,5,5,.98)",padding:"120px 28px 30px"}}>
      <nav style={{display:"grid",gap:24,fontSize:36,fontWeight:700}}>{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}</nav>
    </div>}
    <style jsx global>{`.mobile-toggle{display:none}.desktop-nav{display:flex}@media(max-width:760px){.desktop-nav{display:none!important}.mobile-toggle{display:block}}`}</style>
  </>;
}
