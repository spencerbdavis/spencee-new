import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { HEADLINES, HEADLINE_OPTION, SUB_HEADLINE } from "@/lib/config";

export function Hero() {
  return (
    <section
      style={{
        background: "var(--hero-gradient)",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "140px 32px 80px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Headshot */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            margin: "0 auto 40px",
            position: "relative",
            overflow: "hidden",
            background: "var(--muted)",
            boxShadow: "0 0 0 3px var(--background), 0 0 0 5px var(--border), 0 8px 32px rgba(0,0,0,0.1)",
          }}
        >
          <Image
            src="/headshot.jpg"
            alt="Spencer D'Avis"
            fill
            className="object-cover"
            priority
            sizes="120px"
          />
        </div>

        {/* Name label */}
        <p
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: "var(--accent)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Spencer D&apos;Avis
        </p>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.035em",
            color: "var(--foreground)",
            margin: "0 auto",
            maxWidth: 640,
          }}
        >
          {HEADLINES[HEADLINE_OPTION]}
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: "var(--muted-foreground)",
            marginTop: 24,
            maxWidth: 520,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {SUB_HEADLINE}
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            marginTop: 40,
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
    </section>
  );
}
