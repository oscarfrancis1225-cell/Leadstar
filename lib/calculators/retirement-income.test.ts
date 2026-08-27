import { describe, expect, it } from "vitest";
import { calculateRetirementGoal } from "@/lib/calculators/retirement-goal";
import { calculateRetirementIncome } from "@/lib/calculators/retirement-income";

const sharedFixture = {
  currentAge: 40,
  retirementAge: 65,
  currentRetirementSavings: 150000,
  monthlyRetirementContribution: 500,
  preRetireReturn: 0.06,
  withdrawalRate: 0.04,
  planningAge: 90,
};

describe("calculateRetirementIncome", () => {
  it("locks the shared retirement fixture", () => {
    const result = calculateRetirementIncome({
      ...sharedFixture,
      expectedRetirementMonthlyExpenses: 7500,
      estimatedSocialSecurityPensionMonthly: 2000,
    });

    expect(result.projectedNestEgg).toBe(1016242.45);
    expect(result.monthlyFromSavings).toBe(3387.47);
    expect(result.projectedMonthlyIncome).toBe(5387.47);
    expect(result.status).toBe("shortfall");
    expect(result.monthlyGap).toBe(2112.53);
    expect(result.yearsToRetirement).toBe(25);
    expect(result.yearsInRetirement).toBe(25);
  });

  it("reports a surplus when expenses are below illustrated income", () => {
    const result = calculateRetirementIncome({
      ...sharedFixture,
      expectedRetirementMonthlyExpenses: 4000,
      estimatedSocialSecurityPensionMonthly: 2000,
    });

    expect(result.status).toBe("surplus");
    expect(result.monthlyGap).toBe(1387.47);
  });

  it("uses current savings when retirement is already reached", () => {
    const result = calculateRetirementIncome({
      ...sharedFixture,
      currentAge: 65,
      retirementAge: 60,
      expectedRetirementMonthlyExpenses: 7500,
      estimatedSocialSecurityPensionMonthly: 2000,
    });

    expect(result.yearsToRetirement).toBe(0);
    expect(result.projectedNestEgg).toBe(150000);
    expect(result.monthlyFromSavings).toBe(500);
  });

  it("returns zero savings income when the withdrawal rate is zero", () => {
    const result = calculateRetirementIncome({
      ...sharedFixture,
      withdrawalRate: 0,
      expectedRetirementMonthlyExpenses: 7500,
      estimatedSocialSecurityPensionMonthly: 2000,
    });

    expect(result.monthlyFromSavings).toBe(0);
    expect(result.projectedMonthlyIncome).toBe(2000);
  });

  it("clamps invalid ages and money", () => {
    const result = calculateRetirementIncome({
      currentAge: "bad",
      retirementAge: -10,
      expectedRetirementMonthlyExpenses: -100,
      estimatedSocialSecurityPensionMonthly: NaN,
      currentRetirementSavings: undefined,
      monthlyRetirementContribution: Infinity,
      preRetireReturn: 0.06,
      withdrawalRate: 0.04,
    });

    expect(result.projectedMonthlyIncome).toBe(0);
    expect(Number.isFinite(result.monthlyGap)).toBe(true);
  });
});

describe("retirement inverse consistency", () => {
  it("keeps Tool 1 and Tool 3 on the same nest-egg identity", () => {
    const income = calculateRetirementIncome({
      ...sharedFixture,
      expectedRetirementMonthlyExpenses: 7500,
      estimatedSocialSecurityPensionMonthly: 2000,
    });

    expect(
      Math.abs((income.monthlyFromSavings * 12) / 0.04 - income.projectedNestEgg),
    ).toBeLessThan(2);

    const goal = calculateRetirementGoal({
      currentAge: sharedFixture.currentAge,
      retirementAge: sharedFixture.retirementAge,
      desiredRetirementMonthlyIncome: income.monthlyFromSavings + 2000,
      expectedSocialSecurityPensionMonthly: 2000,
      currentSavings: sharedFixture.currentRetirementSavings,
      monthlyContribution: sharedFixture.monthlyRetirementContribution,
      preRetireReturn: sharedFixture.preRetireReturn,
      withdrawalRate: sharedFixture.withdrawalRate,
      planningAge: sharedFixture.planningAge,
    });

    expect(Math.abs(goal.retirementGoal - income.projectedNestEgg)).toBeLessThan(2);
  });
});
