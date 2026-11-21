import Link from "next/link";
import { ArrowUpRight, Briefcase, Hammer } from "lucide-react";
import { SERVICE_PAGES, LOCAL_SEO_SERVICE } from "@/lib/services";

/** Two ways to work together: full-time role (primary) or a project (secondary). */
export function TwoPaths() {
  const services = [
    SERVICE_PAGES.find((s) => s.slug === "web-development")!,
    LOCAL_SEO_SERVICE,
    ...SERVICE_PAGES.filter((s) => s.slug !== "web-development"),
  ];
  return (
    <section id="hire" className="py-20 md:py-24">
      <div className="container-site">
        <p className="label-mono">Work with me</p>
        <h2 className="text-h2 mt-3">Two ways to work together.</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="card flex flex-col bg-ink p-8 text-paper md:p-10">
            <Briefcase aria-hidden className="text-signal" />
            <h3 className="mt-5 text-3xl font-semibold tracking-tight">Hire me full-time</h3>
            <p className="mt-3 leading-relaxed opacity-80">
              Remote US individual-contributor roles in applied AI, integrations, forward-deployed and internal-tools
              engineering. I own work from architecture through production support, and I&apos;ve shipped every system on
              this page.
            </p>
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              <a href="/spencer-davis-resume.pdf" download className="btn-signal">
                Download résumé
              </a>
              <Link href="/about" className="btn-outline !border-paper/30 !text-paper hover:!border-paper">
                About me
              </Link>
            </div>
          </div>

          <div className="card flex flex-col p-8 md:p-10">
            <Hammer aria-hidden className="text-accent" />
            <h3 className="mt-5 text-3xl font-semibold tracking-tight">Hire me for a project</h3>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Websites, local SEO, AI automation and property-management marketing for Seattle-area businesses and remote
              clients. Fixed quotes, and you work with the person who builds it.
            </p>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="group flex items-center justify-between gap-3 py-3 font-medium">
                    {s.name}
                    <ArrowUpRight size={15} className="text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
