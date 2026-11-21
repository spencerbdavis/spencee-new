import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

const linkClass =
  "label-mono transition-colors duration-100 hover:text-ink focus-visible:text-ink";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div>
        <div className="container-site swiss-grid gap-y-10 py-16 md:py-20">
          <div className="col-span-4 md:col-span-4">
            <p className="label-mono">Spencer D&apos;Avis</p>
            <p className="label-mono mt-2">
              &copy; {new Date().getFullYear()} &middot; Renton / Seattle, WA
            </p>
          </div>

          <nav aria-label="Footer navigation" className="col-span-2 flex flex-col gap-3 md:col-span-3 md:col-start-7">
            <Link href="/projects" className={linkClass}>
              Work
            </Link>
            <Link href="/about" className={linkClass}>
              About
            </Link>
            <Link href="/services" className={linkClass}>Services</Link>
            <Link href="/services/web-development" className={linkClass}>Web development</Link>
            <Link href="/services/local-seo" className={linkClass}>Local SEO</Link>
            <Link href="/services/ai-automation" className={linkClass}>AI automation</Link>
            <Link href="/services/property-management-marketing" className={linkClass}>Property marketing</Link>
            <Link href="/#contact" className={linkClass}>
              Contact
            </Link>
          </nav>

          <div className="col-span-2 flex flex-col gap-3 md:col-span-3 md:col-start-10">
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
