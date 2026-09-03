"use client";

import { useState } from "react";
import { CalculatorCta } from "@/components/tools/CalculatorCta";
import { CalculatorField } from "@/components/tools/CalculatorField";
import { CalculatorShell } from "@/components/tools/CalculatorShell";
import { CushionMeter } from "@/components/tools/CushionMeter";
import { KeepWorksheet } from "@/components/tools/KeepWorksheet";
import { ResultCard } from "@/components/tools/ResultCard";
import { formatMonths, formatUSD, calculateSafetyCushion } from "@/lib/calculators";

const bandCopy = {
  none: "Add monthly bills to see a picture.",
  limited: "A shorter cash cushion in this picture",
  moderate: "A middle cash cushion in this picture",
  stronger: "A longer cash cushion in this picture",
} as const;

export function FinancialSafetyCalculator() {
  const [expenses, setExpenses] = useState(3000);
  const [savings, setSavings] = useState(18000);
  const [debt, setDebt] = useState(800);

  const result = calculateSafetyCushion({
    monthlyEssentialExpenses: expenses,
    currentCashSavings: savings,
    monthlyDebtPayments: debt,
  });

  const monthsLabel =
    result.displayMonths === null ? "Add bills to see months" : `${formatMonths(result.displayMonths)} months`;
  const meaning =
    result.displayMonths === null
      ? "This page divides cash by the monthly bills and debt payments you type."
      : `${formatUSD(savings)} in cash, divided by ${formatUSD(result.monthlyOutflow)} in monthly bills and debt, is about ${formatMonths(result.displayMonths)} months. ${bandCopy[result.band]}.`;
  const notMeaning =
    "This is not a rule for how much cash to keep. Households differ. Investment accounts you would not spend should stay out of the cash box.";

  return (
    <CalculatorShell
      summary={{
        label: "Months cash could cover",
        value:
          result.displayMonths === null ? "-" : `${formatMonths(result.displayMonths)} mo`,
      }}
      keep={
        <KeepWorksheet
          title="Financial Safety Cushion"
          subtitle="How many months current cash could cover the bills you typed."
          inputs={[
            { label: "Bills you must pay each month (dollars)", value: formatUSD(expenses) },
            { label: "Cash you could use today (dollars)", value: formatUSD(savings) },
            { label: "Debt payments each month (dollars)", value: formatUSD(debt) },
          ]}
          results={[
            { label: "Monthly bills plus debt you typed", value: formatUSD(result.monthlyOutflow) },
            { label: "Months cash could cover", value: monthsLabel },
            { label: "Category label", value: bandCopy[result.band] },
          ]}
          meaning={[meaning, notMeaning]}
          disclaimer="This worksheet is an illustration of how long cash might last, not a quote, not advice, and not a recommended reserve target. Household needs differ."
          toolHref="/tools/financial-safety"
        />
      }
      results={
        <div>
          <ResultCard
            question="If the paycheck paused, how many months could this cash cover?"
            answer={monthsLabel}
            meaning={meaning}
            notMeaning={notMeaning}
          >
            <p className="pt-2 text-sm text-muted">
              Monthly bills plus debt you typed: {formatUSD(result.monthlyOutflow)}
            </p>
            <div className="mt-4">
              <CushionMeter months={result.monthsCovered} band={result.band} />
            </div>
            <p className="mt-3 text-sm font-medium text-navy">{bandCopy[result.band]}</p>
          </ResultCard>
          <CalculatorCta toolSlug="financial-safety" />
        </div>
      }
    >
      <CalculatorField
        id="fs-expenses"
        label="Bills you must pay each month (dollars)"
        value={expenses}
        prefix="$"
        onChange={setExpenses}
        min={0}
        max={20000}
        step={50}
      />
      <CalculatorField
        id="fs-savings"
        label="Cash you could use today (dollars)"
        value={savings}
        prefix="$"
        onChange={setSavings}
        min={0}
        max={250000}
        step={100}
      />
      <CalculatorField
        id="fs-debt"
        label="Debt payments each month (dollars)"
        value={debt}
        prefix="$"
        onChange={setDebt}
        min={0}
        max={10000}
        step={25}
      />
    </CalculatorShell>
  );
}
