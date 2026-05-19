import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import { FEATURED_PROJECTS } from "@/lib/projects";

export function FeaturedProjects() {
  const projects = FEATURED_PROJECTS.slice(0, 6);

  return (
    <section style={{ background: "var(--section-alt)" }}>
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "80px 32px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
          <div>
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
              Featured Work
            </p>
            <p
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "var(--foreground)",
                letterSpacing: "-0.02em",
              }}
            >
              Systems I designed, built, and shipped to production
            </p>
          </div>
          <Link
            href="/projects"
            className="nav-link"
            style={{
              fontSize: 14,
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            All projects <ArrowRight size={14} />
          </Link>
        </div>

        <div
          className="featured-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
          }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={{ ...p, badge: undefined }} compact />
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) {
            .featured-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
