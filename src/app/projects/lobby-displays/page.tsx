import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { ProjectLayout } from "@/components/projects/project-layout";
import { CaseSection, CompareTable, Decisions, Pipeline, Prose, Shot } from "@/components/projects/case";
import { RepoLedger } from "@/components/projects/repo-ledger";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = pageMetadata({
  title: "Apartment Lobby TV Displays — Live Transit, Weather & Sports Signage | Spencer D'Avis",
  description:
    "Case study: editorial lobby TV poster sequences for two Seattle apartment buildings, with live OneBusAway arrivals, weather, Seattle sports scores and seasonal themes. Next.js on Vercel, kiosk Chrome, no signage subscription.",
  path: "/projects/lobby-displays",
  ogSlug: "lobby-displays",
});

function Photo({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure>
      <div className="card relative aspect-[3/4] overflow-hidden p-0">
        <Image src={src} alt={alt} fill sizes="(min-width: 768px) 24rem, 100vw" className="object-cover" />
      </div>
      <figcaption className="label-mono mt-3 normal-case tracking-normal">{caption}</figcaption>
    </figure>
  );
}

export default function Page() {
  const project = ALL_PROJECTS.find((p) => p.slug === "lobby-displays")!;
  return (
    <ProjectLayout project={project}>
      <CaseSection n="01" label="In the building" title="On the wall, not in a mockup">
        <div className="grid gap-5 sm:grid-cols-3">
          <Photo src="/photos/lobby/ehs-tv-hero.webp" alt="East Howe Steps lobby TV showing 'The block where Howe Street reaches the lake'" caption="East Howe Steps · Halloween season" />
          <Photo src="/photos/lobby/ehs-tv-emergency.webp" alt="East Howe Steps TV above the coffee bar showing maintenance emergency numbers" caption="East Howe Steps · maintenance poster over the coffee bar" />
          <Photo src="/photos/lobby/viva-tv.webp" alt="VIVA lobby TV showing live Metro arrivals with an animated bus" caption="VIVA · live Metro arrivals" />
        </div>
      </CaseSection>

      <CaseSection n="02" label="Problem" title="The most-seen screen in the building">
        <Prose>
          <p>{project.problem}</p>
          <p>
            I designed and built both sequences from each building&apos;s brand guide. They are web apps on Vercel; the
            lobby machine only runs Chrome in kiosk mode pointed at a URL, so updates ship with a deploy and there are no
            keys or secrets on the TV side.
          </p>
        </Prose>
      </CaseSection>

      <CaseSection n="03" label="Design model" title="A sequence of posters, not slides in a frame">
        <Prose>
          <p>
            The first build wrapped every message in the same masthead and rules, which ate the top quarter of the
            screen and made sixteen different messages look like one template. The rebuild treats each screen as its own
            poster. What they share is a system: <strong>six grounds with four colour roles</strong>, a television
            title-safe area of about 5% per side, and a seven-step type scale with a ratio of roughly 25:1 top to bottom.
          </p>
        </Prose>
        <div className="mt-6">
          <Shot src="/photos/lobby/ehs/00-contact-sheet.webp" alt="Contact sheet of all East Howe Steps lobby posters" width={1600} height={1139} caption="East Howe Steps: the full sequence" />
        </div>
      </CaseSection>

      <CaseSection n="04" label="Live data">
        <Pipeline
          steps={[
            { title: "Real-time transit", desc: "VIVA's board shows the next buses and streetcar from four nearby stops via OneBusAway. The API key lives only in a Vercel server route, never in the browser bundle." },
            { title: "Outage-proof board", desc: "The browser keeps the last good board and counts it down from when it was fetched, so an outage visibly runs out instead of freezing on wrong times." },
            { title: "Seattle scores", desc: "Seahawks, Mariners, Kraken, Sounders, Storm, Reign and Torrent from two free providers. The scores poster joins the rotation only when a game is on." },
            { title: "Distrust the feed", desc: "Both providers report \"0\" for games that haven't started, so neither is believed; postponements are filed with fixtures; stale scores lose the live marker and read LAST KNOWN." },
            { title: "Weather", desc: "Current conditions and an hourly bar on a dedicated poster, with art that changes for rain, snow and night." },
            { title: "Seasons in Pacific time", desc: "Halloween, December, New Year's, Valentine's and the Fourth, scheduled by Pacific midnight so a TV set to UTC doesn't decorate at 4 p.m. the day before." },
          ]}
        />
      </CaseSection>

      <CaseSection n="05" label="Screens">
        <div className="grid gap-6 md:grid-cols-2">
          <Shot src="/photos/lobby/viva/02-transit.webp" alt="VIVA transit poster" width={1600} height={900} caption="VIVA · transit board" />
          <Shot src="/photos/lobby/viva/12-sports.webp" alt="VIVA sports poster" width={1600} height={900} caption="VIVA · live scores" />
          <Shot src="/photos/lobby/ehs/06b-weather-raining.webp" alt="East Howe Steps weather poster in rain" width={1600} height={900} caption="East Howe Steps · weather, raining" />
          <Shot src="/photos/lobby/ehs/sports-board-three.webp" alt="Three games at once on the scores poster" width={1600} height={900} caption="Three games at once: the board steps down" />
          <Shot src="/photos/lobby/viva/13-the-hill.webp" alt="VIVA neighborhood poster" width={1600} height={900} caption="VIVA · the neighborhood" />
          <Shot src="/photos/lobby/ehs/08-business-collective.webp" alt="East Howe Steps local business poster" width={1600} height={900} caption="East Howe Steps · local business spotlight" />
        </div>
      </CaseSection>

      <CaseSection n="06" label="Engineering decisions">
        <Decisions
          items={[
            { decision: "Development switches in the URL", why: "?still=1 freezes motion to judge a frame, ?grid=1 draws the grid, ?at= moves the clock, ?mock= loads deterministic score fixtures. Every poster can be reviewed in any season or weather without waiting for it." },
            { decision: "Automated design checks", why: "Scripts check colour contrast, layout and the title-safe area across every poster before a deploy, because nobody proofreads a lobby TV." },
            { decision: "Decoration as a separate layer", why: "Seasonal art knows nothing about the posters and the posters know nothing about it, so a new season is one entry and one component, not edits to seventeen compositions." },
            { decision: "Transitions as a deck", why: "VIVA rotates through covers (stripes, iris, brush lines) and moves (slide, cube turn) on the View Transitions API, one per arrival. Sixteen shapes are adapted from Jhey Tompkins' segue prototypes, with his parameters; the sequencing is mine." },
          ]}
        />
      </CaseSection>

      <CaseSection n="07" label="Comparison" title="Custom build vs. digital-signage subscription">
        <CompareTable
          caption="Custom lobby display compared with a digital-signage subscription"
          columns={["This build", "Typical signage SaaS"]}
          rows={[
            { label: "Monthly cost", values: ["Hosting only", "Per-screen licence"] },
            { label: "Design", values: ["Bespoke to each building's brand guide", "Templates"] },
            { label: "Live data", values: ["Transit, weather, scores, seasons", "Widgets, often extra"] },
            { label: "Content changes", values: ["Code deploy, or ask me", "Self-serve editor"] },
          ]}
          note="The trade-off is honest: a SaaS editor lets office staff change copy themselves; this build trades that for design quality and live data."
        />
      </CaseSection>

      <CaseSection n="08" label="Repositories">
        <RepoLedger
          caption="Lobby display repositories"
          repos={[
            { name: "ehs-tv", role: "East Howe Steps lobby: 16 posters, scores, weather, seasonal layer", stack: "Next.js · TypeScript · CSS Modules · Motion", commits: 17, mine: 17, span: "Sep – Nov 2026" },
            { name: "viva-tv", role: "VIVA lobby: 12 posters, OneBusAway transit board, transition deck", stack: "Next.js · TypeScript · View Transitions · Vercel", commits: 6, mine: 6, span: "Oct – Nov 2026", note: "Built on the East Howe Steps poster model" },
          ]}
        />
      </CaseSection>
    </ProjectLayout>
  );
}
