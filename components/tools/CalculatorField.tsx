"use client";

import { useId, useState } from "react";
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

function formatBound(value: number, prefix?: string, suffix?: string) {
  const number = formatFieldValue(value, prefix);
  if (prefix === "$") {
    return `$${number}`;
  }
  if (suffix) {
    return `${number} ${suffix}`;
  }
  return number;
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
  const errorId = useId();
  const hintId = `${id}-hint`;
  const sliderId = `${id}-slider`;
  const bounded = Math.min(max, Math.max(min, value));
  const progress = max === min ? 0 : ((bounded - min) / (max - min)) * 100;
  const outOfRange = Number.isFinite(value) && (value < min || value > max);
  const error = outOfRange
    ? `Enter a number from ${formatBound(min, prefix, suffix)} to ${formatBound(max, prefix, suffix)}.`
    : "";

  function commitDraft(raw: string) {
    const stripped = raw.replace(/[^\d.-]/g, "").trim();
    if (stripped === "" || stripped === "-") {
      onChange(0);
      return;
    }
    const next = Number(stripped);
    if (Number.isFinite(next)) {
      onChange(next);
    }
  }

  return (
    <div className="scroll-mt-[5.5rem]">
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}
      </label>
      {hint ? (
        <p id={hintId} className="mt-1 text-xs leading-5 text-muted">
          {hint}
        </p>
      ) : null}
      <div className="relative mt-2">
        {prefix ? (
          <span
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-muted"
            aria-hidden="true"
          >
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
          aria-invalid={outOfRange || undefined}
          aria-describedby={[hint ? hintId : null, error ? errorId : null]
            .filter(Boolean)
            .join(" ") || undefined}
          value={draft ?? formatFieldValue(value, prefix)}
          onFocus={() => setDraft(String(Number.isFinite(value) ? value : 0))}
          onBlur={() => {
            if (draft !== null) {
              commitDraft(draft);
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
          <span
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-muted"
            aria-hidden="true"
          >
            {suffix}
          </span>
        ) : null}
      </div>
      {error ? (
        <p id={errorId} className="mt-1 text-sm text-[#b42318]" role="alert">
          {error}
        </p>
      ) : null}
      <div className="relative mt-0.5 h-11">
        <div className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-line">
          <div
            className="h-full rounded-full bg-gold"
            style={{ width: `${progress}%` }}
          />
        </div>
        <input
          id={sliderId}
          className="calculator-slider relative z-10"
          type="range"
          min={min}
          max={max}
          step={step}
          value={bounded}
          aria-label={`${label}, from ${formatBound(min, prefix, suffix)} to ${formatBound(max, prefix, suffix)}`}
          onChange={(event) => {
            setDraft(null);
            onChange(Number(event.target.value));
          }}
        />
      </div>
    </div>
  );
}
