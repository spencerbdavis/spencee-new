import type { Metadata } from "next";
import Link from "next/link";
import { ProjectLayout } from "@/components/projects/project-layout";
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Spencer D'Avis | Yardi Browser Integration",
  description: "A Chrome extension that writes reconciled transactions into a legacy ERP with no suitable write API.",
  alternates: { canonical: "https://spenc.ee/projects/yardi-integration" },
};

const CONSTRAINTS = [
  ["CSP", "The host application's content-security policy restricts how extension code can execute and communicate."],
  ["Frames", "Critical grids live inside nested frames, so the integration must find the right document before it can act."],
  ["Batches", "Invoice assignment completes asynchronously; success means observing the final batch state, not just clicking submit."],
  ["Recovery", "Duplicate numbers, orphaned batches, and partial failures must remain inspectable and safe to resume."],
];

export default function YardiIntegrationPage() {
  const project = ALL_PROJECTS.find((item) => item.slug === "yardi-integration")!;

  return (
    <ProjectLayout project={project}>
      <section className="swiss-grid gap-y-6">
        <p className="label-mono col-span-4 md:col-span-2">Constraint</p>
        <p className="col-span-4 max-w-3xl text-lg leading-relaxed text-ink-muted md:col-span-8">{project.problem}</p>
      </section>

      <section>
        <p className="label-mono mb-6">Hostile integration surface</p>
        <div className="grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2">
          {CONSTRAINTS.map(([title, body], index) => (
            <article key={title} className="bg-paper p-6 md:p-8">
              <p className="label-mono text-accent">{String(index + 1).padStart(2, "0")} / {title}</p>
              <p className="mt-5 text-base leading-relaxed text-ink-muted">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="swiss-grid gap-y-8">
        <p className="label-mono col-span-4 md:col-span-2">Fallback chain</p>
        <div className="col-span-4 md:col-span-9">
          <div className="grid grid-cols-1 border-y border-hairline md:grid-cols-3">
            {[
              ["01", "Barcode", "Prefer a machine-readable identifier when the receipt provides one."],
              ["02", "OCR", "Extract and match invoice evidence when no reliable barcode exists."],
              ["03", "Manual", "Stop and expose the fields when evidence conflicts or remains incomplete."],
            ].map(([number, title, body], index) => (
              <div key={number} className={`py-7 md:px-7 ${index > 0 ? "border-t border-hairline md:border-t-0 md:border-l" : ""}`}>
                <p className="label-mono text-accent">{number}</p>
                <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink p-6 text-paper md:p-10">
        <p className="label-mono !text-paper/60">Engineering decision</p>
        <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight">Observe the result, not the click.</h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-paper/70">
          UI automation is reliable only when each action has a verifiable postcondition. The extension polls batch state,
          checks the assigned records, and leaves failed items recoverable instead of treating a successful DOM event as completion.
        </p>
      </section>

      <p className="text-sm leading-relaxed text-ink-muted">
        This accounting extension is separate from the published maintenance extension. See the broader
        <Link href="/projects/admin-panel" className="nav-link ml-1 font-semibold">expense reconciliation case study →</Link>
      </p>
    </ProjectLayout>
  );
}
