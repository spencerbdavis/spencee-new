export function StatBlock({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <>
      <div
        className="stat-block-grid"
        style={{
          background: "var(--section-alt)",
          borderRadius: 20,
          padding: "40px 24px",
          display: "grid",
          gridTemplateColumns: `repeat(${Math.min(stats.length, 5)}, 1fr)`,
          gap: 16,
          textAlign: "center",
        }}
      >
        {stats.map((s) => (
          <div key={s.label} style={{ minWidth: 0 }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(18px, 4vw, 28px)",
                fontWeight: 600,
                color: "var(--foreground)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                wordBreak: "break-word",
              }}
            >
              {s.value}
            </p>
            <p style={{ fontSize: 11, color: "var(--muted-foreground)", marginTop: 6, lineHeight: 1.3 }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 640px) {
          .stat-block-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
            padding: 32px 20px !important;
          }
        }
      `}</style>
    </>
  );
}
