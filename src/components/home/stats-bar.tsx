import { PORTFOLIO_STATS } from "@/lib/stats";

export function StatsBar() {
  return (
    <section style={{ background: "var(--background)" }}>
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "64px 32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 40,
          textAlign: "center",
        }}
      >
        {PORTFOLIO_STATS.map((stat) => (
          <div key={stat.label}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 36,
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
                fontSize: 13,
                color: "var(--muted-foreground)",
                marginTop: 8,
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
