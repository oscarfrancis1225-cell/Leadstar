import { roundCents, sanitizeMoney } from "@/lib/calculators/money";

export type SafetyCushionBand = "none" | "limited" | "moderate" | "stronger";

export type SafetyCushionInput = {
  monthlyEssentialExpenses: unknown;
  currentCashSavings: unknown;
  monthlyDebtPayments: unknown;
};

export type SafetyCushionResult = {
  monthlyOutflow: number;
  monthsCovered: number | null;
  displayMonths: number | null;
  band: SafetyCushionBand;
};

export function calculateSafetyCushion(
  input: SafetyCushionInput,
): SafetyCushionResult {
  const monthlyOutflow = roundCents(
    sanitizeMoney(input.monthlyEssentialExpenses) +
      sanitizeMoney(input.monthlyDebtPayments),
  );
  const savings = sanitizeMoney(input.currentCashSavings);

  if (monthlyOutflow <= 0) {
    return {
      monthlyOutflow,
      monthsCovered: null,
      displayMonths: null,
      band: "none",
    };
  }

  const monthsCovered = savings / monthlyOutflow;
  const displayMonths = Math.round(monthsCovered * 10) / 10;
  const band: SafetyCushionBand =
    monthsCovered < 3 ? "limited" : monthsCovered < 6 ? "moderate" : "stronger";

  return {
    monthlyOutflow,
    monthsCovered,
    displayMonths,
    band,
  };
}
