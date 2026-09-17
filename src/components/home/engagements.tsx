import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { SITE_CONFIG } from "@/lib/config";

const TEAMS = {
  kicker: "For teams hiring",
  body: "I am looking for individual-contributor engineering work where I can own ambiguous business problems through production: applied AI, integrations, internal tools, and forward-deployed systems.",
  fits: [
    "Applied AI Engineer",
    "Integrations Engineer",
    "Forward Deployed Engineer",
    "Internal Tools Engineer",
  ],
};

const CLIENTS = {
  kicker: "For freelance clients",
  body: "I take on a small number of web, design, and automation projects outside my engineering role. This work is secondary to the production systems shown above.",
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
        <SectionHeader eyebrow="Engagements" number="06" title="Ways to work together" />

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
