"use client";

import { useRef, type CSSProperties } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Cpu,
  Gem,
  Music2,
  PanelsTopLeft,
} from "lucide-react";

const services = [
  [Building2, "Real Estate", "Premium agent and brokerage sites, property storytelling, lead systems, SEO architecture, MLS and IDX-ready experiences.", "/services/real-estate-websites"],
  [Music2, "Music & Creative", "Artist websites, label platforms, music technology interfaces, campaigns, immersive launches, and creative experiments.", "/services/asheville-web-design"],
  [Gem, "Boutique Brands", "Distinctive, high-touch websites for businesses that care about presentation, credibility, and standing apart.", "/services/asheville-web-design"],
  [Cpu, "Technology & SaaS", "High-converting product sites, AI experiences, launch strategy, and polished interfaces that make complex technology feel clear.", "/services/ai-applications"],
  [PanelsTopLeft, "Custom Applications", "SaaS interfaces, dashboards, AI tools, client portals, data products, and custom software experiences.", "/services/web-development"],
] as const;

export default function Services() {
  const scroller = useRef<HTMLDivElement>(null);

  function scroll(direction: -1 | 1) {
    if (!scroller.current) return;
    scroller.current.scrollLeft += direction * Math.min(680, scroller.current.clientWidth * 0.72);
  }

  return (
    <section id="services" className="services-section">
      <div className="container services-layout">
        <div className="services-heading">
          <div className="eyebrow">What we do</div>
          <h2>Digital solutions for modern businesses and creators.</h2>
          <div className="services-scroll-ui">
            <span>Explore industries</span>
            <div className="services-scroll-controls">
              <button type="button" onClick={() => scroll(-1)} aria-label="View previous industries">
                <ArrowLeft size={16} />
              </button>
              <button type="button" onClick={() => scroll(1)} aria-label="View more industries">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="services-carousel">
          <div ref={scroller} className="services-grid" aria-label="Industries we serve">
            {services.map(([Icon, title, description, href], index) => (
              <article
                key={title}
                className="service-card"
                style={{ "--card-index": index } as CSSProperties}
              >
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={href}>Learn more →</a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
