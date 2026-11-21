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

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.path === "/" ? SITE_URL : `${SITE_URL}${it.path}`,
    })),
  };
}

/** Cities used for areaServed on service pages (local SEO). */
export const SERVICE_AREAS = [
  "Seattle",
  "Renton",
  "Bellevue",
  "Kent",
  "Tukwila",
  "Kirkland",
  "Redmond",
  "Issaquah",
  "Tacoma",
  "Everett",
] as const;

/** Business entity for freelance work; referenced from every service page. */
export const BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "Spencer D'Avis — Web, SEO & AI Development",
  url: `${SITE_URL}/services`,
  image: `${SITE_URL}/headshot.jpg`,
  email: SITE_CONFIG.email,
  founder: PERSON_REF,
  address: { "@type": "PostalAddress", addressLocality: "Renton", addressRegion: "WA", addressCountry: "US" },
  areaServed: [
    ...SERVICE_AREAS.map((name) => ({ "@type": "City", name: `${name}, WA` })),
    { "@type": "Country", name: "United States" },
  ],
  priceRange: "$$",
  sameAs: [SITE_CONFIG.linkedin, SITE_CONFIG.github],
} as const;

export function serviceJsonLd(s: { name: string; description: string; path: string; serviceType: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${s.path}#service`,
    name: s.name,
    serviceType: s.serviceType,
    description: s.description,
    url: `${SITE_URL}${s.path}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: SERVICE_AREAS.map((name) => ({ "@type": "City", name: `${name}, WA` })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
