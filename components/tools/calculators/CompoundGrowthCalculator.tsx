"use client";

import { useState } from "react";
import { CalculatorCta } from "@/components/tools/CalculatorCta";
import { CalculatorField } from "@/components/tools/CalculatorField";
import { CalculatorShell } from "@/components/tools/CalculatorShell";
import { GrowthChart } from "@/components/tools/GrowthChart";
import { KeepWorksheet } from "@/components/tools/KeepWorksheet";
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

  return (
    <CalculatorShell
      summary={{
        label: "Illustrated balance",
        value: formatUSD(result.projectedBalance),
      }}
      keep={
        <KeepWorksheet
          title="Compound Growth Calculator"
          rows={[
            { label: "Starting balance", value: formatUSD(startingBalance) },
            { label: "Monthly contribution", value: formatUSD(monthlyContribution) },
            { label: "Estimated annual return", value: `${annualReturn}%` },
            { label: "Number of years", value: String(years) },
            { label: "Starting savings", value: formatUSD(result.startingBalance) },
            { label: "Contributions", value: formatUSD(result.totalContributions) },
            { label: "Estimated growth", value: formatUSD(result.estimatedGrowth) },
            { label: "Illustrated balance", value: formatUSD(result.projectedBalance) },
          ]}
          disclaimer="This worksheet is an illustrative projection, not a quote, not advice, and not a forecast of any account. Actual investment performance is not guaranteed."
          toolHref="/tools/compound-growth"
        />
      }
      results={
        <div>
          <ResultStat
            primary
            label="Illustrated balance"
            value={formatUSD(result.projectedBalance)}
          />
          <div className="mt-6">
            <ResultStat label="Starting savings" value={formatUSD(result.startingBalance)} />
            <ResultStat label="Contributions" value={formatUSD(result.totalContributions)} />
            <ResultStat label="Estimated growth" value={formatUSD(result.estimatedGrowth)} />
          </div>
          <div className="mt-6">
            <GrowthChart points={series} />
            <div className="mt-3 flex gap-4 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-navy" aria-hidden />
                Balance
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-line" aria-hidden />
                Contributions
              </span>
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-muted">
            Illustrative projection only. Actual investment performance is not
            guaranteed.
          </p>
          <CalculatorCta toolSlug="compound-growth" />
        </div>
      }
    >
      <CalculatorField
        id="cg-start"
        label="Starting balance"
        value={startingBalance}
        prefix="$"
        onChange={setStartingBalance}
        min={0}
        max={2000000}
        step={1000}
      />
      <CalculatorField
        id="cg-monthly"
        label="Monthly contribution"
        value={monthlyContribution}
        prefix="$"
        onChange={setMonthlyContribution}
        min={0}
        max={10000}
        step={25}
      />
      <CalculatorField
        id="cg-return"
        label="Estimated annual return"
        value={annualReturn}
        suffix="%"
        onChange={setAnnualReturn}
        min={0}
        max={12}
        step={0.25}
      />
      <CalculatorField
        id="cg-years"
        label="Number of years"
        value={years}
        suffix="yrs"
        onChange={setYears}
        min={1}
        max={40}
      />
    </CalculatorShell>
  );
}
