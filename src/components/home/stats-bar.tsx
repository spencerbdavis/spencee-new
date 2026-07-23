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

/** Counts 0 -> target over ~800ms once `active`. Falls back to the static value otherwise. */
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
      {formatCount(Math.round(display), parsed.decimals)}
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
    <section ref={sectionRef} className="rule-thick">
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-2 gap-px bg-hairline md:grid-cols-5">
          {PORTFOLIO_STATS.map((stat) => (
            <div key={stat.label} className="bg-paper p-6 md:p-8">
              <p className="font-mono text-[1.75rem] font-semibold leading-none tracking-tight text-ink md:text-[2rem]">
                <StatValue value={stat.value} active={active} />
              </p>
              <p className="label-mono mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
