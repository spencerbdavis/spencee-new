import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BUSINESS_JSONLD, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { LOCAL_SEO_SERVICE, SERVICE_PAGES } from "@/lib/services";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = pageMetadata({
  title: "Web Development, Local SEO & AI Automation Services — Seattle & Renton | Spencer D'Avis",
  description:
    "Hire a Seattle-area developer for websites, local SEO and Google Business Profile, AI automation and property management marketing. Fixed quotes, production-grade builds, proof on every page.",
  path: "/services",
});

const ALL = [
  ...SERVICE_PAGES.filter((s) => s.slug === "web-development").map((s) => ({ slug: s.slug, name: s.name, blurb: s.lede })),
  { ...LOCAL_SEO_SERVICE },
  ...SERVICE_PAGES.filter((s) => s.slug !== "web-development").map((s) => ({ slug: s.slug, name: s.name, blurb: s.lede })),
];

export default function ServicesPage() {
  return (
    <div className="container-site pt-24 pb-24 md:pt-32 md:pb-28">
      <JsonLd data={BUSINESS_JSONLD} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Services", path: "/services" }])} />
      <p className="label-mono">Services · Seattle, Renton & remote</p>
      <h1 className="text-h2 mt-4 max-w-[50rem]">Hire me for a project.</h1>
      <p className="mt-6 max-w-[44rem] text-lg leading-relaxed text-ink-muted md:text-xl">
        Alongside full-time engineering, I take on a small number of projects for local businesses, property managers and
        startups. You work directly with the person who builds it, and every service below links to production work you
        can open and click through.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {ALL.map((s, i) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="project-card card group flex flex-col p-7">
            <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">{s.name}</h2>
            <p className="mt-3 leading-relaxed text-ink-muted">{s.blurb}</p>
            <span className="mt-6 inline-flex items-center gap-1 font-semibold">
              Details <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        ))}
      </div>

      <div className="card bg-grid mt-14 p-8 md:p-12">
        <p className="text-2xl font-semibold tracking-tight md:text-3xl">Not sure which one fits?</p>
        <p className="mt-3 max-w-xl text-ink-muted">Describe the problem in a few lines. I&apos;ll tell you honestly whether I&apos;m the right person for it.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`mailto:${SITE_CONFIG.email}?subject=Project%20inquiry`} className="btn-signal">
            Email me
          </a>
          <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
