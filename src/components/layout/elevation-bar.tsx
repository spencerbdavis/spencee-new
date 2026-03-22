"use client";

import { useEffect, useRef, useState } from "react";

export function ElevationBar() {
  const [progress, setProgress] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const pct = progress * 100;
  const atEnd = progress >= 0.98;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 100,
        background: "var(--border)",
        overflow: "visible",
      }}
    >
      {/* Filled trail */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: `${pct}%`,
          background: "linear-gradient(90deg, var(--accent), var(--sound-blue))",
          transition: "width 0.08s linear",
          borderRadius: "0 2px 2px 0",
        }}
      />

      {/* Space Needle at leading edge */}
      {progress > 0.005 && (
        <div
          style={{
            position: "absolute",
            left: `${pct}%`,
            top: -18,
            transform: "translateX(-50%)",
            transition: "left 0.08s linear",
            filter: atEnd ? "drop-shadow(0 0 4px var(--accent))" : "none",
          }}
        >
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
            {/* Observation deck base */}
            <path d="M2,10 L6,10 L6,8 L8,8 L8,10 L12,10 L11,12 L3,12 Z" fill="var(--accent)" opacity={atEnd ? "1" : "0.8"} />
            {/* Saucer / observation deck top — the iconic disc shape */}
            <path d="M1,10 L4,6 L5,4 L9,4 L10,6 L13,10 Z" fill="var(--accent)" opacity={atEnd ? "1" : "0.7"} />
            {/* Spire */}
            <rect x="6.4" y="0" width="1.2" height="4.5" rx="0.5" fill="var(--accent)" opacity={atEnd ? "1" : "0.7"} />
            {/* Shaft below disc */}
            <rect x="6" y="12" width="2" height="6" fill="var(--accent)" opacity={atEnd ? "1" : "0.6"} />
            {/* Base legs — tripod spread */}
            <path d="M4,22 L6,18 L8,18 L10,22" fill="none" stroke="var(--accent)" strokeWidth="1" opacity={atEnd ? "1" : "0.5"} />
            <line x1="7" y1="18" x2="7" y2="22" stroke="var(--accent)" strokeWidth="0.8" opacity={atEnd ? "1" : "0.5"} />
            {/* Window band on observation deck */}
            <line x1="3.5" y1="9" x2="10.5" y2="9" stroke="var(--background)" strokeWidth="0.6" opacity="0.5" />
          </svg>

          {/* Summit glow */}
          {atEnd && (
            <div
              style={{
                position: "absolute",
                top: -4,
                left: "50%",
                transform: "translateX(-50%)",
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
                opacity: 0.3,
                animationName: "summit-pulse",
                animationDuration: "2s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDirection: "alternate",
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
