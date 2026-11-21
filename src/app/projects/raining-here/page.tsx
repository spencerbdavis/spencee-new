import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ProjectLayout } from "@/components/projects/project-layout";
import { BenchTable, CaseSection, CompareTable, Decisions, Pipeline, Prose, Shot } from "@/components/projects/case";
import { LiveRain } from "@/components/live/live-demos";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = pageMetadata({
  title: "raining.here — Radar Processing & Next-Hour Rain Nowcast | Spencer D'Avis",
  description:
    "Case study: minute-by-minute rain for Seattle–Tacoma from NOAA MRMS radar and a motion nowcast, a NEXRAD Level II processing challenger (QC, bright band, wind drift), and hourly self-scoring. 90+ SEO place pages.",
  path: "/projects/raining-here",
  ogSlug: "raining-here",
});

export default function Page() {
  const project = ALL_PROJECTS.find((p) => p.slug === "raining-here")!;
  return (
    <ProjectLayout project={project}>
      <CaseSection n="01" label="Problem" title="Bringing back the Dark Sky answer for Puget Sound">
        <Prose>
          <p>
            “Will it rain on me in the next 20 minutes?” is the most useful weather question there is, and the app that
            answered it best was bought and shut down. NOAA&apos;s radar is free, but raw radar is not an answer: it sees
            clutter and birds, overestimates in the melting layer, looks 1–3 km above the ground over the Sound, and
            says nothing about where the rain will be in half an hour.
          </p>
        </Prose>
      </CaseSection>

      <CaseSection n="02" label="Live demo" title="Rain across Puget Sound right now">
        <LiveRain />
      </CaseSection>

      <CaseSection n="03" label="Radar processing" title="Production path, and the challenger being scored against it">
        <p className="label-mono mb-3">In production</p>
        <Pipeline
          steps={[
            { title: "Rain now: NOAA MRMS", desc: "The national mosaic (Camano Island, Langley Hill, Portland and others merged, clutter removed) read 2–3 min after each 2-minute scan, on a ~1 km grid." },
            { title: "Next hour: radar nowcast", desc: "LibreWXR carries the rain along its measured motion in 10-minute steps to ~55 min, the same feed rntwx.com uses, so the two sites agree." },
            { title: "Per-place answer", desc: "Rain = ≥ 18 dBZ within ~500 m. Start/stop times rounded to 5 min because the forecast is not finer than that." },
          ]}
        />
        <p className="label-mono mt-8 mb-3">On the test bench: my own Level II processing</p>
        <Pipeline
          steps={[
            { title: "KATX Level II", desc: "Read from NOAA's real-time chunks about a minute after each low scan, so it can beat the mosaic's latency." },
            { title: "Quality control", desc: "Drop non-weather echo where correlation coefficient ρhv < 0.85: clutter, birds, chaff." },
            { title: "Bright band + VPR", desc: "Subtract bias in the melting layer (ρhv < 0.97); add back rain that falls as snow above it." },
            { title: "Wind drift, then Z = aRᵇ", desc: "Move each gate to where its rain lands through that hour's wind profile, on a 250 m grid." },
            { title: "Phase-correlation nowcast", desc: "Field advected along its own motion, steadied toward the 1.5 km wind; chance spreads with lead time." },
            { title: "Backtest", desc: "Scored against ASOS and CoCoRaHS gauges. It replaces the production path only when it wins." },
          ]}
        />
        <div className="mt-6">
          <Prose>
            <p>
              The whole service runs in one container on a home server at <strong>5–20% of one core and ~500 MB</strong>,
              behind its own Cloudflare tunnel.
            </p>
          </Prose>
        </div>
      </CaseSection>

      <CaseSection n="04" label="Benchmarks" title="Checking ourselves, in public">
        <BenchTable
          caption="raining.here self-scoring, November 2026"
          head={["Measure", "Value"]}
          rows={[
            ["Next-hour forecasts scored (Nov 1–21)", "4,002"],
            ["Matched what the radar then saw", "100%"],
            ["…of which hours stayed dry", "100%"],
            ["Radar refresh", "every 2 min"],
            ["Frame size / history kept", "~50 KB · 24 h"],
          ]}
          note="Honest caveat, shown on the site too: every scored hour in this window stayed dry, which makes 100% easy. Scoring is against the radar itself (≥ 18 dBZ within 500 m), not rain gauges. The real test is a wet month."
        />
      </CaseSection>

      <CaseSection n="05" label="Engineering decisions">
        <Decisions
          items={[
            { decision: "Publish the known failure modes", why: "Drizzle under the beam, showers that form overhead and drifting rain are listed on /how. Trust comes from saying what it gets wrong." },
            { decision: "A method changes only when it wins", why: "Every 5 minutes each place's forecast is logged; every 2 minutes the radar truth. My own KATX processing and faint-edge tracking must beat the current method before they ship." },
            { decision: "Answer-first pages for search and AI", why: "Each of 90+ places is server-rendered with an answer H1, live FAQPage schema, Place coordinates and a share image, plus llms.txt and an OpenAPI spec." },
            { decision: "Cache at the edge, not in the app", why: "HTML caches 60 s at Cloudflare and frames cache for a year, so traffic spikes during storms never reach the home server." },
          ]}
        />
      </CaseSection>

      <CaseSection n="06" label="Comparison" title="raining.here vs. general-purpose weather apps">
        <CompareTable
          caption="raining.here compared with general-purpose weather apps"
          columns={["raining.here", "General weather apps"]}
          rows={[
            { label: "Focus", values: ["Next-hour rain, Seattle–Tacoma only", "Everything, everywhere"] },
            { label: "Method", values: ["Documented on /how, with known failure modes", "Usually undisclosed"] },
            { label: "Accuracy reporting", values: ["Scored hourly, published on site", "Rarely published"] },
            { label: "Open API", values: ["Free JSON + OpenAPI", "Paid or none"] },
            { label: "Ads", values: ["None", "Common"] },
          ]}
        />
      </CaseSection>

      <CaseSection n="07" label="Screens">
        <div className="grid gap-6 md:grid-cols-[1fr_auto]">
          <Shot src="/screenshots/raining/place.webp" alt="raining.here Seattle page" width={1600} height={1000} caption="A place page: answer first, then the next hour" />
          <Shot src="/screenshots/raining/home-phone.webp" alt="raining.here on a phone" width={780} height={1688} caption="Mobile" phone />
        </div>
      </CaseSection>
    </ProjectLayout>
  );
}
