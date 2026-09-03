"use client";

import { useState } from "react";
import { CalculatorCta } from "@/components/tools/CalculatorCta";
import { CalculatorField } from "@/components/tools/CalculatorField";
import { CalculatorShell } from "@/components/tools/CalculatorShell";
import { KeepWorksheet } from "@/components/tools/KeepWorksheet";
import { ResultCard } from "@/components/tools/ResultCard";
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

  const meaning =
    result.estimatedProtectionNeed === 0
      ? "After the coverage and savings you typed, this picture does not show extra life insurance to talk about."
      : `This picture adds ${years} years of pay, the house loan, other debts, and school money. Then it subtracts coverage and cash you already have. The leftover is ${formatUSD(result.estimatedProtectionNeed)}.`;
  const notMeaning =
    "This is not a quote and not the amount you should buy. Taxes, underwriting, and final-expense costs are left out unless you typed them in.";

  return (
    <CalculatorShell
      summary={{
        label: "Leftover in this picture",
        value: formatUSD(result.estimatedProtectionNeed),
      }}
      keep={
        <KeepWorksheet
          title="Protection Needs Estimator"
          subtitle="A leftover after coverage and savings you already have."
          inputs={[
            { label: "Yearly household pay (dollars)", value: formatUSD(income) },
            { label: "Years of pay to picture replacing", value: String(years) },
            { label: "House loan still owed (dollars)", value: formatUSD(mortgage) },
            { label: "Other debts (dollars)", value: formatUSD(debts) },
            { label: "School money you would want funded (dollars)", value: formatUSD(education) },
            { label: "Life insurance you already have (dollars)", value: formatUSD(coverage) },
            { label: "Cash you could use (dollars)", value: formatUSD(savings) },
          ]}
          results={[
            { label: "Pay times years", value: formatUSD(result.incomeReplacement) },
            { label: "All needs added up", value: formatUSD(result.grossNeed) },
            { label: "Coverage and cash you typed", value: formatUSD(result.resources) },
            { label: "Leftover in this picture", value: formatUSD(result.estimatedProtectionNeed) },
          ]}
          meaning={[meaning, notMeaning]}
          disclaimer="This worksheet is an illustration, not a quote, and not advice. It does not offer or recommend a policy. Individual needs vary."
          toolHref="/tools/protection-needs"
        />
      }
      results={
        <div>
          <ResultCard
            question="After coverage you already have, what leftover is in this picture?"
            answer={formatUSD(result.estimatedProtectionNeed)}
            meaning={meaning}
            notMeaning={notMeaning}
          >
            <ResultStat label="Pay times years" value={formatUSD(result.incomeReplacement)} />
            <ResultStat label="All needs added up" value={formatUSD(result.grossNeed)} />
            <ResultStat label="Coverage and cash you typed" value={formatUSD(result.resources)} />
          </ResultCard>
          <CalculatorCta toolSlug="protection-needs" />
        </div>
      }
    >
      <CalculatorField
        id="pn-income"
        label="Yearly household pay (dollars)"
        value={income}
        prefix="$"
        onChange={setIncome}
        min={0}
        max={1000000}
        step={1000}
      />
      <CalculatorField
        id="pn-years"
        label="Years of pay to picture replacing (years)"
        value={years}
        suffix="yrs"
        onChange={setYears}
        min={1}
        max={30}
      />
      <CalculatorField
        id="pn-mortgage"
        label="House loan still owed (dollars)"
        value={mortgage}
        prefix="$"
        onChange={setMortgage}
        min={0}
        max={2000000}
        step={1000}
      />
      <CalculatorField
        id="pn-debts"
        label="Other debts (dollars)"
        value={debts}
        prefix="$"
        onChange={setDebts}
        min={0}
        max={500000}
        step={500}
      />
      <CalculatorField
        id="pn-education"
        label="School money you would want funded (dollars)"
        value={education}
        prefix="$"
        onChange={setEducation}
        min={0}
        max={500000}
        step={1000}
      />
      <CalculatorField
        id="pn-coverage"
        label="Life insurance you already have (dollars)"
        value={coverage}
        prefix="$"
        onChange={setCoverage}
        min={0}
        max={5000000}
        step={1000}
      />
      <CalculatorField
        id="pn-savings"
        label="Cash you could use (dollars)"
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
