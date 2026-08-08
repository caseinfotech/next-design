"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["Work", "/#work"], ["Services", "/#services"], ["Audit", "/audit"], ["About", "/about"], ["Lab", "/lab"], ["Contact", "/contact"]];

  return <>
    <header className="site-header">
      <div className="site-nav">
        <Link href="/" className="site-logo">NEXT <small>DESIGN</small></Link>
        <nav className="desktop-nav">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link href="/contact" className="nav-cta">Start a project <span>↗</span></Link>
        <button aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)} className="mobile-toggle">{open ? <X/> : <Menu/>}</button>
      </div>
    </header>
    {open && <div className="mobile-menu">
      <nav>{links.map(([label,href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav>
    </div>}
  </>;
}
