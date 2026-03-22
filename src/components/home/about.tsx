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
            marginBottom: 12,
          }}
        >
          About
        </p>
        <p
          style={{
            fontSize: 13,
            color: "var(--muted-foreground)",
            marginBottom: 24,
          }}
        >
          Currently at Bonavista Property Management
        </p>
        <p
          style={{
            fontSize: 24,
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: "-0.02em",
            color: "var(--foreground)",
            maxWidth: 640,
          }}
        >
          I started in marketing, taught myself to code, and in under two
          years built the full technical stack for a 60+ property real estate
          portfolio.
        </p>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.65,
            color: "var(--muted-foreground)",
            maxWidth: 640,
            marginTop: 24,
          }}
        >
          I&apos;ve shipped an iOS app to the App Store, built a Chrome extension
          that bridges a legacy property management system with no public API,
          automated receipt processing with Gemini, and rolled out ChatGPT
          Enterprise to 48 users at a company that had never touched AI. I work
          best when I can own a problem end-to-end — understand the business
          need, architect the solution, and ship it.
        </p>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.65,
            color: "var(--muted-foreground)",
            maxWidth: 640,
            marginTop: 16,
          }}
        >
          I&apos;m looking for a role where technical depth meets real customer
          impact. My best work happens when I&apos;m close to the users —
          building, training, and iterating based on what they actually need.
        </p>
      </div>
    </section>
  );
}
