type ResultStatProps = {
  label: string;
  value: string;
};

/** One supporting figure. The label carries the unit, so the number is never ambiguous. */
export function ResultStat({ label, value }: ResultStatProps) {
  return (
    <div className="flex items-start justify-between gap-4 border-t border-line py-2.5">
      <p className="text-sm text-muted">{label}</p>
      <p className="text-right text-sm font-semibold tabular-nums text-navy">{value}</p>
    </div>
  );
}
