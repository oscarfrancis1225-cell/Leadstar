"use client";

import { useState } from "react";
import { CalculatorCta } from "@/components/tools/CalculatorCta";
import { CalculatorField } from "@/components/tools/CalculatorField";
import { CalculatorShell } from "@/components/tools/CalculatorShell";
import { KeepWorksheet } from "@/components/tools/KeepWorksheet";
import { ResultCard } from "@/components/tools/ResultCard";
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

  const extraNotes = [
    result.paymentDiffersFromModel
      ? "The payment you typed is different from a standard loan payment at this rate. This page still uses the payment you typed."
      : null,
    result.paymentMayNotPayOff
      ? "At the rate you typed, this payment may not shrink the balance. The total is still the cash you would send if that payment kept going."
      : null,
    result.outlayBelowBalance && !result.paymentMayNotPayOff
      ? "The payments you typed may not cover the remaining balance."
      : null,
  ].filter((note): note is string => Boolean(note));

  const meaning = `If you send ${formatUSD(payment)} a month for ${result.paymentsRemaining} more months, this picture adds up to ${formatUSD(result.totalObligation)} of cash still tied to the house.`;
  const notMeaning =
    "This is not your lender statement and not an insurance quote. It does not pick a policy or say who should get a check.";

  return (
    <CalculatorShell
      summary={{
        label: "Cash still tied to the house",
        value: formatUSD(result.totalObligation),
      }}
      keep={
        <KeepWorksheet
          title="Mortgage Protection Calculator"
          subtitle="The cash still tied to the house from the payment and years you typed."
          inputs={[
            { label: "Loan balance still owed (dollars)", value: formatUSD(balance) },
            { label: "Interest rate (percent per year)", value: `${rate}%` },
            { label: "Years left on the loan", value: String(years) },
            { label: "House payment each month (dollars)", value: formatUSD(payment) },
            {
              label: "Other housing costs each month (dollars)",
              value: formatUSD(otherHousing),
            },
          ]}
          results={[
            { label: "Cash still tied to the house", value: formatUSD(result.totalObligation) },
            { label: "Loan balance you typed", value: formatUSD(result.mortgageBalance) },
            { label: "Payments left in this picture", value: String(result.paymentsRemaining) },
            ...(result.approximateRemainingInterest > 0
              ? [
                  {
                    label: "Interest left in this picture",
                    value: formatUSD(result.approximateRemainingInterest),
                  },
                ]
              : []),
            ...(result.otherOutlay > 0
              ? [
                  {
                    label: "Other housing over the years left",
                    value: formatUSD(result.otherOutlay),
                  },
                ]
              : []),
          ]}
          meaning={[meaning, ...extraNotes, notMeaning]}
          disclaimer="This worksheet is an illustration of remaining cash obligation, not a quote, not a lender statement, and not advice. It does not recommend a policy."
          toolHref="/tools/mortgage-protection"
        />
      }
      results={
        <div>
          <ResultCard
            question="How much cash is still tied to the house?"
            answer={formatUSD(result.totalObligation)}
            meaning={meaning}
            notMeaning={notMeaning}
          >
            <ResultStat label="Loan balance you typed" value={formatUSD(result.mortgageBalance)} />
            <ResultStat label="Payments left in this picture" value={String(result.paymentsRemaining)} />
            {result.approximateRemainingInterest > 0 ? (
              <ResultStat
                label="Interest left in this picture"
                value={formatUSD(result.approximateRemainingInterest)}
              />
            ) : null}
            {result.otherOutlay > 0 ? (
              <ResultStat
                label="Other housing over the years left"
                value={formatUSD(result.otherOutlay)}
              />
            ) : null}
            {extraNotes.map((note) => (
              <p key={note} className="mt-3 text-sm leading-6 text-muted">
                {note}
              </p>
            ))}
          </ResultCard>
          <CalculatorCta toolSlug="mortgage-protection" />
        </div>
      }
    >
      <CalculatorField
        id="mp-balance"
        label="Loan balance still owed (dollars)"
        value={balance}
        prefix="$"
        onChange={setBalance}
        min={0}
        max={2000000}
        step={1000}
      />
      <CalculatorField
        id="mp-rate"
        label="Interest rate (percent per year)"
        value={rate}
        suffix="%"
        onChange={setRate}
        min={0}
        max={12}
        step={0.125}
      />
      <CalculatorField
        id="mp-years"
        label="Years left on the loan (years)"
        value={years}
        suffix="yrs"
        onChange={setYears}
        min={0}
        max={40}
      />
      <CalculatorField
        id="mp-payment"
        label="House payment each month (dollars)"
        value={payment}
        prefix="$"
        onChange={setPayment}
        min={0}
        max={15000}
        step={25}
      />
      <CalculatorField
        id="mp-other"
        label="Other housing costs each month (dollars)"
        hint="Optional. Taxes or insurance you pay with the house, if you want them in the total."
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
