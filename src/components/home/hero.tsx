import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { AVAILABILITY, HEADLINE, HERO_META, SUB_HEADLINE } from "@/lib/config";

// Load-choreography helper: static per-element delay fed to the .load-rise
// keyframe via the --reveal-delay CSS var (desktop-only gating lives in CSS).
const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section className="bg-paper">
      <div className="container-site pt-28 pb-20 md:pt-40 md:pb-28">
        <div className="rule-thick pt-5">
          <p className="load-rise label-mono" style={delay(0)}>Engineer / Seattle / 2026</p>
        </div>
        <div className="swiss-grid mt-10 gap-y-12 md:mt-16 md:items-start">
          <div className="col-span-4 md:col-span-9">
            <h1 className="load-rise text-display max-w-[62rem] font-sans text-ink" style={delay(40)}>
              {HEADLINE}
            </h1>

            <p
              className="load-rise mt-10 max-w-[42rem] text-xl leading-relaxed text-ink-muted"
              style={delay(120)}
            >
              {SUB_HEADLINE}
            </p>

            <div className="load-rise mt-10 grid grid-cols-2 border-y border-hairline sm:grid-cols-4" style={delay(200)}>
              {HERO_META.map((item, i) => (
                <span key={item} className={`label-mono py-4 ${i % 2 ? "border-l border-hairline pl-4" : ""} ${i > 1 ? "border-t border-hairline sm:border-t-0" : ""} sm:border-l sm:pl-4 first:sm:border-l-0 first:sm:pl-0`}>
                  {String(i + 1).padStart(2, "0")} &nbsp; {item}
                </span>
              ))}
            </div>

            <div className="load-rise mt-10 flex flex-wrap items-center gap-4" style={delay(280)}>
              <Link href="#work" className="btn-solid">
                Selected work
              </Link>
              <a href="/spencer-davis-resume.pdf" download className="btn-outline">Résumé</a>
            </div>

            <p className="load-rise mt-8 max-w-[42rem] text-sm leading-relaxed text-ink-muted" style={delay(360)}>
              {AVAILABILITY}
            </p>
          </div>

          <div className="load-rise col-span-3 md:col-span-3 md:pt-2" style={delay(300)}>
            <figure className="w-full max-w-64 md:ml-auto">
              <div className="relative aspect-square border border-hairline bg-paper-tint">
                <Image
                  src="/headshot.jpg"
                  alt="Spencer D'Avis"
                  fill
                  priority
                  sizes="(min-width: 768px) 16rem, 75vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 flex justify-between gap-3 label-mono"><span>Spencer D&apos;Avis</span><span>01</span></figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
