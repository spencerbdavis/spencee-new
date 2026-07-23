import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { StatBlock } from "./stat-block";
import { TechPills } from "./tech-pills";
import type { Project } from "@/lib/projects";

export function ProjectLayout({ project, children }: { project: Project; children: React.ReactNode }) {
  return (
    <div className="container-site rule-thick pt-16 pb-28 md:pt-20 md:pb-32">
      <Link href="/projects" className="nav-link label-mono inline-flex items-center gap-2">
        <ArrowLeft size={14} /> All work
      </Link>

      <div className="mt-12">
        {project.badge && <span className="tag mb-4">{project.badge}</span>}
        <h1 className="text-h2 text-ink">{project.title}</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">{project.subtitle}</p>

        {project.links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn-outline">
                {link.label} <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="mt-16 flex flex-col gap-16 md:mt-20 md:gap-20">{children}</div>

      {project.stats.length > 0 && (
        <div className="mt-20">
          <StatBlock stats={project.stats} />
        </div>
      )}

      <div className="mt-16">
        <p className="label-mono mb-4">Built With</p>
        <TechPills items={project.techStack} />
      </div>
    </div>
  );
}
