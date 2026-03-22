import type { Metadata } from "next";
import Image from "next/image";
import { ProjectLayout } from "@/components/projects/project-layout";
import { Tabs } from "@/components/ui/tabs";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis — Bonavista Admin Panel",
  description:
    "The operations backbone for a 60+ property portfolio — receipts, mileage, Matterport, SEO, Google Reviews, and live property data.",
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

function PipelineFlow() {
  const steps = [
    { label: "Email received", sub: "receipts@ inbox" },
    { label: "Cloudflare Worker", sub: "Parse & extract" },
    { label: "Gemini Flash", sub: "OCR & classify" },
    { label: "MySQL + R2", sub: "Store & confirm" },
  ];

  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0">
      {steps.map((step, i) => (
        <div key={step.label} style={{ display: "flex", alignItems: "center" }}>
          <div
            className="flex-1 sm:min-w-[140px]"
            style={{ borderRadius: 12, padding: 16, backgroundColor: "var(--muted)" }}
          >
            <p style={{ fontSize: 13, fontWeight: 500, color: "var(--foreground)" }}>
              {step.label}
            </p>
            <p style={{ marginTop: 2, fontSize: 11, color: "var(--muted-foreground)" }}>
              {step.sub}
            </p>
          </div>
          {i < steps.length - 1 && (
            <span
              className="hidden sm:inline"
              style={{ padding: "0 12px", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted-foreground)" }}
            >
              &rarr;
            </span>
          )}
        </div>
      ))}
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

      <Tabs
        tabs={[
          {
            label: "Receipts",
            content: (
              <div>
                <p style={{ marginBottom: 24, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-foreground)" }}>
                  Cloudflare Email Workers &middot; Browser Rendering &middot;
                  R2 &middot; Gemini Flash &middot; MySQL &middot; Resend
                </p>
                <PipelineFlow />
                <FeatureList
                  items={[
                    "Accepts receipts via email forwarding or direct UI upload",
                    "Handles PDF, image (HEIC/JPEG/PNG), and text-only emails (Amazon)",
                    "Gemini Flash extracts JSON: total, merchant, description, GL code, date, OCR text",
                    "Rule-based learning engine improves merchant recognition over time",
                    "Accuracy tracking system measures extraction quality",
                    "Files stored in Cloudflare R2, confirmation sent via Resend",
                  ]}
                />
                <p style={{ marginTop: 32, fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 500, color: "var(--foreground)" }}>
                  1,000 receipts/month &middot; {"<"}60 second processing
                </p>
              </div>
            ),
          },
          {
            label: "Mileage",
            content: (
              <FeatureList
                items={[
                  "Property origin and destination input with automatic distance calculation",
                  "End-of-month automated mileage report per user",
                  "CSV export for payroll integration",
                ]}
              />
            ),
          },
          {
            label: "Matterport",
            content: (
              <div>
                <p style={{ marginBottom: 24, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-foreground)" }}>
                  Matterport GraphQL API &middot; Yardi &middot; RentCafe
                </p>
                <FeatureList
                  items={[
                    "Bonavista-owned iPhones checked out by property managers for 3D tour capture",
                    "Matterport GraphQL API auto-categorizes scans to correct Yardi/RentCafe property ID",
                    "Billing automation: reminders on day 10, approval on day 15, billing on day 1",
                    "Global billing settings management",
                  ]}
                />
              </div>
            ),
          },
          {
            label: "GBP & SEO",
            content: (
              <div>
                <p style={{ marginBottom: 24, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-foreground)" }}>
                  Google Business Profile &middot; Foursquare &middot; Gemini
                  3.1 Pro &middot; DataForSEO
                </p>
                <FeatureList
                  items={[
                    "20+ automated cron jobs sync property data, media, reviews, and SEO content across GBP, Foursquare, Google Places, and ILS platforms",
                    "Photo rotation with scored image selection on a weekly schedule",
                    "Full SEO content pipeline: biweekly plans by Gemini 3.1 Pro — keyword strategy, meta descriptions, FAQ, internal linking, competitor analysis",
                    "Portfolio-level keyword deconfliction prevents properties from competing against each other",
                    "SERP monitoring dashboard with automated rank-tracking screenshots",
                    "Neighborhood profiles: walkability scores, amenities, cuisine data via Foursquare and Google Places",
                    "HelloData integration for property comparables and market insights",
                  ]}
                />
              </div>
            ),
          },
          {
            label: "Reviews",
            content: (
              <FeatureList
                items={[
                  "Automated review retrieval from Google Business Profile",
                  "AI-generated response drafts using Gemini — tone-appropriate and brand-consistent",
                  "Employee name extraction and sentiment analysis",
                  "Review engagement tracking and export",
                ]}
              />
            ),
          },
        ]}
      />
    </ProjectLayout>
  );
}
