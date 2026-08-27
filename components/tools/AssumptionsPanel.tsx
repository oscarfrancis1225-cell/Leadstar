type AssumptionsPanelProps = {
  children: React.ReactNode;
};

export function AssumptionsPanel({ children }: AssumptionsPanelProps) {
  return (
    <details className="group rounded-[12px] border border-line bg-cream/80 p-4">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-navy [&::-webkit-details-marker]:hidden">
        Planning assumptions
        <span className="text-xs font-medium text-muted group-open:hidden">
          Optional
        </span>
        <span className="hidden text-xs font-medium text-muted group-open:inline">
          Hide
        </span>
      </summary>
      <div className="mt-4 grid gap-4">{children}</div>
    </details>
  );
}
