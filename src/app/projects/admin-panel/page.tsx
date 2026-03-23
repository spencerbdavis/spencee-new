import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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

function ModuleHeader({ icon, title, tech }: { icon: string; title: string; tech: string }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "var(--accent-soft)",
            fontSize: 16,
            flexShrink: 0,
          }}
        >
          {icon}
        </span>
        <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.02em" }}>
          {title}
        </h3>
      </div>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-foreground)", paddingLeft: 48 }}>
        {tech}
      </p>
    </div>
  );
}

function PipelineStep({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="card" style={{ padding: 20, position: "relative", overflow: "hidden" }}>
      <span
        style={{
          position: "absolute",
          top: 12,
          right: 16,
          fontFamily: "var(--font-mono)",
          fontSize: 48,
          fontWeight: 700,
          color: "var(--accent)",
          opacity: 0.06,
          lineHeight: 1,
        }}
      >
        {step}
      </span>
      <p style={{ fontSize: 14, fontWeight: 600, color: "var(--foreground)", marginBottom: 6 }}>{title}</p>
      <p style={{ fontSize: 13, lineHeight: 1.55, color: "var(--muted-foreground)" }}>{desc}</p>
    </div>
  );
}

function CostComparison() {
  return (
    <div style={{ display: "flex", gap: 32, marginTop: 32, flexWrap: "wrap", alignItems: "flex-end" }}>
      <div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 28, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.03em", lineHeight: 1, textDecoration: "line-through", opacity: 0.4 }}>
          $400/mo
        </p>
        <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 4 }}>Previous vendor</p>
      </div>
      <div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 28, fontWeight: 600, color: "var(--accent)", letterSpacing: "-0.03em", lineHeight: 1 }}>
          ~$0.50
        </p>
        <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 4 }}>Per property, biweekly</p>
      </div>
      <div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 28, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.03em", lineHeight: 1 }}>
          99.7%
        </p>
        <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 4 }}>Cost reduction</p>
      </div>
    </div>
  );
}

export default function AdminPanelPage() {
  const project = ALL_PROJECTS.find((p) => p.slug === "admin-panel")!;

  return (
    <ProjectLayout project={project}>
      {/* Screenshots */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
        <div style={{ borderRadius: 12, overflow: "hidden", background: "var(--muted)" }}>
          <Image src="/screenshots/admin-panel/home-screen.png" alt="Admin Panel home screen" width={600} height={400} style={{ width: "100%", height: "auto" }} />
        </div>
        <div style={{ borderRadius: 12, overflow: "hidden", background: "var(--muted)" }}>
          <Image src="/screenshots/admin-panel/google-review.png" alt="Google Reviews dashboard" width={600} height={400} style={{ width: "100%", height: "auto" }} />
        </div>
        <div style={{ borderRadius: 12, overflow: "hidden", background: "var(--muted)" }}>
          <Image src="/screenshots/admin-panel/mileage-entry.png" alt="Mileage entry" width={600} height={400} style={{ width: "100%", height: "auto" }} />
        </div>
      </div>

      {/* ===== MODULE 1: Receipt Processor ===== */}
      <section>
        <ModuleHeader
          icon="🧾"
          title="Receipt Processor"
          tech="Cloudflare Email Workers · Browser Rendering · R2 · Gemini Flash · MySQL · Resend"
        />

        {/* Animated pipeline */}
        <div
          className="pipeline-flow"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 0,
            marginBottom: 28,
            position: "relative",
          }}
        >
          {[
            { label: "Email received", sub: "receipts@ inbox", icon: "📧" },
            { label: "Cloudflare Worker", sub: "Parse & extract", icon: "⚡" },
            { label: "Gemini Flash", sub: "OCR & classify", icon: "🤖" },
            { label: "Store & Confirm", sub: "MySQL + R2 + email", icon: "✅" },
          ].map((step, i) => (
            <div key={step.label} style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  flex: 1,
                  borderRadius: 12,
                  padding: 16,
                  background: "var(--muted)",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: 20, marginBottom: 6 }}>{step.icon}</p>
                <p style={{ fontSize: 12, fontWeight: 600, color: "var(--foreground)" }}>{step.label}</p>
                <p style={{ fontSize: 11, color: "var(--muted-foreground)", marginTop: 2 }}>{step.sub}</p>
              </div>
              {i < 3 && (
                <span className="hidden sm:inline" style={{ padding: "0 8px", fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--accent)", fontWeight: 600 }}>
                  &rarr;
                </span>
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
        <p style={{ marginTop: 24, fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 600, color: "var(--accent)" }}>
          1,000 receipts/month &middot; {"<"}60 second processing
        </p>
      </section>

      {/* Divider */}
      <div style={{ height: 1, background: "var(--border)" }} />

      {/* ===== MODULE 2: SEO Engine ===== */}
      <section>
        <ModuleHeader
          icon="📈"
          title="SEO Engine"
          tech="Gemini 3.1 Pro · Google Search Console · DataForSEO · Foursquare · Google Places"
        />

        {/* Problem callout */}
        <div style={{ background: "var(--accent-soft)", borderRadius: 12, padding: 24, marginBottom: 32, borderLeft: "3px solid var(--accent)" }}>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--foreground)" }}>
            The existing SEO vendor was charging <strong>$400/month</strong> for generic content that didn&apos;t reflect individual property characteristics. Replaced it with an automated Gemini pipeline at <strong>~$0.50 per property per run</strong>, generating data-driven, property-specific content across all 60+ sites.
          </p>
        </div>

        {/* Pipeline steps */}
        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
          Pipeline
        </p>
        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginBottom: 32 }}>
          <PipelineStep step="1" title="Data Collection" desc="Aggregates property data, nearby places, walk scores, competitor keyword positions, and performance history from 6+ APIs in parallel" />
          <PipelineStep step="2" title="Portfolio Deconfliction" desc="Ensures 60+ properties in overlapping markets target different keywords, preventing the portfolio from cannibalizing its own rankings" />
          <PipelineStep step="3" title="Content Generation" desc="Gemini generates property-specific meta descriptions, FAQs, page content, and schema markup, each citing real neighborhood data, never prices" />
          <PipelineStep step="4" title="Delivery & Tracking" desc="Content pushed to WordPress plugin, keyword positions tracked biweekly. Stable content preserved, declining content auto-refreshed, saving ~30-40% on API costs" />
        </div>

        {/* What it generates */}
        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
          What It Generates
        </p>
        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", marginBottom: 32 }}>
          {[
            { icon: "📝", title: "Page Titles & Meta", desc: "Tailored per property and page type with template placeholders for individual floor plans" },
            { icon: "❓", title: "FAQ Content", desc: "10 structured items per property with FAQPage schema: availability, neighborhood, and floor plan topics" },
            { icon: "📄", title: "SEO Paragraphs", desc: "Per-section content citing specific nearby places, walk scores, amenity counts, auto-refreshed on decline" },
            { icon: "🏘️", title: "Neighborhood Summaries", desc: "Lifestyle prose from Foursquare + Google Places: walkability, dining, transit, grocery data" },
            { icon: "🖼️", title: "Image Alt Templates", desc: "Per-category templates (bedroom, kitchen, exterior) with property context applied" },
            { icon: "📍", title: "GBP Content", desc: "Q&A pairs, biweekly post content with semantically matched property photos" },
          ].map((item) => (
            <div key={item.title} style={{ display: "flex", gap: 12, padding: 16, borderRadius: 12, background: "var(--muted)" }}>
              <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: "var(--foreground)" }}>{item.title}</p>
                <p style={{ fontSize: 12, lineHeight: 1.5, color: "var(--muted-foreground)", marginTop: 4 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Monitoring */}
        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
          Monitoring & Optimization
        </p>
        <FeatureList
          items={[
            "Biweekly keyword position tracking via Google Search Console. Trend analysis flags improving, stagnant, and declining keywords",
            "Automated SERP screenshots with fuzzy matching to detect name, address, phone, or URL mismatches",
            "Seasonality awareness: content strategy shifts 6 to 8 weeks before peak leasing season",
            "Competitor keyword gap analysis identifies terms competitors rank for that the property doesn't yet target",
          ]}
        />

        <CostComparison />

        {/* Cross-link */}
        <Link
          href="/projects/wordpress-plugin"
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
              See how this content is delivered →
            </p>
            <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 2 }}>
              The WordPress plugin and Next.js sites that render SEO engine output across 60+ properties
            </p>
          </div>
          <svg width="16" height="16" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.4, flexShrink: 0 }}>
            <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </section>

      {/* Divider */}
      <div style={{ height: 1, background: "var(--border)" }} />

      {/* ===== MODULE 3: GBP & Listings Sync ===== */}
      <section>
        <ModuleHeader
          icon="🌐"
          title="GBP & Listings Sync"
          tech="Google Business Profile · Foursquare · Google Places · ILS Platforms"
        />
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

      {/* Divider */}
      <div style={{ height: 1, background: "var(--border)" }} />

      {/* ===== MODULE 4: Google Reviews ===== */}
      <section>
        <ModuleHeader
          icon="⭐"
          title="Google Reviews"
          tech="Google Business Profile · Gemini · Sentiment Analysis"
        />
        <FeatureList
          items={[
            "Automated review retrieval from Google Business Profile across all 60+ properties",
            "AI-generated response drafts using Gemini, tone-appropriate and brand-consistent",
            "Employee name extraction and sentiment analysis for performance tracking",
            "Review engagement metrics and export for reporting",
          ]}
        />
      </section>

      {/* Divider */}
      <div style={{ height: 1, background: "var(--border)" }} />

      {/* ===== MODULE 5: Matterport ===== */}
      <section>
        <ModuleHeader
          icon="📸"
          title="Matterport 3D Tours"
          tech="Matterport GraphQL API · Yardi · RentCafe"
        />
        <FeatureList
          items={[
            "Bonavista-owned iPhones checked out by property managers for 3D tour capture via Matterport app",
            "Matterport GraphQL API auto-categorizes scans to the correct Yardi/RentCafe property ID",
            "Billing automation: reminders on day 10, approval on day 15, billing on day 1 via cron jobs",
            "Global billing settings management with per-property override support",
          ]}
        />
      </section>

      {/* Divider */}
      <div style={{ height: 1, background: "var(--border)" }} />

      {/* ===== MODULE 6: Mileage ===== */}
      <section>
        <ModuleHeader
          icon="🚗"
          title="Mileage Tracking"
          tech="Google Maps Distance API · CSV Export · Payroll Integration"
        />
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
