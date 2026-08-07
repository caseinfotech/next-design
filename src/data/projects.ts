export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  gallery?: string[];
  galleryDimensions?: Array<{width:number;height:number}>;
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
    imageWidth: 1199,
    imageHeight: 1312,
    gallery: [
      "/projects/brian-noland/capture-home.webp",
      "/projects/brian-noland/capture-properties.webp",
      "/projects/brian-noland/capture-about.webp",
      "/projects/brian-noland/capture-search.webp",
      "/projects/brian-noland/mobile.webp"
    ],
    galleryDimensions: [
      {width:1430,height:993},
      {width:1430,height:993},
      {width:1430,height:993},
      {width:1270,height:714},
      {width:1125,height:2436}
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
    imageWidth: 1199,
    imageHeight: 1312,
    gallery: [
      "/projects/chunelab-capture-home.webp",
      "/projects/chunelab-capture-packs.webp",
      "/projects/chunelab-capture-blueprints.webp",
      "/projects/chunelab-capture-community.webp"
    ],
    galleryDimensions: [
      {width:1440,height:1000},
      {width:1280,height:720},
      {width:1280,height:720},
      {width:1280,height:720}
    ],
    technologies: ["Next.js", "Supabase", "Audio UX", "AI Workflows"],
    accent: "blue"
  },
  {
    slug: "solana-risk-radar",
    title: "Solana Risk Radar",
    category: "Data Application",
    description: "A technical dashboard experience focused on risk intelligence, clarity, and responsive data visualization.",
    image: "/projects/solana-risk-radar.png",
    imageWidth: 1209,
    imageHeight: 1301,
    technologies: ["React", "TypeScript", "APIs", "Data Visualization"],
    accent: "cyan"
  },
  {
    slug: "driftkid",
    title: "Driftkid",
    category: "Creative Experience",
    description: "A music-first digital identity blending atmosphere, motion, visual storytelling, and artist discovery.",
    image: "/projects/driftkid.png",
    imageWidth: 1199,
    imageHeight: 1312,
    technologies: ["Creative Direction", "Motion", "Brand UX", "Next.js"],
    accent: "pink"
  }
];
