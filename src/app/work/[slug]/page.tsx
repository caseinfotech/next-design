import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams(){return projects.map(({slug})=>({slug}))}

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const project=projects.find(p=>p.slug===slug);
  if(!project)notFound();
  const projectIndex=projects.findIndex(p=>p.slug===slug);
  const nextProject=projects[(projectIndex+1)%projects.length];
  const heroImage=project.gallery?.[0] ?? project.image;
  const heroDimensions=project.galleryDimensions?.[0] ?? {width:project.imageWidth,height:project.imageHeight};
  const challenge=project.challenge ?? "Create a distinctive digital presence with a clear point of view, premium visual credibility, and a structure capable of growing with the brand.";
  const solution=project.solution ?? "A focused experience combining strong art direction, deliberate content hierarchy, modern frontend architecture, and responsive interaction design.";

  return <main className={`case-page case-${project.accent}`}>
    <section className="case-hero container">
      <Link href="/#work" className="case-back"><ArrowLeft size={15}/> Selected work</Link>
      <div className="case-hero-grid">
        <div className="case-title-block">
          <div className="eyebrow">{project.category}</div>
          <h1>{project.title}</h1>
        </div>
        <div className="case-summary">
          <p>{project.description}</p>
          <div>{project.technologies.map(t=><span className="pill" key={t}>{t}</span>)}</div>
        </div>
      </div>
      <div className="case-hero-media"><Image src={heroImage} alt={`${project.title} website experience`} width={heroDimensions.width} height={heroDimensions.height} priority sizes="(max-width: 900px) 100vw, 1320px" /></div>
      <div className="case-meta">
        <div><small>Discipline</small><span>Strategy · Design · Development</span></div>
        <div><small>Experience</small><span>{project.category}</span></div>
        <div><small>Built for</small><span>Clarity · Performance · Growth</span></div>
      </div>
    </section>

    <section className="case-story container">
      <div><span className="eyebrow">01 / The challenge</span><h2>Create presence,<br/>not decoration.</h2></div>
      <p>{challenge}</p>
      <div><span className="eyebrow">02 / The solution</span><h2>Design and technology<br/>working as one.</h2></div>
      <p>{solution}</p>
    </section>

    {project.gallery && <section className="case-gallery container">
      {project.gallery.slice(1).map((image,i)=>{const dimensions=project.galleryDimensions?.[i+1] ?? {width:project.imageWidth,height:project.imageHeight};return <div className={`case-gallery-item case-gallery-${i+1}`} key={image}><Image src={image} alt={`${project.title} interface detail ${i+1}`} width={dimensions.width} height={dimensions.height} sizes="(max-width: 800px) 100vw, 70vw" /></div>})}
    </section>}

    <section className="next-case container">
      <div><span className="eyebrow">Next experience</span><h2>{nextProject.title}</h2></div>
      <Link href={`/work/${nextProject.slug}`}>View case study <ArrowUpRight size={20}/></Link>
    </section>
  </main>
}
