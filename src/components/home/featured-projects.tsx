import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import { ALL_PROJECTS, GROUP_LABELS, type ProjectGroup } from "@/lib/projects";

const ROWS: { group: ProjectGroup; slugs: string[] }[] = [
  { group: "work", slugs: ["admin-panel", "google-reviews", "chatgpt-rollout", "maintenance", "property-sites", "lobby-displays"] },
  { group: "independent", slugs: ["rntwx", "raining-here", "traffic-cameras", "overhead", "overhead-journal", "archive"] },
  { group: "lab", slugs: ["weigh", "portal-screen", "wall-display"] },
];

export function FeaturedProjects() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label-mono">Selected work</p>
            <h2 className="text-h2 mt-3 max-w-3xl">Production systems, live products, and hardware I&apos;ve re-purposed.</h2>
          </div>
          <Link href="/projects" className="btn-outline">
            All {ALL_PROJECTS.length} projects <ArrowUpRight size={15} />
          </Link>
        </div>

        {ROWS.map((row, r) => {
          const projects = row.slugs
            .map((s) => ALL_PROJECTS.find((p) => p.slug === s))
            .filter((p): p is (typeof ALL_PROJECTS)[number] => Boolean(p));
          return (
            <div key={row.group} className="mt-16">
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-t border-line pt-5">
                <h3 className="text-h3">{GROUP_LABELS[row.group].title}</h3>
                <p className="max-w-xl text-sm text-ink-muted">{GROUP_LABELS[row.group].blurb}</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p, i) => (
                  <ProjectCard key={p.slug} project={p} priority={r === 0 && i < 3} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
