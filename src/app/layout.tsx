import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Asheville Web Design & Development Studio | Next Design",
    template: "%s | Next Design",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "Asheville web design",
    "Asheville web development",
    "Western North Carolina web designer",
    "custom website development",
    "AI application development",
    "real estate website design",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Asheville Web Design & Development Studio | Next Design",
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Next Design — Asheville web design and development studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asheville Web Design & Development Studio | Next Design",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      description: siteConfig.description,
      logo: absoluteUrl("/opengraph-image"),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Asheville",
        addressRegion: "NC",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Asheville" },
        { "@type": "AdministrativeArea", name: "Western North Carolina" },
        { "@type": "Country", name: "United States" },
      ],
      knowsAbout: ["Web design", "Web development", "Custom applications", "AI applications", "Digital strategy"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>
<JsonLd data={organizationSchema}/><a className="skip-link" href="#main-content">Skip to content</a><Navbar/><div id="main-content" tabIndex={-1}>{children}</div><Footer/><Analytics/></body></html>}
