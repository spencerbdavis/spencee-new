import type { Metadata } from "next";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis — Floor Plan AI Extraction",
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
      desc: "Adaptive tiling (768–1536px based on text density) with Gemini Flash Lite. Extracts unit labels, numbers, sqft, room labels, dimensions. Deduplicates across tile overlaps.",
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
        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
          The Problem
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--muted-foreground)", maxWidth: 640 }}>
          {project.problem}
        </p>
      </div>

      {/* Pipeline */}
      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 32 }}>
          The Pipeline
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {stages.map((stage) => (
            <div
              key={stage.num}
              style={{ borderRadius: 12, padding: 24, backgroundColor: "var(--muted)" }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 24, fontWeight: 600, lineHeight: 1, color: "var(--foreground)", opacity: 0.15 }}>
                  {stage.num}
                </span>
                <p style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)" }}>
                  {stage.title}
                </p>
              </div>
              <p style={{ marginTop: 12, fontSize: 13, lineHeight: 1.55, color: "var(--muted-foreground)" }}>
                {stage.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Note */}
      <div style={{ borderRadius: 12, padding: 24, backgroundColor: "var(--muted)" }}>
        <p style={{ fontSize: 14, lineHeight: 1.6, fontStyle: "italic", color: "var(--muted-foreground)" }}>
          This project represents an exploration into ML and computer vision.
          The pipeline works but proved extremely challenging — the variety of
          architectural drawing styles makes reliable extraction a hard
          problem. Included to show willingness to tackle difficult technical
          challenges.
        </p>
      </div>
    </ProjectLayout>
  );
}
