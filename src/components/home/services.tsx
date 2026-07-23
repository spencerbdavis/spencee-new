import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeader } from "@/components/shared/section-header";
import { SERVICES } from "@/lib/services";

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeader eyebrow="Services" title="What I do" />

        <div className="mt-12 md:mt-16">
          {SERVICES.map((service, i) => (
            <Reveal key={service.number} delay={i * 70} className="reveal-rise">
              <div className="hairline py-10 md:py-12 md:grid md:grid-cols-[7rem_1fr] md:gap-8">
                <div className="font-mono text-accent text-4xl md:text-5xl leading-none">
                  {service.number}
                </div>

                <div className="mt-4 md:mt-0">
                  <h3 className="text-h3">{service.title}</h3>
                  <p className="mt-3 max-w-2xl text-ink-muted leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.deliverables.map((d) => (
                      <span key={d} className="tag">
                        {d}
                      </span>
                    ))}
                  </div>

                  {service.clients && (
                    <p className="mt-4 label-mono">{service.clients.join("  ·  ")}</p>
                  )}

                  <Link
                    href={`/projects/${service.relatedSlugs[0]}`}
                    className="nav-link mt-6 inline-flex items-center gap-2 font-mono text-sm"
                  >
                    See work
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
