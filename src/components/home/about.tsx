import { COMMITS_STAT } from "@/lib/stats";
import { Reveal } from "@/components/shared/reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 rule-thick">
      <div className="container-site py-24 md:py-32">
        <Reveal className="reveal-rise">
          <p className="label-mono">About</p>

          {/* TODO(spencer): heading copy invented — swap in your own line if this doesn't fit */}
          <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-8">
              <h2 className="text-h2">How I work.</h2>
              <p className="mt-8 max-w-[42rem] text-lg leading-relaxed text-ink-muted">
                I started in property management and taught myself to build. Today I run
                marketing operations for Bonavista&apos;s 60-property portfolio — the strategy,
                the creative, the websites, and the automation that ties them together — and
                take on freelance web and design work for clients like American Mary. When
                something&apos;s too expensive or too generic to buy, I design and build it
                in-house.
              </p>
            </div>

            <div className="md:col-span-4 md:border-l md:border-hairline md:pl-8">
              <p className="font-mono text-2xl font-semibold text-ink">{COMMITS_STAT.value}</p>
              <p className="label-mono mt-2">{COMMITS_STAT.label}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
