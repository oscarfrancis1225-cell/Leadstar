"use client";

import { useState } from "react";
import { CalculatorCta } from "@/components/tools/CalculatorCta";
import { CalculatorField } from "@/components/tools/CalculatorField";
import { CalculatorShell } from "@/components/tools/CalculatorShell";
import { ResultStat } from "@/components/tools/ResultStat";
import {
  calculateMortgageProtection,
  formatUSD,
  percentToRate,
} from "@/lib/calculators";

export function MortgageProtectionCalculator() {
  const [balance, setBalance] = useState(300000);
  const [rate, setRate] = useState(6);
  const [years, setYears] = useState(20);
  const [payment, setPayment] = useState(2000);
  const [otherHousing, setOtherHousing] = useState(0);

  const result = calculateMortgageProtection({
    mortgageBalance: balance,
    annualInterestRate: percentToRate(rate),
    yearsRemaining: years,
    monthlyMortgagePayment: payment,
    otherMonthlyHousing: otherHousing,
  });

  return (
    <CalculatorShell
      summary={{
        label: "Approx. obligation",
        value: formatUSD(result.totalObligation),
      }}
      results={
        <div>
          <ResultStat
            primary
            label="Approximate remaining payment obligation"
            value={formatUSD(result.totalObligation)}
            hint="Approximate only"
          />
          <div className="mt-6">
            <ResultStat label="Mortgage remaining" value={formatUSD(result.mortgageBalance)} />
            <ResultStat
              label="Estimated payments remaining"
              value={String(result.paymentsRemaining)}
            />
            {result.approximateRemainingInterest > 0 ? (
              <ResultStat
                label="Estimated interest remaining"
                value={formatUSD(result.approximateRemainingInterest)}
              />
            ) : null}
            {result.otherOutlay > 0 ? (
              <ResultStat
                label="Other housing over the remaining term"
                value={formatUSD(result.otherOutlay)}
              />
            ) : null}
          </div>
          {result.paymentDiffersFromModel ? (
            <p className="mt-4 text-sm leading-6 text-muted">
              The payment you entered differs from a standard amortizing payment
              at this rate. The obligation below uses the payment you entered.
            </p>
          ) : null}
          {result.paymentMayNotPayOff ? (
            <p className="mt-4 text-sm leading-6 text-muted">
              At the rate entered, this payment may not reduce the balance. The
              total below is still the cash outlay if that payment continued.
            </p>
          ) : null}
          {result.outlayBelowBalance && !result.paymentMayNotPayOff ? (
            <p className="mt-4 text-sm leading-6 text-muted">
              The payments entered may not cover the remaining balance.
            </p>
          ) : null}
          <p className="mt-5 text-sm leading-6 text-muted">
            This figure is the remaining cash obligation from the payment and
            term you entered.
          </p>
          <CalculatorCta toolSlug="mortgage-protection" />
        </div>
      }
    >
      <CalculatorField
        id="mp-balance"
        label="Mortgage balance"
        value={balance}
        prefix="$"
        onChange={setBalance}
        min={0}
        max={2000000}
        step={1000}
      />
      <CalculatorField
        id="mp-rate"
        label="Interest rate"
        value={rate}
        suffix="%"
        onChange={setRate}
        min={0}
        max={12}
        step={0.125}
      />
      <CalculatorField
        id="mp-years"
        label="Years remaining"
        value={years}
        suffix="yrs"
        onChange={setYears}
        min={0}
        max={40}
      />
      <CalculatorField
        id="mp-payment"
        label="Monthly mortgage payment"
        value={payment}
        prefix="$"
        onChange={setPayment}
        min={0}
        max={15000}
        step={25}
      />
      <CalculatorField
        id="mp-other"
        label="Optional other housing obligations"
        value={otherHousing}
        prefix="$"
        suffix="/mo"
        onChange={setOtherHousing}
        min={0}
        max={5000}
        step={25}
      />
    </CalculatorShell>
  );
}
