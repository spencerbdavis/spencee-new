import { SKILLS } from "@/lib/skills";

export function Skills() {
  return (
    <section id="skills" style={{ scrollMarginTop: 80 }}>
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "96px 32px",
        }}
      >
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "var(--accent)",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            marginBottom: 48,
          }}
        >
          Skills
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 48,
          }}
        >
          {SKILLS.map((group) => (
            <div key={group.category}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--muted-foreground)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 16,
                }}
              >
                {group.category}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.items.map((skill) => (
                  <span key={skill} className="pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
