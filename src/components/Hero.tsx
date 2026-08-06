"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {

return (

<section className="
relative
min-h-screen
overflow-hidden
flex
items-center
justify-center
px-6
pt-32
">

<div className="
absolute
inset-0
bg-gradient-to-b
from-purple-500/10
via-transparent
to-transparent
"/>


<div className="
relative
z-10
max-w-6xl
mx-auto
text-center
">


<motion.p

initial={{opacity:0}}

animate={{opacity:1}}

className="
uppercase
tracking-[.5em]
text-sm
text-white/40
"

>

Next Design Studio

</motion.p>


<motion.h1

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

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

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:.4
}}

className="
max-w-3xl
mx-auto
mt-8
text-xl
text-white/60
"

>

Asheville web design and development studio creating
premium websites, applications, and AI-powered digital
experiences.

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



<motion.div

initial={{
opacity:0,
scale:.9,
y:50
}}

animate={{
opacity:1,
scale:1,
y:0
}}

transition={{
delay:.5,
duration:1
}}

className="
relative
mx-auto
mt-20
max-w-5xl
"

>


<div className="
absolute
inset-0
bg-purple-500/20
blur-3xl
rounded-full
"/>


<motion.div

animate={{
rotateX:[0,3,0],
rotateY:[0,-3,0]
}}

transition={{
repeat:Infinity,
duration:8
}}

className="
relative
rounded-3xl
border
border-white/10
overflow-hidden
shadow-2xl
bg-black
"


style={{
perspective:1000
}}

>


<div className="
relative
aspect-video
">

<Image

src="/projects/brian-noland/hero.webp"

alt="Brian Noland website"

fill

className="object-cover"

/>

</div>


<div className="
absolute
bottom-0
left-0
right-0
p-6
text-left
bg-gradient-to-t
from-black
"

>

<p className="
font-semibold
text-xl
">

Brian Noland

</p>

<p className="
text-white/50
">

Luxury Real Estate Experience

</p>

</div>


</motion.div>


</motion.div>



<div className="
mt-10
flex
justify-center
gap-4
flex-wrap
">

{
[
"ChuneLab",
"Driftkid",
"AI Applications",
"Solana Risk Radar"
].map(item=>(

<div

key={item}

className="
rounded-full
border
border-white/10
px-5
py-2
text-sm
text-white/60
"

>

{item}

</div>

))

}

</div>


</div>


</section>

)

}
