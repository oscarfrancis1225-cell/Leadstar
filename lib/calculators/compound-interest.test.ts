import { describe, expect, it } from "vitest";
import {
  amortizingPayment,
  buildGrowthSeries,
  calculateCompoundGrowth,
  futureValue,
} from "@/lib/calculators/compound-interest";
import { MONEY_MAX } from "@/lib/calculators/assumptions";
import { percentToRate, toFiniteNumber } from "@/lib/calculators/money";

describe("futureValue", () => {
  it("matches the 5% one-year textbook identity", () => {
    const result = futureValue({
      principal: 1000,
      monthlyContribution: 0,
      annualRate: 0.05,
      years: 1,
    });

    expect(result.projectedBalance).toBe(1051.16);
    expect(result.totalContributions).toBe(0);
    expect(result.estimatedGrowth).toBe(51.16);
  });

  it("matches the 12% monthly contribution identity", () => {
    const result = futureValue({
      principal: 0,
      monthlyContribution: 100,
      annualRate: 0.12,
      years: 1,
    });

    expect(result.projectedBalance).toBe(1268.25);
    expect(result.totalContributions).toBe(1200);
    expect(result.estimatedGrowth).toBe(68.25);
  });

  it("adds contributions only when the rate is zero", () => {
    const result = futureValue({
      principal: 10000,
      monthlyContribution: 200,
      annualRate: 0,
      years: 5,
    });

    expect(result.projectedBalance).toBe(22000);
    expect(result.estimatedGrowth).toBe(0);
    expect(result.totalContributions).toBe(12000);
  });

  it("returns zero when both money inputs are zero", () => {
    const result = futureValue({
      principal: 0,
      monthlyContribution: 0,
      annualRate: 0.07,
      years: 20,
    });

    expect(result.projectedBalance).toBe(0);
    expect(result.totalContributions).toBe(0);
    expect(result.estimatedGrowth).toBe(0);
  });

  it("locks the shared nest-egg fixture", () => {
    const result = futureValue({
      principal: 150000,
      monthlyContribution: 500,
      annualRate: 0.06,
      years: 25,
    });

    expect(result.projectedBalance).toBe(1016242.45);
  });

  it("locks the compound-growth UI fixture", () => {
    const result = calculateCompoundGrowth({
      principal: 25000,
      monthlyContribution: 500,
      annualRate: 0.07,
      years: 20,
    });

    expect(result.projectedBalance).toBe(361431.8);
    expect(result.totalContributions).toBe(120000);
    expect(result.estimatedGrowth).toBe(216431.8);
    expect(result.startingBalance).toBe(25000);
  });

  it("keeps the current balance when years are zero", () => {
    const result = futureValue({
      principal: 150000,
      monthlyContribution: 500,
      annualRate: 0.06,
      years: 0,
    });

    expect(result.projectedBalance).toBe(150000);
    expect(result.totalContributions).toBe(0);
    expect(result.estimatedGrowth).toBe(0);
  });

  it("clamps negative values and invalid input", () => {
    const result = futureValue({
      principal: -5000,
      monthlyContribution: "abc",
      annualRate: undefined,
      years: NaN,
    });

    expect(result.projectedBalance).toBe(0);
    expect(result.totalContributions).toBe(0);
  });

  it("caps very large balances and still returns a finite number", () => {
    const result = futureValue({
      principal: 1e15,
      monthlyContribution: 1e15,
      annualRate: 0.12,
      years: 40,
    });

    expect(Number.isFinite(result.projectedBalance)).toBe(true);
    expect(result.startingBalance).toBe(MONEY_MAX);
  });

  it("accepts a decimal rate", () => {
    const result = futureValue({
      principal: 10000,
      monthlyContribution: 0,
      annualRate: 0.065,
      years: 10,
    });

    expect(result.projectedBalance).toBeGreaterThan(10000);
    expect(Number.isFinite(result.projectedBalance)).toBe(true);
  });
});

describe("buildGrowthSeries", () => {
  it("includes year zero through the horizon", () => {
    const series = buildGrowthSeries({
      principal: 25000,
      monthlyContribution: 500,
      annualRate: 0.07,
      years: 20,
    });

    expect(series).toHaveLength(21);
    expect(series[0]).toEqual({ year: 0, balance: 25000, contributed: 25000 });
    expect(series[20]?.balance).toBe(361431.8);
  });
});

describe("amortizingPayment", () => {
  it("returns zero for a zero term", () => {
    expect(amortizingPayment(386000, 0.06, 0)).toBe(0);
  });

  it("splits a zero-rate balance evenly", () => {
    expect(amortizingPayment(12000, 0, 12)).toBe(1000);
  });
});

describe("money helpers", () => {
  it("treats non-numeric values as zero", () => {
    expect(toFiniteNumber("nope")).toBe(0);
    expect(toFiniteNumber(Infinity)).toBe(0);
    expect(percentToRate(6)).toBe(0.06);
    expect(percentToRate(-4)).toBe(0);
    expect(percentToRate(40)).toBe(0.12);
  });
});
