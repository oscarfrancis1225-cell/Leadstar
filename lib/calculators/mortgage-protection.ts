import { amortizingPayment } from "@/lib/calculators/compound-interest";
import {
  roundCents,
  sanitizeMoney,
  sanitizeRate,
  sanitizeYears,
} from "@/lib/calculators/money";

export type MortgageProtectionInput = {
  mortgageBalance: unknown;
  annualInterestRate: unknown;
  yearsRemaining: unknown;
  monthlyMortgagePayment: unknown;
  otherMonthlyHousing?: unknown;
};

export type MortgageProtectionResult = {
  mortgageBalance: number;
  paymentsRemaining: number;
  mortgageOutlay: number;
  otherOutlay: number;
  totalObligation: number;
  approximateRemainingInterest: number;
  modelPayment: number;
  paymentMayNotPayOff: boolean;
  outlayBelowBalance: boolean;
  paymentDiffersFromModel: boolean;
};

export function calculateMortgageProtection(
  input: MortgageProtectionInput,
): MortgageProtectionResult {
  const mortgageBalance = sanitizeMoney(input.mortgageBalance);
  const annualInterestRate = sanitizeRate(input.annualInterestRate);
  const yearsRemaining = sanitizeYears(input.yearsRemaining);
  const monthlyMortgagePayment = sanitizeMoney(input.monthlyMortgagePayment);
  const otherMonthlyHousing = sanitizeMoney(input.otherMonthlyHousing);
  const paymentsRemaining = Math.round(yearsRemaining * 12);
  const mortgageOutlay = roundCents(monthlyMortgagePayment * paymentsRemaining);
  const otherOutlay = roundCents(otherMonthlyHousing * paymentsRemaining);
  const totalObligation = roundCents(mortgageOutlay + otherOutlay);
  const monthlyInterest = mortgageBalance * (annualInterestRate / 12);
  const paymentMayNotPayOff =
    annualInterestRate > 0 && monthlyMortgagePayment <= monthlyInterest;
  const outlayBelowBalance = mortgageOutlay < mortgageBalance;
  const approximateRemainingInterest =
    paymentMayNotPayOff || outlayBelowBalance
      ? 0
      : roundCents(mortgageOutlay - mortgageBalance);
  const modelPayment = amortizingPayment(
    mortgageBalance,
    annualInterestRate,
    paymentsRemaining,
  );
  const paymentDiffersFromModel =
    modelPayment > 0 &&
    Math.abs(monthlyMortgagePayment - modelPayment) / modelPayment > 0.15;

  return {
    mortgageBalance: roundCents(mortgageBalance),
    paymentsRemaining,
    mortgageOutlay,
    otherOutlay,
    totalObligation,
    approximateRemainingInterest,
    modelPayment,
    paymentMayNotPayOff,
    outlayBelowBalance,
    paymentDiffersFromModel,
  };
}
