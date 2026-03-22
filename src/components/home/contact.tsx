import { Mail, Linkedin, Github } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const CONTACTS = [
  { label: "Email", href: `mailto:${SITE_CONFIG.email}`, icon: Mail, display: SITE_CONFIG.email },
  { label: "LinkedIn", href: SITE_CONFIG.linkedin, icon: Linkedin, display: "LinkedIn" },
  { label: "GitHub", href: SITE_CONFIG.github, icon: Github, display: "GitHub" },
];

export function Contact() {
  return (
    <section
      id="contact"
      style={{ background: "var(--section-alt)", scrollMarginTop: 80 }}
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
            marginBottom: 32,
          }}
        >
          Contact
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.label !== "Email" ? "_blank" : undefined}
              rel={c.label !== "Email" ? "noopener noreferrer" : undefined}
              className="contact-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              <c.icon size={18} strokeWidth={1.5} />
              {c.display}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
