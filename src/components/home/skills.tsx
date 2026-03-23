"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { SKILLS, SKILL_PROJECTS } from "@/lib/skills";
import type { SkillProject } from "@/lib/skills";

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
  const [open, setOpen] = useState(false);
  const [above, setAbove] = useState(false);
  const pillRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const projects: SkillProject[] = SKILL_PROJECTS[skill] ?? [];

  const reposition = useCallback(() => {
    if (!pillRef.current) return;
    const rect = pillRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    setAbove(spaceBelow < 180);
  }, []);

  useEffect(() => {
    if (open) reposition();
  }, [open, reposition]);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (projects.length > 0) setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  if (projects.length === 0) {
    return (
      <span className="pill">
        {skill}
      </span>
    );
  }

  return (
    <span
      style={{ position: "relative", display: "inline-flex" }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        ref={pillRef}
        className="pill"
        style={{
          cursor: "pointer",
          position: "relative",
        }}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {skill}
        <svg
          width="8"
          height="6"
          viewBox="0 0 8 6"
          fill="none"
          style={{
            marginLeft: 5,
            transition: "transform 0.15s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            opacity: 0.5,
            flexShrink: 0,
          }}
        >
          <path
            d="M1 1.5L4 4.5L7 1.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          role="tooltip"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            ...(above
              ? { bottom: "calc(100% + 10px)" }
              : { top: "calc(100% + 10px)" }),
            zIndex: 50,
            minWidth: 200,
            maxWidth: 260,
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            boxShadow: "var(--card-shadow-hover)",
            padding: "10px 0",
            animation: "tooltip-in 0.15s ease-out",
          }}
        >
          {/* Caret / arrow */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              ...(above
                ? {
                    bottom: -6,
                    borderLeft: "7px solid transparent",
                    borderRight: "7px solid transparent",
                    borderTop: "7px solid var(--card)",
                  }
                : {
                    top: -6,
                    borderLeft: "7px solid transparent",
                    borderRight: "7px solid transparent",
                    borderBottom: "7px solid var(--card)",
                  }),
              width: 0,
              height: 0,
              filter: "drop-shadow(0 -1px 0 var(--border))",
            }}
          />

          <p
            style={{
              fontSize: 10,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "var(--muted-foreground)",
              padding: "2px 14px 8px",
            }}
          >
            Used in
          </p>
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`/projects/${project.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 14px",
                fontSize: 13,
                fontWeight: 500,
                color: "var(--foreground)",
                textDecoration: "none",
                transition: "background 0.1s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent-soft)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  flexShrink: 0,
                }}
              />
              {project.name}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                style={{ marginLeft: "auto", opacity: 0.4, flexShrink: 0 }}
              >
                <path
                  d="M4.5 2.5L8 6L4.5 9.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      )}
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" style={{ scrollMarginTop: 80 }}>
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "96px 32px",
        }}
      >
        {/* Section header */}
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
              fontSize: 20,
              fontWeight: 600,
              color: "var(--foreground)",
              letterSpacing: "-0.02em",
            }}
          >
            Technologies I work with
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
              style={{
                padding: "20px 24px",
              }}
            >
              {/* Category header */}
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

              {/* Pills */}
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
