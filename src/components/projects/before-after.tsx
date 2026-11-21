"use client";

import Image from "next/image";
import { useId, useState } from "react";

/**
 * Before/after comparison. A native range input drives the split, so it is
 * keyboard- and screen-reader-operable with no custom pointer handling.
 */
export function BeforeAfter({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  alt,
  width,
  height,
  caption,
}: {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}) {
  const [pos, setPos] = useState(50);
  const id = useId();

  return (
    <figure>
      <div className="card relative overflow-hidden p-0" style={{ aspectRatio: `${width} / ${height}` }}>
        <Image src={after} alt={`${alt} — ${afterLabel}`} fill sizes="(min-width: 1024px) 60rem, 100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={before} alt={`${alt} — ${beforeLabel}`} fill sizes="(min-width: 1024px) 60rem, 100vw" className="object-cover" />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-y-0 w-0.5 bg-signal" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-signal font-mono text-xs text-on-signal shadow-lg">
            ⇆
          </span>
        </div>
        <span className="tag absolute top-3 left-3">{beforeLabel}</span>
        <span className="tag absolute top-3 right-3">{afterLabel}</span>
        <label htmlFor={id} className="sr-only">
          Drag to compare {beforeLabel} and {afterLabel}
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      {caption && <figcaption className="label-mono mt-3">{caption}</figcaption>}
    </figure>
  );
}
