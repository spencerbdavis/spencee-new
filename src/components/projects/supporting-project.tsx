import { ArrowUpRight } from "lucide-react";
import { TechPills } from "./tech-pills";
import type { SupportingProject } from "@/lib/projects";

export function SupportingProjectCard({ project }: { project: SupportingProject }) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-ink">{project.title}</h3>
        {project.liveUrl && <ArrowUpRight size={14} className="mt-1 shrink-0" />}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.description}</p>
      <div className="mt-4">
        <TechPills items={project.techStack} />
      </div>
    </>
  );

  if (project.liveUrl) {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card card group flex h-full flex-col p-6"
      >
        {inner}
      </a>
    );
  }
  return <div className="card flex h-full flex-col p-6">{inner}</div>;
}
