import type { Metadata } from "next";
import Image from "next/image";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis | archive.spenc.ee",
  description:
    "A public deep-zoom archive for scanned paper ephemera — mid-century Pacific Northwest map covers and illustration. Built on Next.js, Neon, Cloudflare R2, and OpenSeadragon with AI-written backstories.",
  alternates: { canonical: "https://spenc.ee/projects/archive" },
};

function Plate({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure>
      <div className="border border-hairline bg-paper p-2 md:p-3">
        <Image
          src={src}
          alt={alt}
          width={1440}
          height={900}
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

export default function ArchivePage() {
  const project = ALL_PROJECTS.find((p) => p.slug === "archive")!;

  return (
    <ProjectLayout project={project}>
      <div>
        <p className="label-mono mb-6">Why this exists</p>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
          {project.problem}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        <Plate
          src="/screenshots/archive/home.webp"
          alt="archive.spenc.ee home page — editorial hero over a grid of scanned map covers"
          caption="Home · editorial index"
        />
        <Plate
          src="/screenshots/archive/browse.webp"
          alt="archive.spenc.ee browse view — the full collection of scanned ephemera"
          caption="Browse · the full collection"
        />
      </div>

      {/* Architecture */}
      <div>
        <p className="label-mono mb-6">How it&apos;s built</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <PipelineStep
            step="1"
            title="Ingest"
            desc="A `pnpm ingest` CLI walks a folder of TIFF/JPEG scans, generating DZI tile pyramids, thumbnails, and previews with Sharp. Single files become one item; subfolders become multi-page items."
          />
          <PipelineStep
            step="2"
            title="Store"
            desc="Originals, thumbnails, and tile pyramids upload to Cloudflare R2 behind custom CDN domains. Item metadata lands in Neon Postgres via Drizzle, with a generated tsvector column for full-text search."
          />
          <PipelineStep
            step="3"
            title="Serve"
            desc="Next.js App Router server components read from Neon over HTTP. Detail pages mount OpenSeadragon against the R2 tile URLs for smooth gigapixel zoom; originals stream on demand from R2."
          />
          <PipelineStep
            step="4"
            title="Enrich"
            desc="A Gemini pipeline drafts a short backstory for each piece — the era, the publisher, what the illustration was selling — turning a scan into a catalog entry."
          />
        </div>
      </div>

      {/* Details */}
      <div>
        <p className="label-mono mb-6">Notes</p>
        <FeatureList
          items={[
            "Next.js 16 App Router, TypeScript, Tailwind — server-rendered, no client data fetching for the catalog",
            "Drizzle schema (items, item_images, tile_jobs) with Postgres full-text search over a generated tsvector",
            "Cloudflare R2 for originals + DZI tiles; OpenSeadragon for deep-zoom, no download required",
            "Sharp-based tile pyramid generation runs locally in the ingest CLI, not on the server",
            "Editorial design language — serif display type, warm paper, the collection presented as a catalog",
          ]}
        />
      </div>

      <div className="border border-hairline p-5">
        <p className="text-sm leading-relaxed text-ink-muted">
          <span className="font-semibold text-ink">Status:</span> Live at{" "}
          <a
            href="https://archive.spenc.ee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline underline-offset-4 hover:text-accent"
          >
            archive.spenc.ee
          </a>{" "}
          with 64 scans online. A personal project — an excuse to build a proper gigapixel viewer and
          a home for the collection.
        </p>
      </div>
    </ProjectLayout>
  );
}
