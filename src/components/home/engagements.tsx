import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { SITE_CONFIG } from "@/lib/config";

const TEAMS = {
  kicker: "For teams hiring",
  body: "I want a role where marketing, product, and engineering meet — room to own outcomes end to end, not just close tickets. I've spent years turning an operator's problems into shipped software: an iOS app, a Chrome extension, an MCP server, AI content and staging pipelines, and the platform that ties them together.",
  fits: [
    "Marketing Operations",
    "Full-Stack / Product Engineer",
    "Growth & AI Systems",
    "Founding / solo builder",
  ],
};

const CLIENTS = {
  kicker: "For freelance clients",
  body: "I take on web and marketing work on the side — WordPress and Next.js builds, brand and print design, local SEO/GEO, and the automation behind campaigns. Recent freelance work includes American Mary; day to day I run all of it for Bonavista's 60-property portfolio.",
  fits: ["Web & WordPress", "Design & brand", "Local SEO / GEO", "Marketing automation"],
};

function Fits({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((f) => (
        <li key={f} className="tag">
          {f}
        </li>
      ))}
    </ul>
  );
}

export function Engagements() {
  return (
    <section id="engagements" className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeader eyebrow="Engagements" title="Two ways to work together" />

        <div className="mt-12 grid grid-cols-1 md:mt-16 md:grid-cols-2">
          <Reveal className="reveal-rise md:pr-12">
            <p className="label-mono">{TEAMS.kicker}</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">{TEAMS.body}</p>
            <Fits items={TEAMS.fits} />
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a href="/spencer-davis-resume.pdf" download className="btn-outline">
                Résumé
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link inline-flex items-center gap-2 font-mono text-sm"
              >
                LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>

          <Reveal
            className="reveal-rise mt-12 border-t border-hairline pt-12 md:mt-0 md:border-t-0 md:border-l md:pt-0 md:pl-12"
            delay={100}
          >
            <p className="label-mono">{CLIENTS.kicker}</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">{CLIENTS.body}</p>
            <Fits items={CLIENTS.fits} />
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a href={`mailto:${SITE_CONFIG.email}?subject=Freelance%20project`} className="btn-outline">
                Start a project
              </a>
              <span className="label-mono">Evenings &amp; weekends</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
