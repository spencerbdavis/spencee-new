import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TechPills } from "./tech-pills";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, compact }: { project: Project; compact?: boolean }) {
  const stat = project.stats[0];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group invert-hover flex h-full flex-col border border-hairline ${compact ? "p-6" : "p-7"}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="label-mono group-hover:text-paper">{project.category}</span>
        {project.badge && <span className="tag">{project.badge}</span>}
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <h3
          className={`font-semibold tracking-tight text-ink group-hover:text-paper ${compact ? "text-lg" : "text-xl"}`}
        >
          {project.title}
        </h3>
        <ArrowUpRight
          size={16}
          className="mt-1 shrink-0 opacity-0 transition-opacity duration-100 group-hover:opacity-100"
        />
      </div>

      <p className="mt-2 text-sm leading-relaxed text-ink-muted group-hover:text-paper">{project.outcome}</p>

      <div className="mt-5">
        <TechPills items={project.techStack} max={4} />
      </div>

      {stat && (
        <div className="mt-auto pt-7">
          <p className="font-mono text-2xl leading-none font-semibold tracking-tight text-ink group-hover:text-paper">
            {stat.value}
          </p>
          <p className="label-mono mt-1 group-hover:text-paper">{stat.label}</p>
        </div>
      )}
    </Link>
  );
}
