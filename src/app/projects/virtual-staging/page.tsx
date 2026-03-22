import type { Metadata } from "next";
import Image from "next/image";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis — Virtual Staging App",
  description:
    "An in-house AI staging tool using Gemini with Google Search grounding for real Seattle furniture trends.",
  alternates: { canonical: "https://spenc.ee/projects/virtual-staging" },
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

export default function VirtualStagingPage() {
  const project = ALL_PROJECTS.find((p) => p.slug === "virtual-staging")!;

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

      <div>
        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
          What I Built
        </p>
        <FeatureList
          items={[
            "Internal web app at staging.bonavista.work",
            "Gemini Flash with Google Search grounding — searches current furniture trends from real Seattle retailers",
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
        <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 24 }}>
          Before & After
        </p>
        {/* Pair 1 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ borderRadius: 12, overflow: "hidden", background: "var(--muted)", position: "relative" }}>
            <Image src="/screenshots/virtual-staging/before-1.png" alt="Empty room before staging" width={600} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
            <span style={{ position: "absolute", top: 8, left: 8, background: "rgba(0,0,0,0.5)", color: "#fff", fontSize: 10, padding: "3px 8px", borderRadius: 4, fontWeight: 600 }}>BEFORE</span>
          </div>
          <div style={{ borderRadius: 12, overflow: "hidden", background: "var(--muted)", position: "relative" }}>
            <Image src="/screenshots/virtual-staging/after-1.png" alt="AI staged room" width={600} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
            <span style={{ position: "absolute", top: 8, left: 8, background: "var(--accent)", color: "#fff", fontSize: 10, padding: "3px 8px", borderRadius: 4, fontWeight: 600 }}>AFTER</span>
          </div>
        </div>
        {/* Pair 2 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
          <div style={{ borderRadius: 12, overflow: "hidden", background: "var(--muted)", position: "relative" }}>
            <Image src="/screenshots/virtual-staging/before-2.png" alt="Empty room before staging" width={600} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
            <span style={{ position: "absolute", top: 8, left: 8, background: "rgba(0,0,0,0.5)", color: "#fff", fontSize: 10, padding: "3px 8px", borderRadius: 4, fontWeight: 600 }}>BEFORE</span>
          </div>
          <div style={{ borderRadius: 12, overflow: "hidden", background: "var(--muted)", position: "relative" }}>
            <Image src="/screenshots/virtual-staging/after-2.png" alt="AI staged room" width={600} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
            <span style={{ position: "absolute", top: 8, left: 8, background: "var(--accent)", color: "#fff", fontSize: 10, padding: "3px 8px", borderRadius: 4, fontWeight: 600 }}>AFTER</span>
          </div>
        </div>
        <p style={{ marginTop: 16, fontSize: 12, fontStyle: "italic", color: "var(--muted-foreground)" }}>
          Live at staging.bonavista.work (internal — access restricted)
        </p>
      </div>
    </ProjectLayout>
  );
}
