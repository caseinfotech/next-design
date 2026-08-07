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
    image: "/projects/brian-noland/mountains.jpg",
    imageWidth: 2520,
    imageHeight: 1458,
    gallery: [
      "/projects/brian-noland/mountains.jpg",
      "/projects/brian-noland/capture-home.webp",
      "/projects/brian-noland/capture-properties.webp",
      "/projects/brian-noland/capture-about.webp",
      "/projects/brian-noland/capture-search.webp",
      "/projects/brian-noland/mobile.webp"
    ],
    galleryDimensions: [
      {width:2520,height:1458},
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
    image: "/projects/chunelab-capture-home.webp",
    imageWidth: 1440,
    imageHeight: 1000,
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
    challenge: "Create a digital experience that connects music creation, AI-assisted workflows, and a creative community.",
    solution: "A modern platform combining immersive design, audio experiences, and AI-powered creative tools.",
    technologies: ["Next.js", "Supabase", "Audio UX", "AI Workflows"],
    accent: "blue"
  },
  {
    slug: "solana-risk-radar",
    title: "Solscan/X",
    category: "Blockchain Intelligence Platform",
    description: "An AI-powered Solana intelligence platform focused on risk analysis, analytics, and real-time ecosystem insights.",
    image: "/projects/solscan-x/solscanx-hero.webp",
    imageWidth: 1600,
    imageHeight: 900,
    gallery: [
      "/projects/solscan-x/solscanx-dashboard.webp",
      "/projects/solscan-x/solscanx-analytics.webp",
      "/projects/solscan-x/solscanx-mobile.webp"
    ],
    galleryDimensions: [
      {width:1600,height:900},
      {width:1600,height:900},
      {width:900,height:1900}
    ],
    challenge: "Create clarity in a complex blockchain environment where users need fast, reliable intelligence before making decisions.",
    solution: "A modern analytics experience combining AI-assisted insights, risk visualization, and responsive dashboard design.",
    technologies: ["React", "TypeScript", "Solana", "APIs", "Data Visualization", "AI Workflows"],
    accent: "cyan"
  },
  {
    slug: "driftkid",
    title: "Driftkid",
    category: "Creative Experience",
    description: "A music-first digital identity blending atmosphere, motion, visual storytelling, and artist discovery.",
    image: "/projects/driftkid.png",
    imageWidth: 2520,
    imageHeight: 1458,
    technologies: ["Creative Direction", "Motion", "Brand UX", "Next.js"],
    accent: "pink"
  }
];
