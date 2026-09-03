"use client";

import { useState } from "react";
import { CalculatorCta } from "@/components/tools/CalculatorCta";
import { CalculatorField } from "@/components/tools/CalculatorField";
import { CalculatorShell } from "@/components/tools/CalculatorShell";
import { CushionMeter } from "@/components/tools/CushionMeter";
import { KeepWorksheet } from "@/components/tools/KeepWorksheet";
import { formatMonths, formatUSD, calculateSafetyCushion } from "@/lib/calculators";

const bandCopy = {
  none: "Enter monthly expenses to see an estimate.",
  limited: "Limited cushion",
  moderate: "Moderate cushion",
  stronger: "Stronger cushion",
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
    result.displayMonths === null ? "-" : `${formatMonths(result.displayMonths)} months`;

  return (
    <CalculatorShell
      summary={{
        label: "Illustrated cushion",
        value:
          result.displayMonths === null
            ? "-"
            : `${formatMonths(result.displayMonths)} mo`,
      }}
      keep={
        <KeepWorksheet
          title="Financial Safety Cushion"
          rows={[
            { label: "Monthly essential expenses", value: formatUSD(expenses) },
            { label: "Current cash savings", value: formatUSD(savings) },
            { label: "Monthly debt payments", value: formatUSD(debt) },
            { label: "Monthly outflow illustrated", value: formatUSD(result.monthlyOutflow) },
            { label: "Illustrated months covered", value: monthsLabel },
            { label: "Category label", value: bandCopy[result.band] },
          ]}
          disclaimer="This worksheet is an illustration of how long cash might last, not a quote, not advice, and not a recommended reserve target. Household needs differ."
          toolHref="/tools/financial-safety"
        />
      }
      results={
        <div>
          <p className="text-sm font-medium text-navy">
            Your current reserves could cover approximately
          </p>
          <p className="headline mt-2 break-words text-3xl tabular-nums text-navy sm:text-4xl">
            {result.displayMonths === null
              ? "-"
              : `${formatMonths(result.displayMonths)} months`}
          </p>
          <p className="mt-2 text-sm text-muted">Illustrated estimate</p>
          <div className="mt-6">
            <CushionMeter months={result.monthsCovered} band={result.band} />
          </div>
          <p className="mt-4 text-sm font-medium text-navy">{bandCopy[result.band]}</p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Monthly outflow illustrated: {formatUSD(result.monthlyOutflow)}
          </p>
          <CalculatorCta toolSlug="financial-safety" />
        </div>
      }
    >
      <CalculatorField
        id="fs-expenses"
        label="Monthly essential expenses"
        value={expenses}
        prefix="$"
        onChange={setExpenses}
        min={0}
        max={20000}
        step={50}
      />
      <CalculatorField
        id="fs-savings"
        label="Current cash savings"
        value={savings}
        prefix="$"
        onChange={setSavings}
        min={0}
        max={250000}
        step={100}
      />
      <CalculatorField
        id="fs-debt"
        label="Monthly debt payments"
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
