"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ProjectCard } from "./project-card";
import { SupportingProjectCard } from "./supporting-project";
import {
  FEATURED_PROJECTS,
  MORE_PROJECTS,
  SUPPORTING_PROJECTS,
} from "@/lib/projects";
import { SKILL_PROJECTS } from "@/lib/skills";

const MAX_FILTERS = 8;

/** Build a sorted list of the most-used tech across all projects */
function getTopSkills(): string[] {
  const counts = new Map<string, number>();

  const allTech = [
    ...FEATURED_PROJECTS,
    ...MORE_PROJECTS,
  ].flatMap((p) => p.techStack);

  SUPPORTING_PROJECTS.forEach((p) =>
    p.techStack.forEach((t) => allTech.push(t))
  );

  for (const t of allTech) {
    counts.set(t, (counts.get(t) ?? 0) + 1);
  }

  return [...counts.entries()]
    .filter(([, count]) => count >= 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, MAX_FILTERS)
    .map(([skill]) => skill);
}

function matches(slug: string, techStack: string[], filter: string): boolean {
  // Check direct techStack match
  if (techStack.some((t) => t.toLowerCase() === filter.toLowerCase())) {
    return true;
  }
  // Check SKILL_PROJECTS mapping
  const linked = SKILL_PROJECTS[filter];
  if (linked) {
    return linked.some((p) => p.slug === slug);
  }
  return false;
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`tag transition-colors duration-100 ${
        active
          ? "border-accent bg-accent text-paper"
          : "hover:border-accent hover:text-accent"
      }`}
    >
      {label}
    </button>
  );
}

export function ProjectFilter() {
  const searchParams = useSearchParams();
  const topSkills = useMemo(getTopSkills, []);
  const [active, setActive] = useState<string | null>(null);

  // Read ?skill= from URL on mount
  useEffect(() => {
    const skillParam = searchParams.get("skill");
    if (skillParam) setActive(skillParam);
  }, [searchParams]);

  const featured = useMemo(
    () =>
      active
        ? FEATURED_PROJECTS.filter((p) => matches(p.slug, p.techStack, active))
        : FEATURED_PROJECTS,
    [active]
  );

  const more = useMemo(
    () =>
      active
        ? MORE_PROJECTS.filter((p) => matches(p.slug, p.techStack, active))
        : MORE_PROJECTS,
    [active]
  );

  const supporting = useMemo(
    () =>
      active
        ? SUPPORTING_PROJECTS.filter((p) => matches("", p.techStack, active))
        : SUPPORTING_PROJECTS,
    [active]
  );

  return (
    <>
      {/* Filter pills */}
      <div className="mb-12 flex flex-wrap gap-2">
        <FilterPill label="All" active={active === null} onClick={() => setActive(null)} />
        {/* Show active skill first if not in top list */}
        {active && !topSkills.includes(active) && (
          <FilterPill label={`${active} ✕`} active onClick={() => setActive(null)} />
        )}
        {topSkills.map((skill) => (
          <FilterPill
            key={skill}
            label={skill}
            active={active === skill}
            onClick={() => setActive(active === skill ? null : skill)}
          />
        ))}
      </div>

      {/* Featured */}
      {featured.length > 0 && (
        <div>
          <p className="label-mono hairline mb-8 pt-4">Featured</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      )}

      {/* More Projects */}
      {more.length > 0 && (
        <div className={featured.length > 0 ? "mt-20" : ""}>
          <p className="label-mono hairline mb-8 pt-4">More Projects</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <ProjectCard key={p.slug} project={p} compact />
            ))}
          </div>
        </div>
      )}

      {/* Supporting Tools */}
      {supporting.length > 0 && (
        <div className={featured.length > 0 || more.length > 0 ? "mt-20" : ""}>
          <p className="label-mono hairline mb-8 pt-4">Supporting Tools</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {supporting.map((p) => (
              <SupportingProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {featured.length === 0 && more.length === 0 && supporting.length === 0 && (
        <p className="py-16 text-center text-ink-muted">No projects match that filter.</p>
      )}
    </>
  );
}
