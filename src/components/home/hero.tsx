import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowDown } from "lucide-react";
import { AVAILABILITY, HEADLINE, HERO_META, SUB_HEADLINE } from "@/lib/config";

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section className="relative">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_25%,transparent_70%)]" />
      <div className="container-site relative pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="flex flex-wrap items-center gap-3 load-rise" style={delay(0)}>
          <span className="tag">
            <span aria-hidden className="live-dot h-1.5 w-1.5 rounded-full bg-live" />
            Seattle · Renton · Remote US
          </span>
          <span className="tag hidden sm:inline-flex">Taking on local clients</span>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-9">
            <h1 className="text-display load-rise max-w-[56rem]" style={delay(40)}>
              {HEADLINE.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="text-gradient">{HEADLINE.split(" ").slice(-2).join(" ")}</span>
            </h1>
            <p className="load-rise mt-8 max-w-[44rem] text-lg leading-relaxed text-ink-muted md:text-xl" style={delay(120)}>
              {SUB_HEADLINE}
            </p>
            <div className="load-rise mt-8 flex flex-wrap items-center gap-3" style={delay(200)}>
              <Link href="#work" className="btn-solid">
                See the work <ArrowDown size={15} />
              </Link>
              <Link href="/services" className="btn-signal">
                Hire me for a project
              </Link>
              <a href="/spencer-davis-resume.pdf" download className="btn-outline">
                Résumé
              </a>
            </div>
          </div>
          <div className="load-rise hidden lg:col-span-3 lg:block" style={delay(260)}>
            <figure className="card ml-auto w-full max-w-64 overflow-hidden p-0">
              <div className="relative aspect-[4/5]">
                <Image src="/headshot.jpg" alt="Spencer D'Avis smiling on a boat, water and clouds behind" fill priority sizes="16rem" className="object-cover" />
              </div>
              <figcaption className="flex items-center justify-between px-4 py-3">
                <span className="text-sm font-semibold">Spencer D&apos;Avis</span>
                <span className="label-mono">Engineer</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <ul className="load-rise mt-10 flex flex-wrap gap-2" style={delay(300)}>
          {HERO_META.map((m) => (
            <li key={m} className="tag">
              {m}
            </li>
          ))}
        </ul>

        <p className="load-rise mt-8 text-sm text-ink-muted" style={delay(360)}>{AVAILABILITY}</p>
      </div>
    </section>
  );
}
