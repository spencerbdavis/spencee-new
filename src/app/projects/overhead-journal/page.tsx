import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ProjectLayout } from "@/components/projects/project-layout";
import { CaseSection, Decisions, Pipeline, Prose, Shot } from "@/components/projects/case";
import { LiveBirds } from "@/components/live/live-demos";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = pageMetadata({
  title: "Overhead Journal — BirdNET + ADS-B Garden Journal on a Raspberry Pi | Spencer D'Avis",
  description:
    "Case study: a Raspberry Pi Zero microphone, BirdNET v2.4 and YAMNet classify birds and aircraft sounds, correlated with ADS-B, and an image model draws each new species once in pen-and-ink. FastAPI, Preact, SQLite.",
  path: "/projects/overhead-journal",
  ogSlug: "overhead-journal",
});

export default function Page() {
  const project = ALL_PROJECTS.find((p) => p.slug === "overhead-journal")!;
  return (
    <ProjectLayout project={project}>
      <CaseSection n="01" label="Problem" title="Everything that passes above one garden">
        <Prose>
          <p>
            Bird-ID apps answer one recording at a time, when you remember to open them. I wanted the garden to keep its
            own journal: every species heard, every aircraft seen, months of it, presented as something you&apos;d want to
            look at. That means a low-power listener that runs unattended, classifiers that don&apos;t confuse a jet with a
            crow, and a page that turns detections into a sketchbook rather than a spreadsheet.
          </p>
        </Prose>
      </CaseSection>

      <CaseSection n="02" label="Live demo" title="What the garden heard this week">
        <LiveBirds />
      </CaseSection>

      <CaseSection n="03" label="Architecture">
        <Pipeline
          steps={[
            { title: "Pi Zero W capture", desc: "Python stdlib + arecord + flac. Signed FLAC chunks are uploaded through a Cloudflare tunnel." },
            { title: "YAMNet", desc: "General sound classes first: bird, aircraft, vehicle, voice, so non-bird audio is routed, not misread." },
            { title: "BirdNET v2.4", desc: "Species from audio, filtered by BirdNET's own location/season model and confirmed across windows." },
            { title: "Audio ↔ ADS-B correlation", desc: "Aircraft sounds are matched to planes the receiver saw overhead at that moment." },
            { title: "Journal", desc: "SQLite: first heard, days heard, by-hour activity, confidence, and how each ID was made." },
            { title: "Illustration", desc: "Each new species or airframe is drawn once by an image model in a 1960s pen-and-ink style, then cached." },
          ]}
        />
      </CaseSection>

      <CaseSection n="04" label="Technical analysis">
        <Decisions
          items={[
            { decision: "Say what it can't know", why: "Birds are heard, not seen. Acoustic IDs can be wrong, so confidence is shown per entry and species are only listed at BirdNET ≥ 0.90." },
            { decision: "Develop against a virtual Pi", why: "A QEMU ARMv6 emulator of the Pi Zero runs on the server, so capture code is tested before it touches the device in the garden." },
            { decision: "Tested on real recordings", why: "51 server tests, including classifier tests on real garden audio, run with pytest before each deploy." },
            { decision: "Checksummed models", why: "YAMNet, BirdNET and the segmentation model are fetched by a script that verifies checksums, so a deploy can't silently change a model." },
          ]}
        />
      </CaseSection>

      <CaseSection n="05" label="Screens">
        <div className="grid gap-6 md:grid-cols-[1fr_auto]">
          <Shot src="/screenshots/overhead-journal/collage.webp" alt="Overhead journal collage of birds and aircraft" width={1600} height={1000} caption="The collage: one drawing per subject" />
          <Shot src="/screenshots/overhead-journal/collage-phone.webp" alt="Overhead journal on a phone" width={780} height={1688} caption="Mobile" phone />
        </div>
      </CaseSection>
    </ProjectLayout>
  );
}
