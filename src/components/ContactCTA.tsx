import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function ContactCTA(){return <section className="contact-strip"><div className="container contact-strip-inner"><div><span>Have an idea?</span><h2>Let&apos;s build something <em>unforgettable.</em></h2></div><Link className="hero-primary button" href="/contact">Start your project <ArrowUpRight size={17}/></Link><div className="contact-details"><span>info@nextdesign.dev</span><span>Asheville, North Carolina</span></div></div></section>}
