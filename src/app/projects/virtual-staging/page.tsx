import type { Metadata } from "next";
import Image from "next/image";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis | Structural Verification for Generated Images",
  description:
    "A Sobel edge detector and edge-overlap scorer that flags structural drift in AI-staged listing images.",
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
      <section className="swiss-grid gap-y-6">
        <p className="label-mono col-span-4 md:col-span-2">The constraint</p>
        <div className="col-span-4 md:col-span-8">
        <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">{project.problem}</p>
        </div>
      </section>

      <section>
        <p className="label-mono mb-6">Verification path</p>
        <div className="grid grid-cols-1 gap-px bg-hairline md:grid-cols-5">
          {[
            ["01", "Original", "Immutable source image"],
            ["02", "Generated", "Staged model output"],
            ["03", "Edge maps", "Explicit 3×3 Sobel kernels"],
            ["04", "Overlap", "Edge-intersection IoU"],
            ["05", "Gate", "Pass, flag, or fail"],
          ].map(([step, title, desc]) => (
            <div key={step} className="bg-paper p-5">
              <p className="label-mono text-accent">{step}</p>
              <p className="mt-6 font-semibold">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="swiss-grid gap-y-6">
        <p className="label-mono col-span-4 md:col-span-2">Engineering decision</p>
        <div className="col-span-4 md:col-span-8">
          <h2 className="text-3xl font-semibold tracking-tight">Put a deterministic check around the generative step.</h2>
          <FeatureList items={[
            "Convert both images to raw grayscale buffers and calculate horizontal and vertical gradients",
            "Threshold gradient magnitude into comparable structural edge maps",
            "Score the intersection over union of edge pixels instead of trusting a visual-quality model",
            "Keep the scoring code unit-tested and separate from the staging model",
            "Send borderline or conflicting results to review rather than silently accepting them",
          ]} />
        </div>
      </section>

      {/* Before/After */}
      <section>
        <p className="label-mono mb-6">Staging output</p>
        <div className="flex flex-col gap-3">
          <BeforeAfterPair before="/screenshots/virtual-staging/before-1.webp" after="/screenshots/virtual-staging/after-1.webp" />
          <BeforeAfterPair before="/screenshots/virtual-staging/before-2.webp" after="/screenshots/virtual-staging/after-2.webp" />
        </div>
        <p className="mt-4 text-sm text-ink-muted">Internal production tool; access is restricted.</p>
      </section>

      <aside className="border-l-2 border-accent bg-paper-tint p-6 md:p-8">
        <p className="label-mono">Limit</p>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-muted">
          Edge overlap is a useful structural heuristic, not proof that geometry is unchanged. Furniture, lighting,
          texture, and occlusion can alter edges. The score is one gate in a review workflow, not an autonomous guarantee.
        </p>
      </aside>
    </ProjectLayout>
  );
}
