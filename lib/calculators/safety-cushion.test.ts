import { describe, expect, it } from "vitest";
import { calculateSafetyCushion } from "@/lib/calculators/safety-cushion";

describe("calculateSafetyCushion", () => {
  it("locks the 4.7-month moderate fixture", () => {
    const result = calculateSafetyCushion({
      monthlyEssentialExpenses: 3200,
      currentCashSavings: 18800,
      monthlyDebtPayments: 800,
    });

    expect(result.monthlyOutflow).toBe(4000);
    expect(result.displayMonths).toBe(4.7);
    expect(result.band).toBe("moderate");
  });

  it("returns no band when monthly outflow is zero", () => {
    const result = calculateSafetyCushion({
      monthlyEssentialExpenses: 0,
      currentCashSavings: 10000,
      monthlyDebtPayments: 0,
    });

    expect(result.monthsCovered).toBeNull();
    expect(result.displayMonths).toBeNull();
    expect(result.band).toBe("none");
  });

  it("classifies limited and stronger bands on the raw ratio", () => {
    const limited = calculateSafetyCushion({
      monthlyEssentialExpenses: 3000,
      currentCashSavings: 5000,
      monthlyDebtPayments: 0,
    });
    const stronger = calculateSafetyCushion({
      monthlyEssentialExpenses: 3000,
      currentCashSavings: 20000,
      monthlyDebtPayments: 0,
    });

    expect(limited.band).toBe("limited");
    expect(stronger.band).toBe("stronger");
  });
});
