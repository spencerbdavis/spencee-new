import type { Metadata } from "next";
import { ProjectFilter } from "@/components/projects/project-filter";

export const metadata: Metadata = {
  title: "Spencer D'Avis — Projects",
  description:
    "Production systems built for a 60+ property portfolio — maintenance, admin tooling, AI integrations, and more.",
  alternates: { canonical: "https://spenc.ee/projects" },
};

export default function ProjectsPage() {
  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "120px 32px 128px" }}>
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "var(--accent)",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            marginBottom: 16,
          }}
        >
          Projects
        </p>
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.035em",
            color: "var(--foreground)",
          }}
        >
          What I&apos;ve Built
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: "var(--muted-foreground)",
            marginTop: 16,
            maxWidth: 520,
          }}
        >
          Production systems built to replace vendor contracts and automate
          operations across a 60+ property portfolio.
        </p>
      </div>

      <ProjectFilter />
    </div>
  );
}
