import type { Metadata } from "next";
import Image from "next/image";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis | Virtual Staging App",
  description:
    "An in-house AI staging tool using Gemini with Google Search grounding for real Seattle furniture trends.",
  alternates: { canonical: "https://spenc.ee/projects/virtual-staging" },
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

function BeforeAfterPair({ before, after }: { before: string; after: string }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="relative aspect-video border border-hairline">
        <Image src={before} alt="Empty room before staging" fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
        <span className="label-mono absolute top-2 left-2 bg-ink px-2 py-1 text-paper">Before</span>
      </div>
      <div className="relative aspect-video border border-hairline">
        <Image src={after} alt="AI staged room" fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
        <span className="label-mono absolute top-2 left-2 bg-ink px-2 py-1 text-paper">After</span>
      </div>
    </div>
  );
}

export default function VirtualStagingPage() {
  const project = ALL_PROJECTS.find((p) => p.slug === "virtual-staging")!;

  return (
    <ProjectLayout project={project}>
      <div>
        <p className="label-mono mb-6">The Problem</p>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">{project.problem}</p>
      </div>

      <div>
        <p className="label-mono mb-6">What I Built</p>
        <FeatureList
          items={[
            "Internal web app at staging.bonavista.work",
            "Gemini Flash with Google Search grounding, searching current furniture trends from real Seattle retailers",
            'Multiple styling options including "Pacific Northwest" aesthetic',
            "Lighting mode selection: morning, noon, or evening ambiance",
            "Automatic room type classification and identification",
            "Batch photo processing with real-time progress and cost tracking",
            "Before/after photo comparison showcase",
            "Drag-and-drop upload with property selector",
            "ZIP export for batch downloads",
            "AWS S3 storage with presigned URLs for secure delivery",
          ]}
        />
      </div>

      {/* Before/After */}
      <div>
        <p className="label-mono mb-6">Before & After</p>
        <div className="flex flex-col gap-3">
          <BeforeAfterPair before="/screenshots/virtual-staging/before-1.webp" after="/screenshots/virtual-staging/after-1.webp" />
          <BeforeAfterPair before="/screenshots/virtual-staging/before-2.webp" after="/screenshots/virtual-staging/after-2.webp" />
        </div>
        <p className="mt-4 text-sm text-ink-muted italic">Live at staging.bonavista.work (internal, access restricted)</p>
      </div>
    </ProjectLayout>
  );
}
