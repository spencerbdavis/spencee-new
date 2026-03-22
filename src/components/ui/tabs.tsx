"use client";

import { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

export function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            style={{
              padding: "10px 20px",
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s",
              background: active === i ? "var(--accent)" : "var(--muted)",
              color: active === i ? "#fff" : "var(--muted-foreground)",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 40 }}>{tabs[active].content}</div>
    </div>
  );
}
