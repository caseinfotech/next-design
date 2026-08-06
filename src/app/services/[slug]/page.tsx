import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { getService, services } from "@/data/services";
import { absoluteUrl, siteConfig } from "@/lib/site";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const canonical = `/services/${service.slug}`;
  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title: `${service.title} | Next Design`,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = services.filter(({ slug: relatedSlug }) => relatedSlug !== service.slug).slice(0, 3);
  const serviceUrl = absoluteUrl(`/services/${service.slug}`);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${serviceUrl}#service`,
        name: service.title,
        description: service.metaDescription,
        url: serviceUrl,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: ["Asheville", "Western North Carolina", "United States"],
        serviceType: service.shortTitle,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/#services") },
          { "@type": "ListItem", position: 3, name: service.title, item: serviceUrl },
        ],
      },
    ],
  };

  return (
    <main className="service-page">
      <JsonLd data={schema} />
      <section className="service-hero container">
        <Link href="/#services" className="case-back"><ArrowLeft size={15}/> All services</Link>
        <div className="service-hero-grid">
          <div>
            <div className="eyebrow">{service.category}</div>
            <h1>{service.title}</h1>
          </div>
          <div className="service-hero-copy">
            <p>{service.intro}</p>
            <Link href="/contact" className="button hero-primary">Discuss your project <ArrowUpRight size={16}/></Link>
          </div>
        </div>
      </section>

      <section className="service-benefits container" aria-labelledby="service-benefits-title">
        <div className="service-section-heading">
          <span className="eyebrow">Built for outcomes</span>
          <h2 id="service-benefits-title">Strategy, experience, and execution.</h2>
        </div>
        <div className="service-benefit-grid">
          {service.benefits.map((benefit, index) => (
            <article key={benefit.title}>
              <span>0{index + 1}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-deliverables container">
        <div>
          <span className="eyebrow">What we can build</span>
          <h2>A focused engagement,<br/>shaped around the goal.</h2>
        </div>
        <ul>
          {service.deliverables.map((deliverable) => <li key={deliverable}><Check size={17}/>{deliverable}</li>)}
        </ul>
      </section>

      <section className="service-related container">
        <div className="eyebrow">Related capabilities</div>
        <div>
          {related.map((item) => <Link href={`/services/${item.slug}`} key={item.slug}><span>{item.shortTitle}</span><ArrowUpRight size={18}/></Link>)}
        </div>
      </section>

      <section className="service-cta container">
        <div><span className="eyebrow">Start a conversation</span><h2>Have a project in mind?</h2></div>
        <Link href="/contact">Tell us what you&apos;re building <ArrowUpRight size={20}/></Link>
      </section>
    </main>
  );
}
