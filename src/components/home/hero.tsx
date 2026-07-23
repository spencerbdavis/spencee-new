import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { AVAILABILITY, HEADLINE, HERO_META, SUB_HEADLINE } from "@/lib/config";

// Load-choreography helper: static per-element delay fed to the .load-rise
// keyframe via the --reveal-delay CSS var (desktop-only gating lives in CSS).
const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

// Split the headline so the trailing period is the lone accent mark.
const headlineDot = HEADLINE.endsWith(".");
const headlineText = headlineDot ? HEADLINE.slice(0, -1) : HEADLINE;

export function Hero() {
  return (
    <section className="bg-paper">
      <div className="container-site py-24 md:py-36">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12 md:items-start">
          {/* Type column — dominant */}
          <div className="md:col-span-8">
            <h1 className="load-rise text-display font-sans text-ink" style={delay(0)}>
              {headlineText}
              {headlineDot && <span className="hero-blink text-accent">.</span>}
            </h1>

            <p
              className="load-rise mt-8 max-w-[34rem] text-lg leading-relaxed text-ink-muted"
              style={delay(120)}
            >
              {SUB_HEADLINE}
            </p>

            <p
              className="load-rise mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 label-mono"
              style={delay(200)}
            >
              {HERO_META.map((item, i) => (
                <span key={item} className="inline-flex items-center gap-x-2">
                  {i > 0 && (
                    <span aria-hidden className="text-hairline">
                      /
                    </span>
                  )}
                  {item}
                </span>
              ))}
            </p>

            <div className="load-rise mt-10 flex flex-wrap items-center gap-4" style={delay(280)}>
              <a href="/spencer-davis-resume.pdf" download className="btn-solid">
                Resume
              </a>
              <Link href="#contact" className="btn-outline">
                Contact
              </Link>
            </div>

            <p className="load-rise mt-8 max-w-[34rem] font-mono text-xs leading-relaxed text-ink-muted" style={delay(360)}>
              {AVAILABILITY}
            </p>
          </div>

          {/* Headshot — modest square plate, secondary to the type */}
          <div className="load-rise md:col-span-4" style={delay(440)}>
            <figure className="w-full max-w-52">
              <div className="relative aspect-square border border-hairline bg-paper-tint">
                <Image
                  src="/headshot.jpg"
                  alt="Spencer D'Avis"
                  fill
                  priority
                  sizes="(min-width: 768px) 13rem, 13rem"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 label-mono">Spencer D&apos;Avis</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
