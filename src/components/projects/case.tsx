import Image from "next/image";
import type { ReactNode } from "react";

/** Numbered case-study section: label column + content column. */
export function CaseSection({
  n,
  label,
  title,
  children,
}: {
  n: string;
  label: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="grid gap-6 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-3">
        <p className="label-mono">
          <span className="text-accent">{n}</span> / {label}
        </p>
      </div>
      <div className="min-w-0 md:col-span-9">
        {title && <h2 className="text-h3 mb-5 max-w-3xl text-2xl md:text-3xl">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="prose-case max-w-3xl">{children}</div>;
}

/** Architecture as a numbered pipeline: readable as a diagram on desktop, a list on mobile. */
export function Pipeline({ steps }: { steps: { title: string; desc: string }[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.title} className="card p-5">
          <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")} →</p>
          <p className="mt-2 font-semibold">{s.title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}

/** Decision → tradeoff cards. */
export function Decisions({ items }: { items: { decision: string; why: string }[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((d) => (
        <div key={d.decision} className="rounded-2xl border border-line p-5">
          <p className="font-semibold">{d.decision}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{d.why}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * Comparison table. `highlight` is the column index (0-based, after the row
 * label) that represents my build; it gets bold text.
 */
export function CompareTable({
  caption,
  columns,
  rows,
  highlight = 0,
  note,
}: {
  caption: string;
  columns: string[];
  rows: { label: string; values: string[] }[];
  highlight?: number;
  note?: string;
}) {
  return (
    <figure>
      <div className="card overflow-x-auto p-0" role="region" aria-label={caption} tabIndex={0}>
        <table className="data-table min-w-[36rem]">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr>
              <th scope="col"></th>
              {columns.map((c, i) => (
                <th key={c} scope="col" className={i === highlight ? "!text-accent" : ""}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label}>
                <th scope="row" className="font-medium">
                  {r.label}
                </th>
                {r.values.map((v, i) => (
                  <td key={i} className={i === highlight ? "win" : "text-ink-muted"}>
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <figcaption className="mt-3 text-xs leading-relaxed text-ink-muted">{note}</figcaption>}
    </figure>
  );
}

/** Benchmark table with numeric columns. */
export function BenchTable({
  caption,
  head,
  rows,
  note,
}: {
  caption: string;
  head: string[];
  rows: (string | number)[][];
  note?: string;
}) {
  return (
    <figure>
      <div className="card overflow-x-auto p-0" role="region" aria-label={caption} tabIndex={0}>
        <table className="data-table min-w-[32rem]">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr>
              {head.map((h, i) => (
                <th key={h} scope="col" className={i ? "num" : ""}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={String(r[0])}>
                {r.map((c, i) =>
                  i === 0 ? (
                    <th key={i} scope="row" className="font-medium">
                      {c}
                    </th>
                  ) : (
                    <td key={i} className={`num ${i === r.length - 1 ? "win" : ""}`}>
                      {c}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <figcaption className="mt-3 text-xs leading-relaxed text-ink-muted">{note}</figcaption>}
    </figure>
  );
}

export function Shot({
  src,
  alt,
  width,
  height,
  caption,
  phone,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  phone?: boolean;
}) {
  return (
    <figure className={phone ? "mx-auto max-w-[18rem]" : ""}>
      <div className={`card overflow-hidden p-0 ${phone ? "rounded-[2rem] border-4" : ""}`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={phone ? "18rem" : "(min-width: 1024px) 56rem, 100vw"}
          className="block h-auto w-full"
        />
      </div>
      {caption && <figcaption className="label-mono mt-3 normal-case tracking-normal">{caption}</figcaption>}
    </figure>
  );
}
