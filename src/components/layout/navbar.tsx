"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { WeatherPill } from "./weather-pill";

const LINKS = [
  { label: "Work", href: "/projects" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "Resume", href: "/spencer-davis-resume.pdf" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-paper transition-colors duration-100 ${
        scrolled ? "border-b border-hairline" : "border-b border-transparent"
      }`}
    >
      <nav
        className={`container-site flex items-center justify-between transition-[padding] duration-100 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Link
          href="/"
          className="font-mono text-sm font-medium uppercase tracking-[0.08em] text-ink"
        >
          Spencer D&apos;Avis
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link label-mono">
              {l.label}
            </Link>
          ))}
          <WeatherPill />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <WeatherPill />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="-mr-2 flex h-11 w-11 items-center justify-center text-ink transition-colors duration-100 hover:text-ink-muted"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="container-site flex flex-col border-t border-hairline pb-6 md:hidden"
        >
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="nav-link label-mono flex min-h-[44px] items-center border-b border-hairline"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
