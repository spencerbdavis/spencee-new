import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis | Bonavista Admin Panel",
  description:
    "The operations backbone for a 60+ property portfolio: receipts, mileage, Matterport, SEO, Google Reviews, and live property data.",
  alternates: { canonical: "https://spenc.ee/projects/admin-panel" },
};

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

function ModuleHeader({ index, title, tech }: { index: number; title: string; tech: string }) {
  return (
    <div className="mb-7 flex items-baseline gap-4">
      <span className="label-mono">{String(index).padStart(2, "0")}</span>
      <div>
        <h3 className="text-h3 text-ink">{title}</h3>
        <p className="label-mono mt-2">{tech}</p>
      </div>
    </div>
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

function CostComparison() {
  return (
    <div className="mt-8 flex flex-wrap items-end gap-8">
      <div>
        <p className="font-mono text-2xl leading-none font-semibold tracking-tight text-ink-muted line-through opacity-60">
          $400/mo
        </p>
        <p className="label-mono mt-2">Previous vendor</p>
      </div>
      <div>
        <p className="font-mono text-2xl leading-none font-semibold tracking-tight text-ink">~$0.50</p>
        <p className="label-mono mt-2">Per property, biweekly</p>
      </div>
      <div>
        <p className="font-mono text-2xl leading-none font-semibold tracking-tight text-ink">99.7%</p>
        <p className="label-mono mt-2">Cost reduction</p>
      </div>
    </div>
  );
}

function CrossLink({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link
      href={href}
      className="group invert-hover mt-7 flex items-center justify-between gap-4 border border-hairline p-5"
    >
      <div>
        <p className="text-sm font-semibold text-ink group-hover:text-paper">{title}</p>
        <p className="mt-1 text-xs text-ink-muted group-hover:text-paper">{desc}</p>
      </div>
      <ArrowRight size={16} className="shrink-0 opacity-40" />
    </Link>
  );
}

const pipelineFlow = [
  { label: "Email received", sub: "receipts@ inbox" },
  { label: "Cloudflare Worker", sub: "Parse & extract" },
  { label: "Gemini Flash", sub: "OCR & classify" },
  { label: "Store & Confirm", sub: "MySQL + R2 + email" },
];

const generatedContent = [
  { title: "Page Titles & Meta", desc: "Tailored per property and page type with template placeholders for individual floor plans" },
  { title: "FAQ Content", desc: "10 structured items per property with FAQPage schema: availability, neighborhood, and floor plan topics" },
  { title: "SEO Paragraphs", desc: "Per-section content citing specific nearby places, walk scores, amenity counts, auto-refreshed on decline" },
  { title: "Neighborhood Summaries", desc: "Lifestyle prose from Foursquare + Google Places: walkability, dining, transit, grocery data" },
  { title: "Image Alt Templates", desc: "Per-category templates (bedroom, kitchen, exterior) with property context applied" },
  { title: "GBP Content", desc: "Q&A pairs, biweekly post content with semantically matched property photos" },
];

export default function AdminPanelPage() {
  const project = ALL_PROJECTS.find((p) => p.slug === "admin-panel")!;

  return (
    <ProjectLayout project={project}>
      {/* Screenshots */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { src: "/screenshots/admin-panel/home-screen.webp", alt: "Admin Panel home screen" },
          { src: "/screenshots/admin-panel/google-review.webp", alt: "Google Reviews dashboard" },
          { src: "/screenshots/admin-panel/mileage-entry.webp", alt: "Mileage entry" },
        ].map((shot) => (
          <div key={shot.src}>
            <div className="relative aspect-video border border-hairline">
              <Image src={shot.src} alt={shot.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
            </div>
            <p className="label-mono mt-2">{shot.alt}</p>
          </div>
        ))}
      </div>

      {/* ===== MODULE 1: Receipt Processor ===== */}
      <section>
        <ModuleHeader index={1} title="Receipt Processor" tech="Cloudflare Email Workers · Browser Rendering · R2 · Gemini Flash · MySQL · Resend" />

        {/* Pipeline */}
        <div className="mb-7 grid grid-cols-1 gap-2 sm:grid-cols-4">
          {pipelineFlow.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2">
              <div className="flex-1 border border-hairline p-4 text-center">
                <p className="text-sm font-semibold text-ink">{step.label}</p>
                <p className="label-mono mt-1">{step.sub}</p>
              </div>
              {i < pipelineFlow.length - 1 && (
                <span className="hidden font-mono text-ink-muted sm:inline">→</span>
              )}
            </div>
          ))}
        </div>

        <FeatureList
          items={[
            "Accepts receipts via email forwarding or direct UI upload",
            "Handles PDF, image (HEIC/JPEG/PNG), and text-only emails (Amazon order confirmations)",
            "Gemini Flash extracts structured JSON: total, merchant, description, GL code, date, OCR text",
            "Rule-based learning engine improves merchant recognition and GL code accuracy over time",
            "Accuracy tracking system measures extraction quality per merchant",
            "Files stored in Cloudflare R2, confirmation email sent via Resend",
          ]}
        />
        <p className="mt-6 font-mono text-sm font-semibold text-ink">
          1,000 receipts/month &middot; {"<"}60 second processing
        </p>
      </section>

      <div className="hairline" />

      {/* ===== MODULE 2: SEO Engine ===== */}
      <section>
        <ModuleHeader index={2} title="SEO Engine" tech="Gemini 3.1 Pro · Google Search Console · DataForSEO · Foursquare · Google Places" />

        {/* Problem callout */}
        <div className="mb-8 border-l border-ink py-1 pl-6">
          <p className="text-base leading-relaxed text-ink-muted">
            The existing SEO vendor was charging <strong className="text-ink">$400/month</strong> for generic content
            that didn&apos;t reflect individual property characteristics. Replaced it with an automated Gemini
            pipeline at <strong className="text-ink">~$0.50 per property per run</strong>, generating data-driven,
            property-specific content across all 60+ sites.
          </p>
        </div>

        <p className="label-mono mb-4">Pipeline</p>
        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <PipelineStep step="1" title="Data Collection" desc="Aggregates property data, nearby places, walk scores, competitor keyword positions, and performance history from 6+ APIs in parallel" />
          <PipelineStep step="2" title="Portfolio Deconfliction" desc="Ensures 60+ properties in overlapping markets target different keywords, preventing the portfolio from cannibalizing its own rankings" />
          <PipelineStep step="3" title="Content Generation" desc="Gemini generates property-specific meta descriptions, FAQs, page content, and schema markup, each citing real neighborhood data, never prices" />
          <PipelineStep step="4" title="Delivery & Tracking" desc="Content pushed to WordPress plugin, keyword positions tracked biweekly. Stable content preserved, declining content auto-refreshed, saving ~30-40% on API costs" />
        </div>

        <p className="label-mono mb-4">What It Generates</p>
        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {generatedContent.map((item) => (
            <div key={item.title} className="border border-hairline p-4">
              <p className="text-sm font-semibold text-ink">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="label-mono mb-4">Monitoring & Optimization</p>
        <FeatureList
          items={[
            "Biweekly keyword position tracking via Google Search Console. Trend analysis flags improving, stagnant, and declining keywords",
            "Automated SERP screenshots with fuzzy matching to detect name, address, phone, or URL mismatches",
            "Seasonality awareness: content strategy shifts 6 to 8 weeks before peak leasing season",
            "Competitor keyword gap analysis identifies terms competitors rank for that the property doesn't yet target",
          ]}
        />

        <CostComparison />

        <CrossLink
          href="/projects/wordpress-plugin"
          title="See how this content is delivered →"
          desc="The WordPress plugin and Next.js sites that render SEO engine output across 60+ properties"
        />
      </section>

      <div className="hairline" />

      {/* ===== MODULE 3: GBP & Listings Sync ===== */}
      <section>
        <ModuleHeader index={3} title="GBP & Listings Sync" tech="Google Business Profile · Foursquare · Google Places · ILS Platforms" />
        <FeatureList
          items={[
            "20+ automated cron jobs sync property data, media, reviews, and listings across GBP, Foursquare, Google Places, and ILS platforms",
            "Photo rotation with scored image selection on a weekly schedule",
            "Neighborhood profile generation: walkability scores, nearby amenities, cuisine data, transit lines",
            "HelloData integration for property comparables and market positioning",
            "Runs 24/7 on nightly, hourly, and weekly schedules depending on data freshness requirements",
          ]}
        />
      </section>

      <div className="hairline" />

      {/* ===== MODULE 4: Google Reviews ===== */}
      <section>
        <ModuleHeader index={4} title="Google Reviews" tech="Google Business Profile · Gemini · Sentiment Analysis" />
        <FeatureList
          items={[
            "Automated review retrieval from Google Business Profile across all 60+ properties",
            "AI-generated response drafts using Gemini, tone-appropriate and brand-consistent",
            "Employee name extraction and sentiment analysis for performance tracking",
            "Review engagement metrics and export for reporting",
          ]}
        />
      </section>

      <div className="hairline" />

      {/* ===== MODULE 5: Matterport ===== */}
      <section>
        <ModuleHeader index={5} title="Matterport 3D Tours" tech="Matterport GraphQL API · Yardi · RentCafe" />
        <FeatureList
          items={[
            "Bonavista-owned iPhones checked out by property managers for 3D tour capture via Matterport app",
            "Matterport GraphQL API auto-categorizes scans to the correct Yardi/RentCafe property ID",
            "Billing automation: reminders on day 10, approval on day 15, billing on day 1 via cron jobs",
            "Global billing settings management with per-property override support",
          ]}
        />
      </section>

      <div className="hairline" />

      {/* ===== MODULE 6: Mileage ===== */}
      <section>
        <ModuleHeader index={6} title="Mileage Tracking" tech="Google Maps Distance API · CSV Export · Payroll Integration" />
        <FeatureList
          items={[
            "Property origin and destination input with automatic distance calculation",
            "End-of-month automated mileage report generated per employee",
            "CSV export for payroll integration",
          ]}
        />
      </section>
    </ProjectLayout>
  );
}
