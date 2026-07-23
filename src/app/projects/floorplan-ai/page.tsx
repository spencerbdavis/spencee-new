import type { Metadata } from "next";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis | Floor Plan AI Extraction",
  description:
    "A Python pipeline that extracts apartment units from architectural PDFs using SAM3, Gemini OCR, and OpenCV.",
  alternates: { canonical: "https://spenc.ee/projects/floorplan-ai" },
};

export default function FloorplanAIPage() {
  const project = ALL_PROJECTS.find((p) => p.slug === "floorplan-ai")!;

  const stages = [
    {
      num: "0",
      title: "PDF Rasterization",
      desc: 'Converts architectural PDFs to 300 DPI images. Detects scale indicators (e.g., 1/8" = 1\'-0"). Calculates pixels-per-foot.',
    },
    {
      num: "1",
      title: "Tiled Gemini OCR",
      desc: "Adaptive tiling (768 to 1536px based on text density) with Gemini Flash Lite. Extracts unit labels, numbers, sqft, room labels, dimensions. Deduplicates across tile overlaps.",
    },
    {
      num: "2",
      title: "Wall Detection",
      desc: "OpenCV adaptive thresholding + morphological operations. Ray-casting from OCR seed points to find wall boundaries. Flood fill for complex shapes. Area validation against labeled sqft.",
    },
    {
      num: "3",
      title: "Crop & Export",
      desc: "RGBA transparent-background crops. Bedroom classification from label text or area. 15% tolerance validation. Structured output: raw_crop.png + metadata.json per unit.",
    },
    {
      num: "4",
      title: "Gemini Polish",
      desc: "Gemini Flash Image redraws extracted units as clean technical line drawings with standardized architectural symbols.",
    },
    {
      num: "5",
      title: "SAM3 Refinement",
      desc: "Optional. Deploys to Modal H100 GPU for refinement of flagged units using Meta's Segment Anything 3 with point-based prompting.",
    },
  ];

  return (
    <ProjectLayout project={project}>
      <div>
        <p className="label-mono mb-6">The Problem</p>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">{project.problem}</p>
      </div>

      {/* Pipeline */}
      <div>
        <p className="label-mono mb-8">The Pipeline</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {stages.map((stage) => (
            <div key={stage.num} className="border border-hairline p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-2xl leading-none font-semibold text-ink-muted">{stage.num}</span>
                <p className="text-sm font-semibold text-ink">{stage.title}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Note */}
      <div className="border border-hairline p-6">
        <p className="text-sm leading-relaxed text-ink-muted italic">
          This project represents an exploration into ML and computer vision. The pipeline works but proved
          extremely challenging. The variety of architectural drawing styles makes reliable extraction a hard
          problem. Included to show willingness to tackle difficult technical challenges.
        </p>
      </div>
    </ProjectLayout>
  );
}
