import { COMMITS_STAT } from "@/lib/stats";
import { SITE_CONFIG } from "@/lib/config";
import { Reveal } from "@/components/shared/reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const SHIPPED = [
  { label: "iOS app · App Store", href: SITE_CONFIG.appStore },
  { label: "Chrome extension · Web Store", href: SITE_CONFIG.chromeStore },
  { label: "MCP server · built pre-mainstream", href: undefined },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 rule-thick">
      <div className="container-site py-24 md:py-32">
        <Reveal className="reveal-rise">
          <div className="swiss-grid gap-y-8">
            <div className="col-span-4 md:col-span-2">
              <p className="label-mono">02 / About</p>
            </div>
            <div className="col-span-4 md:col-span-7">
              <h2 className="text-h2">From operator to systems engineer.</h2>
              <p className="mt-8 max-w-[44rem] text-lg leading-relaxed text-ink-muted">
                I was hired to run marketing. I found that the company&apos;s deeper constraint was its
                systems: critical work crossed email, spreadsheets, vendor portals, and software that
                could not talk to anything else. So I learned to build.
              </p>
              <p className="mt-6 max-w-[44rem] text-lg leading-relaxed text-ink-muted">
                I wrote the first maintenance platform as a 14,000-line PHP application before I had
                used version control. Today I own a production Next.js platform, applied-AI pipelines,
                browser integrations, and the web estate around them. I care most about the part after
                a demo works: verification, failure modes, and keeping the system useful in production.
              </p>
              <Link href="/about" className="nav-link mt-8 inline-flex items-center gap-2 font-semibold">
                Read the full story <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="col-span-4 md:col-span-3 md:border-l md:border-hairline md:pl-8">
              <p className="font-mono text-2xl font-semibold text-ink">{COMMITS_STAT.value}</p>
              <p className="label-mono mt-2">{COMMITS_STAT.label}</p>

              <p className="label-mono mt-10">Public evidence</p>
              <ul className="mt-3 divide-y divide-hairline border-t border-hairline">
                {SHIPPED.map((s) =>
                  s.href ? (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link label-mono flex items-center justify-between gap-3 py-3"
                      >
                        <span>{s.label}</span>
                        <ArrowUpRight size={14} className="shrink-0" />
                      </a>
                    </li>
                  ) : (
                    <li key={s.label} className="label-mono py-3">
                      {s.label}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
