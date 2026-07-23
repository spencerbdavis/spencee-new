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
      <div className="flex flex-wrap gap-6 border-b border-hairline">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            className={`label-mono -mb-px border-b-2 pb-3 transition-colors duration-100 ${
              active === i ? "border-ink text-ink" : "border-transparent hover:text-ink"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-10">{tabs[active].content}</div>
    </div>
  );
}
