import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import { ProjectLayout } from "@/components/projects/project-layout";
import { CaseSection, Decisions, Pipeline, Prose } from "@/components/projects/case";
import { BeforeAfter } from "@/components/projects/before-after";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = pageMetadata({
  title: "Android Photo Frame → Always-On Wall Dashboard | Spencer D'Avis",
  description:
    "Case study: an Android 6 photo frame (Allwinner A33, Chrome 44 WebView) rebuilt as a wall dashboard with a hand-built kiosk APK, watchdog, ambient brightness and a Python data server for weather, aircraft, air quality and home controls.",
  path: "/projects/wall-display",
  ogSlug: "wall-display",
});

export default function Page() {
  const project = ALL_PROJECTS.find((p) => p.slug === "wall-display")!;
  return (
    <ProjectLayout project={project}>
      <CaseSection n="01" label="Problem" title="A decade-old browser, running unattended for months">
        <Prose>
          <p>
            Photo frames have good screens and terrible software. This one is an <strong>Allwinner A33</strong> on
            <strong> Android 6</strong> with a WebView from 2015 (Chrome 44: no CSS grid, no modern JS). It needed to show
            live data all day, dim itself at night, recover from crashes without anyone touching it, and still look like a
            designed object on the wall.
          </p>
        </Prose>
      </CaseSection>

      <CaseSection n="02" label="On the wall" title="The actual frame, in the actual house">
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { src: "/photos/wall/frame-mounted.webp", w: 768, h: 1024, alt: "The photo frame mounted on a textured wall showing weather, commute time and now playing", cap: "Mounted: weather, commute, now playing" },
            { src: "/photos/wall/frame-touch.webp", w: 323, h: 576, alt: "A hand tapping the wall display", cap: "Touch to switch views" },
            { src: "/photos/wall/frame-in-hand.webp", w: 768, h: 1024, alt: "The frame held in hand, still wearing its factory protective film, showing the night theme and a live commute map", cap: "Factory film still on, running the night theme and a live commute map" },
          ].map((p) => (
            <figure key={p.src}>
              <div className="card relative aspect-[3/4] overflow-hidden p-0">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 24rem, 100vw" className="object-cover" />
              </div>
              <figcaption className="label-mono mt-3 normal-case tracking-normal">{p.cap}</figcaption>
            </figure>
          ))}
        </div>
      </CaseSection>

      <CaseSection n="03" label="Day / night" title="Drag to compare">
        <BeforeAfter
          before="/screenshots/wall-display/day.webp"
          after="/screenshots/wall-display/night.webp"
          beforeLabel="Day"
          afterLabel="Night"
          alt="Wall dashboard"
          width={1280}
          height={800}
          caption="Same layout, night palette below a lux threshold. Data shown is demo fixture data."
        />
      </CaseSection>

      <CaseSection n="04" label="Architecture">
        <Pipeline
          steps={[
            { title: "Kiosk APK (API 23)", desc: "aapt2 → javac → d8 → zipalign → apksigner by script, no Gradle. Registers as HOME, relaunches on boot." },
            { title: "Watchdog", desc: "The page heartbeats through a JS bridge; 45 s of silence → reload, 3 failed reloads → rebuild the WebView." },
            { title: "Ambient brightness", desc: "Lux scales brightness between a floor and the page's target; a knock filter on the accelerometer detects presence." },
            { title: "Python data server", desc: "Tempest weather, AirNow, pollen, ADS-B scope, Sonos/Spotify, Tesla, Home Assistant and Homebridge devices." },
            { title: "LLM flavour text", desc: "A one-line sarcastic forecast and the daily digest from small models via OpenRouter, built from data already on screen." },
            { title: "Thermal printer spin-off", desc: "The same data prints as a morning weather card on a Phomemo T02 over Bluetooth LE, no vendor app." },
          ]}
        />
      </CaseSection>

      <CaseSection n="05" label="Technical analysis">
        <Decisions
          items={[
            { decision: "Design for the oldest target", why: "CSS and JS are written for Chrome 44, so the same page also runs anywhere newer, including the Portal desk panel that reuses it." },
            { decision: "No wake locks", why: "Timers pause in onPause; the page asks for keep-awake only when it needs it, so a stuck page can't hold the screen on forever." },
            { decision: "Bridge exposed only to trusted origins", why: "The native bridge can change brightness and read sensors, so the kiosk only points at my own dashboard." },
            { decision: "A shareable demo build", why: "A trimmed version (clock, weather, air quality) runs on any 1280×800 frame or browser with no home-specific code or keys." },
          ]}
        />
      </CaseSection>
    </ProjectLayout>
  );
}
