import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

/** Frame for a live demo: header with a pulsing dot, source link and a status line. */
export function LivePanel({
  title,
  source,
  sourceUrl,
  status,
  children,
}: {
  title: string;
  source: string;
  sourceUrl: string;
  status: "loading" | "ok" | "error";
  children: ReactNode;
}) {
  return (
    <section className="card overflow-hidden" aria-live="polite">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden
            className={`live-dot inline-block h-2 w-2 rounded-full ${
              status === "error" ? "bg-signal" : status === "ok" ? "bg-live" : "bg-ink-muted"
            }`}
          />
          <p className="label-mono !text-ink">Live demo · {title}</p>
        </div>
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="label-mono nav-link inline-flex items-center gap-1"
        >
          {source} <ArrowUpRight size={12} />
        </a>
      </header>
      <div className="p-5">{children}</div>
    </section>
  );
}

export function LiveFallback({ children }: { children: ReactNode }) {
  return <p className="text-sm text-ink-muted">{children}</p>;
}
