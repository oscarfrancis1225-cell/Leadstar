type ResultStatProps = {
  label: string;
  value: string;
  hint?: string;
  primary?: boolean;
};

export function ResultStat({ label, value, hint, primary = false }: ResultStatProps) {
  if (primary) {
    return (
      <div>
        <p className="text-sm font-medium text-navy">{label}</p>
        <p className="headline mt-2 break-words text-3xl tabular-nums text-navy sm:text-4xl">
          {value}
        </p>
        <p className="mt-2 text-sm text-muted">{hint ?? "Illustrated estimate"}</p>
      </div>
    );
  }

  return (
    <div className="flex items-start justify-between gap-4 border-t border-line py-3">
      <p className="text-sm text-muted">{label}</p>
      <p className="text-right text-sm font-semibold tabular-nums text-navy">{value}</p>
    </div>
  );
}
