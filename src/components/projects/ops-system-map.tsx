/**
 * How the six operations repositories connect. Two flows (finance, field ops)
 * share bv_admin's data layer and both end in Yardi, the system of record.
 * Rendered as stacked cards on mobile, three columns on desktop.
 */
const FLOWS = [
  {
    title: "Expense reconciliation",
    steps: [
      { repo: "receipts-processor", what: "Cloudflare Email Worker receives receipts@ mail, parses MIME and attachments" },
      { repo: "bv_admin", what: "Extracts with Gemini, matches card transactions, codes property + GL, queues human verification" },
      { repo: "bv_acc_ext", what: "Builds per-employee GL CSVs and imports them into Yardi, then marks receipts uploaded" },
    ],
  },
  {
    title: "Field maintenance",
    steps: [
      { repo: "maintenance-ext", what: "Inside Yardi: turn a resident submission into a scheduled job with a technician and calendar slot" },
      { repo: "maintenance-panel", what: "Supervisor dashboard: assignments, Outlook events via Microsoft Graph, reports, reviews, equipment" },
      { repo: "BVMaintenance", what: "Technician iOS app: geofenced check-in, NFC tools, photos, receipts; offline queue syncs back" },
    ],
  },
];

export function OpsSystemMap() {
  return (
    <div className="grid gap-5">
      {FLOWS.map((f) => (
        <div key={f.title}>
          <p className="label-mono mb-3">{f.title}</p>
          <ol className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_auto] md:items-stretch">
            {f.steps.map((s, i) => (
              <li key={s.repo} className="contents">
                <div className="card p-4">
                  <p className="font-mono text-sm font-semibold">{s.repo}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{s.what}</p>
                </div>
                <span aria-hidden className="hidden self-center font-mono text-accent md:block">
                  →
                </span>
                {i === f.steps.length - 1 && (
                  <div className="flex items-center justify-center rounded-2xl border border-dashed border-line px-5 py-3 md:py-0">
                    <span className="font-mono text-sm font-semibold">Yardi</span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      ))}
      <p className="text-sm text-ink-muted">
        Yardi Voyager is the accounting and maintenance system of record. Neither flow could use a suitable write API, so both
        end in a browser extension that works through Yardi&apos;s own UI and confirms the result before marking anything done.
      </p>
    </div>
  );
}
