import { PLANNING_AGE } from "@/lib/calculators/assumptions";
import { futureValue } from "@/lib/calculators/compound-interest";
import {
  roundCents,
  sanitizeAge,
  sanitizeMoney,
  sanitizeRate,
} from "@/lib/calculators/money";

export type RetirementIncomeInput = {
  currentAge: unknown;
  retirementAge: unknown;
  expectedRetirementMonthlyExpenses: unknown;
  estimatedSocialSecurityPensionMonthly: unknown;
  currentRetirementSavings: unknown;
  monthlyRetirementContribution: unknown;
  preRetireReturn: unknown;
  withdrawalRate: unknown;
  planningAge?: unknown;
};

export type RetirementIncomeResult = {
  yearsToRetirement: number;
  yearsInRetirement: number;
  planningHorizonValid: boolean;
  projectedNestEgg: number;
  monthlyFromSavings: number;
  socialSecurityPension: number;
  projectedMonthlyIncome: number;
  estimatedNeed: number;
  status: "shortfall" | "surplus";
  monthlyGap: number;
};

export function calculateRetirementIncome(
  input: RetirementIncomeInput,
): RetirementIncomeResult {
  const currentAge = sanitizeAge(input.currentAge);
  const retirementAge = sanitizeAge(input.retirementAge);
  const planningAge = sanitizeAge(input.planningAge ?? PLANNING_AGE);
  const estimatedNeed = sanitizeMoney(input.expectedRetirementMonthlyExpenses);
  const socialSecurityPension = sanitizeMoney(
    input.estimatedSocialSecurityPensionMonthly,
  );
  const preRetireReturn = sanitizeRate(input.preRetireReturn);
  const withdrawalRate = sanitizeRate(input.withdrawalRate);
  const yearsToRetirement = Math.max(0, retirementAge - currentAge);
  const yearsInRetirement = Math.max(0, planningAge - retirementAge);

  const growth = futureValue({
    principal: input.currentRetirementSavings,
    monthlyContribution: input.monthlyRetirementContribution,
    annualRate: preRetireReturn,
    years: yearsToRetirement,
  });

  const monthlyFromSavings =
    withdrawalRate === 0
      ? 0
      : roundCents((growth.projectedBalance * withdrawalRate) / 12);
  const projectedMonthlyIncome = roundCents(
    monthlyFromSavings + socialSecurityPension,
  );
  const rawGap = roundCents(estimatedNeed - projectedMonthlyIncome);

  return {
    yearsToRetirement,
    yearsInRetirement,
    planningHorizonValid: yearsInRetirement > 0,
    projectedNestEgg: growth.projectedBalance,
    monthlyFromSavings,
    socialSecurityPension,
    projectedMonthlyIncome,
    estimatedNeed,
    status: rawGap > 0 ? "shortfall" : "surplus",
    monthlyGap: Math.abs(rawGap),
  };
}
