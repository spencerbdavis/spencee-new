import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { ProjectLayout } from "@/components/projects/project-layout";
import { BenchTable, CaseSection, CompareTable, Decisions, Prose, Shot } from "@/components/projects/case";
import { BeforeAfter } from "@/components/projects/before-after";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = pageMetadata({
  title: "AI 3D Floor Plans from As-Built Drawings + Apartment Unit-Type Analysis | Spencer D'Avis",
  description:
    "Case study: an image-model pipeline (fal.ai, Nano Banana 2.1, Ideogram 4.5) that turns architects' as-built surveys into furnished top-down 3D floor plans, and a Yardi unit-type reclassification of 41 apartments with zero rent drift.",
  path: "/projects/floorplan-ai",
  ogSlug: "floorplan-ai",
});

const STAGES = [
  { src: "/photos/floorplans/wv-1-survey.webp", w: 1600, h: 1236, t: "As-built survey", d: "Architect's measured sheet: dimensions, title block, scale bar." },
  { src: "/photos/floorplans/wv-2-flat.webp", w: 1376, h: 768, t: "Flatten + room key", d: "Redrawn as a clean 2D plan; each room filled with a colour that names its type." },
  { src: "/photos/floorplans/wv-4-render.webp", w: 1600, h: 1073, t: "3D render", d: "Top-down, furnished, in one fixed material spec. Geometry is the plan's, colours are not." },
  { src: "/photos/floorplans/wv-5-labeled.webp", w: 1024, h: 1024, t: "Branded plate", d: "Wordmark, plan name, SF, beds/baths, the units it covers and its Yardi type." },
];

export default function Page() {
  const project = ALL_PROJECTS.find((p) => p.slug === "floorplan-ai")!;
  return (
    <ProjectLayout project={project}>
      <CaseSection n="01" label="Problem" title="Old buildings, no marketing plans, wrong data">
        <Prose>
          <p>{project.problem}</p>
        </Prose>
      </CaseSection>

      <CaseSection n="02" label="Before / after" title="Hawthorne: survey sheet to leasing-site render">
        <BeforeAfter
          before="/photos/floorplans/hw-before.webp"
          after="/photos/floorplans/hw-after.webp"
          beforeLabel="Line drawing"
          afterLabel="3D render"
          alt="Hawthorne Floor Plan 1"
          width={1600}
          height={1600}
          caption="Drag to compare. Walls, doors, windows and fixtures must land exactly where the drawing puts them."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <Shot src="/photos/floorplans/hw-overlay.webp" alt="The original line drawing multiplied over the 3D render: walls, doors and fixtures line up" width={1600} height={1600} caption="Alignment check: the drawing laid over its render" />
          </div>
          <div className="md:col-span-6">
            <Prose>
              <p>
                This is the check that matters. Multiply the source drawing over the render and every wall, door swing,
                window and fixture should sit on its own outline. Here the room labels from the drawing land in the rooms
                the model furnished: <strong>living, dining, kitchen, bedroom, bath and entry</strong>, with the balcony on the
                correct side.
              </p>
            </Prose>
          </div>
        </div>
      </CaseSection>

      <CaseSection n="03" label="Pipeline" title="Westwood Vista Plan 12, stage by stage">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((s, i) => (
            <li key={s.src}>
              <div className="card relative aspect-square overflow-hidden bg-white p-0">
                <Image src={s.src} alt={`${s.t}: Westwood Vista Plan 12`} fill sizes="(min-width: 1024px) 18rem, 50vw" className="object-contain p-2" />
              </div>
              <p className="mt-3 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")} →</p>
              <p className="font-semibold">{s.t}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{s.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Prose>
            <p>
              The trick that made it reliable: <strong>separate geometry from styling</strong>. The first pass only redraws
              the survey, keeping every wall, door swing and fixture and deleting annotations, adding the refrigerator the
              surveyor never draws. Rooms are filled with flat colours that act as a key, not materials, so the render pass
              is told &quot;a green room is a bedroom, not a green room&quot; and dresses every space from one fixed
              specification: closets get rods and clothes, balconies get railings, and the two are never confused.
            </p>
            <p>
              Sheets with two copies of a plan, dead phone numbers or title blocks are cropped by row profile before
              anything reaches the model, so nothing stale gets baked into an image.
            </p>
          </Prose>
        </div>
      </CaseSection>

      <CaseSection n="04" label="Benchmarks" title="What the logs say">
        <BenchTable
          caption="Floor plan render pipeline"
          head={["Measure", "Westwood Vista", "Hawthorne"]}
          rows={[
            ["Model (via fal.ai)", "Nano Banana 2.1 edit", "Ideogram 4.5 edit"],
            ["Source plans", "8 (12 stacks)", "12 sheets"],
            ["Final branded plates", "8", "17"],
            ["Time per render", "50–106 s", "~1 min"],
            ["Runs logged", "22 generations", "7 runs"],
          ]}
          note="Every request is logged with its id, seed, timing and failures. A run resumes without paying again for images that already landed."
        />
      </CaseSection>

      <CaseSection n="05" label="Quality gate" title="A good-looking wrong plan is worse than none">
        <Decisions
          items={[
            { decision: "One plan first, always", why: "Each run starts with a single plan, checked by eye against its source, before the batch spends anything." },
            { decision: "Checklist, not vibes", why: "Same rooms in the same positions, no moved walls, openings where drawn, balcony on the right side, fixtures in place, truly top-down, no leftover text." },
            { decision: "Lower strength or drop it", why: "A render that fails goes back with the model held closer to the reference, or it's dropped. The site's promise is that these are the real plans." },
            { decision: "Fixed seed", why: "A single seed across the batch keeps materials and lighting consistent from plan to plan." },
          ]}
        />
      </CaseSection>

      <CaseSection n="06" label="Unit analysis" title="Westwood Vista: fixing what the systems believed">
        <Prose>
          <p>
            41 units sat in three Yardi unit types. Using the architect&apos;s unit matrix and the stack structure (11 of 12
            stacks are one floorplan top to bottom), I proposed and then keyed <strong>seven types</strong>, corrected every
            unit&apos;s square footage, and reconciled to the penny:
          </p>
        </Prose>
        <div className="mt-6">
          <BenchTable
            caption="Westwood Vista reclassification reconciliation"
            head={["Check", "Result"]}
            rows={[
              ["Units read back from Yardi", "41 of 41"],
              ["Total square footage", "33,578.99, ties to architect matrix"],
              ["Total scheduled rent", "$96,930.00, unchanged"],
              ["Mismatches against plan", "0"],
              ["Placeholder SF removed", "15–19% overstatement on every unit"],
            ]}
          />
        </div>
        <div className="mt-6">
          <Prose>
            <p>
              Stack 08 looked like measurement noise at +1.5%, but the architect&apos;s marketing sheet showed a second
              bedroom 11&apos;-7&quot; wide against 9&apos;-6&quot;: a genuinely different apartment, now its own type. Yardi&apos;s
              8-character code limit turned <code>250_3x2XL</code> into <code>250_3x2G</code>. In RentCafe, four new floor
              plans were created and mapped before the Voyager sync, with a warning documented that the stale dropdown
              would wipe the mapping if saved by hand.
            </p>
          </Prose>
        </div>
      </CaseSection>

      <CaseSection n="07" label="Revenue signal" title="Finding the under-priced apartment">
        <Prose>
          <p>
            Once units were typed by what they are, a rent-per-SF curve across the property (
            <code>PSF = 3.5849 − 0.000841 × SF</code>) put five of six plans within $70 of the line. <strong>Unit 105</strong>,
            a 1,220 SF three-bedroom that had been pooled with 967 SF three-bedrooms, sat <strong>$372 below</strong> it,
            renting at $2.25/SF against $2.84 for the standard plan. A straight regression across all 41 units (R² 0.765)
            agreed within $27.
          </p>
          <p>
            The reclassification itself changed no rents, by design: pricing belongs to asset management. The analysis was
            handed over as information, with its caveat stated plainly: it is built from in-place rents, so it is reliable for
            relative position within the building, not a market study.
          </p>
        </Prose>
        <div className="mt-6">
          <CompareTable
            caption="Rent curve gaps by plan"
            columns={["In place", "Curve", "Gap"]}
            highlight={2}
            rows={[
              { label: "250_2x1 · 716 SF", values: ["$2,153", "$2,137", "−$16"] },
              { label: "250_3x2 · 967 SF", values: ["$2,749", "$2,679", "−$70"] },
              { label: "250_3x2L · 1,011 SF", values: ["$2,708", "$2,764", "+$56"] },
              { label: "250_3x2G · 1,220 SF (unit 105)", values: ["$2,750", "$3,122", "+$372"] },
            ]}
          />
        </div>
      </CaseSection>

      <CaseSection n="08" label="Final sets">
        <div className="grid gap-6 md:grid-cols-2">
          <Shot src="/photos/floorplans/hw-set.webp" alt="Hawthorne labeled 3D floor plan set" width={1600} height={1280} caption="Hawthorne: 17 branded plates" />
          <Shot src="/photos/floorplans/wv-set.webp" alt="Westwood Vista 3D render set" width={1600} height={646} caption="Westwood Vista: the render set" />
        </div>
      </CaseSection>

      <CaseSection n="09" label="Earlier approach">
        <Prose>
          <p>
            Before image models could hold geometry, I built an extraction pipeline for whole-building architectural PDFs:
            Gemini OCR on adaptive tiles to find unit labels and areas, OpenCV ray-casting from those seeds to find walls,
            area validation against labeled square footage, and optional Segment Anything 3 refinement on Modal H100s. It
            proved the hard part is fidelity, which is why the current pipeline treats the drawing as authoritative and
            checks every render against it.
          </p>
        </Prose>
      </CaseSection>
    </ProjectLayout>
  );
}
