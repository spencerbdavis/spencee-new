import type { ReactNode } from "react";
import { Reveal } from "@/components/shared/reveal";

/**
 * Swiss section header: the thick rule draws in left→right on scroll,
 * then the eyebrow + title rise, then the optional action. On touch /
 * reduced motion these degrade to a plain fade (or nothing), handled by
 * the reveal-* classes in globals.css.
 */
export function SectionHeader({
  eyebrow,
  title,
  action,
  number,
}: {
  eyebrow: string;
  title: ReactNode;
  action?: ReactNode;
  number?: string;
}) {
  return (
    <div>
      <Reveal className="reveal-rule">
        <div aria-hidden className="h-[3px] w-full bg-ink" />
      </Reveal>
      <div className="swiss-grid items-end pt-6">
        <Reveal className="reveal-rise col-span-4 md:col-span-2" delay={80}>
          <p className="label-mono">{number ? `${number} / ` : ""}{eyebrow}</p>
        </Reveal>
        <Reveal className="reveal-rise col-span-4 mt-4 md:col-span-7 md:mt-0" delay={120}>
          <h2 className="text-h2">{title}</h2>
        </Reveal>
        {action ? (
          <Reveal className="reveal-rise col-span-4 mt-5 md:col-span-3 md:mt-0 md:justify-self-end" delay={180}>
            {action}
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
