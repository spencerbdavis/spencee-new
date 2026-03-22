interface TechPillsProps {
  items: string[];
  max?: number;
}

export function TechPills({ items, max }: TechPillsProps) {
  const visible = max ? items.slice(0, max) : items;
  const remaining = max ? items.length - max : 0;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      {visible.map((item) => (
        <span key={item} className="pill">{item}</span>
      ))}
      {remaining > 0 && (
        <span style={{ fontSize: 11, color: "var(--muted-foreground)", padding: "5px 4px" }}>
          +{remaining}
        </span>
      )}
    </div>
  );
}
