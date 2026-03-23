import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
      {items.map((item) => (
        <li key={item} style={{ display: "flex", gap: 12, fontSize: 14, lineHeight: 1.6, color: "var(--muted-foreground)" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--border)", marginTop: 8, flexShrink: 0 }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function WordPressPluginPage() {
  const project = ALL_PROJECTS.find((p) => p.slug === "wordpress-plugin")!;

  return (
    <ProjectLayout project={project}>
      {/* Floor Plan Availability */}
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
          Floor Plan Availability
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted-foreground)", maxWidth: 640, marginBottom: 20 }}>
          Live floor plan and unit availability pulled directly from RentCafe. Browse by overview or drill into individual units with pricing, sqft, and availability dates.
        </p>
        <div style={{ borderRadius: 12, overflow: "hidden", background: "var(--muted)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/screenshots/wordpress-plugin/floor-plan-availability.gif"
            alt="Floor plan availability showing unit overview and individual unit details"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>

      {/* Problem */}
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
          The Problem
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--muted-foreground)", maxWidth: 640 }}>
          {project.problem}
        </p>
      </div>

      {/* ===== PLATFORM 1: WordPress Plugin ===== */}
      <section>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 10, background: "var(--accent-soft)", fontSize: 16, flexShrink: 0 }}>
            🔌
          </span>
          <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
            WordPress Plugin
          </h3>
        </div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-foreground)", paddingLeft: 48, marginBottom: 24 }}>
          floorplan-tool v1.7.7 &middot; PHP &middot; WordPress Plugin API &middot; RentCafe REST API &middot; MySQL
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted-foreground)", maxWidth: 640, marginBottom: 24 }}>
          Custom WordPress plugin deployed across 60+ property websites. Pulls
          live data from RentCafe and renders it via 15+ shortcodes. The same
          data pipeline also feeds the SEO engine and neighborhood features below.
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

        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 32, marginBottom: 16 }}>
          Live Sites
        </p>
        <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {[
            { name: "Vibe Fremont", url: "https://vibefremont.com/", loc: "Fremont, Seattle" },
            { name: "Robin\u2019s Nest", url: "https://robinsnestseattle.com/", loc: "Seattle, WA" },
            { name: "Harbor Flats", url: "https://harborflatsseattle.com/", loc: "Seattle, WA" },
          ].map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{ padding: 16, textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}
            >
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "var(--foreground)" }}>{site.name}</p>
                <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 2 }}>{site.loc}</p>
              </div>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.4, flexShrink: 0, marginTop: 3 }}>
                <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>

        {/* Neighborhood Highlights - part of the plugin */}
        <div style={{ marginTop: 32 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
            Neighborhood Highlights
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted-foreground)", maxWidth: 640, marginBottom: 16 }}>
            Interactive neighborhood section integrated with Apple Maps, Foursquare
            Places API, Google Maps Places API, and King County Metro &amp; Sound
            Transit lines. Data feeds directly into the SEO content engine.
          </p>
          <div style={{ borderRadius: 12, overflow: "hidden", background: "var(--muted)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screenshots/wordpress-plugin/neighborhood-highlights.gif"
              alt="Neighborhood highlights section showing nearby places, transit lines, and walkability data"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 6 }}>
            {["Apple Maps", "Foursquare Places API", "Google Maps Places API", "King County Metro", "Sound Transit"].map((t) => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: 1, background: "var(--border)" }} />

      {/* ===== PLATFORM 2: Next.js Marketing Sites ===== */}
      <section>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 10, background: "var(--accent-soft)", fontSize: 16, flexShrink: 0 }}>
            ⚡
          </span>
          <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
            Next.js Marketing Sites
          </h3>
        </div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-foreground)", paddingLeft: 48, marginBottom: 24 }}>
          Next.js 16 &middot; React 19 &middot; Bonavista Property API &middot; Server Components
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted-foreground)", maxWidth: 640, marginBottom: 24 }}>
          Smaller properties (under 20 units) often don&apos;t have the budget
          for a full marketing site, or ownership doesn&apos;t want to invest in
          one. Some just need a temporary landing page during an acquisition
          transition. These lightweight Next.js sites spin up fast, pull from
          the same property API as the WordPress plugin, and cost nothing to
          maintain.
        </p>

        <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          <a
            href="https://www.cortinaeastlake.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{ padding: 20, textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}
          >
            <div>
              <p style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)" }}>Cortina Apartments</p>
              <p style={{ marginTop: 4, fontSize: 13, color: "var(--muted-foreground)" }}>Eastlake, Seattle, mid-century modern aesthetic</p>
              <div style={{ display: "flex", gap: 4, marginTop: 10 }}>
                {["Next.js", "SSG", "ISR"].map((t) => <span key={t} className="pill" style={{ fontSize: 10, padding: "3px 8px" }}>{t}</span>)}
              </div>
            </div>
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.4, flexShrink: 0, marginTop: 2 }}>
              <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="https://www.nocoseattle.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{ padding: 20, textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}
          >
            <div>
              <p style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)" }}>Noco Apartments</p>
              <p style={{ marginTop: 4, fontSize: 13, color: "var(--muted-foreground)" }}>North Seattle, warm gradient design with sticky mobile CTAs</p>
              <div style={{ display: "flex", gap: 4, marginTop: 10 }}>
                {["Next.js", "SSG", "ISR"].map((t) => <span key={t} className="pill" style={{ fontSize: 10, padding: "3px 8px" }}>{t}</span>)}
              </div>
            </div>
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.4, flexShrink: 0, marginTop: 2 }}>
              <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Shared pipeline callout */}
        <div style={{ background: "var(--accent-soft)", borderRadius: 12, padding: 16, marginTop: 24, borderLeft: "3px solid var(--accent)" }}>
          <p style={{ fontSize: 13, lineHeight: 1.55, color: "var(--foreground)" }}>
            Both platforms share the same property data API, SEO engine, and neighborhood data pipeline: one source of truth, two delivery formats.
          </p>
        </div>
      </section>

      {/* SEO Integration */}
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
          SEO Engine Integration
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted-foreground)", maxWidth: 640, marginBottom: 20 }}>
          The plugin is the delivery layer for a custom AI-powered SEO pipeline
          built in the Admin Panel. Every two weeks, Gemini generates
          property-specific content that the plugin renders on each site,
          replacing a $400/month vendor that produced generic copy.
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

        <div style={{ display: "flex", gap: 24, marginTop: 28, flexWrap: "wrap" }}>
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 24, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.03em", lineHeight: 1 }}>
              $400/mo
            </p>
            <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 4, textDecoration: "line-through" }}>Previous vendor cost</p>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 24, fontWeight: 600, color: "var(--accent)", letterSpacing: "-0.03em", lineHeight: 1 }}>
              ~$0.50
            </p>
            <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 4 }}>Per property, biweekly</p>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 24, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.03em", lineHeight: 1 }}>
              60+
            </p>
            <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 4 }}>Sites receiving auto-generated SEO</p>
          </div>
        </div>

        {/* Cross-link */}
        <Link
          href="/projects/admin-panel"
          className="card"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 20px",
            textDecoration: "none",
            marginTop: 28,
          }}
        >
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: "var(--foreground)" }}>
              See how the SEO content is generated →
            </p>
            <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 2 }}>
              The Admin Panel&apos;s Gemini-powered SEO engine: pipeline architecture, data sources, and monitoring
            </p>
          </div>
          <svg width="16" height="16" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.4, flexShrink: 0 }}>
            <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </ProjectLayout>
  );
}
