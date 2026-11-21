"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProjectCard } from "./project-card";
import { SupportingProjectCard } from "./supporting-project";
import { ALL_PROJECTS, GROUP_LABELS, SUPPORTING_PROJECTS, type Project, type ProjectGroup } from "@/lib/projects";
import { SKILL_PROJECTS } from "@/lib/skills";

const GROUP_ORDER: ProjectGroup[] = ["work", "independent", "lab", "other"];
const MAX_FILTERS = 12;

function topSkills(): string[] {
  const counts = new Map<string, number>();
  for (const t of [...ALL_PROJECTS.flatMap((p) => p.techStack), ...SUPPORTING_PROJECTS.flatMap((p) => p.techStack)]) {
    counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  return [...counts.entries()]
    .filter(([, n]) => n >= 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, MAX_FILTERS)
    .map(([s]) => s);
}

function matches(slug: string, techStack: string[], filter: string) {
  if (techStack.some((t) => t.toLowerCase() === filter.toLowerCase())) return true;
  return SKILL_PROJECTS[filter]?.some((p) => p.slug === slug) ?? false;
}

function Pill({ label, active, onClick, count }: { label: string; active: boolean; onClick: () => void; count?: number }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`tag cursor-pointer transition-colors ${active ? "!border-ink !bg-ink !text-paper" : "hover:!border-ink hover:!text-ink"}`}
    >
      {label}
      {count != null && <span className="font-semibold">{count}</span>}
    </button>
  );
}

export function ProjectFilter() {
  const params = useSearchParams();
  const skills = useMemo(topSkills, []);
  const [skill, setSkill] = useState<string | null>(null);
  const [group, setGroup] = useState<ProjectGroup | null>(null);

  useEffect(() => {
    const s = params.get("skill");
    if (s) setSkill(s);
    const g = params.get("group") as ProjectGroup | null;
    if (g && GROUP_ORDER.includes(g)) setGroup(g);
  }, [params]);

  const visible = (p: Project) => (!skill || matches(p.slug, p.techStack, skill)) && (!group || (p.group ?? "work") === group);
  const groups = GROUP_ORDER.map((g) => ({
    g,
    items: ALL_PROJECTS.filter((p) => (p.group ?? "work") === g && visible(p)).sort((a, b) => Number(b.featured) - Number(a.featured)),
  })).filter((x) => x.items.length > 0);
  const supporting = (!group || group === "work") ? SUPPORTING_PROJECTS.filter((p) => !skill || matches("", p.techStack, skill)) : [];

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by type">
          <Pill label="All work" active={group === null} onClick={() => setGroup(null)} count={ALL_PROJECTS.length} />
          {GROUP_ORDER.map((g) => (
            <Pill
              key={g}
              label={GROUP_LABELS[g].title}
              active={group === g}
              onClick={() => setGroup(group === g ? null : g)}
              count={ALL_PROJECTS.filter((p) => (p.group ?? "work") === g).length}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by technology">
          <span className="label-mono mr-1 self-center">Tech</span>
          {skill && !skills.includes(skill) && <Pill label={`${skill} ✕`} active onClick={() => setSkill(null)} />}
          {skills.map((s) => (
            <Pill key={s} label={s} active={skill === s} onClick={() => setSkill(skill === s ? null : s)} />
          ))}
        </div>
      </div>

      {groups.map(({ g, items }) => (
        <section key={g} className="mt-14">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-t border-line pt-5">
            <h2 className="text-h3">{GROUP_LABELS[g].title}</h2>
            <p className="max-w-xl text-sm text-ink-muted">{GROUP_LABELS[g].blurb}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p, i) => (
              <ProjectCard key={p.slug} project={p} compact={!p.featured} priority={i < 3 && g === groups[0].g} />
            ))}
          </div>
        </section>
      ))}

      {supporting.length > 0 && (
        <section className="mt-14">
          <div className="mb-6 border-t border-line pt-5">
            <h2 className="text-h3">Supporting tools</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {supporting.map((p) => (
              <SupportingProjectCard key={p.title} project={p} />
            ))}
          </div>
        </section>
      )}

      {groups.length === 0 && supporting.length === 0 && (
        <p className="py-16 text-center text-ink-muted">No projects match that filter.</p>
      )}
    </>
  );
}
