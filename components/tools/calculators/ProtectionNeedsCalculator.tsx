"use client";

import { useState } from "react";
import { CalculatorCta } from "@/components/tools/CalculatorCta";
import { CalculatorField } from "@/components/tools/CalculatorField";
import { CalculatorShell } from "@/components/tools/CalculatorShell";
import { KeepWorksheet } from "@/components/tools/KeepWorksheet";
import { ResultStat } from "@/components/tools/ResultStat";
import { calculateProtectionNeeds, formatUSD } from "@/lib/calculators";

export function ProtectionNeedsCalculator() {
  const [income, setIncome] = useState(85000);
  const [years, setYears] = useState(10);
  const [mortgage, setMortgage] = useState(250000);
  const [debts, setDebts] = useState(20000);
  const [education, setEducation] = useState(80000);
  const [coverage, setCoverage] = useState(250000);
  const [savings, setSavings] = useState(100000);

  const result = calculateProtectionNeeds({
    annualHouseholdIncome: income,
    yearsOfIncomeReplacement: years,
    remainingMortgage: mortgage,
    otherDebts: debts,
    futureEducationGoal: education,
    existingLifeCoverage: coverage,
    liquidSavings: savings,
  });

  return (
    <CalculatorShell
      summary={{
        label: "Estimated need",
        value: formatUSD(result.estimatedProtectionNeed),
      }}
      keep={
        <KeepWorksheet
          title="Protection Needs Estimator"
          rows={[
            { label: "Annual household income", value: formatUSD(income) },
            { label: "Years of income replacement", value: String(years) },
            { label: "Remaining mortgage", value: formatUSD(mortgage) },
            { label: "Other debts", value: formatUSD(debts) },
            { label: "Future education goal", value: formatUSD(education) },
            { label: "Existing life coverage", value: formatUSD(coverage) },
            { label: "Liquid savings available", value: formatUSD(savings) },
            { label: "Income replacement", value: formatUSD(result.incomeReplacement) },
            { label: "Gross need illustrated", value: formatUSD(result.grossNeed) },
            { label: "Coverage and savings entered", value: formatUSD(result.resources) },
            { label: "Estimated protection need", value: formatUSD(result.estimatedProtectionNeed) },
          ]}
          disclaimer="This worksheet is an illustration, not a quote, and not advice. It does not offer or recommend a policy. Individual needs vary."
          toolHref="/tools/protection-needs"
        />
      }
      results={
        <div>
          <ResultStat
            primary
            label="Estimated protection need"
            value={formatUSD(result.estimatedProtectionNeed)}
            hint="Educational estimate"
          />
          <div className="mt-6">
            <ResultStat label="Income replacement" value={formatUSD(result.incomeReplacement)} />
            <ResultStat label="Gross need illustrated" value={formatUSD(result.grossNeed)} />
            <ResultStat label="Coverage and savings entered" value={formatUSD(result.resources)} />
          </div>
          <p className="mt-5 text-sm leading-6 text-muted">
            {result.estimatedProtectionNeed === 0
              ? "This illustration does not show an additional protection gap from the items you entered."
              : "This is an educational estimate, not a coverage recommendation. Individual needs vary."}
          </p>
          <CalculatorCta toolSlug="protection-needs" />
        </div>
      }
    >
      <CalculatorField
        id="pn-income"
        label="Annual household income"
        value={income}
        prefix="$"
        onChange={setIncome}
        min={0}
        max={1000000}
        step={1000}
      />
      <CalculatorField
        id="pn-years"
        label="Years of income replacement"
        value={years}
        suffix="yrs"
        onChange={setYears}
        min={1}
        max={30}
      />
      <CalculatorField
        id="pn-mortgage"
        label="Remaining mortgage"
        value={mortgage}
        prefix="$"
        onChange={setMortgage}
        min={0}
        max={2000000}
        step={1000}
      />
      <CalculatorField
        id="pn-debts"
        label="Other debts"
        value={debts}
        prefix="$"
        onChange={setDebts}
        min={0}
        max={500000}
        step={500}
      />
      <CalculatorField
        id="pn-education"
        label="Future education goal"
        value={education}
        prefix="$"
        onChange={setEducation}
        min={0}
        max={500000}
        step={1000}
      />
      <CalculatorField
        id="pn-coverage"
        label="Existing life coverage"
        value={coverage}
        prefix="$"
        onChange={setCoverage}
        min={0}
        max={5000000}
        step={1000}
      />
      <CalculatorField
        id="pn-savings"
        label="Liquid savings available"
        value={savings}
        prefix="$"
        onChange={setSavings}
        min={0}
        max={2000000}
        step={1000}
      />
    </CalculatorShell>
  );
}
