import { Reveal } from "@/components/shared/reveal";
import { SITE_CONFIG } from "@/lib/config";

const LINKS = [
  { label: "LinkedIn", href: SITE_CONFIG.linkedin },
  { label: "GitHub", href: SITE_CONFIG.github },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-paper">
      <div className="container-site py-24 md:py-32">
        <Reveal className="reveal-rule">
          <div aria-hidden className="h-[3px] w-full bg-ink" />
        </Reveal>
        <Reveal className="reveal-rise" delay={120}>
          <p className="label-mono pt-4">Contact</p>
        </Reveal>

        <Reveal className="reveal-rise" delay={80}>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="mt-10 block text-h2 font-sans text-ink underline-offset-4 hover:underline"
          >
            {SITE_CONFIG.email}
          </a>
        </Reveal>

        <Reveal className="reveal-rise" delay={160}>
          <div className="mt-16 max-w-[34rem]">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group contact-link label-mono flex min-h-[44px] items-center justify-between border-t border-hairline"
              >
                <span>{l.label}</span>
                <span aria-hidden className="text-hairline transition-colors duration-100 group-hover:text-accent">
                  &#8599;
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
