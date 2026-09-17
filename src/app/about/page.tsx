import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Spencer D'Avis | About",
  description:
    "How a marketing operator became the engineer behind production systems for an 80-property business.",
  alternates: { canonical: "https://spenc.ee/about" },
};

const MILESTONES = [
  {
    year: "01",
    title: "Found the real constraint",
    body: "I was hired to run marketing. The harder problem was operational: important work lived across inboxes, spreadsheets, vendor portals, and systems that could not talk to one another.",
  },
  {
    year: "02",
    title: "Built the first system",
    body: "I taught myself PHP and wrote a 14,000-line maintenance application before I had used version control. It proved the workflow and became the foundation for the production platform that followed.",
  },
  {
    year: "03",
    title: "Rebuilt for production",
    body: "I founded the successor web and mobile projects, then architected the rewrite and directed contract developers through later build-out. The platform now coordinates maintenance work across web, iOS, and Yardi.",
  },
  {
    year: "04",
    title: "Made verification part of the product",
    body: "The work moved into applied AI: receipt extraction, classification, virtual staging, and model evaluation. I learned that the valuable question is rarely whether a model can produce an output. It is whether the system knows when that output is wrong.",
  },
];

export default function AboutPage() {
  return (
    <div className="container-site pt-28 pb-28 md:pt-36 md:pb-32">
      <header className="rule-thick swiss-grid gap-y-8 pt-5">
        <p className="label-mono col-span-4 md:col-span-2">About / Spencer D&apos;Avis</p>
        <div className="col-span-4 md:col-span-8">
          <h1 className="text-h2 max-w-[48rem]">I learned engineering by becoming responsible for the result.</h1>
          <p className="mt-8 max-w-[44rem] text-xl leading-relaxed text-ink-muted">
            No CS degree. No inherited codebase or development team. I started with an operator&apos;s view of the
            business, then built the software that the business needed.
          </p>
        </div>
      </header>

      <section className="mt-20 border-t border-hairline md:mt-28">
        {MILESTONES.map((item) => (
          <article key={item.year} className="swiss-grid gap-y-4 border-b border-hairline py-10 md:py-12">
            <p className="label-mono col-span-1 text-accent">{item.year}</p>
            <h2 className="col-span-3 text-2xl font-semibold tracking-tight md:col-span-4">{item.title}</h2>
            <p className="col-span-4 text-lg leading-relaxed text-ink-muted md:col-span-6 md:col-start-7">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="swiss-grid gap-y-8 py-20 md:py-28">
        <p className="label-mono col-span-4 md:col-span-2">How I work</p>
        <div className="col-span-4 md:col-span-7">
          <h2 className="text-h2">Business context is part of the architecture.</h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-muted">
            <p>
              I work best where the requirements are incomplete and the workflow crosses organizational boundaries.
              I can sit with the people doing the work, find the actual constraint, and carry the solution through the
              database, interface, integration, rollout, and production support.
            </p>
            <p>
              I prefer explicit failure modes over confident guesses. That shows up in human verification links,
              classifiers that return null when evidence conflicts, regression tests written after incidents, and
              deterministic checks around generative models.
            </p>
          </div>
        </div>
        <aside className="col-span-4 border-t border-hairline pt-5 md:col-span-3 md:border-t-0 md:border-l md:pt-0 md:pl-6">
          <p className="label-mono">Looking for</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            Fully remote US individual-contributor roles in applied AI, forward-deployed engineering, integrations,
            and internal systems.
          </p>
          <Link href="/projects" className="nav-link mt-6 inline-flex items-center gap-2 font-semibold">
            View case studies <span aria-hidden>→</span>
          </Link>
        </aside>
      </section>

      <section className="rule-thick swiss-grid gap-y-8 pt-10">
        <p className="label-mono col-span-4 md:col-span-2">Public evidence</p>
        <div className="col-span-4 grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2 md:col-span-10">
          <a href={SITE_CONFIG.appStore} target="_blank" rel="noopener noreferrer" className="group bg-paper p-6 hover:bg-ink hover:text-paper">
            <p className="label-mono group-hover:text-paper/60">App Store</p>
            <p className="mt-3 flex items-center justify-between text-lg font-semibold">BVMaintenance <ArrowUpRight size={17} /></p>
          </a>
          <a href={SITE_CONFIG.chromeStore} target="_blank" rel="noopener noreferrer" className="group bg-paper p-6 hover:bg-ink hover:text-paper">
            <p className="label-mono group-hover:text-paper/60">Chrome Web Store</p>
            <p className="mt-3 flex items-center justify-between text-lg font-semibold">BV Maintenance Tasks <ArrowUpRight size={17} /></p>
          </a>
        </div>
      </section>
    </div>
  );
}
