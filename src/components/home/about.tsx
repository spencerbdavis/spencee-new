const CAPABILITIES = [
  {
    title: "Full-Stack Development",
    description: "Next.js, React Native, iOS, Chrome Extensions — shipped to production across web, mobile, and browser.",
    highlight: "13 production apps",
  },
  {
    title: "AI & Automation",
    description: "Gemini OCR pipelines, RAG search with ChromaDB, prompt engineering, and serverless GPU compute on Modal.",
    highlight: "1,000 receipts/mo processed",
  },
  {
    title: "AI Enablement & Adoption",
    description: "Led ChatGPT Enterprise rollout across a 48-person org with no prior AI usage — built onboarding docs, custom workflows, and tracked adoption metrics.",
    highlight: "0 → 48 users adopted",
  },
  {
    title: "Systems Integration",
    description: "Connected Yardi, Microsoft Graph, Matterport, Google Business Profile, and Apple Business Connect into unified platforms.",
    highlight: "10+ APIs integrated",
  },
];

export function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--section-alt)",
        scrollMarginTop: 80,
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "80px 32px",
        }}
      >
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "var(--accent)",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            marginBottom: 12,
          }}
        >
          What I Do
        </p>
        <p
          style={{
            fontSize: 20,
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: "-0.02em",
            color: "var(--foreground)",
            maxWidth: 540,
            marginBottom: 40,
          }}
        >
          I work best when I can own a problem end-to-end — understand the
          business need, architect the solution, and ship it.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.title}
              className="card"
              style={{ padding: 24, display: "flex", flexDirection: "column" }}
            >
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--foreground)",
                  letterSpacing: "-0.01em",
                }}
              >
                {cap.title}
              </p>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: "var(--muted-foreground)",
                  marginTop: 8,
                  flex: 1,
                }}
              >
                {cap.description}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--accent)",
                  marginTop: 16,
                }}
              >
                {cap.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
