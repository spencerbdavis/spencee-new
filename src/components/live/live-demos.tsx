"use client";

/* eslint-disable @next/next/no-img-element -- camera stills come from a third-party origin and change every minute */
import { ago, useLive } from "./use-live";
import { LiveFallback, LivePanel } from "./live-panel";

/* ----------------------------- Overhead: planes now ----------------------------- */

type SkyNow = {
  generated: string;
  counts: { total: number; flying: number; on_ground: number };
  airports: Record<string, { ground: number; low_nearby: number }>;
  aircraft: {
    hex: string;
    flight: string | null;
    reg: string | null;
    type: string | null;
    desc: string | null;
    airline: string | null;
    on_ground: boolean;
    alt_ft: number | null;
    gs_kt: number | null;
    dist_nm: number | null;
    url: string;
  }[];
};

export function LiveSky() {
  const s = useLive<SkyNow>("https://overhead.here/api/v1/now?radius_nm=25&limit=60", 20_000);
  const planes = (s.data?.aircraft ?? [])
    .filter((a) => !a.on_ground)
    .sort((a, b) => (a.dist_nm ?? 99) - (b.dist_nm ?? 99))
    .slice(0, 6);

  return (
    <LivePanel title="Aircraft within 25 nm of Renton" source="overhead.here" sourceUrl="https://overhead.here" status={s.status}>
      {!s.data ? (
        <LiveFallback>{s.status === "loading" ? "Listening…" : "The receiver feed is not reachable right now."}</LiveFallback>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-4">
            <Metric value={s.data.counts.flying} label="In the air" />
            <Metric value={s.data.counts.on_ground} label="On the ground" />
            <Metric value={s.data.counts.total} label="Tracked" />
          </div>
          {planes.length > 0 && (
            <div className="mt-5 overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Flight</th>
                    <th>Aircraft</th>
                    <th className="num">Alt ft</th>
                    <th className="num">nm</th>
                  </tr>
                </thead>
                <tbody>
                  {planes.map((a) => (
                    <tr key={a.hex}>
                      <td className="font-mono">
                        <a href={a.url} target="_blank" rel="noopener noreferrer" className="link-signal">
                          {(a.flight ?? a.reg ?? a.hex).trim()}
                        </a>
                      </td>
                      <td className="text-ink-muted">{a.airline ? `${a.airline} · ` : ""}{a.type ?? "—"}</td>
                      <td className="num">{a.alt_ft?.toLocaleString() ?? "—"}</td>
                      <td className="num">{a.dist_nm?.toFixed(1) ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <Updated at={s.at} error={s.status === "error"} />
        </>
      )}
    </LivePanel>
  );
}

/* ----------------------------- raining.here: rain now ----------------------------- */

type RainOverview = {
  t: number;
  places: { slug: string; name: string; raining: boolean; starts_in: number | null; text: string; dbz: number }[];
};

export function LiveRain() {
  const s = useLive<RainOverview>("https://raining.here/api/v1/overview", 120_000);
  const places = s.data?.places ?? [];
  const raining = places.filter((p) => p.raining);
  const soon = places.filter((p) => !p.raining && p.starts_in != null).sort((a, b) => (a.starts_in ?? 0) - (b.starts_in ?? 0));
  const show = [...raining, ...soon].slice(0, 8);

  return (
    <LivePanel title="Rain across Puget Sound" source="raining.here" sourceUrl="https://raining.here" status={s.status}>
      {!s.data ? (
        <LiveFallback>{s.status === "loading" ? "Reading the radar…" : "The radar service is not reachable right now."}</LiveFallback>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-4">
            <Metric value={raining.length} label="Raining now" />
            <Metric value={soon.length} label="Rain within the hour" />
            <Metric value={places.length} label="Places watched" />
          </div>
          <ul className="mt-5 divide-y divide-line border-t border-line">
            {(show.length ? show : places.slice(0, 5)).map((p) => (
              <li key={p.slug} className="flex items-baseline justify-between gap-4 py-2.5 text-sm">
                <a href={`https://raining.here/${p.slug}`} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
                  {p.name}
                </a>
                <span className="text-right text-ink-muted">{p.text}</span>
              </li>
            ))}
          </ul>
          <Updated at={s.at} error={s.status === "error"} note={`Radar time ${new Date(s.data.t * 1000).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`} />
        </>
      )}
    </LivePanel>
  );
}

/* ----------------------------- rntwx-cams: traffic ----------------------------- */

type Cams = {
  cams: {
    slug: string;
    name: string;
    source: string;
    kind: string;
    frame: { ts: number; url: string; count: number | null; stopped: number | null } | null;
    status: string;
    typical: number | null;
    event: { kind: string; text?: string | null } | null;
  }[];
};

const CAMS = "https://cams.rntwx.com";
const STATUS_LABEL: Record<string, string> = {
  ok: "Normal",
  warming: "Learning baseline",
  stopped: "Stopped traffic",
  heavy: "Heavy",
  light: "Unusually light",
  stale: "Stale feed",
  offline: "Offline",
  blank: "Blank image",
};

export function LiveCams() {
  const s = useLive<Cams>(`${CAMS}/v1/cams`, 30_000);
  const cams = s.data?.cams ?? [];
  const traffic = cams.filter((c) => c.kind !== "scenic" && c.frame);
  const counted = traffic.filter((c) => c.frame?.count != null);
  const vehicles = counted.reduce((n, c) => n + (c.frame?.count ?? 0), 0);
  const flagged = cams.filter((c) => ["stopped", "heavy", "light"].includes(c.status));
  const tiles = [...flagged, ...traffic.filter((c) => !flagged.includes(c))].slice(0, 6);

  return (
    <LivePanel title="Renton-area traffic cameras" source="rntwx.com/cameras" sourceUrl="https://www.rntwx.com/cameras" status={s.status}>
      {!s.data ? (
        <LiveFallback>{s.status === "loading" ? "Loading cameras…" : "The camera service is not reachable right now."}</LiveFallback>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-4">
            <Metric value={cams.length} label="Cameras" />
            <Metric value={vehicles} label="Vehicles in view" />
            <Metric value={flagged.length} label="Flagged now" />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tiles.map((c) => (
              <figure key={c.slug} className="overflow-hidden rounded-xl border border-line bg-surface-2">
                {c.frame && (
                  <img
                    src={`${CAMS}${c.frame.url}`}
                    alt={`Latest still from the ${c.name} camera`}
                    width={335}
                    height={244}
                    loading="lazy"
                    className="aspect-[335/244] w-full object-cover"
                  />
                )}
                <figcaption className="px-2.5 py-2">
                  <p className="truncate text-xs font-medium">{c.name}</p>
                  <p className="font-mono text-[0.6875rem] text-ink-muted">
                    {c.frame?.count != null ? `${c.frame.count} vehicles · ` : ""}
                    {STATUS_LABEL[c.status] ?? c.status}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
          <Updated at={s.at} error={s.status === "error"} note="Counts are a density index: distant cars in 335×244 stills are missed." />
        </>
      )}
    </LivePanel>
  );
}

/* ----------------------------- Overhead Journal: birds ----------------------------- */

type Ecology = {
  species: { common: string; sci: string; today: number; week: number; daysHeard: number; status: string; maxConf: number }[];
};

export function LiveBirds() {
  const s = useLive<Ecology>("https://overhead.spenc.ee/api/ecology", 300_000);
  const sp = [...(s.data?.species ?? [])].sort((a, b) => b.week - a.week);

  return (
    <LivePanel title="Birds heard in the garden" source="overhead.spenc.ee" sourceUrl="https://overhead.spenc.ee" status={s.status}>
      {!s.data ? (
        <LiveFallback>{s.status === "loading" ? "Opening the journal…" : "The journal is not reachable right now."}</LiveFallback>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-4">
            <Metric value={sp.length} label="Species this season" />
            <Metric value={sp.reduce((n, x) => n + x.week, 0)} label="Calls this week" />
            <Metric value={sp.filter((x) => x.today > 0).length} label="Heard today" />
          </div>
          <ul className="mt-5 grid gap-x-6 sm:grid-cols-2">
            {sp.slice(0, 8).map((b) => (
              <li key={b.sci} className="flex items-baseline justify-between gap-3 border-t border-line py-2.5 text-sm">
                <span>
                  <span className="font-medium">{b.common}</span>{" "}
                  <i className="text-ink-muted">{b.sci}</i>
                </span>
                <span className="font-mono text-xs text-ink-muted">{b.week}/wk</span>
              </li>
            ))}
          </ul>
          <Updated at={s.at} error={s.status === "error"} note="Listed at BirdNET confidence ≥ 0.90." />
        </>
      )}
    </LivePanel>
  );
}

/* ----------------------------- shared ----------------------------- */

function Metric({ value, label }: { value: number; label: string }) {
  return (
    <div>
      <p className="font-mono text-3xl font-semibold tracking-tight tabular-nums sm:text-4xl">{value.toLocaleString()}</p>
      <p className="label-mono mt-1.5">{label}</p>
    </div>
  );
}

function Updated({ at, error, note }: { at: number | null; error?: boolean; note?: string }) {
  return (
    <p className="mt-4 text-xs text-ink-muted">
      {error ? "Couldn't refresh; showing data from " : "Updated "}
      {ago(at)}
      {note ? ` · ${note}` : ""}
    </p>
  );
}
