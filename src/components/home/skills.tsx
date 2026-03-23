import Link from "next/link";
import { SKILLS, SKILL_PROJECTS } from "@/lib/skills";

const CATEGORY_ICONS: Record<string, string> = {
  Languages: "{ }",
  Frontend: "UI",
  Backend: "API",
  Databases: "DB",
  Infrastructure: "OPS",
  "AI & Automation": "AI",
  Integrations: "INT",
};

function SkillPill({ skill }: { skill: string }) {
  const hasProjects = (SKILL_PROJECTS[skill] ?? []).length > 0;

  if (!hasProjects) {
    return <span className="pill">{skill}</span>;
  }

  return (
    <Link
      href={`/projects?skill=${encodeURIComponent(skill)}`}
      className="pill"
      style={{
        textDecoration: "none",
        cursor: "pointer",
        transition: "all 0.15s",
      }}
      title={`View projects using ${skill}`}
    >
      {skill}
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        style={{ marginLeft: 4, opacity: 0.4, flexShrink: 0 }}
      >
        <path
          d="M3.5 2L7 5L3.5 8"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

export function Skills() {
  return (
    <section id="skills" style={{ scrollMarginTop: 80, background: "var(--section-alt)" }}>
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "96px 32px",
        }}
      >
        <div style={{ marginBottom: 48 }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--accent)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              marginBottom: 8,
            }}
          >
            Skills
          </p>
          <p
            style={{
              fontSize: 15,
              color: "var(--muted-foreground)",
            }}
          >
            Click a skill to see projects where it&apos;s used
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="card"
              style={{ padding: "20px 24px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "var(--accent-soft)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    fontWeight: 700,
                    color: "var(--accent)",
                    letterSpacing: "0.02em",
                    flexShrink: 0,
                  }}
                >
                  {CATEGORY_ICONS[group.category] ?? "—"}
                </span>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--foreground)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {group.category}
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {group.items.map((skill) => (
                  <SkillPill key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
