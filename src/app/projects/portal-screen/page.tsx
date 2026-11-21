import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import { ProjectLayout } from "@/components/projects/project-layout";
import { BenchTable, CaseSection, Decisions, Pipeline, Prose, Shot } from "@/components/projects/case";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = pageMetadata({
  title: "Re-purposing a Meta Portal as a Desk Panel (Android Kiosk + Rust Spotify Receiver) | Spencer D'Avis",
  description:
    "Case study: a discontinued 1st-gen Meta Portal turned into a desk control panel with a custom kiosk APK, native librespot Spotify Connect receiver and measured performance gains: 2.74 → 0.77 busy CPU cores. No root, no exploits.",
  path: "/projects/portal-screen",
  ogSlug: "portal-screen",
});

export default function Page() {
  const project = ALL_PROJECTS.find((p) => p.slug === "portal-screen")!;
  return (
    <ProjectLayout project={project}>
      <CaseSection n="01" label="Problem" title="Good hardware, abandoned software, locked bootloader">
        <Prose>
          <p>
            The first-generation Meta Portal is a 10.1&quot; 1280×800 screen on a <strong>Snapdragon 835-class</strong> chip
            with 3.7 GB of RAM, four microphones and Widevine L1, and Meta has stopped developing it. The bootloader is
            locked and verified boot is green, so a custom ROM is not possible. Everything had to happen at the application
            level over ADB, keeping the Facebook login that ADB access depends on, and with no exploits.
          </p>
        </Prose>
      </CaseSection>

      <CaseSection n="02" label="On the desk" title="The real device">
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { src: "/photos/portal/away-screen.webp", alt: "The Portal on a desk showing the away screen: clock, date and weather", cap: "Away screen: clock, day line, weather" },
            { src: "/photos/portal/lock-screen.webp", alt: "The Portal showing the clock over a historic Seattle street photograph", cap: "Lock screen: the time over a historic Seattle photo" },
          ].map((p) => (
            <figure key={p.src}>
              <div className="card relative aspect-[3/4] overflow-hidden p-0">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 28rem, 100vw" className="object-cover" />
              </div>
              <figcaption className="label-mono mt-3 normal-case tracking-normal">{p.cap}</figcaption>
            </figure>
          ))}
        </div>
      </CaseSection>

      <CaseSection n="03" label="What I built">
        <Pipeline
          steps={[
            { title: "Kiosk APK as HOME", desc: "com.spencerdavis.desk, built without Gradle, boots straight into the desk app and exposes a narrow JS bridge gated to my server's origin." },
            { title: "Away screen + launcher", desc: "Clock, weather, now playing and nearest aircraft when nobody is near; Spotify, ADS-B, Home, News on touch or when the room lights jump." },
            { title: "Ambient brightness & warmth", desc: "The only sensor is an AL3010 lux meter: native brightness from lux, CSS warmth from sunset + lux (no Night Display on this build)." },
            { title: "Native Spotify Connect", desc: "librespot 0.8 cross-compiled from Rust to arm64 as a JNI library: the Portal appears as a speaker in the Spotify app." },
            { title: "Over-the-air web updates", desc: "The page watches its own ETag and reloads within a minute of a deploy, holding the reload while something is playing." },
            { title: "DevTools over CDP", desc: "WebView DevTools forwarded over ADB + SSH, so screenshots and Desk.open('adsb') can be scripted from a laptop." },
          ]}
        />
      </CaseSection>

      <CaseSection n="04" label="Benchmark" title="Measured before and after disabling Meta's camera AI service">
        <BenchTable
          caption="Meta Portal performance before and after"
          head={["Metric (launcher screen)", "Before", "After"]}
          rows={[
            ["Busy CPU cores (of 8)", "2.74", "0.77"],
            ["Cores 0–3 busy", "62–71%", "16–20%"],
            ["Meta aiservice (% of one core)", "130%", "0"],
            ["Camera provider (% of one core)", "72%", "0"],
            ["Threads, all processes", "2,585", "2,412"],
            ["Memory used by aiservice (PSS)", "283 MB", "0"],
            ["Load average (1 min)", "10.2", "6.7"],
          ]}
          note="Method: 10 × 30 s windows per run via a read-only ADB script (/proc/stat, per-process stat, dumpsys meminfo, gfxinfo). The after run was partly contaminated by a deploy; the clean subset is 0.63 cores. Jank numbers were contaminated too, so they're not claimed."
        />
      </CaseSection>

      <CaseSection n="05" label="Engineering discipline">
        <Decisions
          items={[
            { decision: "Read-only first", why: "Hardware was inventoried with read-only ADB before any change. Every install, setting or reboot needed explicit owner approval." },
            { decision: "Label every finding", why: "Handoff docs mark each claim Confirmed (measured), Researched (cited) or Hypothesis, which is why the benchmark above flags its own contamination." },
            { decision: "Keep an escape hatch", why: "A two-finger hold exits to a fallback launcher, and the launcher conversion has a scripted revert." },
            { decision: "Fail toward working", why: "Stalls, unavailable media and codec mismatches are detected from logs and handled with reconnects or server-side transcoding, not error screens." },
          ]}
        />
      </CaseSection>

      <CaseSection n="06" label="Screens">
        <Shot src="/screenshots/portal-screen/launcher.webp" alt="Portal desk launcher with Settings, ADS-B, Spotify, Weather tiles and room controls" width={1000} height={625} caption="Launcher: apps on top, music and rooms below" />
      </CaseSection>
    </ProjectLayout>
  );
}
