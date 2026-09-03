"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type CalculatorFieldProps = {
  id: string;
  label: string;
  hint?: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
};

function formatFieldValue(value: number, prefix?: string) {
  if (!Number.isFinite(value)) {
    return "0";
  }

  if (prefix === "$") {
    return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(
      value,
    );
  }

  return String(value);
}

export function CalculatorField({
  id,
  label,
  hint,
  value,
  onChange,
  min,
  max,
  step = 1,
  prefix,
  suffix,
}: CalculatorFieldProps) {
  const [draft, setDraft] = useState<string | null>(null);
  const bounded = Math.min(max, Math.max(min, value));
  const progress = max === min ? 0 : ((bounded - min) / (max - min)) * 100;

  return (
    <div className="scroll-mt-[5.5rem]">
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-xs leading-5 text-muted">
          {hint}
        </p>
      ) : null}
      <div className="relative mt-2">
        {prefix ? (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-muted">
            {prefix}
          </span>
        ) : null}
        <input
          id={id}
          className={cn(
            "input input-no-spinner tabular-nums",
            prefix && "pl-8",
            suffix && "pr-12",
          )}
          type="text"
          inputMode="decimal"
          enterKeyHint="done"
          autoComplete="off"
          aria-describedby={hint ? `${id}-hint` : undefined}
          value={draft ?? formatFieldValue(value, prefix)}
          onFocus={() => setDraft(String(Number.isFinite(value) ? value : 0))}
          onBlur={() => {
            if (draft !== null) {
              const stripped = draft.replace(/[^\d.-]/g, "").trim();
              if (stripped === "" || stripped === "-") {
                onChange(0);
              }
            }
            setDraft(null);
          }}
          onChange={(event) => {
            const nextDraft = event.target.value;
            setDraft(nextDraft);
            const stripped = nextDraft.replace(/[^\d.-]/g, "");
            if (stripped === "" || stripped === "-") {
              return;
            }
            const next = Number(stripped);
            if (Number.isFinite(next)) {
              onChange(next);
            }
          }}
        />
        {suffix ? (
          <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-muted">
            {suffix}
          </span>
        ) : null}
      </div>
      <div className="relative mt-0.5 h-11">
        <div className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-line">
          <div
            className="h-full rounded-full bg-gold"
            style={{ width: `${progress}%` }}
          />
        </div>
        <input
          className="calculator-slider relative z-10"
          type="range"
          min={min}
          max={max}
          step={step}
          value={bounded}
          aria-labelledby={id}
          onChange={(event) => {
            setDraft(null);
            onChange(Number(event.target.value));
          }}
        />
      </div>
    </div>
  );
}
