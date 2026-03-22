export function StatBlock({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div
      style={{
        background: "var(--section-alt)",
        borderRadius: 20,
        padding: "48px 32px",
        display: "grid",
        gridTemplateColumns: `repeat(${Math.min(stats.length, 5)}, 1fr)`,
        gap: 24,
        textAlign: "center",
      }}
    >
      {stats.map((s) => (
        <div key={s.label}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 28,
              fontWeight: 600,
              color: "var(--foreground)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            {s.value}
          </p>
          <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 6 }}>
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
