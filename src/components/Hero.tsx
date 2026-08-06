"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Brian Noland",
    category: "Luxury Real Estate",
    image: "/projects/brian-noland/hero.webp",
    className: "top-10 right-0 md:right-20"
  },
  {
    title: "ChuneLab",
    category: "Music Technology",
    image: "/projects/chunelab.png",
    className: "bottom-10 left-0 md:left-20"
  },
  {
    title: "Driftkid",
    category: "Creative Experience",
    image: "/projects/driftkid.png",
    className: "top-32 left-10 md:left-40"
  },
  {
    title: "Solana Risk Radar",
    category: "Data Application",
    image: "/projects/solana-risk-radar.png",
    className: "bottom-20 right-10 md:right-40"
  }
];

export default function Hero() {

return (

<section className="
relative
min-h-screen
overflow-hidden
flex
items-center
px-6
">

<div className="
max-w-7xl
mx-auto
relative
z-10
text-center
">

<motion.p
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
className="
uppercase
tracking-[0.4em]
text-sm
text-white/50
"
>
Next Design Studio
</motion.p>


<motion.h1

initial={{opacity:0,y:30}}

animate={{opacity:1,y:0}}

transition={{delay:.15}}

className="
mt-8
text-6xl
md:text-8xl
font-bold
tracking-tight
"

>

Websites are everywhere.

<br/>

<span className="
text-white/40
">
Experiences are not.
</span>

</motion.h1>


<motion.p

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:.4}}

className="
mt-8
max-w-3xl
mx-auto
text-xl
text-white/60
"

>

Asheville web design and development studio creating
premium websites, applications, and AI-powered digital experiences
for businesses across Western North Carolina.

</motion.p>


<div className="
mt-10
flex
justify-center
gap-4
">

<a
href="/work"
className="
rounded-full
bg-white
text-black
px-8
py-4
font-semibold
"
>
View Work
</a>

<a
href="/contact"
className="
rounded-full
border
border-white/20
px-8
py-4
"
>
Start Project
</a>

</div>

</div>


{
projects.map((project,index)=>(

<motion.div

key={project.title}

initial={{
opacity:0,
scale:.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
delay:.3+index*.15
}}

className={`
absolute
hidden
md:block
${project.className}
w-64
rounded-3xl
overflow-hidden
border
border-white/10
bg-black/60
shadow-2xl
`}
>

<div className="
relative
h-40
">

<Image

src={project.image}

alt={project.title}

fill

className="object-cover"

/>

</div>


<div className="
p-5
">

<p className="
font-semibold
">

{project.title}

</p>

<p className="
text-sm
text-white/50
mt-1
">

{project.category}

</p>

</div>


</motion.div>

))

}

</section>

)

}
