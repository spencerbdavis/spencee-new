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
}: {
  eyebrow: string;
  title: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div>
      <Reveal className="reveal-rule">
        <div aria-hidden className="h-[3px] w-full bg-ink" />
      </Reveal>
      <div className="flex items-end justify-between gap-4 pt-6">
        <Reveal className="reveal-rise" delay={120}>
          <p className="label-mono">{eyebrow}</p>
          <h2 className="text-h2 mt-3">{title}</h2>
        </Reveal>
        {action ? (
          <Reveal className="reveal-rise shrink-0" delay={220}>
            {action}
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
