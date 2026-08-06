import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, AudioWaveform, Boxes, BrainCircuit, Network, Orbit, ScanLine } from "lucide-react";

const experiments = [
  {number:"01",title:"AI-assisted music workflows",copy:"Creative tools that help artists explore, organize, and move from idea to finished work.",Icon:AudioWaveform,tone:"violet"},
  {number:"02",title:"Interactive motion systems",copy:"Purposeful animation languages designed to give interfaces rhythm, hierarchy, and life.",Icon:ScanLine,tone:"blue"},
  {number:"03",title:"3D and WebGL experiments",copy:"Spatial interface concepts, immersive scenes, and browser-native visual storytelling.",Icon:Boxes,tone:"cyan"},
  {number:"04",title:"Creative intelligence",copy:"Practical uses of AI for ideation, synthesis, personalization, and new product behavior.",Icon:BrainCircuit,tone:"pink"},
  {number:"05",title:"Connected platforms",copy:"Interfaces that make complex data, systems, and communities feel understandable.",Icon:Network,tone:"indigo"},
  {number:"06",title:"Experimental UI concepts",copy:"Interaction studies that test what digital products can feel like before they become familiar.",Icon:Orbit,tone:"purple"},
];

export const metadata: Metadata = {
  title: "Digital Innovation Lab",
  description: "Explore Next Design experiments in AI-assisted workflows, WebGL, motion systems, connected platforms, and emerging digital product experiences.",
  alternates: { canonical: "/lab" },
};

export default function Lab(){return <main className="lab-page">
  <section className="lab-hero container">
    <div className="eyebrow">Next Design Lab</div>
    <div className="lab-hero-grid"><h1>Beyond the <span>ordinary.</span></h1><div><p>A space for prototypes, emerging technology, and interaction ideas that do not fit neatly inside a conventional brief.</p><small>Experiments become capabilities. Capabilities become better client work.</small></div></div>
  </section>

  <section className="lab-experiments container">
    {experiments.map(({number,title,copy,Icon,tone})=><article className={`lab-card lab-${tone}`} key={number}>
      <div className="lab-card-top"><span>{number}</span><Icon size={24}/></div>
      <div className="lab-visual" aria-hidden="true"><i/><i/><i/><b/></div>
      <div className="lab-card-copy"><h2>{title}</h2><p>{copy}</p></div>
    </article>)}
  </section>

  <section className="lab-callout container">
    <div><span className="eyebrow">A useful kind of curiosity</span><h2>Exploration with a purpose.</h2></div>
    <p>The Lab is not technology for technology&apos;s sake. It is where new tools are tested, understood, and translated into experiences people can actually use.</p>
    <Link href="/contact">Bring an idea <ArrowUpRight size={18}/></Link>
  </section>
</main>}
