import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { ProjectLayout } from "@/components/projects/project-layout";
import { CaseSection, CompareTable, Decisions, Prose, Shot } from "@/components/projects/case";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = pageMetadata({
  title: "Designing an Accessible Apartment Door Decal — East Howe Steps | Spencer D'Avis",
  description:
    "Case study: nine versions of a cut-vinyl front-door decal, a six-font study, and an automated proof check for cap heights, safe margins and QR decoding. Signage design for a Seattle apartment building.",
  path: "/projects/door-decal",
  ogSlug: "door-decal",
});

const VERSIONS = [
  { src: "/photos/decal/16x32_a-ruled.webp", w: 700, h: 1400, t: "A · Ruled", k: "Structure through rules" },
  { src: "/photos/decal/16x32_b-open.webp", w: 700, h: 1400, t: "B · Open", k: "Structure through space" },
  { src: "/photos/decal/16x32_c-short.webp", w: 700, h: 1400, t: "C · Short rules", k: "A lighter divider" },
  { src: "/photos/decal/16x32_d-marker.webp", w: 700, h: 1400, t: "D · Markers", k: "Punctuation, not lines" },
  { src: "/photos/decal/16x32_e-masthead.webp", w: 700, h: 1400, t: "E · Masthead", k: "Logo and QR paired" },
  { src: "/photos/decal/16x30_e-masthead.webp", w: 747, h: 1400, t: "E · Refined, 30 in", k: "Hierarchy and footer" },
  { src: "/photos/decal/16x28_e-masthead-spacing.webp", w: 800, h: 1400, t: "E · Final, 28 in", k: "Three equal section gaps" },
];

export default function Page() {
  const project = ALL_PROJECTS.find((p) => p.slug === "door-decal")!;
  return (
    <ProjectLayout project={project}>
      <CaseSection n="01" label="Problem" title="Four jobs on one pane of glass">
        <Prose>
          <p>{project.problem}</p>
        </Prose>
      </CaseSection>

      <CaseSection n="02" label="Process" title="How we got here: nine versions">
        <Prose>
          <p>
            Versions A–D kept the original content and order and only changed <strong>how the zones are separated</strong>.
            The deciding question was practical: <strong>what happens if the decal goes on 1° off level?</strong> Full-width
            rules (A) end 0.25 in apart across a 16-inch panel, which reads as visibly crooked. Short rules (C) reduce that to
            0.06 in, markers (D) hide it, and whitespace (B) removes the risk entirely.
          </p>
          <p>
            E changed the top: the building mark and the tour QR share one row as two boxes of matching weight, which
            emptied the leasing block down to the address and the number. Later revisions moved to Helvetica Neue with
            uppercase labels, tightened the canvas from 32 to 28 inches while keeping type sizes, and finally set{" "}
            <strong>three equal gaps</strong> between the sections.
          </p>
        </Prose>
        <div className="mt-8 -mx-4 overflow-x-auto px-4 pb-2" role="region" aria-label="Decal versions" tabIndex={0}>
          <ol className="flex gap-4" style={{ minWidth: "64rem" }}>
            {VERSIONS.map((v, i) => (
              <li key={v.src} className="w-36 shrink-0">
                <div className="card overflow-hidden p-0">
                  <Image src={v.src} alt={`Decal version ${v.t}`} width={v.w} height={v.h} sizes="9rem" className="block h-auto w-full" />
                </div>
                <p className="mt-2 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
                <p className="text-sm font-semibold">{v.t}</p>
                <p className="text-xs text-ink-muted">{v.k}</p>
              </li>
            ))}
          </ol>
        </div>
      </CaseSection>

      <CaseSection n="03" label="Type" title="Six typefaces, judged at reading distance">
        <div className="grid gap-6 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <Shot src="/photos/decal/font-study.webp" alt="Font study comparing six typefaces on the decal layout" width={1260} height={1400} caption="Font study: PP Neue Montreal, Helvetica Neue, Helvetica Now Text, PP Radio Grotesk, PP Right Grotesk, Brandon Grotesque" />
          </div>
          <div className="md:col-span-5">
            <Prose>
              <p>
                Each candidate was set at the same cap height using its own font metrics, so the comparison is about letterforms,
                not size. Helvetica Neue won on familiar, disciplined forms for an architectural sign; its numerals keep phone
                numbers compact without losing clarity.
              </p>
            </Prose>
          </div>
        </div>
      </CaseSection>

      <CaseSection n="04" label="Accessibility" title="Legibility rules the build enforces">
        <CompareTable
          caption="Decal production checks"
          columns={["Rule", "Why"]}
          highlight={0}
          rows={[
            { label: "Text cap height", values: ["≥ 0.60 in for every run of text", "Readable from the sidewalk, measured from each font's OS/2 cap-height metric"] },
            { label: "Phone numbers", values: ["≥ 1.40 in cap height", "The leasing and 24-hour emergency numbers are the most important thing on the door"] },
            { label: "Safe margin", values: ["Nothing within 0.90 in of the edge", "Hand installation and the door frame"] },
            { label: "Auto-fit floor", values: ["No line silently shrunk below its minimum", "Long text can't quietly get small"] },
            { label: "QR code", values: ["Decodes to the same link as the source artwork", "A broken QR is a lost tour"] },
            { label: "One colour", values: ["White cut vinyl, no fills except the QR patch", "Contrast against glass and the lobby behind it"] },
          ]}
          note="check.py renders every variant in headless Chrome and fails the build if any rule is missed. It validates geometry; true legibility at distance still depends on print, glass and light, so the footer labels were later enlarged 77% after a distance review."
        />
      </CaseSection>

      <CaseSection n="05" label="Decisions">
        <Decisions
          items={[
            { decision: "Design for the install, not the render", why: "Rules that look precise on screen expose a 1° installation error on a door. Whitespace and short marks don't." },
            { decision: "The QR is the one box", why: "A QR needs a light field to scan against, so its white patch is the only hard rectangle. Everything else avoids competing boxes." },
            { decision: "Keep every version", why: "Each proof and cut file is archived with a content hash, and an interactive overview documents why each one changed." },
            { decision: "Same system, smaller door", why: "Going from 32 to 28 inches kept every type and artwork size; only the space between sections changed." },
          ]}
        />
      </CaseSection>

      <CaseSection n="06" label="Review" title="The one-page review">
        <Shot src="/photos/decal/one-page-review.webp" alt="One-page review sheet comparing decal versions" width={1800} height={1350} caption="The sheet used to choose the final version" />
      </CaseSection>
    </ProjectLayout>
  );
}
