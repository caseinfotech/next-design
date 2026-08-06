export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  metaDescription: string;
  intro: string;
  benefits: Array<{ title: string; copy: string }>;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "asheville-web-design",
    title: "Asheville Web Design",
    shortTitle: "Web Design",
    category: "Strategy · UX · Visual design",
    description: "Premium, conversion-focused websites shaped around your brand, audience, and goals—not a recycled template.",
    metaDescription: "Premium Asheville web design for businesses that need a distinctive, conversion-focused website built around strategy, credibility, and performance.",
    intro: "Next Design creates distinctive websites for Asheville businesses and ambitious brands across Western North Carolina. Every engagement combines content strategy, purposeful UX, premium visual design, and a clear path from attention to action.",
    benefits: [
      { title: "Clear positioning", copy: "A focused message and content structure that quickly explains why your business matters." },
      { title: "Premium presentation", copy: "Editorial art direction and responsive design that strengthen trust on every screen." },
      { title: "Conversion paths", copy: "Calls to action, forms, and user journeys designed around meaningful business outcomes." },
    ],
    deliverables: ["Website strategy", "UX and content architecture", "Responsive interface design", "Conversion-focused pages", "Launch support"],
  },
  {
    slug: "web-development",
    title: "Custom Web Development",
    shortTitle: "Web Development",
    category: "Next.js · React · WordPress",
    description: "Fast, accessible, maintainable websites and platforms engineered around real business requirements.",
    metaDescription: "Custom web development in Asheville using Next.js, React, WordPress, APIs, and modern infrastructure for fast, scalable digital experiences.",
    intro: "Modern development should make a website feel faster, simpler, and more dependable—not more complicated. Next Design builds responsive websites and connected platforms using the right architecture for the content, team, and growth plan behind them.",
    benefits: [
      { title: "Performance first", copy: "Lean frontend systems, optimized media, and deliberate loading behavior across devices." },
      { title: "Built to evolve", copy: "Maintainable components and content systems that support future pages and capabilities." },
      { title: "Connected workflows", copy: "Thoughtful integrations for forms, email, payments, data, authentication, and business tools." },
    ],
    deliverables: ["Technical architecture", "Next.js and React development", "WordPress development", "API integrations", "Performance and accessibility QA"],
  },
  {
    slug: "ai-applications",
    title: "AI Application Development",
    shortTitle: "AI Applications",
    category: "AI products · SaaS · Automation",
    description: "Useful AI-powered products and workflows with polished interfaces, clear behavior, and production-minded engineering.",
    metaDescription: "AI application development for useful products, intelligent workflows, SaaS interfaces, and customer experiences with production-ready UX.",
    intro: "The strongest AI products make powerful capabilities feel understandable and trustworthy. Next Design turns early concepts into focused applications, intelligent workflows, and customer-facing experiences with the UX clarity needed for real adoption.",
    benefits: [
      { title: "Focused use cases", copy: "Product strategy that starts with a real user problem instead of adding AI for novelty." },
      { title: "Human-centered UX", copy: "Interfaces that explain system behavior, manage uncertainty, and keep users in control." },
      { title: "Production thinking", copy: "Architecture designed around security, evaluation, observability, cost, and iteration." },
    ],
    deliverables: ["AI product strategy", "Prototype and interface design", "Model and API integration", "Workflow automation", "Production application development"],
  },
  {
    slug: "real-estate-websites",
    title: "Real Estate Website Design",
    shortTitle: "Real Estate Websites",
    category: "Agents · Teams · Brokerages",
    description: "Premium real estate websites built around local authority, property storytelling, search visibility, and qualified leads.",
    metaDescription: "Premium real estate website design for agents, teams, and brokerages, with local SEO, property storytelling, lead generation, and MLS-ready UX.",
    intro: "A real estate website should establish local authority before a prospect ever makes contact. Next Design creates premium platforms for agents, teams, and brokerages that connect neighborhood expertise, property discovery, personal credibility, and lead generation.",
    benefits: [
      { title: "Local authority", copy: "Market, neighborhood, and expertise content structured to build trust and search visibility." },
      { title: "Property storytelling", copy: "Editorial listing experiences that present homes with clarity, atmosphere, and intent." },
      { title: "Qualified inquiries", copy: "Search, calls to action, and lead flows designed around how real buyers and sellers decide." },
    ],
    deliverables: ["Agent or brokerage positioning", "Property and community UX", "Local SEO architecture", "Lead capture systems", "MLS and IDX-ready planning"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
