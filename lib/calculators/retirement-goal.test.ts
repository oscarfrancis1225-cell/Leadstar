import { describe, expect, it } from "vitest";
import { calculateRetirementGoal } from "@/lib/calculators/retirement-goal";

describe("calculateRetirementGoal", () => {
  it("uses net annual need divided by the planning withdrawal rate", () => {
    const result = calculateRetirementGoal({
      currentAge: 40,
      retirementAge: 65,
      desiredRetirementMonthlyIncome: 6000,
      expectedSocialSecurityPensionMonthly: 2000,
      currentSavings: 150000,
      monthlyContribution: 500,
      preRetireReturn: 0.06,
      withdrawalRate: 0.04,
      planningAge: 90,
    });

    expect(result.netMonthlyNeed).toBe(4000);
    expect(result.retirementGoal).toBe(1200000);
    expect(result.projectedSavings).toBe(1016242.45);
    expect(result.status).toBe("shortfall");
    expect(result.planningGap).toBe(183757.55);
  });

  it("locks the $50,000 annual-need identity to $1,250,000", () => {
    const result = calculateRetirementGoal({
      currentAge: 40,
      retirementAge: 65,
      desiredRetirementMonthlyIncome: 50000 / 12 + 2000,
      expectedSocialSecurityPensionMonthly: 2000,
      currentSavings: 0,
      monthlyContribution: 0,
      preRetireReturn: 0.06,
      withdrawalRate: 0.04,
    });

    expect(result.retirementGoal).toBe(1250000);
  });

  it("documents cent rounding when net monthly need is 4166.67", () => {
    const result = calculateRetirementGoal({
      currentAge: 40,
      retirementAge: 65,
      desiredRetirementMonthlyIncome: 6166.67,
      expectedSocialSecurityPensionMonthly: 2000,
      currentSavings: 0,
      monthlyContribution: 0,
      preRetireReturn: 0.06,
      withdrawalRate: 0.04,
    });

    expect(result.netMonthlyNeed).toBe(4166.67);
    expect(result.retirementGoal).toBe(1250001);
  });

  it("returns a zero goal when the withdrawal rate is zero", () => {
    const result = calculateRetirementGoal({
      currentAge: 40,
      retirementAge: 65,
      desiredRetirementMonthlyIncome: 6000,
      expectedSocialSecurityPensionMonthly: 2000,
      currentSavings: 150000,
      monthlyContribution: 500,
      preRetireReturn: 0.06,
      withdrawalRate: 0,
    });

    expect(result.retirementGoal).toBe(0);
  });

  it("floors net need at zero when Social Security exceeds desired income", () => {
    const result = calculateRetirementGoal({
      currentAge: 40,
      retirementAge: 65,
      desiredRetirementMonthlyIncome: 1500,
      expectedSocialSecurityPensionMonthly: 2000,
      currentSavings: 150000,
      monthlyContribution: 500,
      preRetireReturn: 0.06,
      withdrawalRate: 0.04,
    });

    expect(result.netMonthlyNeed).toBe(0);
    expect(result.retirementGoal).toBe(0);
    expect(result.status).toBe("surplus");
  });
});
