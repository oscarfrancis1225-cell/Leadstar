import { describe, expect, it } from "vitest";
import { calculateProtectionNeeds } from "@/lib/calculators/protection-needs";

describe("calculateProtectionNeeds", () => {
  it("locks the $850,000 fixture", () => {
    const result = calculateProtectionNeeds({
      annualHouseholdIncome: 85000,
      yearsOfIncomeReplacement: 10,
      remainingMortgage: 250000,
      otherDebts: 20000,
      futureEducationGoal: 80000,
      existingLifeCoverage: 250000,
      liquidSavings: 100000,
    });

    expect(result.incomeReplacement).toBe(850000);
    expect(result.grossNeed).toBe(1200000);
    expect(result.resources).toBe(350000);
    expect(result.estimatedProtectionNeed).toBe(850000);
  });

  it("floors the estimate at zero when resources exceed the gross need", () => {
    const result = calculateProtectionNeeds({
      annualHouseholdIncome: 50000,
      yearsOfIncomeReplacement: 5,
      remainingMortgage: 0,
      otherDebts: 0,
      futureEducationGoal: 0,
      existingLifeCoverage: 400000,
      liquidSavings: 100000,
    });

    expect(result.estimatedProtectionNeed).toBe(0);
  });

  it("treats invalid input as zero and still returns a finite result", () => {
    const result = calculateProtectionNeeds({
      annualHouseholdIncome: "x",
      yearsOfIncomeReplacement: 0,
      remainingMortgage: -10,
      otherDebts: undefined,
      futureEducationGoal: NaN,
      existingLifeCoverage: Infinity,
      liquidSavings: null,
    });

    expect(result.estimatedProtectionNeed).toBe(0);
    expect(Number.isFinite(result.grossNeed)).toBe(true);
  });
});
