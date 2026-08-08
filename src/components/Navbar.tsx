"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["Work", "/#work"], ["Services", "/#services"], ["Audit", "/audit"], ["About", "/about"], ["Lab", "/lab"], ["Contact", "/contact"]];

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return <>
    <header className="site-header">
      <div className="site-nav">
        <Link href="/" className="site-logo" aria-label="Next Design home"><span>NEXT</span><small>DESIGN</small></Link>
        <nav className="desktop-nav">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link href="/contact" className="nav-cta">Start a project <span>↗</span></Link>
        <button aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen(!open)} className="mobile-toggle">{open ? <X aria-hidden="true"/> : <Menu aria-hidden="true"/>}</button>
      </div>
    </header>
    {open && <div className="mobile-menu" id="mobile-navigation">
      <nav aria-label="Mobile navigation">{links.map(([label,href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav>
    </div>}
  </>;
}
