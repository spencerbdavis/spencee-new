import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import type { Project } from "@/lib/projects";

/**
 * Project card. The title is a stretched link to the case study; Live and
 * GitHub links sit above it (z-10) so each target stays a real, separate link.
 */
export function ProjectCard({ project, compact, priority }: { project: Project; compact?: boolean; priority?: boolean }) {
  const stats = project.stats.slice(0, compact ? 1 : 2);

  return (
    <article className="project-card card group flex h-full flex-col overflow-hidden">
      <div className="card-media relative aspect-[16/10] overflow-hidden border-b border-line bg-surface-2">
        {project.cover ? (
          <Image
            src={project.cover}
            alt=""
            fill
            priority={priority}
            sizes="(min-width: 1024px) 30rem, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <CoverPlaceholder project={project} />
        )}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {project.badge && (
            <span className="tag !border-transparent !bg-ink !text-paper">
              {project.badge.startsWith("Live") && <span aria-hidden className="live-dot h-1.5 w-1.5 rounded-full bg-live" />}
              {project.badge}
            </span>
          )}
        </div>
      </div>

      <div className={`flex flex-1 flex-col ${compact ? "p-5" : "p-6"}`}>
        <p className="label-mono">{project.category}</p>
        <h3 className={`mt-2 font-semibold tracking-tight ${compact ? "text-lg" : "text-xl"}`}>
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.outcome}</p>

        {stats.length > 0 && (
          <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-line pt-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-mono text-xl font-semibold tracking-tight tabular-nums">{s.value}</dd>
                <dd className="label-mono mt-1 !text-[0.65rem]">{s.label}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          <span className="inline-flex items-center gap-1 text-sm font-semibold">
            Case study <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          <span className="flex-1" />
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="tag relative z-10 hover:!border-ink hover:!text-ink"
              aria-label={`${project.title} live site`}
            >
              <Globe size={12} /> Live
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="tag relative z-10 hover:!border-ink hover:!text-ink"
              aria-label={`${project.title} source on GitHub`}
            >
              <Github size={12} /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/** Typographic cover for projects without a public screenshot (internal tools). */
function CoverPlaceholder({ project }: { project: Project }) {
  const stat = project.stats[0];
  return (
    <div className="bg-grid absolute inset-0 flex flex-col justify-end p-6">
      <p className="label-mono">{project.techStack.slice(0, 3).join(" · ")}</p>
      {stat && (
        <p className="mt-2 font-mono text-5xl font-semibold tracking-tight text-ink">
          {stat.value}
          <span className="ml-2 align-middle text-sm font-normal text-ink-muted">{stat.label}</span>
        </p>
      )}
    </div>
  );
}
