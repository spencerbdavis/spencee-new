import type { MetadataRoute } from "next";
import { FEATURED_PROJECTS, MORE_PROJECTS } from "@/lib/projects";

const BASE = "https://spenc.ee";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const projectRoutes = [...FEATURED_PROJECTS, ...MORE_PROJECTS].map((p) => ({
    url: `${BASE}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p.featured ? 0.8 : 0.6,
  }));

  return [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...projectRoutes,
  ];
}
