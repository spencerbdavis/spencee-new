"use client";

import { useEffect, useRef, useState } from "react";
import { PORTFOLIO_STATS } from "@/lib/stats";

interface ParsedStat {
  prefix: string;
  suffix: string;
  target: number;
  decimals: number;
  hasNumber: boolean;
}

function parseStat(value: string): ParsedStat {
  const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { prefix: "", suffix: "", target: 0, decimals: 0, hasNumber: false };
  }
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const target = parseFloat(numStr.replace(/,/g, ""));
  return { prefix, suffix, target, decimals, hasNumber: true };
}

function formatCount(n: number, decimals: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/** Counts 0 -> target over ~800ms once `active`. */
function StatValue({ value, active }: { value: string; active: boolean }) {
  const parsed = parseStat(value);
  const [display, setDisplay] = useState(parsed.target);

  useEffect(() => {
    if (!active || !parsed.hasNumber) return;
    setDisplay(0);
    const duration = 800;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(parsed.target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  if (!parsed.hasNumber) return <>{value}</>;

  return (
    <>
      {parsed.prefix}
      {formatCount(display, parsed.decimals)}
      {parsed.suffix}
    </>
  );
}

export function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktopPointer =
      window.matchMedia("(pointer: fine)").matches && window.innerWidth >= 768;
    if (reduced || !desktopPointer) return;

    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-ink text-paper">
      <div className="container-site py-10 md:py-14">
        <p className="label-mono !text-paper/60">Evidence / production scale</p>
        <div className="mt-8 grid grid-cols-1 border-y border-paper/20 md:grid-cols-3">
          {PORTFOLIO_STATS.map((stat, index) => (
            <div key={stat.label} className={`py-7 md:px-8 md:py-8 ${index > 0 ? "border-t border-paper/20 md:border-t-0 md:border-l" : ""} first:md:pl-0 last:md:pr-0`}>
              <p className="font-mono text-4xl font-semibold leading-none tracking-tight text-paper md:text-5xl">
                <StatValue value={stat.value} active={active} />
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-paper">{stat.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
