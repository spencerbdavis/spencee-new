import type { Metadata } from "next";
import { ProjectLayout } from "@/components/projects/project-layout";
import { SpinningCard } from "@/components/projects/spinning-card";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis | Auto-Generated Business Cards",
  description:
    "A templating system that auto-generates branded business cards with dynamic QR codes and vCard downloads. Per employee, zero design work.",
  alternates: { canonical: "https://spenc.ee/projects/business-card" },
};

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-ink-muted" />
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
      <div className="flex justify-center">
        <SpinningCard />
      </div>

      <div>
        <p className="label-mono mb-6">How It Works</p>
        <FeatureList
          items={[
            "Each employee gets a unique URL (e.g., cards.bonavistapm.com/SPNCE) with no manual card design needed",
            "Template engine auto-generates cards from employee data: name, title, phone, email, photo, and assigned properties",
            "Dynamic QR code on the back links directly to the employee's digital card page",
            "vCard (.vcf) download for one-tap contact saving on any phone",
            "Adheres to complex brand template requirements: consistent fonts, colors, logo placement, and spacing across all 100+ employee cards",
            "Property listing integration shows each employee's assigned buildings",
            "Dark/light theme support on the digital card page",
            "Responsive mobile-first design; cards look correct on any screen size",
          ]}
        />
      </div>

      <div>
        <p className="label-mono mb-6">Why Build It</p>
        <p className="max-w-xl text-[15px] leading-relaxed text-ink-muted">
          With 100+ employees across 60+ properties, maintaining individual business
          cards was a design bottleneck. New hires, title changes, and property
          reassignments meant constant manual updates. This system generates
          pixel-perfect cards automatically from a single employee record, including
          the QR code, so onboarding a new hire takes zero design time.
        </p>
      </div>
    </ProjectLayout>
  );
}
