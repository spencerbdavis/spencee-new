import type { RepoEntry } from "@/lib/repos";

/** Table of the repositories behind a system, with authorship share. */
export function RepoLedger({ repos, caption }: { repos: RepoEntry[]; caption: string }) {
  return (
    <figure>
      <div className="card overflow-x-auto p-0" role="region" aria-label={caption} tabIndex={0}>
        <table className="data-table min-w-[44rem]">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr>
              <th scope="col">Repository</th>
              <th scope="col">What it does</th>
              <th scope="col" className="num">
                Commits
              </th>
              <th scope="col" className="num">
                Mine
              </th>
            </tr>
          </thead>
          <tbody>
            {repos.map((r) => {
              const pct = Math.round((r.mine / r.commits) * 100);
              return (
                <tr key={r.name}>
                  <th scope="row" className="align-top">
                    <span className="font-mono text-sm font-semibold">{r.name}</span>
                    <span className="mt-1 block text-xs font-normal text-ink-muted">{r.span}</span>
                  </th>
                  <td className="text-ink-muted">
                    {r.role}
                    <span className="mt-1.5 block font-mono text-[0.7rem] text-ink-muted">{r.stack}</span>
                    {r.note && <span className="mt-1 block text-xs">{r.note}</span>}
                  </td>
                  <td className="num">{r.commits.toLocaleString()}</td>
                  <td className="num">
                    <span className="win">{pct}%</span>
                    <span
                      aria-hidden
                      className="mt-1.5 ml-auto block h-1 w-16 overflow-hidden rounded-full bg-surface-2"
                    >
                      <span className="block h-full bg-signal" style={{ width: `${pct}%` }} />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-ink-muted">
        From git history, November 21, 2026. Commit counts measure activity, not effort or ownership of design decisions.
        Repositories are private company code.
      </figcaption>
    </figure>
  );
}
