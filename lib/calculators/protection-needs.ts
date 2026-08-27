import { roundCents, sanitizeMoney, sanitizeYears } from "@/lib/calculators/money";

export type ProtectionNeedsInput = {
  annualHouseholdIncome: unknown;
  yearsOfIncomeReplacement: unknown;
  remainingMortgage: unknown;
  otherDebts: unknown;
  futureEducationGoal: unknown;
  existingLifeCoverage: unknown;
  liquidSavings: unknown;
};

export type ProtectionNeedsResult = {
  incomeReplacement: number;
  grossNeed: number;
  resources: number;
  estimatedProtectionNeed: number;
};

export function calculateProtectionNeeds(
  input: ProtectionNeedsInput,
): ProtectionNeedsResult {
  const years = clampReplacementYears(input.yearsOfIncomeReplacement);
  const incomeReplacement = roundCents(
    sanitizeMoney(input.annualHouseholdIncome) * years,
  );
  const grossNeed = roundCents(
    incomeReplacement +
      sanitizeMoney(input.remainingMortgage) +
      sanitizeMoney(input.otherDebts) +
      sanitizeMoney(input.futureEducationGoal),
  );
  const resources = roundCents(
    sanitizeMoney(input.existingLifeCoverage) + sanitizeMoney(input.liquidSavings),
  );

  return {
    incomeReplacement,
    grossNeed,
    resources,
    estimatedProtectionNeed: Math.max(0, roundCents(grossNeed - resources)),
  };
}

function clampReplacementYears(value: unknown): number {
  const years = sanitizeYears(value);
  return Math.round(Math.min(30, Math.max(1, years || 1)));
}
