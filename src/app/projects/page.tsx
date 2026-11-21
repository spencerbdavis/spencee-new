import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Suspense } from "react";
import { ProjectFilter } from "@/components/projects/project-filter";

export const metadata: Metadata = pageMetadata({
  title: "Projects — Applied AI, Data Systems, Web & Hardware | Spencer D'Avis",
  description:
    "Case studies with live demos: AI receipt reconciliation, RentCafe/Yardi integrations, leasing websites, a radar rain nowcast, traffic-camera computer vision, an ADS-B flight tracker and re-purposed hardware.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="container-site pt-28 pb-28 md:pt-36 md:pb-32">
      <div className="mb-12 md:mb-14">
        <p className="label-mono">Work</p>
        <h1 className="text-h2 mt-3 max-w-3xl">Systems under real constraints.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
          Case studies with architecture, tradeoffs, benchmarks and, where the system is public, a live demo pulling
          real data. Production work, independent products, and hardware.
        </p>
      </div>

      <Suspense>
        <ProjectFilter />
      </Suspense>
    </div>
  );
}
