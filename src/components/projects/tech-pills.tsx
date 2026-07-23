interface TechPillsProps {
  items: string[];
  max?: number;
}

export function TechPills({ items, max }: TechPillsProps) {
  const visible = max ? items.slice(0, max) : items;
  const remaining = max ? items.length - max : 0;

  return (
    <div className="flex flex-wrap gap-2">
      {visible.map((item) => (
        <span key={item} className="tag">
          {item}
        </span>
      ))}
      {remaining > 0 && <span className="label-mono inline-flex items-center px-1">+{remaining}</span>}
    </div>
  );
}
