interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <h2
        className="text-[13px] font-semibold tracking-[-0.01em] uppercase"
        style={{ color: "var(--muted-foreground)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 max-w-xl text-[17px] leading-[1.5] tracking-[-0.01em]"
          style={{ color: "var(--muted-foreground)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
