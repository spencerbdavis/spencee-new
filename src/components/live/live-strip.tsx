"use client";

import Link from "next/link";
import { useLive } from "./use-live";

type Sky = { counts: { flying: number; total: number } };
type Rain = { places: { raining: boolean; starts_in: number | null }[] };
type Cams = { cams: { frame: { count: number | null } | null }[] };
type Eco = { species: unknown[] };

/** Homepage proof strip: four numbers fetched live from systems I run. */
export function LiveStrip() {
  const sky = useLive<Sky>("https://overhead.here/api/v1/now?radius_nm=25&limit=1", 30_000);
  const rain = useLive<Rain>("https://raining.here/api/v1/overview", 120_000);
  const cams = useLive<Cams>("https://cams.rntwx.com/v1/cams", 60_000);
  const eco = useLive<Eco>("https://overhead.spenc.ee/api/ecology", 600_000);

  const items = [
    {
      href: "/projects/overhead",
      value: sky.data?.counts.flying,
      label: "aircraft overhead",
      sub: "my ADS-B antenna",
      status: sky.status,
    },
    {
      href: "/projects/raining-here",
      value: rain.data ? rain.data.places.filter((p) => p.raining).length : undefined,
      label: `of ${rain.data?.places.length ?? 90} places raining`,
      sub: "radar nowcast",
      status: rain.status,
    },
    {
      href: "/projects/traffic-cameras",
      value: cams.data ? cams.data.cams.reduce((n, c) => n + (c.frame?.count ?? 0), 0) : undefined,
      label: "vehicles in view",
      sub: "YOLOX on 42 cameras",
      status: cams.status,
    },
    {
      href: "/projects/overhead-journal",
      value: eco.data?.species.length,
      label: "bird species this season",
      sub: "BirdNET in the garden",
      status: eco.status,
    },
  ];

  return (
    <div className="card grid grid-cols-2 divide-line overflow-hidden lg:grid-cols-4 lg:divide-x">
      {items.map((it, i) => (
        <Link
          key={it.href}
          href={it.href}
          className={`group flex flex-col gap-1 p-5 transition-colors hover:bg-surface-2 ${i % 2 ? "border-l border-line lg:border-l-0" : ""} ${
            i > 1 ? "border-t border-line lg:border-t-0" : ""
          }`}
        >
          <span className="flex items-center gap-2 label-mono">
            <span
              aria-hidden
              className={`live-dot inline-block h-1.5 w-1.5 rounded-full ${it.status === "ok" ? "bg-live" : it.status === "error" ? "bg-signal" : "bg-ink-muted"}`}
            />
            Live · {it.sub}
          </span>
          <span className="font-mono text-3xl font-semibold tabular-nums tracking-tight sm:text-4xl">
            {it.value ?? (it.status === "error" ? "—" : "…")}
          </span>
          <span className="text-sm text-ink-muted group-hover:text-ink">{it.label} →</span>
        </Link>
      ))}
    </div>
  );
}
