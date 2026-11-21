"use client";

import { useEffect, useState } from "react";

export type LiveState<T> =
  | { status: "loading"; data: null; at: null }
  | { status: "ok"; data: T; at: number }
  | { status: "error"; data: T | null; at: number | null };

/**
 * Polls a public JSON endpoint from the browser. Pauses while the tab is
 * hidden; keeps the last good payload when a poll fails so the widget
 * degrades to "last updated …" instead of going blank.
 */
export function useLive<T>(url: string, intervalMs = 60_000): LiveState<T> {
  const [state, setState] = useState<LiveState<T>>({ status: "loading", data: null, at: null });

  useEffect(() => {
    let alive = true;
    let timer: ReturnType<typeof setInterval> | null = null;

    const load = async () => {
      try {
        const res = await fetch(url, { signal: AbortSignal.timeout(8000), cache: "no-store" });
        if (!res.ok) throw new Error(String(res.status));
        const json = (await res.json()) as T;
        if (alive) setState({ status: "ok", data: json, at: Date.now() });
      } catch {
        if (alive) setState((s) => ({ status: "error", data: s.data, at: s.at }));
      }
    };

    const start = () => {
      if (timer) return;
      load();
      timer = setInterval(load, intervalMs);
    };
    const stop = () => {
      if (timer) clearInterval(timer);
      timer = null;
    };
    const onVis = () => (document.hidden ? stop() : start());

    start();
    document.addEventListener("visibilitychange", onVis);
    return () => {
      alive = false;
      stop();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [url, intervalMs]);

  return state;
}

export function ago(at: number | null) {
  if (!at) return "";
  const s = Math.round((Date.now() - at) / 1000);
  if (s < 60) return "just now";
  const m = Math.round(s / 60);
  return `${m} min ago`;
}
