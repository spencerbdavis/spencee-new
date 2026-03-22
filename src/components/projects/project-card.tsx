import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TechPills } from "./tech-pills";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, compact }: { project: Project; compact?: boolean }) {
  const stat = project.stats[0];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card group"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: compact ? 28 : 32,
        textDecoration: "none",
        height: "100%",
      }}
    >
      {project.badge && (
        <span
          className="pill"
          style={{ alignSelf: "flex-start", marginBottom: 16, fontSize: 10, fontWeight: 600 }}
        >
          {project.badge}
        </span>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <h3
          style={{
            fontSize: compact ? 18 : 20,
            fontWeight: 600,
            color: "var(--foreground)",
            letterSpacing: "-0.02em",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>
        <ArrowUpRight
          size={16}
          style={{ color: "var(--muted-foreground)", opacity: 0, transition: "opacity 0.2s", flexShrink: 0, marginTop: 4 }}
          className="group-hover:opacity-60"
        />
      </div>

      <p
        style={{
          fontSize: 14,
          lineHeight: 1.6,
          color: "var(--muted-foreground)",
          marginTop: 10,
        }}
      >
        {project.subtitle}
      </p>

      <div style={{ marginTop: 20 }}>
        <TechPills items={project.techStack} max={4} />
      </div>

      {stat && (
        <div style={{ marginTop: "auto", paddingTop: 28 }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 28,
              fontWeight: 600,
              color: "var(--foreground)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            {stat.value}
          </p>
          <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 4 }}>
            {stat.label}
          </p>
        </div>
      )}
    </Link>
  );
}
