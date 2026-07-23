import type { Metadata } from "next";
import { Suspense } from "react";
import { ProjectFilter } from "@/components/projects/project-filter";

export const metadata: Metadata = {
  title: "Spencer D'Avis | Projects",
  description:
    "Production systems built for a 60+ property portfolio: maintenance, admin tooling, AI integrations, and more.",
  alternates: { canonical: "https://spenc.ee/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="container-site rule-thick pt-16 pb-28 md:pt-20 md:pb-32">
      {/* Header */}
      <div className="mb-16">
        <p className="label-mono mb-4">Work</p>
        <h1 className="text-h2 text-ink">Work</h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-muted">
          Selected projects across web, design, and marketing systems — built for a 60-property portfolio and
          freelance clients.
        </p>
      </div>

      <Suspense>
        <ProjectFilter />
      </Suspense>
    </div>
  );
}
