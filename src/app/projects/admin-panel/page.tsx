import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis | Expense Reconciliation System",
  description:
    "A production receipt pipeline with AI extraction, deterministic rules, human verification, and Yardi write-back.",
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
        <h2 className="text-h3 text-ink">{title}</h2>
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
  { label: "Ingest", sub: "Email worker" },
  { label: "Extract", sub: "Content routing + vision" },
  { label: "Classify", sub: "Property + GL rules" },
  { label: "Verify", sub: "Signed human review" },
  { label: "Write back", sub: "Yardi extension" },
  { label: "Learn", sub: "Corrections + tests" },
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
      <section className="swiss-grid gap-y-6">
        <p className="label-mono col-span-4 md:col-span-2">Constraint</p>
        <div className="col-span-4 md:col-span-8">
        <p className="max-w-3xl text-lg leading-relaxed text-ink-muted">
          {project.problem} The safest automation boundary was explicit: extract and match what the evidence supports,
          send uncertain cases to a person, and record corrections for the next run.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-px bg-hairline sm:grid-cols-4">
          {[
            ["463 / 464", "Commits authored"],
            ["200,500", "Lines of TypeScript"],
            ["102", "Database migrations"],
            ["75", "Test files"],
          ].map(([value, label]) => (
            <div key={label} className="bg-paper py-5 pr-4">
              <p className="font-mono text-xl font-semibold">{value}</p>
              <p className="label-mono mt-2">{label}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section>
        <ModuleHeader index={1} title="Reconciliation pipeline" tech="Cloudflare Email Workers · Gemini · MySQL · R2 · Signed Links · Chrome Extension" />
        <div className="grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-6">
          {pipelineFlow.map((step, i) => (
            <div key={step.label} className="bg-paper p-4">
              <p className="label-mono text-accent">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-4 text-sm font-semibold text-ink">{step.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{step.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink p-6 text-paper md:p-10">
        <div className="swiss-grid gap-y-6">
          <p className="label-mono col-span-4 !text-paper/60 md:col-span-2">Failure / 359 receipts</p>
          <div className="col-span-4 md:col-span-8">
            <h2 className="text-3xl font-semibold tracking-tight">The matcher found a valid address—in the wrong place.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-paper/70">
              A property matcher routed 359 receipts to the head-office property code because that address appeared in
              every email signature. The office was also a rentable property, so the match looked valid to the original rule.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-paper/70">
              I removed signature fields from property evidence, encoded the accounting distinction between fleet and utility
              GL codes, added a regression test for the incident, and changed ambiguous matches to return no answer instead of
              selecting the most plausible one.
            </p>
          </div>
        </div>
      </section>

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

      {/* Supporting modules in the larger platform */}
      <section>
        <ModuleHeader index={2} title="Extraction and review" tech="PDF · HEIC · JPEG · PNG · Text Email · Human Verification" />
        <FeatureList
          items={[
            "Accepts receipts via email forwarding or direct UI upload",
            "Handles PDF, image (HEIC/JPEG/PNG), and text-only emails (Amazon order confirmations)",
            "Gemini Flash extracts structured JSON: total, merchant, description, GL code, date, OCR text",
            "Deterministic property and GL rules run after extraction; ambiguous classifications fail closed",
            "A signed review link keeps a person in the loop before accounting write-back",
            "Corrections feed merchant rules and regression coverage",
          ]}
        />
      </section>

      <div className="hairline" />

      {/* ===== MODULE 2: SEO Engine ===== */}
      <section>
        <ModuleHeader index={3} title="SEO Engine" tech="Gemini 3.1 Pro · Google Search Console · DataForSEO · Foursquare · Google Places" />

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
        <ModuleHeader index={4} title="GBP & Listings Sync" tech="Google Business Profile · Foursquare · Google Places · ILS Platforms" />
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
        <ModuleHeader index={5} title="Google Reviews" tech="Google Business Profile · Gemini · Sentiment Analysis" />
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
        <ModuleHeader index={6} title="Matterport 3D Tours" tech="Matterport GraphQL API · Yardi · RentCafe" />
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
        <ModuleHeader index={7} title="Mileage Tracking" tech="Google Maps Distance API · CSV Export · Payroll Integration" />
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
