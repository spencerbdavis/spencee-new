import { COMMITS_STAT } from "@/lib/stats";
import { SITE_CONFIG } from "@/lib/config";
import { Reveal } from "@/components/shared/reveal";
import { ArrowUpRight } from "lucide-react";

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
          <p className="label-mono">About</p>

          <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-8">
              <h2 className="text-h2">How I work.</h2>
              <p className="mt-8 max-w-[42rem] text-lg leading-relaxed text-ink-muted">
                I started in property management and taught myself to build. Today I run marketing
                operations for Bonavista&apos;s 60-property portfolio — the strategy, the creative,
                the websites, and the automation that ties them together — and take on freelance web
                and design work for clients like American Mary. When something&apos;s too expensive or
                too generic to buy, I design and build it in-house.
              </p>
              <p className="mt-6 max-w-[42rem] text-lg leading-relaxed text-ink-muted">
                No CS degree — I learned by shipping, and I&apos;ve shipped a lot: production apps on
                the App Store and Chrome Web Store, an MCP server built before MCP was mainstream, AI
                pipelines for content and virtual staging, a local SEO/GEO engine, and a fleet of
                leasing sites running on one live data backbone. I move fast because I&apos;ve owned
                every layer — from the database to the print file.
              </p>
            </div>

            <div className="md:col-span-4 md:border-l md:border-hairline md:pl-8">
              <p className="font-mono text-2xl font-semibold text-ink">{COMMITS_STAT.value}</p>
              <p className="label-mono mt-2">{COMMITS_STAT.label}</p>

              <p className="label-mono mt-8">Shipped</p>
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
