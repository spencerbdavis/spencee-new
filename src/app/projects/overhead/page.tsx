import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ProjectLayout } from "@/components/projects/project-layout";
import { CaseSection, CompareTable, Decisions, Pipeline, Prose, Shot } from "@/components/projects/case";
import { LiveSky } from "@/components/live/live-demos";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = pageMetadata({
  title: "Overhead — Self-Hosted ADS-B Flight Tracker PWA | Spencer D'Avis",
  description:
    "Case study: an open-source ADS-B flight tracker built on an RTL-SDR, readsb and a vanilla-JS PWA, with dead-reckoned motion, to-scale aircraft silhouettes, faux-3D airports and route-plausibility checks.",
  path: "/projects/overhead",
  ogSlug: "overhead",
});

export default function Page() {
  const project = ALL_PROJECTS.find((p) => p.slug === "overhead")!;
  return (
    <ProjectLayout project={project}>
      <CaseSection n="01" label="Problem" title="The planes over my neighborhood, done properly">
        <Prose>
          <p>
            Renton sits under the SEA approach, next to Boeing Field, and beside the plant where every 737 MAX takes its
            first flight. Commercial trackers show all of that, but as a global product: jumpy markers, routes that are
            often wrong, ads. I wanted a fast phone app for <strong>this</strong> sky, fed by my own antenna, that could be
            public without revealing where the receiver is.
          </p>
        </Prose>
      </CaseSection>

      <CaseSection n="02" label="Live demo" title="Aircraft near Renton right now">
        <LiveSky />
      </CaseSection>

      <CaseSection n="03" label="Architecture">
        <Pipeline
          steps={[
            { title: "1090 MHz antenna", desc: "A $30 RTL-SDR dongle and a window antenna decode ADS-B with readsb (ultrafeeder container)." },
            { title: "sky-api", desc: "Standard-library Python + SQLite: aircraft lookups on tap, a per-airframe sightings log, and gap-fill from community feeds." },
            { title: "Privacy filter", desc: "nginx serves a filtered copy of aircraft.json without per-plane range and bearing, so the receiver can't be located." },
            { title: "PWA client", desc: "Vanilla JS + Leaflet with a versioned service worker; opens instantly and survives flaky connections." },
            { title: "Share cards", desc: "/s/<lat>,<lon>,<zoom> links unfurl with a live card drawn server-side with rsvg-convert." },
            { title: "Pages that rank", desc: "/boeing first flights and /airport/rnt|bfi|sea|pae landing logs, all in the sitemap." },
          ]}
        />
      </CaseSection>

      <CaseSection n="04" label="Technical analysis">
        <Decisions
          items={[
            { decision: "Dead reckoning", why: "Positions arrive about once a second. Between fixes each marker advances along its track at ground speed every animation frame, then blends into the next real fix, so planes glide instead of jumping." },
            { decision: "Route trust", why: "Callsign→route databases are often wrong because one flight number flies several legs a day. The cross-track distance to the origin–destination great circle must be within 120 nm or the route is hidden." },
            { decision: "To-scale silhouettes", why: "Outlines normalised to ~1 unit per metre, so a 737 is visibly smaller than a 777, and at airport zoom each is drawn at true size." },
            { decision: "Faux-3D airports", why: "Runways, taxiways and buildings from OpenStreetMap (Overpass), extruded with a shifted roof and facing-based shading; detail arrives with zoom." },
          ]}
        />
      </CaseSection>

      <CaseSection n="05" label="Comparison" title="Overhead vs. commercial flight trackers">
        <CompareTable
          caption="Overhead compared with commercial flight tracking apps"
          columns={["Overhead", "Commercial trackers"]}
          rows={[
            { label: "Data source", values: ["Own receiver + read-only community feeds", "Global receiver networks"] },
            { label: "Route display", values: ["Only when geometrically plausible", "Shown from the callsign database"] },
            { label: "Motion", values: ["Dead-reckoned every frame", "Varies; often 5–10 s jumps on free tiers"] },
            { label: "Local features", values: ["Boeing first flights, per-airport landing logs", "Generic"] },
            { label: "Cost / ads", values: ["Free, no ads, open source (GPL-3.0)", "Freemium with ads"] },
          ]}
          note="Comparison against the category, not a specific product. Commercial trackers have far wider coverage."
        />
      </CaseSection>

      <CaseSection n="06" label="Screens">
        <div className="grid gap-6 md:grid-cols-[1fr_auto]">
          <Shot src="/screenshots/overhead/boeing.webp" alt="Overhead Boeing first flights page" width={1600} height={1000} caption="/boeing: 737 MAX first flights out of Renton" />
          <Shot src="/screenshots/overhead/map-phone.webp" alt="Overhead on a phone" width={780} height={1688} caption="Installed as a phone app" phone />
        </div>
      </CaseSection>
    </ProjectLayout>
  );
}
