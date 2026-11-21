import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import { JsonLd } from "@/components/seo/json-ld";
import { ALL_PROJECTS } from "@/lib/projects";
import { SITE_CONFIG } from "@/lib/config";
import { BUSINESS_JSONLD, SERVICE_AREAS, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import type { ServicePage } from "@/lib/services";

export function ServiceTemplate({ s }: { s: ServicePage }) {
  const proof = s.proof
    .map((slug) => ALL_PROJECTS.find((p) => p.slug === slug))
    .filter((p): p is (typeof ALL_PROJECTS)[number] => Boolean(p));
  const path = `/services/${s.slug}`;

  return (
    <div className="pt-24 pb-24 md:pt-32 md:pb-28">
      <JsonLd data={BUSINESS_JSONLD} />
      <JsonLd data={serviceJsonLd({ name: s.name, description: s.description, path, serviceType: s.serviceType })} />
      <JsonLd data={faqJsonLd(s.faqs)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Services", path: "/services" }, { name: s.name, path }])} />

      <section className="container-site">
        <Link href="/services" className="nav-link label-mono inline-flex items-center gap-2">
          <ArrowLeft size={14} /> Services
        </Link>
        <p className="label-mono mt-8">{s.name} · Seattle · Renton · Eastside · Remote US</p>
        <h1 className="text-h2 mt-4 max-w-[52rem]">{s.h1}</h1>
        <p className="mt-6 max-w-[44rem] text-lg leading-relaxed text-ink-muted md:text-xl">{s.lede}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(`Project inquiry: ${s.name}`)}`} className="btn-signal">
            Email about a project
          </a>
          <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
            Message on LinkedIn
          </a>
        </div>

        <dl className="card mt-12 grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {s.proofStats.map((st) => (
            <div key={st.label} className="p-6">
              <dd className="font-mono text-3xl font-semibold tracking-tight tabular-nums">{st.value}</dd>
              <dt className="label-mono mt-1.5">{st.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-site mt-20 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="text-h3 text-2xl">Who it&apos;s for</h2>
          <ul className="mt-5 space-y-3">
            {s.forWho.map((f) => (
              <li key={f} className="flex gap-3 text-ink-muted">
                <Check size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-8">
          <h2 className="text-h3 text-2xl">What you get</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {s.deliverables.map((d) => (
              <div key={d.title} className="card p-5">
                <h3 className="font-semibold">{d.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site mt-20">
        <h2 className="text-h3 text-2xl">How a project runs</h2>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {s.process.map((p, i) => (
            <li key={p.title} className="rounded-2xl border border-line p-5">
              <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-2 font-semibold">{p.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{p.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-site mt-20">
        <h2 className="text-h3 text-2xl">Proof: work I&apos;ve shipped</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {proof.map((p) => (
            <ProjectCard key={p.slug} project={p} compact />
          ))}
        </div>
      </section>

      <section className="container-site mt-20 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="text-h3 text-2xl">Questions</h2>
          <p className="mt-3 text-sm text-ink-muted">
            Serving {SERVICE_AREAS.slice(0, -1).join(", ")} and {SERVICE_AREAS.at(-1)}, WA, and clients anywhere in the US remotely.
          </p>
        </div>
        <div className="md:col-span-8">
          {s.faqs.map((f) => (
            <details key={f.q} className="group border-t border-line py-4 last:border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {f.q}
                <span aria-hidden className="font-mono text-accent transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-ink-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container-site mt-20">
        <div className="card bg-grid p-8 md:p-12">
          <p className="text-2xl font-semibold tracking-tight md:text-4xl">Tell me what you&apos;re trying to fix.</p>
          <p className="mt-3 max-w-xl text-ink-muted">A short email is enough. I reply within two business days with questions or a rough plan.</p>
          <a href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(`Project inquiry: ${s.name}`)}`} className="btn-signal mt-6">
            {SITE_CONFIG.email}
          </a>
        </div>
      </section>
    </div>
  );
}
