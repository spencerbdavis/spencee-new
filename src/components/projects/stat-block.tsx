const DESKTOP_COLS: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
};

export function StatBlock({ stats }: { stats: { value: string; label: string }[] }) {
  const cols = DESKTOP_COLS[Math.min(stats.length, 5)] ?? "md:grid-cols-5";

  return (
    <div className={`grid grid-cols-2 divide-x divide-y divide-hairline border border-hairline ${cols}`}>
      {stats.map((s) => (
        <div key={s.label} className="p-6 text-center">
          <p className="break-words font-mono text-2xl leading-none font-semibold tracking-tight text-ink sm:text-3xl">
            {s.value}
          </p>
          <p className="label-mono mt-2">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
