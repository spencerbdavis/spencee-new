import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { StatBlock } from "./stat-block";
import { TechPills } from "./tech-pills";
import type { Project } from "@/lib/projects";

export function ProjectLayout({ project, children }: { project: Project; children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "120px 32px 128px" }}>
      <Link
        href="/projects"
        className="nav-link"
        style={{ fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}
      >
        <ArrowLeft size={14} /> All Projects
      </Link>

      <div style={{ marginTop: 48 }}>
        {project.badge && (
          <span className="pill" style={{ marginBottom: 16, display: "inline-flex", fontSize: 10, fontWeight: 600 }}>
            {project.badge}
          </span>
        )}
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.035em",
            color: "var(--foreground)",
          }}
        >
          {project.title}
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: "var(--muted-foreground)",
            maxWidth: 640,
            marginTop: 20,
          }}
        >
          {project.subtitle}
        </p>

        {project.links.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 }}>
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "10px 20px",
                  borderRadius: 100,
                  fontSize: 13,
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                {link.label} <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        )}
      </div>

      <div style={{ marginTop: 72, display: "flex", flexDirection: "column", gap: 72 }}>
        {children}
      </div>

      {project.stats.length > 0 && (
        <div style={{ marginTop: 80 }}>
          <StatBlock stats={project.stats} />
        </div>
      )}

      <div style={{ marginTop: 72 }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: "var(--muted-foreground)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 16,
          }}
        >
          Built With
        </p>
        <TechPills items={project.techStack} />
      </div>
    </div>
  );
}
