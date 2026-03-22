"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { WeatherPill } from "./weather-pill";

const LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 3,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "var(--nav-bg)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
      }}
    >
      <nav
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 32px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "var(--foreground)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          Spencer D&apos;Avis
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex" style={{ gap: 28, alignItems: "center" }}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link" style={{ fontSize: 13 }}>
              {l.label}
            </Link>
          ))}
          <a
            href="/spencer-davis-resume.pdf"
            download
            className="nav-link"
            style={{ fontSize: 13, display: "inline-flex", alignItems: "center", gap: 4 }}
          >
            Resume <Download size={12} />
          </a>
          <WeatherPill />
        </div>

        {/* Mobile */}
        <div className="flex md:hidden" style={{ gap: 12, alignItems: "center" }}>
          <WeatherPill />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            style={{ color: "var(--foreground)", background: "none", border: "none", cursor: "pointer" }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden" style={{ background: "var(--background)", padding: "8px 32px 32px" }}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="nav-link"
              style={{ display: "block", padding: "12px 0", fontSize: 15 }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/spencer-davis-resume.pdf"
            download
            className="nav-link"
            style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 0", fontSize: 15 }}
          >
            Resume <Download size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
