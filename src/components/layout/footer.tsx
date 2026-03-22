import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { FooterScene } from "./footer-scene";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      {/* Scene — full bleed */}
      <FooterScene />

      {/* Footer content below scene */}
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "32px 32px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        {/* Links row */}
        <div
          style={{
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link
            href="/projects"
            className="nav-link"
            style={{ fontSize: 13, textDecoration: "none" }}
          >
            Projects
          </Link>
          <Link
            href="/#about"
            className="nav-link"
            style={{ fontSize: 13, textDecoration: "none" }}
          >
            About
          </Link>
          <Link
            href="/#skills"
            className="nav-link"
            style={{ fontSize: 13, textDecoration: "none" }}
          >
            Skills
          </Link>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="nav-link"
            style={{ fontSize: 13, textDecoration: "none" }}
          >
            Contact
          </a>
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            style={{ fontSize: 13, textDecoration: "none" }}
          >
            LinkedIn
          </a>
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            style={{ fontSize: 13, textDecoration: "none" }}
          >
            GitHub
          </a>
        </div>

        {/* Copyright */}
        <p style={{ fontSize: 12, color: "var(--muted-foreground)" }}>
          &copy; {new Date().getFullYear()} Spencer D&apos;Avis &middot; Seattle, WA
        </p>
      </div>
    </footer>
  );
}
