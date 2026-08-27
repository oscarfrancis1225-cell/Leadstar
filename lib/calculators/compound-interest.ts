import {
  roundCents,
  sanitizeMoney,
  sanitizeRate,
  sanitizeYears,
} from "@/lib/calculators/money";

export type FutureValueInput = {
  principal: unknown;
  monthlyContribution: unknown;
  annualRate: unknown;
  years: unknown;
};

export type FutureValueResult = {
  projectedBalance: number;
  totalContributions: number;
  estimatedGrowth: number;
  startingBalance: number;
};

export type GrowthPoint = {
  year: number;
  balance: number;
  contributed: number;
};

export function futureValue(input: FutureValueInput): FutureValueResult {
  const startingBalance = sanitizeMoney(input.principal);
  const monthlyContribution = sanitizeMoney(input.monthlyContribution);
  const annualRate = sanitizeRate(input.annualRate);
  const years = sanitizeYears(input.years);

  if (years <= 0) {
    return {
      projectedBalance: roundCents(startingBalance),
      totalContributions: 0,
      estimatedGrowth: 0,
      startingBalance: roundCents(startingBalance),
    };
  }

  const i = annualRate / 12;
  const n = years * 12;
  const growthFactor = (1 + i) ** n;
  const principalGrown = startingBalance * growthFactor;
  const contributionGrown =
    i === 0 ? monthlyContribution * n : monthlyContribution * ((growthFactor - 1) / i);

  const projectedBalance = roundCents(principalGrown + contributionGrown);
  const totalContributions = roundCents(monthlyContribution * n);
  const estimatedGrowth = roundCents(
    projectedBalance - startingBalance - totalContributions,
  );

  return {
    projectedBalance: Number.isFinite(projectedBalance) ? projectedBalance : 0,
    totalContributions: Number.isFinite(totalContributions) ? totalContributions : 0,
    estimatedGrowth: Number.isFinite(estimatedGrowth) ? estimatedGrowth : 0,
    startingBalance: roundCents(startingBalance),
  };
}

export function calculateCompoundGrowth(input: FutureValueInput): FutureValueResult {
  return futureValue(input);
}

export function buildGrowthSeries(input: FutureValueInput): GrowthPoint[] {
  const years = Math.round(sanitizeYears(input.years));
  const startingBalance = sanitizeMoney(input.principal);
  const monthlyContribution = sanitizeMoney(input.monthlyContribution);
  const points: GrowthPoint[] = [];

  for (let year = 0; year <= years; year += 1) {
    const result = futureValue({
      ...input,
      years: year,
    });

    points.push({
      year,
      balance: result.projectedBalance,
      contributed: roundCents(startingBalance + monthlyContribution * year * 12),
    });
  }

  return points;
}

export function amortizingPayment(
  balance: unknown,
  annualRate: unknown,
  paymentsRemaining: unknown,
): number {
  const principal = sanitizeMoney(balance);
  const rate = sanitizeRate(annualRate);
  const n = Math.round(sanitizeYears(Number(paymentsRemaining) / 12) * 12);

  if (n <= 0 || principal <= 0) {
    return 0;
  }

  const i = rate / 12;

  if (i === 0) {
    return roundCents(principal / n);
  }

  const factor = (1 + i) ** n;
  const payment = (principal * i * factor) / (factor - 1);
  return Number.isFinite(payment) ? roundCents(payment) : 0;
}
