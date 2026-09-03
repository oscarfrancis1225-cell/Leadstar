"use client";

import { useState } from "react";
import { CalculatorCta } from "@/components/tools/CalculatorCta";
import { CalculatorField } from "@/components/tools/CalculatorField";
import { CalculatorShell } from "@/components/tools/CalculatorShell";
import { GrowthChart } from "@/components/tools/GrowthChart";
import { KeepWorksheet } from "@/components/tools/KeepWorksheet";
import { ResultCard } from "@/components/tools/ResultCard";
import { ResultStat } from "@/components/tools/ResultStat";
import {
  buildGrowthSeries,
  calculateCompoundGrowth,
  formatUSD,
  percentToRate,
} from "@/lib/calculators";

export function CompoundGrowthCalculator() {
  const [startingBalance, setStartingBalance] = useState(25000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(6);
  const [years, setYears] = useState(20);

  const result = calculateCompoundGrowth({
    principal: startingBalance,
    monthlyContribution,
    annualRate: percentToRate(annualReturn),
    years,
  });
  const series = buildGrowthSeries({
    principal: startingBalance,
    monthlyContribution,
    annualRate: percentToRate(annualReturn),
    years,
  });
  const meaning = `If you start with ${formatUSD(startingBalance)}, add ${formatUSD(monthlyContribution)} each month, and the ${annualReturn}% yearly rate never changes for ${years} years, the picture ends at ${formatUSD(result.projectedBalance)}.`;
  const notMeaning =
    "The rate is an assumption you typed. Real accounts go up and down. Taxes, fees, and withdrawals are left out.";

  return (
    <CalculatorShell
      summary={{
        label: "Illustrated balance",
        value: formatUSD(result.projectedBalance),
      }}
      keep={
        <KeepWorksheet
          title="Compound Growth Calculator"
          subtitle="What the balance looks like if the rate you typed never changed."
          inputs={[
            { label: "Starting balance (dollars)", value: formatUSD(startingBalance) },
            { label: "Added each month (dollars)", value: formatUSD(monthlyContribution) },
            { label: "Yearly rate you typed (percent)", value: `${annualReturn}%` },
            { label: "Years in this picture", value: String(years) },
          ]}
          results={[
            { label: "Illustrated balance", value: formatUSD(result.projectedBalance) },
            { label: "Starting savings", value: formatUSD(result.startingBalance) },
            { label: "Money you add along the way", value: formatUSD(result.totalContributions) },
            { label: "Growth in this picture", value: formatUSD(result.estimatedGrowth) },
          ]}
          meaning={[meaning, notMeaning]}
          disclaimer="This worksheet is an illustrative projection, not a quote, not advice, and not a forecast of any account. Actual investment performance is not guaranteed."
          toolHref="/tools/compound-growth"
        />
      }
      results={
        <div>
          <ResultCard
            question="If that rate held still, what would the balance look like?"
            answer={formatUSD(result.projectedBalance)}
            meaning={meaning}
            notMeaning={notMeaning}
          >
            <ResultStat label="Starting savings" value={formatUSD(result.startingBalance)} />
            <ResultStat label="Money you add along the way" value={formatUSD(result.totalContributions)} />
            <ResultStat label="Growth in this picture" value={formatUSD(result.estimatedGrowth)} />
            <div className="mt-4">
              <GrowthChart points={series} />
              <div className="mt-3 flex gap-4 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-navy" aria-hidden />
                  Balance
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-line" aria-hidden />
                  Money added
                </span>
              </div>
            </div>
          </ResultCard>
          <CalculatorCta toolSlug="compound-growth" />
        </div>
      }
    >
      <CalculatorField
        id="cg-start"
        label="Starting balance (dollars)"
        value={startingBalance}
        prefix="$"
        onChange={setStartingBalance}
        min={0}
        max={2000000}
        step={1000}
      />
      <CalculatorField
        id="cg-monthly"
        label="Amount added each month (dollars)"
        value={monthlyContribution}
        prefix="$"
        onChange={setMonthlyContribution}
        min={0}
        max={10000}
        step={25}
      />
      <CalculatorField
        id="cg-return"
        label="Yearly rate you want to try (percent)"
        hint="You choose the rate. It is not a promise."
        value={annualReturn}
        suffix="%"
        onChange={setAnnualReturn}
        min={0}
        max={12}
        step={0.25}
      />
      <CalculatorField
        id="cg-years"
        label="How many years (years)"
        value={years}
        suffix="yrs"
        onChange={setYears}
        min={1}
        max={40}
      />
    </CalculatorShell>
  );
}
