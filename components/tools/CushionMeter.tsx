import { cn } from "@/lib/utils";

type CushionMeterProps = {
  months: number | null;
  band: "none" | "limited" | "moderate" | "stronger";
};

const labels = [
  { id: "limited", label: "Limited", range: "0–3 mo" },
  { id: "moderate", label: "Moderate", range: "3–6 mo" },
  { id: "stronger", label: "Stronger", range: "6+ mo" },
] as const;

export function CushionMeter({ months, band }: CushionMeterProps) {
  const fill = months === null ? 0 : Math.min(100, (months / 12) * 100);

  return (
    <div>
      <div className="relative h-2.5 overflow-visible rounded-full bg-white">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-navy"
          style={{ width: `${fill}%` }}
        />
        {months !== null ? (
          <span
            className="absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-white bg-gold shadow-soft"
            style={{ left: `min(calc(${fill}% - 7px), calc(100% - 14px))` }}
          />
        ) : null}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs text-muted">
        {labels.map((item) => (
          <p
            key={item.id}
            className={cn(band === item.id && "font-semibold text-navy")}
          >
            {item.label}
            <span className="mt-0.5 block font-normal">{item.range}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
