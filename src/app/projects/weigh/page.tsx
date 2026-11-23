import type { Metadata } from "next";
import { pageMetadata, faqJsonLd } from "@/lib/seo";
import { ProjectLayout } from "@/components/projects/project-layout";
import { BenchTable, CaseSection, Decisions, Pipeline, Prose, Shot } from "@/components/projects/case";
import { JsonLd } from "@/components/seo/json-ld";
import { ALL_PROJECTS } from "@/lib/projects";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = pageMetadata({
  title: "Weigh — Wyze Scale Ultra iPhone App with Apple Health, No Cloud | Spencer D'Avis",
  description:
    "Case study: an open-source iOS app that reads the Wyze Scale Ultra over Bluetooth LE and syncs weight and body composition to Apple Health. How the WL_SCU protocol was decrypted from a PacketLogger capture (32-bit Diffie–Hellman, XXTEA) and what the Wyze app hides.",
  path: "/projects/weigh",
  ogSlug: "weigh",
});

const FAQS = [
  {
    q: "Can I use a Wyze Scale Ultra without the Wyze app?",
    a: "Yes. Weigh connects to the scale directly over Bluetooth LE, reads weight and full body composition, and stores it on the iPhone and in Apple Health. No Wyze account or cloud is used.",
  },
  {
    q: "Does the Wyze Scale Ultra sync with Apple Health?",
    a: "With Weigh it does: weight, body fat percentage, lean body mass and BMI are written as native Apple Health samples, and the other measurements (muscle, water, bone, visceral fat, BMR, metabolic age, impedance) are attached as metadata.",
  },
  {
    q: "Why does Scale X code only get weight from a Wyze Scale Ultra?",
    a: "The Ultra uses the same key exchange and XXTEA encryption as the Scale X but a different application framing with a sequence byte and checksum. It silently ignores user commands in the Scale X format, and without a selected user it never measures body composition.",
  },
  {
    q: "How secure is the Wyze scale's Bluetooth encryption?",
    a: "Weak. The session key comes from a 32-bit Diffie–Hellman exchange sent in the clear, so a captured session can be decrypted with a baby-step giant-step discrete log in under a second.",
  },
];

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "Weigh",
  description:
    "Open-source iPhone app for the Wyze Scale Ultra: Bluetooth LE weight and body composition, Apple Health sync, no Wyze cloud.",
  codeRepository: "https://github.com/spencerbdavis/wyze-scale-ultra-ios",
  programmingLanguage: ["Swift", "Python"],
  runtimePlatform: "iOS 18",
  license: "https://opensource.org/licenses/MIT",
  author: { "@type": "Person", "@id": `${SITE_CONFIG.url}/#person`, name: SITE_CONFIG.name },
  keywords: "Wyze Scale Ultra, WL_SCU, Bluetooth LE, Apple Health, HealthKit, body composition, smart scale, reverse engineering",
};

export default function Page() {
  const project = ALL_PROJECTS.find((p) => p.slug === "weigh")!;
  return (
    <ProjectLayout project={project}>
      <JsonLd data={softwareJsonLd} />
      <JsonLd data={faqJsonLd(FAQS)} />

      <CaseSection n="01" label="Problem" title="A good scale stuck behind a vendor app">
        <Prose>
          <p>
            The Wyze Scale Ultra measures body composition through four electrodes, but the only way to see the
            numbers is Wyze&apos;s app and cloud. The open-source protocol work for the older <strong>Scale X</strong>{" "}
            connected to the Ultra and read weight, then nothing else: no impedance, no body fat, and no error. The goal
            was an iPhone app that talks to the scale directly, writes to Apple Health, and treats the data as mine.
          </p>
        </Prose>
      </CaseSection>

      <CaseSection n="02" label="Reverse engineering" title="From a Bluetooth capture to every byte of the frame">
        <Pipeline
          steps={[
            { title: "Capture", desc: "Apple's Bluetooth logging profile on the iPhone, a live iOS trace in PacketLogger, one weigh-in with the Wyze app." },
            { title: "Break the key exchange", desc: "Diffie–Hellman with g = 5 over a 32-bit prime is sent in the clear. A baby-step giant-step discrete log recovers the app's private key in under a second." },
            { title: "Decrypt", desc: "XXTEA on independent 8-byte blocks, keyed with the shared secret's hex string. Every frame in the session decodes." },
            { title: "Find the difference", desc: "The Ultra wraps commands in a new header (sequence byte, length, checksum) and uses new user commands: list 0x18, select 0x19, save 0x1A." },
            { title: "Map the frame", desc: "All 51 bytes of the live frame identified: weight, raw impedance, fat, muscle, bone, water, protein, lean mass, visceral fat, BMR, body age, BMI, matched user." },
          ]}
        />
        <div className="mt-6">
          <Prose>
            <p>
              The write-up is public as{" "}
              <a href="https://github.com/spencerbdavis/wyze-scale-ultra-ios/blob/main/docs/PROTOCOL.md">PROTOCOL.md</a>,
              with a script that decrypts any PacketLogger capture, so the next person doesn&apos;t start from zero.
            </p>
          </Prose>
        </div>
      </CaseSection>

      <CaseSection n="03" label="The app" title="More than the vendor app shows">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Shot src="/screenshots/weigh/home.webp" alt="Weigh home screen: latest weight, BMI gauge, 30-day change" width={780} height={1696} caption="Home: who stepped on, weight, BMI" phone />
          <Shot src="/screenshots/weigh/weight-trend.webp" alt="Weight chart with a smoothed trend line through daily readings" width={780} height={1696} caption="Trend line that filters daily water swings" phone />
          <Shot src="/screenshots/weigh/composition.webp" alt="Body composition tiles with ratings and sparklines" width={780} height={1696} caption="15 body metrics with ratings" phone />
          <Shot src="/screenshots/weigh/body-type.webp" alt="Body type card on a 3 by 3 grid of fat and muscle" width={780} height={1696} caption="Body type from fat × muscle" phone />
          <Shot src="/screenshots/weigh/plan.webp" alt="Muscle-gain plan with weekly rate, lean vs fat gain and calorie targets" width={780} height={1696} caption="Plan: rate, lean vs fat, targets" phone />
        </div>
      </CaseSection>

      <CaseSection n="04" label="Measurements" title="What the scale sends, and what the app works out">
        <BenchTable
          caption="Sources of each metric in Weigh"
          head={["Metric", "Source"]}
          rows={[
            ["Weight, body fat, muscle, bone, water, protein, lean mass, visceral fat, BMR, metabolic age, BMI", "Scale (decoded frame)"],
            ["Raw bio-impedance (Ω)", "Scale, never shown by the Wyze app"],
            ["Skeletal muscle %", "App: Janssen et al. 2000 BIA equation (MRI-validated) from impedance, height, sex, age"],
            ["Subcutaneous fat, fat mass, FFMI, body type, ideal weight", "App, from the measured values"],
            ["Trend weight and normal daily swing", "App: exponentially weighted moving average and RMS residual"],
          ]}
          note="Bio-impedance estimates move with hydration, so the app shows a trend line and each person's normal swing rather than treating single readings as truth."
        />
      </CaseSection>

      <CaseSection n="05" label="Engineering decisions">
        <Decisions
          items={[
            { decision: "Phone talks to the scale directly", why: "No hub, no server, no cloud: the iPhone connects, runs the key exchange and decodes the stream itself." },
            { decision: "Bluetooth only while the app is open", why: "Measured, not assumed: the scale advertises continuously and its display turns on whenever a phone connects. Background auto-connect woke it every time the phone came near, so the app connects only in the foreground and lets an in-progress weigh-in finish." },
            { decision: "Let the scale and the app both identify people", why: "Every family member is registered on the scale; the reading's user ID is cross-checked with each person's recent weights. Body composition computed with the wrong profile is discarded instead of saved." },
            { decision: "Only your weigh-ins go to your Health", why: "HealthKit samples carry a sync identifier, so reassigning or deleting a weigh-in updates Apple Health exactly." },
            { decision: "Advice from your own trend", why: "The plan's calorie target adjusts when the trend runs faster or slower than a healthy lean-gain or fat-loss rate, and shows how much of a change was lean mass." },
          ]}
        />
      </CaseSection>
    </ProjectLayout>
  );
}
