import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Design | Immersive Digital Experiences",
  description: "Premium websites, custom applications, and creative digital experiences for real estate, music, boutique brands, and ambitious businesses.",
  metadataBase: new URL("https://nextdesign.dev")
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Navbar/>{children}<Footer/><Analytics/></body></html>}
