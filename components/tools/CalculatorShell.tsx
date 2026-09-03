type CalculatorShellProps = {
  children: React.ReactNode;
  results: React.ReactNode;
  assumptions?: React.ReactNode;
  summary?: {
    label: string;
    value: string;
  };
  keep?: React.ReactNode;
};

export function CalculatorShell({
  children,
  results,
  assumptions,
  summary,
  keep,
}: CalculatorShellProps) {
  return (
    <div className="rounded-[18px] border border-line bg-white p-4 shadow-card sm:p-6 lg:p-8">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-10">
        <div className="no-print">
          <p className="eyebrow">Enter your numbers</p>
          <div className="mt-4 grid gap-4 sm:gap-5">{children}</div>
          {assumptions ? <div className="mt-5">{assumptions}</div> : null}
          {summary ? (
            <div
              role="status"
              aria-live="polite"
              className="sticky bottom-[max(0.5rem,env(safe-area-inset-bottom))] z-20 mt-5 flex items-center justify-between gap-3 rounded-[12px] bg-navy px-4 py-3 shadow-header lg:hidden"
            >
              <p className="text-xs text-white/70">{summary.label}</p>
              <p className="text-right text-sm font-semibold tabular-nums text-white">
                {summary.value}
              </p>
            </div>
          ) : null}
        </div>
        <div className="lg:sticky lg:top-24">
          <p className="eyebrow no-print">What the illustration shows</p>
          <div className="mt-4 rounded-[14px] bg-cream p-4 sm:p-5">
            {results}
            {keep}
          </div>
        </div>
      </div>
    </div>
  );
}
