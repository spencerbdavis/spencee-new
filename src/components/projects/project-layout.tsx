import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { StatBlock } from "./stat-block";
import { TechPills } from "./tech-pills";
import type { Project } from "@/lib/projects";

export function ProjectLayout({ project, children }: { project: Project; children: React.ReactNode }) {
  return (
    <div className="container-site pt-28 pb-28 md:pt-36 md:pb-32">
      <div className="rule-thick pt-5">
        <Link href="/projects" className="nav-link label-mono inline-flex items-center gap-2">
          <ArrowLeft size={14} /> All work
        </Link>
      </div>

      <div className="swiss-grid mt-12 gap-y-8 md:mt-16">
        <div className="col-span-4 md:col-span-2">
          <p className="label-mono">Case study</p>
          <p className="label-mono mt-2 text-accent">{project.category}</p>
        </div>
        <div className="col-span-4 md:col-span-8">
          {project.badge && <span className="tag mb-5">{project.badge}</span>}
          <h1 className="text-h2 max-w-[48rem] text-ink">{project.title}</h1>
          <p className="mt-6 max-w-[44rem] text-xl leading-relaxed text-ink-muted">{project.subtitle}</p>

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
        <div className="col-span-4 border-t border-hairline pt-4 md:col-span-2 md:border-t-0 md:border-l md:pt-0 md:pl-6">
          <p className="label-mono">Outcome</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.outcome}</p>
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-16 border-t border-hairline pt-12 md:mt-24 md:gap-24 md:pt-16">{children}</div>

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
