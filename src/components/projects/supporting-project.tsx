import { ArrowUpRight } from "lucide-react";
import { TechPills } from "./tech-pills";
import type { SupportingProject } from "@/lib/projects";

export function SupportingProjectCard({ project }: { project: SupportingProject }) {
  const inner = (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
        <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)" }}>
          {project.title}
        </h4>
        {project.liveUrl && <ArrowUpRight size={14} style={{ color: "var(--muted-foreground)", flexShrink: 0 }} />}
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--muted-foreground)", marginTop: 8 }}>
        {project.description}
      </p>
      <div style={{ marginTop: 14 }}>
        <TechPills items={project.techStack} />
      </div>
    </>
  );

  const s = { display: "flex" as const, flexDirection: "column" as const, padding: 24, textDecoration: "none" as const, height: "100%" as const };

  if (project.liveUrl) {
    return <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="card" style={s}>{inner}</a>;
  }
  return <div className="card" style={{ ...s, cursor: "default" }}>{inner}</div>;
}
