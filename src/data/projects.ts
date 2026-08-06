export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  gallery?: string[];
  technologies: string[];
  accent: string;
  challenge?: string;
  solution?: string;
};

export const projects: Project[] = [
  {
    slug: "brian-noland",
    title: "Brian Noland",
    category: "Luxury Real Estate",
    description: "A premium digital platform designed around property storytelling, authority, speed, and lead generation.",
    image: "/projects/brian-noland/hero.webp",
    gallery: [
      "/projects/brian-noland/desktop.webp",
      "/projects/brian-noland/listings.webp",
      "/projects/brian-noland/about.webp",
      "/projects/brian-noland/mobile.webp"
    ],
    challenge: "Create a premium digital presence that represents local expertise while competing with larger real estate brands.",
    solution: "A modern real estate experience focused on storytelling, property discovery, performance, and lead generation.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "SEO", "MLS Ready"],
    accent: "violet"
  },
  {
    slug: "chunelab",
    title: "ChuneLab",
    category: "Music Technology",
    description: "A cinematic creative platform exploring music, AI-assisted workflows, and immersive interaction design.",
    image: "/projects/chunelab.png",
    technologies: ["Next.js", "Supabase", "Audio UX", "AI Workflows"],
    accent: "blue"
  },
  {
    slug: "solana-risk-radar",
    title: "Solana Risk Radar",
    category: "Data Application",
    description: "A technical dashboard experience focused on risk intelligence, clarity, and responsive data visualization.",
    image: "/projects/solana-risk-radar.png",
    technologies: ["React", "TypeScript", "APIs", "Data Visualization"],
    accent: "cyan"
  },
  {
    slug: "driftkid",
    title: "Driftkid",
    category: "Creative Experience",
    description: "A music-first digital identity blending atmosphere, motion, visual storytelling, and artist discovery.",
    image: "/projects/driftkid.png",
    technologies: ["Creative Direction", "Motion", "Brand UX", "Next.js"],
    accent: "pink"
  }
];
