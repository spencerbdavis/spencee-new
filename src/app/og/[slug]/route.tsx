import { ImageResponse } from "next/og";
import { ALL_PROJECTS } from "@/lib/projects";
import { HEADLINE, SITE_CONFIG } from "@/lib/config";

// 1200×630 share cards, rendered once at build time: /og/home and /og/<project-slug>.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: "home" }, ...ALL_PROJECTS.map((p) => ({ slug: p.slug }))];
}

const PAPER = "#fbf9f4";
const INK = "#131210";
const MUTED = "#5f594e";
const ACCENT = "#0077b6";

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);
  const label = project ? `Case study / ${project.category}` : "Engineer / Seattle";
  const title = project ? project.title : HEADLINE;
  const sub = project ? project.outcome : "Applied AI, integrations and internal systems.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          color: INK,
          padding: "64px 72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ height: 6, width: "100%", background: INK }} />
          <div style={{ marginTop: 20, fontSize: 26, letterSpacing: 2, textTransform: "uppercase", color: ACCENT }}>
            {label}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: title.length > 34 ? 72 : 88, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            {title}
          </div>
          <div style={{ marginTop: 28, fontSize: 32, lineHeight: 1.35, color: MUTED, maxWidth: 1000 }}>{sub}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: MUTED }}>
          <span>{SITE_CONFIG.name}</span>
          <span>spenc.ee</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
