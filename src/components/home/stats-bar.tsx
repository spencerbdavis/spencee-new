import { PORTFOLIO_STATS } from "@/lib/stats";

export function StatsBar() {
  return (
    <section style={{ background: "var(--background)" }}>
      <div
        className="stats-grid"
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "56px 32px",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 24,
        }}
      >
        {PORTFOLIO_STATS.map((stat) => (
          <div key={stat.label}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 32,
                fontWeight: 600,
                color: "var(--foreground)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </p>
            <p
              style={{
                fontSize: 12,
                lineHeight: 1.4,
                color: "var(--muted-foreground)",
                marginTop: 8,
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
