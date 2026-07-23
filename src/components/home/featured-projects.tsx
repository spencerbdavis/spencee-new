import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeader } from "@/components/shared/section-header";
import { FEATURED_PROJECTS } from "@/lib/projects";

export function FeaturedProjects() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeader
          eyebrow="Selected Work"
          title="Things I've shipped"
          action={
            <Link
              href="/projects"
              className="nav-link inline-flex items-center gap-2 whitespace-nowrap font-mono text-sm"
            >
              All work
              <span aria-hidden="true">&rarr;</span>
            </Link>
          }
        />

        <div className="mt-12 border-b border-hairline md:mt-16">
          {FEATURED_PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={i * 60} className="reveal-rise">
              <Link
                href={`/projects/${project.slug}`}
                className="group relative block overflow-hidden hairline"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-150 ease-linear group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />
                <div className="relative grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 gap-y-2 py-7 md:grid-cols-[4rem_1fr_auto] md:gap-x-8 md:py-8">
                  <span className="font-mono text-sm text-ink-muted transition-colors delay-100 duration-100 ease-linear group-hover:text-paper group-focus-visible:text-paper">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-h3 transition-colors delay-100 duration-100 ease-linear group-hover:text-paper group-focus-visible:text-paper">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-ink-muted leading-relaxed transition-colors delay-100 duration-100 ease-linear group-hover:text-paper group-focus-visible:text-paper">
                      {project.outcome}
                    </p>
                  </div>

                  <span className="label-mono col-start-2 transition-colors delay-100 duration-100 ease-linear group-hover:text-paper group-focus-visible:text-paper md:col-start-3 md:justify-self-end md:pt-1">
                    {project.category}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
