"use client";

import { useEffect, useRef, useState } from "react";

export function FooterScene() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const paused = visible ? "" : "[animation-play-state:paused]";

  return (
    <div
      ref={ref}
      aria-hidden
      className="relative h-44 overflow-hidden bg-paper md:h-56"
    >
      {/* Horizon — the single hairline that grounds the scene */}
      <div className="absolute inset-x-0 bottom-16 h-px bg-hairline" />

      {/* Ferry — single-weight ink line art crossing right → left on a loop.
          Reduced motion parks it mid-scene; off-screen pauses it in place. */}
      <div
        className={`absolute bottom-16 left-0 ${
          reduced
            ? "translate-x-[40vw]"
            : `animate-[ferry-cross_46s_linear_infinite] ${paused}`
        }`}
      >
        <svg
          width="160"
          height="62"
          viewBox="0 0 160 62"
          className="block fill-paper stroke-ink"
          strokeWidth={1.5}
          strokeLinejoin="round"
        >
          {/* Hull */}
          <path d="M6,44 L154,44 L146,60 L14,60 Z" />
          {/* Main deck house */}
          <rect x="16" y="32" width="128" height="12" />
          {/* Upper deck house */}
          <rect x="30" y="23" width="100" height="9" />
          {/* Twin pilot houses (double-ended ferry) */}
          <rect x="34" y="15" width="16" height="8" />
          <rect x="110" y="15" width="16" height="8" />
          {/* Radar mast + crossbar */}
          <line x1="80" y1="15" x2="80" y2="5" />
          <line x1="74" y1="8" x2="86" y2="8" />
          {/* Window ticks */}
          {[24, 36, 48, 60, 72, 88, 100, 112, 124, 136].map((x) => (
            <line key={`m${x}`} x1={x} y1="34" x2={x} y2="41" strokeWidth={1} />
          ))}
          {[42, 54, 66, 78, 94, 106, 118].map((x) => (
            <line key={`u${x}`} x1={x} y1="25" x2={x} y2="30" strokeWidth={1} />
          ))}
          {/* Masthead light — the single accent mark */}
          <circle cx="80" cy="4" r="2.2" className="fill-accent stroke-none" />
        </svg>
      </div>

      {/* Caption */}
      <p className="label-mono absolute inset-x-0 bottom-5 text-center">
        Made with &#9829; in Seattle
      </p>
    </div>
  );
}
