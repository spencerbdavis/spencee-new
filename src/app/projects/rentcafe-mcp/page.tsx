import type { Metadata } from "next";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis | RentCafe MCP Server",
  description:
    "A Model Context Protocol server that gives Claude direct access to RentCafe Site Manager via a browser-authenticated headless Puppeteer session.",
  alternates: { canonical: "https://spenc.ee/projects/rentcafe-mcp" },
};

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
      {items.map((item) => (
        <li
          key={item}
          style={{
            display: "flex",
            gap: 12,
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--muted-foreground)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--border)",
              marginTop: 8,
              flexShrink: 0,
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function PipelineStep({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="card" style={{ padding: 20, position: "relative", overflow: "hidden" }}>
      <span
        style={{
          position: "absolute",
          top: 12,
          right: 16,
          fontFamily: "var(--font-mono)",
          fontSize: 48,
          fontWeight: 700,
          color: "var(--accent)",
          opacity: 0.06,
          lineHeight: 1,
        }}
      >
        {step}
      </span>
      <p style={{ fontSize: 14, fontWeight: 600, color: "var(--foreground)", marginBottom: 6 }}>
        {title}
      </p>
      <p style={{ fontSize: 13, lineHeight: 1.55, color: "var(--muted-foreground)" }}>{desc}</p>
    </div>
  );
}

export default function RentCafeMcpPage() {
  const project = ALL_PROJECTS.find((p) => p.slug === "rentcafe-mcp")!;

  return (
    <ProjectLayout project={project}>
      <div>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: "var(--muted-foreground)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 24,
          }}
        >
          Why this exists
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--muted-foreground)", maxWidth: 640 }}>
          RentCafe is the system of record for leasing data across the portfolio,
          but Site Manager has no public API at our tier. Day-to-day questions
          (which units are vacant, what notices were sent, what rent changes are
          pending) require manual lookup. I built an MCP server that holds an
          authenticated browser session and exposes those same actions to any
          Model Context Protocol client, so an agent can answer them live.
        </p>
      </div>

      {/* Architecture */}
      <div>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: "var(--muted-foreground)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 24,
          }}
        >
          Architecture
        </p>

        <div
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            marginBottom: 32,
          }}
        >
          <PipelineStep
            step="1"
            title="Browser Auth"
            desc="One-time `npm run auth` opens a real Chromium window. The user signs into RentCafe; cookies and tokens are persisted to the local profile."
          />
          <PipelineStep
            step="2"
            title="MCP Server"
            desc="Node server speaks the Model Context Protocol over stdio, registering each Site Manager action as an MCP tool with typed input and output schemas."
          />
          <PipelineStep
            step="3"
            title="Headless Session"
            desc="Tool calls are executed against a long-lived Puppeteer session that reuses the persisted profile. No re-auth, no scraping cycles."
          />
          <PipelineStep
            step="4"
            title="Agent Integration"
            desc="Drop the server into Claude Desktop, Cursor, or any MCP client. The agent gets typed access to live portfolio data without leaving its tool loop."
          />
        </div>
      </div>

      {/* What it exposes */}
      <div>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: "var(--muted-foreground)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 24,
          }}
        >
          What the agent can do
        </p>
        <FeatureList
          items={[
            "Query unit availability, lease status, and notices across 60+ properties",
            "Pull rent change history and pending renewals without leaving the chat",
            "Read leasing activity per property without ILS exports or vendor calls",
            "Cross-reference Site Manager state with bv_admin's MySQL records",
            "Run multi-step workflows (lookup → compare → summarize) inside one MCP session",
          ]}
        />
      </div>

      {/* Engineering notes */}
      <div>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: "var(--muted-foreground)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 24,
          }}
        >
          Engineering notes
        </p>
        <FeatureList
          items={[
            "Anthropic SDK + @modelcontextprotocol/sdk over stdio transport",
            "Tools defined with explicit JSON schemas so model output is validated before action",
            "Persistent Puppeteer profile keeps the auth alive across server restarts",
            "Defensive selectors and retry logic for the brittle parts of Site Manager's UI",
            "Designed so adding a new RentCafe action is one tool definition + one Puppeteer routine",
          ]}
        />
      </div>

      <div
        style={{
          borderRadius: 12,
          padding: "16px 20px",
          backgroundColor: "var(--muted)",
        }}
      >
        <p style={{ fontSize: 13, color: "var(--muted-foreground)" }}>
          <span style={{ fontWeight: 500, color: "var(--foreground)" }}>Status:</span> Internal,
          unpublished. Built before MCP became mainstream tooling. Available to walk through on a
          screen-share.
        </p>
      </div>
    </ProjectLayout>
  );
}
