import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: { absolute: "Asheville Web Design & Development Studio | Next Design" },
  description: "Next Design creates premium websites, custom applications, and AI-powered digital experiences for Asheville, Western North Carolina, and ambitious brands everywhere.",
  alternates: { canonical: "/" },
};

export default function Home(){return <main><Hero/><FeaturedWork/><Services/><TechStack/><ContactCTA/></main>}
