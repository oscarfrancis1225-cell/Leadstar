import {
  AGE_MAX,
  AGE_MIN,
  MONEY_MAX,
  RATE_MAX,
  RATE_PERCENT_MAX,
  YEARS_MAX,
} from "@/lib/calculators/assumptions";

export function toFiniteNumber(value: unknown): number {
  const numeric = typeof value === "number" ? value : Number(value);
  return Number.isFinite(numeric) ? numeric : 0;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function roundCents(value: number): number {
  return Math.round(value * 100) / 100;
}

export function percentToRate(percent: unknown): number {
  return clamp(toFiniteNumber(percent), 0, RATE_PERCENT_MAX) / 100;
}

export function sanitizeMoney(value: unknown): number {
  return clamp(toFiniteNumber(value), 0, MONEY_MAX);
}

export function sanitizeRate(value: unknown): number {
  return clamp(toFiniteNumber(value), 0, RATE_MAX);
}

export function sanitizeYears(value: unknown): number {
  return clamp(toFiniteNumber(value), 0, YEARS_MAX);
}

export function sanitizeAge(value: unknown): number {
  return Math.round(clamp(toFiniteNumber(value), AGE_MIN, AGE_MAX));
}

export function formatUSD(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);
}

export function formatUSDCompact(value: number): string {
  const amount = Number.isFinite(value) ? value : 0;

  if (Math.abs(amount) >= 1_000_000) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 2,
    }).format(amount);
  }

  return formatUSD(amount);
}

export function formatMonths(value: number): string {
  return (Math.round(value * 10) / 10).toFixed(1);
}
