import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = pageMetadata({
  title: "Spencer D'Avis | Next.js Leasing Microsites",
  description:
    "A fleet of bespoke Next.js 16 apartment leasing sites on Vercel, each wired to a shared in-house availability API for live pricing, floor plans, and MFTE units — with Matterport tours, Apple MapKit maps, and Mux video.",
  path: "/projects/property-sites",
  ogSlug: "property-sites",
});

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-hairline border-t border-hairline">
      {items.map((item) => (
        <li key={item} className="py-3 text-sm leading-relaxed text-ink-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}

function PipelineStep({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="border border-hairline p-5">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xl leading-none font-semibold text-ink-muted">{step}</span>
        <p className="text-sm font-semibold text-ink">{title}</p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{desc}</p>
    </div>
  );
}

const SITES = [
  { name: "The Clarke", where: "Green Lake", url: "https://www.theclarkegreenlake.com", img: "/screenshots/property-sites/the-clarke.webp" },
  { name: "Ellie Passivhaus", where: "Uptown", url: "https://www.lifeatellie.com", img: "/screenshots/property-sites/ellie.webp" },
  { name: "Odessa on Lake Union", where: "Lake Union", url: "https://www.odessaonlakeunion.com", img: "/screenshots/property-sites/odessa.webp" },
  { name: "VIVA", where: "Capitol Hill", url: "https://www.vivacaphill.com", img: "/screenshots/property-sites/viva.webp" },
  { name: "Hawthorne", where: "Capitol Hill", url: "https://www.hawthornecapitolhill.com", img: "/screenshots/property-sites/hawthorne.webp" },
  { name: "Cortina", where: "Eastlake", url: "https://www.cortinaeastlake.com", img: "/screenshots/property-sites/cortina.webp" },
  { name: "East Howe Steps", where: "Eastlake", url: "https://www.easthowesteps.com", img: "/screenshots/property-sites/east-howe-steps.webp" },
  { name: "The East Highland Studio", where: "North Capitol Hill", url: "https://commercial.easthighlandapts.com", img: "/screenshots/property-sites/east-highland-studio.webp" },
];

export default function PropertySitesPage() {
  const project = ALL_PROJECTS.find((p) => p.slug === "property-sites")!;

  return (
    <ProjectLayout project={project}>
      <div>
        <p className="label-mono mb-6">Why this exists</p>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">{project.problem}</p>
      </div>

      <div>
        <p className="label-mono mb-6">Live sites · click through</p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SITES.map((site) => (
            <a
              key={site.url}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card card group overflow-hidden"
            >
              <div className="card-media relative aspect-[16/10] overflow-hidden border-b border-line bg-surface-2">
                <Image src={site.img} alt={`${site.name} leasing website`} fill sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw" className="object-cover object-top" />
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <div>
                  <p className="font-semibold">{site.name}</p>
                  <p className="text-xs text-ink-muted">{site.where}</p>
                </div>
                <span className="font-mono text-xs text-ink-muted group-hover:text-ink">{new URL(site.url).hostname.replace(/^www\./, "")} ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Architecture */}
      <div>
        <p className="label-mono mb-6">How it&apos;s built</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <PipelineStep
            step="1"
            title="One availability API"
            desc="Every site fetches floor plans, live pricing, units, amenities, and pet policy from a shared in-house endpoint that normalizes RentCafe/SecureCafe data. New pricing appears everywhere without touching a single site."
          />
          <PipelineStep
            step="2"
            title="24-hour ISR"
            desc="Each property page is statically rendered and revalidated on a 24-hour cycle, with a token-gated revalidate route to bust the cache on demand — fast loads, always-current data, no per-request API cost."
          />
          <PipelineStep
            step="3"
            title="Rich media, server-safe"
            desc="Matterport virtual tours, Mux streaming hero video, and Apple MapKit neighborhood maps (with the MapKit token minted server-side), plus Cloudflare Images and RentCafe CDN for photos."
          />
          <PipelineStep
            step="4"
            title="SEO-preserving migration"
            desc="Trailing-slash routing mirrors the legacy WordPress URLs exactly, JSON-LD and sitemaps are generated per property, and apply/current-resident routes redirect into RentCafe so the funnel stays crawlable."
          />
        </div>
      </div>

      {/* Notes */}
      <div>
        <p className="label-mono mb-6">Notes</p>
        <FeatureList
          items={[
            "Next.js 16 App Router, React 19, Tailwind v4, TypeScript — deployed on Vercel with Analytics + Speed Insights",
            "Live MFTE affordable-housing units surfaced straight from the availability feed",
            "Contact and tour-request forms via Resend, with leads posted to the Knock CRM webhook",
            "A forked-and-tailored template per property — shared data/SEO layer, bespoke brand and layout for each",
            "The same availability API also powers the WordPress property sites, so both hosting tracks stay in sync",
          ]}
        />
      </div>

      <div className="border border-hairline p-5">
        <p className="text-sm leading-relaxed text-ink-muted">
          <span className="font-semibold text-ink">Part of the web track:</span> this is the Next.js /
          Vercel modernization running alongside the 55 in-house WordPress sites — the same portfolio,
          two hosting stacks, one live data backbone.
        </p>
      </div>
    </ProjectLayout>
  );
}
