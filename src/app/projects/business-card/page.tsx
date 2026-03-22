import type { Metadata } from "next";
import { ProjectLayout } from "@/components/projects/project-layout";
import { SpinningCard } from "@/components/projects/spinning-card";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis — Auto-Generated Business Cards",
  description:
    "A templating system that auto-generates branded business cards with dynamic QR codes and vCard downloads — per employee, zero design work.",
  alternates: { canonical: "https://spenc.ee/projects/business-card" },
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

export default function BusinessCardPage() {
  const project = ALL_PROJECTS.find((p) => p.slug === "business-card")!;

  return (
    <ProjectLayout project={project}>
      {/* Interactive card */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SpinningCard />
      </div>

      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
          How It Works
        </p>
        <FeatureList
          items={[
            "Each employee gets a unique URL (e.g., cards.bonavistapm.com/SPNCE) — no manual card design needed",
            "Template engine auto-generates cards from employee data: name, title, phone, email, photo, and assigned properties",
            "Dynamic QR code on the back links directly to the employee's digital card page",
            "vCard (.vcf) download for one-tap contact saving on any phone",
            "Adheres to complex brand template requirements — consistent fonts, colors, logo placement, and spacing across all 100+ employee cards",
            "Property listing integration shows each employee's assigned buildings",
            "Dark/light theme support on the digital card page",
            "Responsive mobile-first design — cards look correct on any screen size",
          ]}
        />
      </div>

      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
          Why Build It
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--muted-foreground)", maxWidth: 640 }}>
          With 100+ employees across 60+ properties, maintaining individual business
          cards was a design bottleneck. New hires, title changes, and property
          reassignments meant constant manual updates. This system generates
          pixel-perfect cards automatically from a single employee record — including
          the QR code — so onboarding a new hire takes zero design time.
        </p>
      </div>
    </ProjectLayout>
  );
}
