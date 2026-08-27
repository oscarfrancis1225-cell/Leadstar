"use client";

import { useRef, useState } from "react";
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
  calculateRetirementIncome,
  formatUSD,
  percentToRate,
} from "@/lib/calculators";

export function RetirementIncomeCalculator() {
  const [currentAge, setCurrentAge] = useState(40);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentMonthlyIncome, setCurrentMonthlyIncome] = useState(6000);
  const [expenses, setExpenses] = useState(4800);
  const [socialSecurity, setSocialSecurity] = useState(2000);
  const [savings, setSavings] = useState(150000);
  const [contribution, setContribution] = useState(500);
  const [preRetireReturn, setPreRetireReturn] = useState(PRE_RETIRE_RETURN_PERCENT);
  const [withdrawalRate, setWithdrawalRate] = useState(WITHDRAWAL_RATE_PERCENT);
  const [planningAge, setPlanningAge] = useState(PLANNING_AGE);
  const expensesTouched = useRef(false);

  const result = calculateRetirementIncome({
    currentAge,
    retirementAge,
    expectedRetirementMonthlyExpenses: expenses,
    estimatedSocialSecurityPensionMonthly: socialSecurity,
    currentRetirementSavings: savings,
    monthlyRetirementContribution: contribution,
    preRetireReturn: percentToRate(preRetireReturn),
    withdrawalRate: percentToRate(withdrawalRate),
    planningAge,
  });

  return (
    <CalculatorShell
      summary={{
        label: "Illustrated income",
        value: `${formatUSD(result.projectedMonthlyIncome)}/mo`,
      }}
      assumptions={
        <AssumptionsPanel>
          <CalculatorField
            id="ri-return"
            label="Illustrated growth rate before retirement"
            value={preRetireReturn}
            onChange={setPreRetireReturn}
            min={0}
            max={12}
            step={0.25}
            suffix="%"
          />
          <CalculatorField
            id="ri-withdrawal"
            label="Planning withdrawal rate (illustration only)"
            value={withdrawalRate}
            onChange={setWithdrawalRate}
            min={WITHDRAWAL_PERCENT_MIN}
            max={WITHDRAWAL_PERCENT_MAX}
            step={0.25}
            suffix="%"
          />
          <CalculatorField
            id="ri-planning-age"
            label="Planning age"
            hint="Shown for context. It does not change the dollar conversion."
            value={planningAge}
            onChange={setPlanningAge}
            min={retirementAge}
            max={100}
          />
        </AssumptionsPanel>
      }
      results={
        <div>
          <ResultStat
            primary
            label="Illustrated retirement income"
            value={`${formatUSD(result.projectedMonthlyIncome)}/month`}
          />
          <div className="mt-6">
            <ResultStat
              label="Estimated need"
              value={`${formatUSD(result.estimatedNeed)}/month`}
            />
            <ResultStat
              label={
                result.status === "shortfall"
                  ? "Potential income gap"
                  : "Estimated surplus"
              }
              value={`${formatUSD(result.monthlyGap)}/month`}
            />
            <ResultStat
              label="Projected savings at retirement"
              value={formatUSD(result.projectedNestEgg)}
            />
            <ResultStat
              label="Illustrated income from savings"
              value={`${formatUSD(result.monthlyFromSavings)}/month`}
            />
            <ResultStat
              label="Social Security or pension entered"
              value={`${formatUSD(result.socialSecurityPension)}/month`}
            />
          </div>
          {!result.planningHorizonValid ? (
            <p className="mt-4 text-sm text-muted">
              Choose a planning age after retirement so the horizon is clear.
            </p>
          ) : null}
          <p className="mt-5 text-sm leading-6 text-muted">
            {result.status === "shortfall"
              ? "There may be a gap worth planning for."
              : "This illustration suggests the income sources you entered may cover the expenses you entered. A conversation can still help you stress-test the picture."}
          </p>
          <CalculatorCta toolSlug="retirement-income" />
        </div>
      }
    >
      <CalculatorField
        id="ri-age"
        label="Current age"
        value={currentAge}
        onChange={setCurrentAge}
        min={18}
        max={100}
      />
      <CalculatorField
        id="ri-retire-age"
        label="Desired retirement age"
        value={retirementAge}
        onChange={setRetirementAge}
        min={18}
        max={100}
      />
      <CalculatorField
        id="ri-income"
        label="Current monthly income"
        hint="Shown for context. The comparison uses your retirement expense figure."
        value={currentMonthlyIncome}
        prefix="$"
        onChange={(value) => {
          setCurrentMonthlyIncome(value);
          if (!expensesTouched.current) {
            setExpenses(Math.round(value * 0.8));
          }
        }}
        min={0}
        max={50000}
        step={100}
      />
      <CalculatorField
        id="ri-expenses"
        label="Expected retirement monthly expenses"
        value={expenses}
        prefix="$"
        onChange={(value) => {
          expensesTouched.current = true;
          setExpenses(value);
        }}
        min={0}
        max={30000}
        step={100}
      />
      <CalculatorField
        id="ri-ss"
        label="Estimated Social Security or pension"
        value={socialSecurity}
        prefix="$"
        suffix="/mo"
        onChange={setSocialSecurity}
        min={0}
        max={10000}
        step={50}
      />
      <CalculatorField
        id="ri-savings"
        label="Current retirement savings"
        value={savings}
        prefix="$"
        onChange={setSavings}
        min={0}
        max={5000000}
        step={1000}
      />
      <CalculatorField
        id="ri-contribution"
        label="Monthly retirement contribution"
        value={contribution}
        prefix="$"
        onChange={setContribution}
        min={0}
        max={10000}
        step={25}
      />
    </CalculatorShell>
  );
}
