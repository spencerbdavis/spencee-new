import type { Metadata } from "next";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis | Vision Model Evaluation Harness",
  description: "A repeatable benchmark comparing nine vision models on extraction accuracy and live inference cost.",
  alternates: { canonical: "https://spenc.ee/projects/vision-ocr-bench" },
};

const STEPS = [
  ["01", "Freeze the task", "Use the same representative receipt set and expected structured fields for every model."],
  ["02", "Run every model", "Normalize provider responses into one schema and retain errors instead of dropping failed cases."],
  ["03", "Score against truth", "Compare extracted values with the baseline field by field so one plausible answer cannot hide another miss."],
  ["04", "Fetch current pricing", "Calculate cost from runtime token usage and current provider pricing rather than a stale spreadsheet."],
  ["05", "Choose by frontier", "Compare quality and cost together; the best model is the one that meets the production threshold economically."],
];

export default function VisionOcrBenchPage() {
  const project = ALL_PROJECTS.find((item) => item.slug === "vision-ocr-bench")!;

  return (
    <ProjectLayout project={project}>
      <section className="swiss-grid gap-y-6">
        <p className="label-mono col-span-4 md:col-span-2">Problem</p>
        <p className="col-span-4 max-w-3xl text-lg leading-relaxed text-ink-muted md:col-span-8">
          {project.problem} The harness turns model selection into an evaluation that can be rerun when models, prompts,
          or prices change.
        </p>
      </section>

      <section>
        <p className="label-mono mb-6">Benchmark loop</p>
        <div className="border-t border-hairline">
          {STEPS.map(([number, title, body]) => (
            <div key={number} className="swiss-grid gap-y-3 border-b border-hairline py-7">
              <p className="label-mono col-span-1 text-accent">{number}</p>
              <h2 className="col-span-3 text-xl font-semibold md:col-span-3">{title}</h2>
              <p className="col-span-4 text-base leading-relaxed text-ink-muted md:col-span-7 md:col-start-6">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="swiss-grid gap-y-8 bg-ink p-6 text-paper md:p-10">
        <div className="col-span-4 md:col-span-7">
          <p className="label-mono !text-paper/60">Decision / Accuracy is not enough</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight">Treat cost as part of model behavior.</h2>
          <p className="mt-5 text-lg leading-relaxed text-paper/70">
            A model that wins a small accuracy margin can lose in production if it costs several times more at real
            document volume. Fetching prices at runtime keeps that tradeoff visible and makes the recommendation reproducible.
          </p>
        </div>
        <div className="col-span-4 md:col-span-3 md:col-start-10">
          <p className="font-mono text-5xl font-semibold">9</p>
          <p className="mt-3 text-sm uppercase tracking-[0.08em] text-paper/60">models, one scored baseline</p>
        </div>
      </section>

      <aside className="border-l-2 border-accent bg-paper-tint p-6 md:p-8">
        <p className="label-mono">Publication boundary</p>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-muted">
          The production harness and methodology are described here. A ranking table is intentionally omitted until a
          publishable run can include the exact model versions, sample size, field-level scoring rules, date, and price basis.
        </p>
      </aside>
    </ProjectLayout>
  );
}
