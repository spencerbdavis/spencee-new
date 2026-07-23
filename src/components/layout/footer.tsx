import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { FooterScene } from "./footer-scene";

const linkClass =
  "label-mono transition-colors duration-100 hover:text-ink focus-visible:text-ink";

export function Footer() {
  return (
    <footer className="overflow-hidden">
      {/* Scene — full bleed; owned by another workstream, left as-is */}
      <FooterScene />

      <div className="hairline">
        <div className="container-site grid grid-cols-1 gap-10 py-16 md:grid-cols-3 md:py-20">
          <div>
            <p className="label-mono">Spencer D&apos;Avis</p>
            <p className="label-mono mt-2">
              &copy; {new Date().getFullYear()} &middot; Seattle, WA
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            <Link href="/projects" className={linkClass}>
              Work
            </Link>
            <Link href="/#services" className={linkClass}>
              Services
            </Link>
            <Link href="/#about" className={linkClass}>
              About
            </Link>
            <Link href="/#contact" className={linkClass}>
              Contact
            </Link>
          </nav>

          <div className="flex flex-col gap-3">
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              LinkedIn
            </a>
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              GitHub
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className={linkClass}>
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
