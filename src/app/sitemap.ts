import type { MetadataRoute } from "next";
import { ALL_PROJECTS } from "@/lib/projects";
import { SERVICE_PAGES } from "@/lib/services";

const BASE = "https://spenc.ee";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const projectRoutes = ALL_PROJECTS.map((p) => ({
    url: `${BASE}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p.featured ? 0.8 : 0.6,
  }));
  const serviceRoutes = SERVICE_PAGES.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/projects`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/local-seo`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    ...serviceRoutes,
    ...projectRoutes,
  ];
}
