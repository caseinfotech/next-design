import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-08");
  const coreRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "yearly", priority: .65 },
    { url: absoluteUrl("/contact"), lastModified, changeFrequency: "yearly", priority: .7 },
    { url: absoluteUrl("/lab"), lastModified, changeFrequency: "monthly", priority: .55 },
    { url: absoluteUrl("/audit"), lastModified, changeFrequency: "monthly", priority: .9 },
  ];
  const serviceRoutes: MetadataRoute.Sitemap = services.map(({ slug }) => ({
    url: absoluteUrl(`/services/${slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: .85,
  }));
  const projectRoutes: MetadataRoute.Sitemap = projects.map(({ slug }) => ({
    url: absoluteUrl(`/work/${slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: .75,
  }));

  return [...coreRoutes, ...serviceRoutes, ...projectRoutes];
}
