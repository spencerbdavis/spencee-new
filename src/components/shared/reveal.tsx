"use client";

import { useEffect, useRef, type CSSProperties, type HTMLAttributes } from "react";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  /** Entrance stagger in ms, applied via --reveal-delay */
  delay?: number;
}

/**
 * Adds .is-in once the element scrolls into view, driving the
 * .reveal-rise / .reveal-clip / .reveal-rule entrance classes in
 * globals.css. Renders content immediately when IntersectionObserver
 * is unavailable or the user prefers reduced motion.
 */
export function Reveal({ delay = 0, className, style, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("is-in");
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const mergedStyle = { ...style, "--reveal-delay": `${delay}ms` } as CSSProperties;

  return (
    <div ref={ref} className={className} style={mergedStyle} {...rest}>
      {children}
    </div>
  );
}
