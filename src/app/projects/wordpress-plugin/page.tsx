import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis | RentCafe x WordPress Plugin",
  description:
    "A custom WordPress plugin that syncs live RentCafe data to 60+ property websites, including Seattle's MFTE affordable housing filter.",
  alternates: { canonical: "https://spenc.ee/projects/wordpress-plugin" },
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

function VideoPlate({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <div>
      <div className="border border-hairline">
        <video src={src} aria-label={alt} autoPlay loop muted playsInline className="block h-auto w-full" />
      </div>
      <p className="label-mono mt-2">{caption}</p>
    </div>
  );
}

function SiteLink({ href, name, loc }: { href: string; name: string; loc: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group invert-hover flex items-start justify-between gap-3 border border-hairline p-4"
    >
      <div>
        <p className="text-sm font-semibold text-ink group-hover:text-paper">{name}</p>
        <p className="mt-1 text-xs text-ink-muted group-hover:text-paper">{loc}</p>
      </div>
      <ArrowUpRight size={14} className="mt-0.5 shrink-0" />
    </a>
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

export default function WordPressPluginPage() {
  const project = ALL_PROJECTS.find((p) => p.slug === "wordpress-plugin")!;

  return (
    <ProjectLayout project={project}>
      {/* Floor Plan Availability */}
      <div>
        <p className="label-mono mb-6">Floor Plan Availability</p>
        <p className="mb-5 max-w-2xl leading-relaxed text-ink-muted">
          Live floor plan and unit availability pulled directly from RentCafe. Browse by overview or drill into
          individual units with pricing, sqft, and availability dates.
        </p>
        <VideoPlate
          src="/screenshots/wordpress-plugin/floor-plan-availability.mp4"
          alt="Floor plan availability showing unit overview and individual unit details"
          caption="Floor plan availability — overview and unit detail"
        />
      </div>

      {/* Problem */}
      <div>
        <p className="label-mono mb-6">The Problem</p>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">{project.problem}</p>
      </div>

      {/* ===== PLATFORM 1: WordPress Plugin ===== */}
      <section>
        <h3 className="text-h3 text-ink">WordPress Plugin</h3>
        <p className="label-mono mt-2 mb-6">
          floorplan-tool v1.7.7 &middot; PHP &middot; WordPress Plugin API &middot; RentCafe REST API &middot; MySQL
        </p>
        <p className="mb-6 max-w-2xl leading-relaxed text-ink-muted">
          Custom WordPress plugin deployed across 60+ property websites. Pulls live data from RentCafe and renders
          it via 15+ shortcodes. The same data pipeline also feeds the SEO engine and neighborhood features below.
        </p>
        <FeatureList
          items={[
            "Live availability, floor plans, pricing, and unit details pulled directly from RentCafe",
            "Full MFTE filter support: income-restricted units flagged per Seattle housing requirements",
            "15+ shortcodes: FloorplanTool, FloorplanOverview, ContactForm, WalkScore, Amenities, NearbyPlaces, and more",
            "Full-page output caching for performance",
            "Contact forms with Akismet spam verification and Mailgun SMTP",
            "Photo management with scored images from Cloudinary",
            "Zero licensing cost; replaced a $5,796/year vendor",
          ]}
        />

        <div className="mt-8 mb-4 flex flex-wrap items-baseline justify-between gap-4">
          <p className="label-mono">Live Sites</p>
          <Link href="/projects/wordpress-sites" className="nav-link text-sm">
            See all 14+ WordPress sites →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <SiteLink href="https://vibefremont.com/" name="Vibe Fremont" loc="Fremont, Seattle" />
          <SiteLink href="https://robinsnestseattle.com/" name="Robin's Nest" loc="Seattle, WA" />
          <SiteLink href="https://harborflatsseattle.com/" name="Harbor Flats" loc="Seattle, WA" />
        </div>

        {/* Neighborhood Highlights - part of the plugin */}
        <div className="mt-8">
          <p className="label-mono mb-4">Neighborhood Highlights</p>
          <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Interactive neighborhood section integrated with Apple Maps, Foursquare Places API, Google Maps Places
            API, and King County Metro &amp; Sound Transit lines. Data feeds directly into the SEO content engine.
          </p>
          <VideoPlate
            src="/screenshots/wordpress-plugin/neighborhood-highlights.mp4"
            alt="Neighborhood highlights section showing nearby places, transit lines, and walkability data"
            caption="Neighborhood highlights — nearby places and transit"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            {["Apple Maps", "Foursquare Places API", "Google Maps Places API", "King County Metro", "Sound Transit"].map(
              (t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* ===== PLATFORM 2: Next.js Marketing Sites ===== */}
      <section>
        <h3 className="text-h3 text-ink">Next.js Marketing Sites</h3>
        <p className="label-mono mt-2 mb-6">Next.js 16 &middot; React 19 &middot; Bonavista Property API &middot; Server Components</p>
        <p className="mb-6 max-w-2xl leading-relaxed text-ink-muted">
          Smaller properties (under 20 units) often don&apos;t have the budget for a full marketing site, or
          ownership doesn&apos;t want to invest in one. Some just need a temporary landing page during an
          acquisition transition. These lightweight Next.js sites spin up fast, pull from the same property API as
          the WordPress plugin, and cost nothing to maintain.
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <a
            href="https://www.cortinaeastlake.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group invert-hover flex items-start justify-between gap-3 border border-hairline p-5"
          >
            <div>
              <p className="text-sm font-semibold text-ink group-hover:text-paper">Cortina Apartments</p>
              <p className="mt-1 text-xs text-ink-muted group-hover:text-paper">
                Eastlake, Seattle, mid-century modern aesthetic
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Next.js", "SSG", "ISR"].map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <ArrowUpRight size={14} className="mt-0.5 shrink-0" />
          </a>
          <a
            href="https://www.nocoseattle.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group invert-hover flex items-start justify-between gap-3 border border-hairline p-5"
          >
            <div>
              <p className="text-sm font-semibold text-ink group-hover:text-paper">Noco Apartments</p>
              <p className="mt-1 text-xs text-ink-muted group-hover:text-paper">
                North Seattle, warm gradient design with sticky mobile CTAs
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Next.js", "SSG", "ISR"].map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <ArrowUpRight size={14} className="mt-0.5 shrink-0" />
          </a>
        </div>

        {/* Shared pipeline callout */}
        <div className="mt-6 border-l border-ink py-1 pl-6">
          <p className="text-sm leading-relaxed text-ink-muted">
            Both platforms share the same property data API, SEO engine, and neighborhood data pipeline: one
            source of truth, two delivery formats.
          </p>
        </div>
      </section>

      {/* SEO Integration */}
      <div>
        <p className="label-mono mb-6">SEO Engine Integration</p>
        <p className="mb-5 max-w-2xl leading-relaxed text-ink-muted">
          The plugin is the delivery layer for a custom AI-powered SEO pipeline built in the Admin Panel. Every two
          weeks, Gemini generates property-specific content that the plugin renders on each site, replacing a
          $400/month vendor that produced generic copy.
        </p>

        <FeatureList
          items={[
            "Page titles, meta descriptions, and heading hierarchy generated per property and page type, each referencing real neighborhood data, never prices",
            "10 structured FAQ items per property rendered with FAQPage schema markup for rich search results",
            "SEO paragraphs per page section (floor plans, amenities, neighborhood, pet policy), auto-refreshed only when keyword performance declines",
            "Dynamic XML sitemaps with all floor plan URLs, updated daily with current availability",
            "ApartmentComplex + LocalBusiness + FAQPage structured data (JSON-LD) for rich snippets",
            "Image alt text templates per category (bedroom, kitchen, exterior) with property context automatically applied",
            "llms.txt generation for AI-readable property summaries (Claude, ChatGPT browsing)",
            "Content cached with staleness tracking: fresh (<16 days), aging (16 to 21 days), stale (>21 days). Ensures sites always have current SEO content",
          ]}
        />

        <div className="mt-8 flex flex-wrap items-end gap-8">
          <div>
            <p className="font-mono text-xl leading-none font-semibold tracking-tight text-ink-muted line-through opacity-60">
              $400/mo
            </p>
            <p className="label-mono mt-2">Previous vendor cost</p>
          </div>
          <div>
            <p className="font-mono text-xl leading-none font-semibold tracking-tight text-ink">~$0.50</p>
            <p className="label-mono mt-2">Per property, biweekly</p>
          </div>
          <div>
            <p className="font-mono text-xl leading-none font-semibold tracking-tight text-ink">60+</p>
            <p className="label-mono mt-2">Sites receiving auto-generated SEO</p>
          </div>
        </div>

        <CrossLink
          href="/projects/admin-panel"
          title="See how the SEO content is generated →"
          desc="The Admin Panel's Gemini-powered SEO engine: pipeline architecture, data sources, and monitoring"
        />
      </div>
    </ProjectLayout>
  );
}
