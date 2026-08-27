"use client";

import { useState } from "react";
import { AssumptionsPanel } from "@/components/tools/AssumptionsPanel";
import { CalculatorCta } from "@/components/tools/CalculatorCta";
import { CalculatorField } from "@/components/tools/CalculatorField";
import { CalculatorShell } from "@/components/tools/CalculatorShell";
import { ResultStat } from "@/components/tools/ResultStat";
import {
  PLANNING_AGE,
  PRE_RETIRE_RETURN_PERCENT,
  WITHDRAWAL_PERCENT_MAX,
  WITHDRAWAL_PERCENT_MIN,
  WITHDRAWAL_RATE_PERCENT,
  calculateRetirementGoal,
  formatUSD,
  percentToRate,
} from "@/lib/calculators";

export function RetirementGoalCalculator() {
  const [currentAge, setCurrentAge] = useState(40);
  const [retirementAge, setRetirementAge] = useState(65);
  const [desiredIncome, setDesiredIncome] = useState(6000);
  const [socialSecurity, setSocialSecurity] = useState(2000);
  const [savings, setSavings] = useState(150000);
  const [contribution, setContribution] = useState(500);
  const [planningAge, setPlanningAge] = useState(PLANNING_AGE);
  const [preRetireReturn, setPreRetireReturn] = useState(PRE_RETIRE_RETURN_PERCENT);
  const [withdrawalRate, setWithdrawalRate] = useState(WITHDRAWAL_RATE_PERCENT);

  const result = calculateRetirementGoal({
    currentAge,
    retirementAge,
    desiredRetirementMonthlyIncome: desiredIncome,
    expectedSocialSecurityPensionMonthly: socialSecurity,
    currentSavings: savings,
    monthlyContribution: contribution,
    preRetireReturn: percentToRate(preRetireReturn),
    withdrawalRate: percentToRate(withdrawalRate),
    planningAge,
  });

  return (
    <CalculatorShell
      summary={{
        label: "Estimated goal",
        value: formatUSD(result.retirementGoal),
      }}
      assumptions={
        <AssumptionsPanel>
          <CalculatorField
            id="rg-return"
            label="Illustrated growth rate before retirement"
            value={preRetireReturn}
            onChange={setPreRetireReturn}
            min={0}
            max={12}
            step={0.25}
            suffix="%"
          />
          <CalculatorField
            id="rg-withdrawal"
            label="Planning withdrawal rate (illustration only)"
            value={withdrawalRate}
            onChange={setWithdrawalRate}
            min={WITHDRAWAL_PERCENT_MIN}
            max={WITHDRAWAL_PERCENT_MAX}
            step={0.25}
            suffix="%"
          />
        </AssumptionsPanel>
      }
      results={
        <div>
          <ResultStat
            primary
            label="Estimated retirement goal"
            value={formatUSD(result.retirementGoal)}
          />
          <div className="mt-6">
            <ResultStat
              label="Current projected savings"
              value={formatUSD(result.projectedSavings)}
            />
            <ResultStat
              label={
                result.status === "shortfall"
                  ? "Estimated planning gap"
                  : "Estimated surplus"
              }
              value={formatUSD(result.planningGap)}
            />
            <ResultStat
              label="Net monthly income illustrated"
              value={`${formatUSD(result.netMonthlyNeed)}/month`}
            />
          </div>
          {!result.planningHorizonValid ? (
            <p className="mt-4 text-sm text-muted">
              Choose a planning age after retirement so the horizon is clear.
            </p>
          ) : (
            <p className="mt-5 text-sm leading-6 text-muted">
              This illustration uses a planning horizon to age {planningAge}. The
              dollar target uses the planning withdrawal rate, not a spend-down
              to that age.
            </p>
          )}
          <CalculatorCta toolSlug="retirement-goal" />
        </div>
      }
    >
      <CalculatorField
        id="rg-age"
        label="Current age"
        value={currentAge}
        onChange={setCurrentAge}
        min={18}
        max={100}
      />
      <CalculatorField
        id="rg-retire-age"
        label="Retirement age"
        value={retirementAge}
        onChange={setRetirementAge}
        min={18}
        max={100}
      />
      <CalculatorField
        id="rg-income"
        label="Desired retirement monthly income"
        value={desiredIncome}
        prefix="$"
        onChange={setDesiredIncome}
        min={0}
        max={30000}
        step={100}
      />
      <CalculatorField
        id="rg-ss"
        label="Expected Social Security or pension"
        value={socialSecurity}
        prefix="$"
        suffix="/mo"
        onChange={setSocialSecurity}
        min={0}
        max={10000}
        step={50}
      />
      <CalculatorField
        id="rg-savings"
        label="Current savings"
        value={savings}
        prefix="$"
        onChange={setSavings}
        min={0}
        max={5000000}
        step={1000}
      />
      <CalculatorField
        id="rg-contribution"
        label="Current monthly contributions"
        value={contribution}
        prefix="$"
        onChange={setContribution}
        min={0}
        max={10000}
        step={25}
      />
      <CalculatorField
        id="rg-planning-age"
        label="Planning age / life expectancy assumption"
        hint="Shown as context for how long retirement might last."
        value={planningAge}
        onChange={setPlanningAge}
        min={retirementAge}
        max={100}
      />
    </CalculatorShell>
  );
}
