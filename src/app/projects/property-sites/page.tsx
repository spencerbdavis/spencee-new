import type { Metadata } from "next";
import Image from "next/image";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis | Next.js Leasing Microsites",
  description:
    "A fleet of bespoke Next.js 16 apartment leasing sites on Vercel, each wired to a shared in-house availability API for live pricing, floor plans, and MFTE units — with Matterport tours, Apple MapKit maps, and Mux video.",
  alternates: { canonical: "https://spenc.ee/projects/property-sites" },
};

function Plate({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure>
      <div className="border border-hairline bg-paper p-2 md:p-3">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          sizes="(min-width: 768px) 42rem, 100vw"
          className="block h-auto w-full"
        />
      </div>
      <figcaption className="label-mono mt-3">{caption}</figcaption>
    </figure>
  );
}

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

export default function PropertySitesPage() {
  const project = ALL_PROJECTS.find((p) => p.slug === "property-sites")!;

  return (
    <ProjectLayout project={project}>
      <div>
        <p className="label-mono mb-6">Why this exists</p>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">{project.problem}</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        <Plate
          src="/screenshots/property-sites/alt-capitol-hill.webp"
          alt="Alt Capitol Hill leasing site — full-bleed Mux hero video of the building"
          caption="Alt Capitol Hill · altapartments.com"
        />
        <Plate
          src="/screenshots/property-sites/rowlock.webp"
          alt="Rowlock Seattle leasing site with a live availability call-to-action"
          caption="Rowlock · rowlockseattle.com"
        />
      </div>
      <Plate
        src="/screenshots/property-sites/the-clarke.webp"
        alt="The Clarke leasing site at Green Lake"
        caption="The Clarke · theclarkegreenlake.com"
      />

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
