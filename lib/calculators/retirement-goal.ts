import { PLANNING_AGE } from "@/lib/calculators/assumptions";
import { futureValue } from "@/lib/calculators/compound-interest";
import {
  roundCents,
  sanitizeAge,
  sanitizeMoney,
  sanitizeRate,
} from "@/lib/calculators/money";

export type RetirementGoalInput = {
  currentAge: unknown;
  retirementAge: unknown;
  desiredRetirementMonthlyIncome: unknown;
  expectedSocialSecurityPensionMonthly: unknown;
  currentSavings: unknown;
  monthlyContribution: unknown;
  preRetireReturn: unknown;
  withdrawalRate: unknown;
  planningAge?: unknown;
};

export type RetirementGoalResult = {
  yearsToRetirement: number;
  yearsInRetirement: number;
  planningHorizonValid: boolean;
  netMonthlyNeed: number;
  retirementGoal: number;
  projectedSavings: number;
  status: "shortfall" | "surplus";
  planningGap: number;
};

export function calculateRetirementGoal(
  input: RetirementGoalInput,
): RetirementGoalResult {
  const currentAge = sanitizeAge(input.currentAge);
  const retirementAge = sanitizeAge(input.retirementAge);
  const planningAge = sanitizeAge(input.planningAge ?? PLANNING_AGE);
  const desiredIncome = sanitizeMoney(input.desiredRetirementMonthlyIncome);
  const socialSecurityPension = sanitizeMoney(
    input.expectedSocialSecurityPensionMonthly,
  );
  const preRetireReturn = sanitizeRate(input.preRetireReturn);
  const withdrawalRate = sanitizeRate(input.withdrawalRate);
  const yearsToRetirement = Math.max(0, retirementAge - currentAge);
  const yearsInRetirement = Math.max(0, planningAge - retirementAge);
  const rawMonthlyNeed = Math.max(0, desiredIncome - socialSecurityPension);
  const netMonthlyNeed = roundCents(rawMonthlyNeed);
  const retirementGoal =
    withdrawalRate === 0 ? 0 : roundCents((rawMonthlyNeed * 12) / withdrawalRate);

  const growth = futureValue({
    principal: input.currentSavings,
    monthlyContribution: input.monthlyContribution,
    annualRate: preRetireReturn,
    years: yearsToRetirement,
  });

  const rawGap = roundCents(retirementGoal - growth.projectedBalance);

  return {
    yearsToRetirement,
    yearsInRetirement,
    planningHorizonValid: yearsInRetirement > 0,
    netMonthlyNeed,
    retirementGoal,
    projectedSavings: growth.projectedBalance,
    status: rawGap > 0 ? "shortfall" : "surplus",
    planningGap: Math.abs(rawGap),
  };
}
