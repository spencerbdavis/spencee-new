import type { Metadata } from "next";
import { Suspense } from "react";
import { ProjectFilter } from "@/components/projects/project-filter";

export const metadata: Metadata = {
  title: "Spencer D'Avis | Projects",
  description:
    "Applied AI, integrations, and production systems built for an 80-property real estate business.",
  alternates: { canonical: "https://spenc.ee/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="container-site pt-28 pb-28 md:pt-36 md:pb-32">
      <div className="rule-thick swiss-grid mb-16 gap-y-5 pt-5 md:mb-20">
        <p className="label-mono col-span-4 md:col-span-2">Index / Work</p>
        <div className="col-span-4 md:col-span-8">
          <h1 className="text-h2 text-ink">Systems under real constraints.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Case studies in applied AI, integrations, internal tools, and infrastructure—including the failures,
            tradeoffs, and evidence behind the outcomes.
          </p>
        </div>
      </div>

      <Suspense>
        <ProjectFilter />
      </Suspense>
    </div>
  );
}
