import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { TechPills } from "./tech-pills";
import { ALL_PROJECTS, type Project } from "@/lib/projects";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/config";
import { ProjectCard } from "./project-card";

export function ProjectLayout({ project, children }: { project: Project; children: React.ReactNode }) {
  const related = ALL_PROJECTS.filter(
    (p) => p.slug !== project.slug && (p.group ?? "work") === (project.group ?? "work") && p.featured,
  ).slice(0, 3);

  return (
    <article className="pt-24 pb-24 md:pt-32 md:pb-28">
      <JsonLd data={projectJsonLd(project)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Work", path: "/projects" },
          { name: project.title, path: `/projects/${project.slug}` },
        ])}
      />

      <header className="container-site">
        <Link href="/projects" className="nav-link label-mono inline-flex items-center gap-2">
          <ArrowLeft size={14} /> All work
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="tag">{project.category}</span>
              {project.badge && project.badge !== project.category && <span className="tag !border-transparent !bg-ink !text-paper">{project.badge}</span>}
              {project.year && <span className="tag">{project.year}</span>}
            </div>
            <h1 className="text-h2 mt-5 max-w-[48rem]">{project.title}</h1>
            <p className="mt-5 max-w-[42rem] text-lg leading-relaxed text-ink-muted md:text-xl">{project.subtitle}</p>

            {(project.links.length > 0 || project.repo) && (
              <div className="mt-7 flex flex-wrap gap-3">
                {project.links.map((link, i) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={i === 0 ? "btn-solid" : "btn-outline"}
                  >
                    {link.icon === "github" && <Github size={15} />}
                    {link.label} <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <aside className="card p-6 lg:col-span-5">
            <p className="label-mono">Outcome</p>
            <p className="mt-2 text-lg leading-snug font-semibold">{project.outcome}</p>
            {project.stats.length > 0 && (
              <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-line pt-5">
                {project.stats.slice(0, 4).map((s) => (
                  <div key={s.label}>
                    <dt className="label-mono !text-[0.65rem]">{s.label}</dt>
                    <dd className="mt-1 font-mono text-2xl font-semibold tracking-tight tabular-nums">{s.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </aside>
        </div>

        {project.cover && (
          <div className="card relative mt-12 aspect-[16/9] overflow-hidden p-0 md:mt-16">
            <Image
              src={project.cover}
              alt={`${project.title} screenshot`}
              fill
              priority
              sizes="(min-width: 1280px) 76rem, 100vw"
              className="object-cover object-top"
            />
          </div>
        )}
      </header>

      <div className="container-site mt-16 flex flex-col gap-16 md:mt-24 md:gap-24">{children}</div>

      <footer className="container-site mt-20 md:mt-28">
        <div className="grid gap-8 border-t border-line pt-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="label-mono">Built with</p>
          </div>
          <div className="md:col-span-9">
            <TechPills items={project.techStack} />
          </div>
        </div>

        <div className="card bg-grid mt-14 flex flex-col items-start gap-5 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="text-2xl font-semibold tracking-tight md:text-3xl">Want something like this built?</p>
            <p className="mt-2 max-w-xl text-ink-muted">
              I take on a few web, SEO and AI automation projects alongside full-time work, and I'm open to remote engineering roles.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(`Re: ${project.title}`)}`} className="btn-signal">
              Email me
            </a>
            <Link href="/services" className="btn-outline">
              Services
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <p className="label-mono mb-6">More work like this</p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} compact />
              ))}
            </div>
          </div>
        )}
      </footer>
    </article>
  );
}
