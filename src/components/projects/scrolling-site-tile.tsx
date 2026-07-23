"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface Props {
  name: string;
  url: string;
  image: string;
  tags: string[];
}

export function ScrollingSiteTile({ name, url, image, tags }: Props) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    function measure() {
      const v = viewportRef.current;
      const i = imgRef.current;
      if (!v || !i) return;
      const distance = i.clientHeight - v.clientHeight;
      setScrollDistance(distance > 0 ? distance : 0);
    }
    measure();
    const img = imgRef.current;
    if (img && !img.complete) {
      img.addEventListener("load", measure);
    }
    window.addEventListener("resize", measure);
    return () => {
      img?.removeEventListener("load", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Animate ~6s linear; CSS handles return-to-top on mouseleave via transition
  const durationSec = Math.max(4, Math.min(10, scrollDistance / 120));

  const host = (() => {
    try {
      return new URL(url).host.replace(/^www\./, "");
    } catch {
      return url;
    }
  })();

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="group flex flex-col border border-hairline bg-paper no-underline transition-colors duration-100 hover:border-ink focus-visible:border-ink"
    >
      {/* Browser chrome — hairline-separated paper strip */}
      <div className="flex items-center gap-2 border-b border-hairline bg-paper-tint px-3.5 py-2.5">
        <span aria-hidden className="h-2 w-2 rounded-full border border-ink-muted" />
        <span aria-hidden className="h-2 w-2 rounded-full border border-ink-muted" />
        <span aria-hidden className="h-2 w-2 rounded-full border border-ink-muted" />
        <span className="ml-2 flex-1 truncate font-mono text-[11px] text-ink-muted">{host}</span>
      </div>

      {/* Scrolling viewport */}
      <div ref={viewportRef} className="relative aspect-[16/10] w-full overflow-hidden bg-paper-tint">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={image}
          alt={`${name} full-page screenshot`}
          className="absolute top-0 left-0 block h-auto w-full motion-reduce:!translate-y-0 motion-reduce:!transition-none"
          style={{
            transform: hovering ? `translateY(-${scrollDistance}px)` : "translateY(0)",
            transition: `transform ${hovering ? durationSec : 0.8}s ${hovering ? "linear" : "ease-out"}`,
            willChange: "transform",
          }}
          loading="lazy"
        />
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[15px] font-semibold tracking-tight text-ink">{name}</p>
            <p className="mt-0.5 text-xs text-ink-muted">{host}</p>
          </div>
          <ArrowUpRight
            size={16}
            className="mt-0.5 shrink-0 text-ink-muted opacity-50 transition-all duration-100 group-hover:text-ink group-hover:opacity-100"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
