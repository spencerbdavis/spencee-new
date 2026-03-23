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

function matches(techStack: string[], filter: string): boolean {
  return techStack.some(
    (t) => t.toLowerCase() === filter.toLowerCase()
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
        ? FEATURED_PROJECTS.filter((p) => matches(p.techStack, active))
        : FEATURED_PROJECTS,
    [active]
  );

  const more = useMemo(
    () =>
      active
        ? MORE_PROJECTS.filter((p) => matches(p.techStack, active))
        : MORE_PROJECTS,
    [active]
  );

  const supporting = useMemo(
    () =>
      active
        ? SUPPORTING_PROJECTS.filter((p) => matches(p.techStack, active))
        : SUPPORTING_PROJECTS,
    [active]
  );

  return (
    <>
      {/* Filter pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 48,
        }}
      >
        <button
          onClick={() => setActive(null)}
          className="pill"
          style={{
            cursor: "pointer",
            background: active === null ? "var(--accent)" : undefined,
            color: active === null ? "#fff" : undefined,
            borderColor: active === null ? "var(--accent)" : undefined,
            transition: "all 0.15s",
          }}
        >
          All
        </button>
        {/* Show active skill first if not in top list */}
        {active && !topSkills.includes(active) && (
          <button
            onClick={() => setActive(null)}
            className="pill"
            style={{
              cursor: "pointer",
              background: "var(--accent)",
              color: "#fff",
              borderColor: "var(--accent)",
              transition: "all 0.15s",
            }}
          >
            {active} ✕
          </button>
        )}
        {topSkills.map((skill) => (
          <button
            key={skill}
            onClick={() => setActive(active === skill ? null : skill)}
            className="pill"
            style={{
              cursor: "pointer",
              background: active === skill ? "var(--accent)" : undefined,
              color: active === skill ? "#fff" : undefined,
              borderColor: active === skill ? "var(--accent)" : undefined,
              transition: "all 0.15s",
            }}
          >
            {skill}
          </button>
        ))}
      </div>

      {/* Featured */}
      {featured.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
            gap: 20,
          }}
        >
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}

      {/* More Projects */}
      {more.length > 0 && (
        <div style={{ marginTop: featured.length > 0 ? 80 : 0 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "var(--muted-foreground)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 32,
            }}
          >
            More Projects
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: 20,
            }}
          >
            {more.map((p) => (
              <ProjectCard key={p.slug} project={p} compact />
            ))}
          </div>
        </div>
      )}

      {/* Supporting Tools */}
      {supporting.length > 0 && (
        <div style={{ marginTop: (featured.length > 0 || more.length > 0) ? 80 : 0 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "var(--muted-foreground)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 32,
            }}
          >
            Supporting Tools
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
              gap: 20,
            }}
          >
            {supporting.map((p) => (
              <SupportingProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {featured.length === 0 && more.length === 0 && supporting.length === 0 && (
        <p
          style={{
            textAlign: "center",
            color: "var(--muted-foreground)",
            fontSize: 15,
            padding: "64px 0",
          }}
        >
          No projects match that filter.
        </p>
      )}
    </>
  );
}
