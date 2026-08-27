import { describe, expect, it } from "vitest";
import { calculateMortgageProtection } from "@/lib/calculators/mortgage-protection";

describe("calculateMortgageProtection", () => {
  it("locks the $528,000 obligation fixture", () => {
    const result = calculateMortgageProtection({
      mortgageBalance: 386000,
      annualInterestRate: 0.06,
      yearsRemaining: 22,
      monthlyMortgagePayment: 2000,
      otherMonthlyHousing: 0,
    });

    expect(result.paymentsRemaining).toBe(264);
    expect(result.totalObligation).toBe(528000);
    expect(result.approximateRemainingInterest).toBe(142000);
    expect(result.paymentMayNotPayOff).toBe(false);
    expect(result.outlayBelowBalance).toBe(false);
  });

  it("flags a payment that does not cover monthly interest", () => {
    const result = calculateMortgageProtection({
      mortgageBalance: 386000,
      annualInterestRate: 0.06,
      yearsRemaining: 22,
      monthlyMortgagePayment: 100,
    });

    expect(result.paymentMayNotPayOff).toBe(true);
    expect(result.approximateRemainingInterest).toBe(0);
    expect(result.totalObligation).toBe(26400);
  });

  it("flags an outlay below the remaining balance", () => {
    const result = calculateMortgageProtection({
      mortgageBalance: 386000,
      annualInterestRate: 0,
      yearsRemaining: 2,
      monthlyMortgagePayment: 1000,
    });

    expect(result.outlayBelowBalance).toBe(true);
    expect(result.approximateRemainingInterest).toBe(0);
    expect(result.paymentsRemaining).toBe(24);
  });

  it("adds optional housing costs to the combined obligation", () => {
    const result = calculateMortgageProtection({
      mortgageBalance: 386000,
      annualInterestRate: 0.06,
      yearsRemaining: 22,
      monthlyMortgagePayment: 2000,
      otherMonthlyHousing: 300,
    });

    expect(result.otherOutlay).toBe(79200);
    expect(result.totalObligation).toBe(607200);
  });
});
