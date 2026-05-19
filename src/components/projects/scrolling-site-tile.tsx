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
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid var(--border)",
        background: "var(--card, var(--background))",
        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
      }}
      className="wp-site-tile"
    >
      {/* Browser chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 14px",
          background: "var(--muted)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        <span
          style={{
            marginLeft: 10,
            flex: 1,
            background: "var(--background)",
            borderRadius: 6,
            padding: "4px 10px",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--muted-foreground)",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {host}
        </span>
      </div>

      {/* Scrolling viewport */}
      <div
        ref={viewportRef}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          overflow: "hidden",
          background: "var(--muted)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={image}
          alt={`${name} full-page screenshot`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "auto",
            display: "block",
            transform: hovering ? `translateY(-${scrollDistance}px)` : "translateY(0)",
            transition: `transform ${hovering ? durationSec : 0.8}s ${hovering ? "linear" : "ease-out"}`,
            willChange: "transform",
          }}
          loading="lazy"
        />
      </div>

      {/* Footer */}
      <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
          <div>
            <p style={{ fontSize: 15, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.01em" }}>
              {name}
            </p>
            <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 2 }}>{host}</p>
          </div>
          <ArrowUpRight size={16} style={{ color: "var(--muted-foreground)", opacity: 0.5, flexShrink: 0, marginTop: 3 }} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {tags.map((t) => (
            <span key={t} className="pill" style={{ fontSize: 10, padding: "3px 8px" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .wp-site-tile:hover {
              transform: translateY(-2px);
              border-color: var(--accent);
              box-shadow: 0 12px 32px -16px rgba(0, 0, 0, 0.25);
            }
            @media (prefers-reduced-motion: reduce) {
              .wp-site-tile img { transform: translateY(0) !important; transition: none !important; }
            }
          `,
        }}
      />
    </a>
  );
}
