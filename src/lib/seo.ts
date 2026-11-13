import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";
import type { Project } from "@/lib/projects";

export const SITE_URL = SITE_CONFIG.url;

/** 1200×630 share card rendered at build time by app/og/[slug]/route.tsx. */
export function ogImageUrl(slug = "home") {
  return `${SITE_URL}/og/${slug}`;
}

/**
 * Per-page metadata: title, description, canonical, Open Graph and Twitter card.
 * Pages need their own openGraph block, otherwise they inherit the home page's
 * og:title and og:url from the root layout.
 */
export function pageMetadata({
  title,
  description,
  path,
  ogSlug = "home",
}: {
  title: string;
  description: string;
  path: string;
  ogSlug?: string;
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const image = { url: ogImageUrl(ogSlug), width: 1200, height: 630, alt: title };
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: "en_US",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

export const PERSON_REF = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: SITE_CONFIG.name,
  url: SITE_URL,
} as const;

/** schema.org CreativeWork for a project case study page. */
export function projectJsonLd(project: Pick<Project, "slug" | "title" | "subtitle" | "category" | "techStack">) {
  const url = `${SITE_URL}/projects/${project.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#work`,
    name: project.title,
    headline: project.title,
    description: project.subtitle,
    url,
    mainEntityOfPage: url,
    image: ogImageUrl(project.slug),
    genre: project.category,
    keywords: project.techStack.join(", "),
    inLanguage: "en-US",
    creator: PERSON_REF,
    author: PERSON_REF,
    isPartOf: { "@type": "WebSite", name: SITE_CONFIG.name, url: SITE_URL },
  };
}
