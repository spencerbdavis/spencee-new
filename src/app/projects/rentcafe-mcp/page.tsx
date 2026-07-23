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
    <ul className="divide-y divide-hairline border-t border-hairline">
      {items.map((item) => (
        <li key={item} className="py-3 text-sm leading-relaxed text-ink-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}

function PipelineStep({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="border border-hairline p-5">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xl leading-none font-semibold text-ink-muted">{step}</span>
        <p className="text-sm font-semibold text-ink">{title}</p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{desc}</p>
    </div>
  );
}

export default function RentCafeMcpPage() {
  const project = ALL_PROJECTS.find((p) => p.slug === "rentcafe-mcp")!;

  return (
    <ProjectLayout project={project}>
      <div>
        <p className="label-mono mb-6">Why this exists</p>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
          RentCafe is the system of record for leasing data across the portfolio, but Site Manager has no public API
          at our tier. Day-to-day questions (which units are vacant, what notices were sent, what rent changes are
          pending) require manual lookup. I built an MCP server that holds an authenticated browser session and
          exposes those same actions to any Model Context Protocol client, so an agent can answer them live.
        </p>
      </div>

      {/* Architecture */}
      <div>
        <p className="label-mono mb-6">Architecture</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
        <p className="label-mono mb-6">What the agent can do</p>
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
        <p className="label-mono mb-6">Engineering notes</p>
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

      <div className="border border-hairline p-5">
        <p className="text-sm leading-relaxed text-ink-muted">
          <span className="font-semibold text-ink">Status:</span> Internal, unpublished. Built before MCP became
          mainstream tooling. Available to walk through on a screen-share.
        </p>
      </div>
    </ProjectLayout>
  );
}
