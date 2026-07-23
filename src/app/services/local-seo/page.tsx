import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

export const metadata: Metadata = {
  title: "Spencer D'Avis | Local SEO & Generative Engine Optimization",
  description:
    "A custom AI engine that runs local search for 60+ apartment communities — SEO and generative-engine optimization (GEO), Google Business Profile and Apple Maps listings, review responses, and the live data that keeps every surface consistent.",
  alternates: { canonical: "https://spenc.ee/services/local-seo" },
};

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="reveal-rise hairline pt-10 md:grid md:grid-cols-[14rem_1fr] md:gap-10">
      <div>
        <p className="label-mono">{eyebrow}</p>
        <h2 className="text-h3 mt-3 md:mt-4">{title}</h2>
      </div>
      <div className="mt-6 md:mt-0">{children}</div>
    </Reveal>
  );
}

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

const RELATED = [
  { label: "Bonavista Admin Panel", href: "/projects/admin-panel" },
  { label: "RentCafe × WordPress Plugin", href: "/projects/wordpress-plugin" },
  { label: "Next.js Leasing Microsites", href: "/projects/property-sites" },
  { label: "RentCafe MCP Server", href: "/projects/rentcafe-mcp" },
];

const STATS = [
  { value: "60+", label: "Communities optimized" },
  { value: "Biweekly", label: "Full content regeneration" },
  { value: "GBP + Apple", label: "Listings automated" },
  { value: "GSC + DataForSEO", label: "Ranking feedback loop" },
];

export default function LocalSeoPage() {
  return (
    <div className="container-site rule-thick pt-16 pb-28 md:pt-20 md:pb-32">
      <Link href="/#services" className="nav-link label-mono inline-flex items-center gap-2">
        <ArrowLeft size={14} /> Services
      </Link>

      {/* Hero */}
      <div className="mt-12 max-w-3xl">
        <p className="label-mono">Services — 04</p>
        <h1 className="text-display mt-5 font-sans">
          Found everywhere renters look<span className="text-accent">.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted">
          Local search is where apartment leasing is won or lost — the map pack, the
          &ldquo;apartments near me&rdquo; query, and now the AI answer that never shows a tenth blue
          link. I built a custom engine that runs all of it for a 60+ property portfolio: classic SEO,
          generative-engine optimization, Google and Apple listings, reviews, and the live data that
          keeps every surface saying the same thing.
        </p>
      </div>

      {/* Stat band */}
      <div className="mt-16 grid grid-cols-2 gap-px border border-hairline bg-hairline md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-paper p-6 md:p-8">
            <p className="font-mono text-xl font-semibold leading-none tracking-tight text-ink md:text-2xl">
              {s.value}
            </p>
            <p className="label-mono mt-3">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Sections */}
      <div className="mt-20 flex flex-col gap-16 md:mt-24 md:gap-20">
        <Section eyebrow="The engine" title="One AI system, the whole SEO surface">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
            A centralized pipeline regenerates the complete search surface for every property on a
            biweekly cycle — page titles and meta descriptions per page type, on-page body copy,
            heading hierarchy, image alt-text, a fresh FAQ set, and a neighborhood lifestyle summary.
            Google Gemini Pro and Flash do the writing, with Google Search Grounding pulling live
            keyword and competitor context into every prompt.
          </p>
          <div className="mt-6">
            <FeatureList
              items={[
                "Every plan is versioned — one active row per property, with one-click rollback to any prior version",
                "Content stability logic keeps sections that are ranking and only regenerates the ones that have gone stale",
                "Runs on a queue so all 60+ properties process in parallel without hand-holding",
              ]}
            />
          </div>
        </Section>

        <Section eyebrow="The hard part" title="Keyword deconfliction across the portfolio">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
            When one company runs 60 apartment sites in the same city, they quietly compete against
            each other for the same searches — two buildings a mile apart both chasing
            &ldquo;Capitol Hill apartments&rdquo; split the ranking and lose to a competitor. The
            engine detects these clashes: it groups properties by neighborhood, reads current Search
            Console rankings, assigns the head term to whichever sibling already ranks best, and hands
            every other property a forbidden-keyword list plus a differentiation angle — pet-friendly,
            amenity-led, value, or a long-tail location term. The portfolio stops cannibalizing itself.
          </p>
        </Section>

        <Section eyebrow="GEO" title="Optimized for AI answer engines, not just Google">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
            Generative-engine optimization is classic SEO&apos;s successor: increasingly the renter
            gets an AI-written answer, not a list of links. The engine writes for that world.
          </p>
          <div className="mt-6">
            <FeatureList
              items={[
                "Auto-generated llms.txt on every property site — a machine-readable summary, key facts, and Q&A for LLM crawlers",
                "Answer-first copy: every section opens with a direct answer to the likely query, structured for AI snippet extraction",
                "Full JSON-LD graph per site — ApartmentComplex, LocalBusiness, an ItemList of live units, and a FAQPage built from the generated FAQs",
              ]}
            />
          </div>
        </Section>

        <Section eyebrow="Google" title="Business Profiles that run themselves">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
            Google Business Profile is the highest-intent local surface, and it&apos;s fully
            automated against the Google API.
          </p>
          <div className="mt-6">
            <FeatureList
              items={[
                "AI-written posts on a daily schedule, with branded post imagery generated from real property photos",
                "Amenities mapped conservatively to Google's attribute IDs, kept in sync from the leasing data",
                "AI-drafted review responses at scale — warm, named, property-referencing for local SEO, de-escalating negatives to private email",
                "Automated policy-violation detection that scores reviews against Google's contribution policies and feeds a removal workflow",
              ]}
            />
          </div>
        </Section>

        <Section eyebrow="Apple" title="Apple Maps, kept current without an API">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
            Apple offers no listings API below hundreds of locations, so I drive Apple Business
            Connect through an authenticated browser session — pushing listing data for 50+ locations
            and pulling Apple Maps insights (search taps, placecard views, direction and call taps)
            back into the dashboard to measure what Apple search is actually doing for leasing.
          </p>
        </Section>

        <Section eyebrow="Consistency" title="One data spine, every surface in agreement">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
            Inconsistent name/address/hours across the web is a silent local-ranking killer. Every
            listing pulls from a single Yardi/RentCafe spine, so live availability, pricing, and NAP
            stay identical across property sites, Google, and Apple.
          </p>
          <div className="mt-6">
            <FeatureList
              items={[
                "Live units, pricing, fees, and move-in specials synced from Yardi on a schedule",
                "New specials trigger fresh Google posts automatically",
                "Seattle MFTE affordable-housing units surfaced correctly on the property sites — a compliance requirement no off-the-shelf plugin handled",
              ]}
            />
          </div>
        </Section>

        <Section eyebrow="Measurement" title="A closed loop, not a one-time push">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-muted">
            The engine grades its own work and feeds the results back into the next cycle.
          </p>
          <div className="mt-6">
            <FeatureList
              items={[
                "Google Search Console for positions, impressions, clicks, and CTR (free, first-party)",
                "DataForSEO for competitor positions, search volume, difficulty, seasonality, and keyword gaps",
                "Twice-monthly SERP screenshots and monthly competitor-directory checks across the major apartment directories",
                "Walk/Transit/Bike Score and dual-sourced nearby-places data (Google Places + Foursquare) feeding every neighborhood prompt",
              ]}
            />
          </div>
        </Section>
      </div>

      {/* Related work */}
      <div className="mt-20 md:mt-24">
        <p className="label-mono rule-thick mb-8 pt-6">The systems behind it</p>
        <div className="grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2">
          {RELATED.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="invert-hover flex items-center justify-between gap-4 bg-paper p-6"
            >
              <span className="font-mono text-sm">{r.label}</span>
              <ArrowUpRight size={16} />
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rule-thick mt-20 pt-10 md:mt-24 md:pt-12">
        <p className="label-mono">Work with me</p>
        <h2 className="mt-4 max-w-xl text-h2">Need local search that actually moves leases?</h2>
        <a
          href="mailto:hello@spenc.ee?subject=Local%20SEO%20%2F%20GEO"
          className="mt-8 block w-fit text-h2 text-ink underline-offset-4 hover:text-accent hover:underline"
        >
          hello@spenc.ee
        </a>
      </div>
    </div>
  );
}
