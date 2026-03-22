import type { Metadata } from "next";
import Image from "next/image";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis — RentCafe × WordPress Plugin",
  description:
    "A custom WordPress plugin that syncs live RentCafe data to 60+ property websites — including Seattle's MFTE affordable housing filter.",
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
      {/* Screenshot */}
      <div style={{ borderRadius: 12, overflow: "hidden", background: "var(--muted)", maxWidth: 700 }}>
        <Image src="/screenshots/wordpress-plugin/availability.png" alt="WordPress plugin availability view" width={700} height={450} style={{ width: "100%", height: "auto", display: "block" }} />
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

      {/* WordPress Plugin */}
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
          WordPress Plugin
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--muted-foreground)" }}>
          floorplan-tool v1.7.7 &middot; PHP &middot; WordPress Plugin API
          &middot; RentCafe REST API &middot; MySQL
        </p>
        <div style={{ marginTop: 24 }}>
          <FeatureList
            items={[
              "Pulls live availability, floor plans, pricing, and unit details directly from RentCafe",
              "Full MFTE filter support — income-restricted units correctly flagged per Seattle housing requirements",
              "15+ shortcodes: FloorplanTool, FloorplanOverview, ContactForm, WalkScore, Amenities, NearbyPlaces, and more",
              "Full-page output caching for performance",
              "SEO management with centralized Gemini AI content engine and sitemap generation",
              "Contact forms with Akismet spam verification and Mailgun SMTP",
              "Photo management with scored images from Cloudinary",
              "Deployed across all 60+ property websites — zero licensing cost",
            ]}
          />
        </div>
      </div>

      {/* Standalone Sites */}
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
          Next.js Marketing Sites
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted-foreground)", maxWidth: 600 }}>
          Some properties needed faster, more modern single-page sites beyond
          WordPress — built with Next.js 16, consuming the same Bonavista
          property API.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div style={{ borderRadius: 12, padding: 20, backgroundColor: "var(--muted)" }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)" }}>
              Cortina Apartments
            </p>
            <p style={{ marginTop: 4, fontSize: 13, color: "var(--muted-foreground)" }}>
              Eastlake, Seattle — mid-century modern aesthetic
            </p>
          </div>
          <div style={{ borderRadius: 12, padding: 20, backgroundColor: "var(--muted)" }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)" }}>
              Noco Apartments
            </p>
            <p style={{ marginTop: 4, fontSize: 13, color: "var(--muted-foreground)" }}>
              Warm gradient design with wave dividers and sticky CTAs
            </p>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
