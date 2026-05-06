import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import {
  AVAILABILITY,
  HEADLINES,
  HEADLINE_OPTION,
  HERO_PILLS,
  SITE_CONFIG,
  SUB_HEADLINE,
} from "@/lib/config";

export function Hero() {
  return (
    <section
      style={{
        background: "var(--hero-gradient)",
        minHeight: "92dvh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: "radial-gradient(var(--foreground) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      <div
        className="hero-layout"
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "140px 32px 80px",
          paddingLeft: "calc(max(32px, 12vw))",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          position: "relative",
        }}
      >
        {/* Left: Photo + name + availability + store badges */}
        <div
          style={{
            flexShrink: 0,
            width: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 160,
              height: 160,
              borderRadius: 16,
              position: "relative",
              overflow: "hidden",
              background: "var(--muted)",
              boxShadow:
                "0 0 0 3px var(--background), 0 0 0 5px var(--border), 0 12px 40px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              src="/headshot.jpg"
              alt="Spencer D'Avis"
              fill
              style={{ objectFit: "cover", objectPosition: "center 15%" }}
              priority
              sizes="160px"
            />
          </div>
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--accent)",
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              marginTop: 16,
            }}
          >
            Spencer D&apos;Avis
          </p>

          {/* Availability indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 6,
              marginTop: 8,
              justifyContent: "center",
            }}
          >
            <span
              aria-hidden
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 0 2px rgba(34,197,94,0.18)",
                flexShrink: 0,
                marginTop: 5,
              }}
            />
            <p
              style={{
                fontSize: 11,
                color: "var(--muted-foreground)",
                lineHeight: 1.4,
                maxWidth: 180,
              }}
            >
              {AVAILABILITY}
            </p>
          </div>

          {/* Store badges — proof of shipped distributions */}
          <div
            style={{
              display: "flex",
              gap: 8,
              marginTop: 16,
              justifyContent: "center",
            }}
          >
            <a
              href={SITE_CONFIG.appStore}
              target="_blank"
              rel="noopener noreferrer"
              title="iOS App on the App Store"
              className="store-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 10px",
                borderRadius: 8,
                background: "var(--background)",
                border: "1px solid var(--border)",
                fontSize: 10,
                fontWeight: 600,
                color: "var(--foreground)",
                textDecoration: "none",
                lineHeight: 1,
              }}
            >
              <AppleGlyph />
              App Store
            </a>
            <a
              href={SITE_CONFIG.chromeStore}
              target="_blank"
              rel="noopener noreferrer"
              title="Chrome extension on the Chrome Web Store"
              className="store-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 10px",
                borderRadius: 8,
                background: "var(--background)",
                border: "1px solid var(--border)",
                fontSize: 10,
                fontWeight: 600,
                color: "var(--foreground)",
                textDecoration: "none",
                lineHeight: 1,
              }}
            >
              <ChromeGlyph />
              Chrome
            </a>
          </div>
        </div>

        {/* Right: Headline + sub + pills + CTAs */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1
            style={{
              fontSize: "clamp(26px, 4vw, 44px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
              color: "var(--foreground)",
              maxWidth: 580,
            }}
          >
            {HEADLINES[HEADLINE_OPTION]}
          </h1>

          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--muted-foreground)",
              marginTop: 20,
              maxWidth: 520,
            }}
          >
            {SUB_HEADLINE}
          </p>

          {/* Credential pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginTop: 24,
            }}
          >
            {HERO_PILLS.map((pill) => (
              <span
                key={pill}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "6px 12px",
                  borderRadius: 100,
                  background: "var(--accent-soft)",
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                {pill}
              </span>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 32,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/projects"
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 28px",
                borderRadius: 100,
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <a
              href="/spencer-davis-resume.pdf"
              download
              className="btn-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 28px",
                borderRadius: 100,
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Resume <Download size={16} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-layout {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
        .store-badge:hover {
          border-color: var(--accent) !important;
          color: var(--accent) !important;
        }
      `}</style>
    </section>
  );
}

function AppleGlyph() {
  // Authentic Apple wordmark glyph (filled silhouette with bite + leaf), not the lucide cartoon apple.
  return (
    <svg
      width="11"
      height="13"
      viewBox="0 0 384 512"
      fill="currentColor"
      aria-hidden
      style={{ display: "block" }}
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function ChromeGlyph() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden style={{ display: "block" }}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M21.17 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3.95 6.06L8.54 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10.88 21.94L15.46 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
