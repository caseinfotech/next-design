import Link from "next/link";

const footerLinks = [
  ["Web Design", "/services/asheville-web-design"],
  ["Development", "/services/web-development"],
  ["AI Applications", "/services/ai-applications"],
  ["Real Estate", "/services/real-estate-websites"],
  ["Website Audit", "/audit"],
  ["Work", "/#work"],
  ["Contact", "/contact"],
];

export default function Footer(){return <footer className="site-footer"><div className="container footer-inner"><div><strong>NEXT DESIGN</strong><span>Asheville web design, development, and digital product studio.</span></div><nav aria-label="Footer navigation">{footerLinks.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}</nav></div></footer>}
