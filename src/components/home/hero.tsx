import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { HEADLINES, HEADLINE_OPTION, SUB_HEADLINE } from "@/lib/config";

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
        {/* Left: Photo + name + currently */}
        <div style={{ flexShrink: 0 }}>
          <div
            style={{
              width: 160,
              height: 160,
              borderRadius: 16,
              position: "relative",
              overflow: "hidden",
              background: "var(--muted)",
              boxShadow: "0 0 0 3px var(--background), 0 0 0 5px var(--border), 0 12px 40px rgba(0,0,0,0.1)",
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
              textAlign: "center",
            }}
          >
            Spencer D&apos;Avis
          </p>
          <p
            style={{
              fontSize: 11,
              color: "var(--muted-foreground)",
              marginTop: 4,
              textAlign: "center",
            }}
          >
            Currently at Bonavista
          </p>
        </div>

        {/* Right: Headline + sub + CTAs */}
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
              maxWidth: 480,
            }}
          >
            {SUB_HEADLINE}
          </p>

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
      `}</style>
    </section>
  );
}
