"use client";

import { useRef, useState } from "react";
import { AssumptionsPanel } from "@/components/tools/AssumptionsPanel";
import { CalculatorCta } from "@/components/tools/CalculatorCta";
import { CalculatorField } from "@/components/tools/CalculatorField";
import { CalculatorShell } from "@/components/tools/CalculatorShell";
import { KeepWorksheet } from "@/components/tools/KeepWorksheet";
import { ResultCard } from "@/components/tools/ResultCard";
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

  const gapLabel =
    result.status === "shortfall" ? "Money still needed each month" : "Extra each month in this picture";
  const meaning =
    result.status === "shortfall"
      ? `Bills in this picture are ${formatUSD(result.estimatedNeed)} a month. Illustrated income is ${formatUSD(result.projectedMonthlyIncome)} a month. The difference is ${formatUSD(result.monthlyGap)}.`
      : `Illustrated income is ${formatUSD(result.projectedMonthlyIncome)} a month. That covers the ${formatUSD(result.estimatedNeed)} in bills you typed, with ${formatUSD(result.monthlyGap)} left over in this picture.`;
  const notMeaning =
    "This is not your official Social Security number, not a forecast, and not a plan to buy anything. Growth and the withdrawal rate are assumptions you can change.";

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
            label="Growth rate before retirement (percent per year)"
            value={preRetireReturn}
            onChange={setPreRetireReturn}
            min={0}
            max={12}
            step={0.25}
            suffix="%"
          />
          <CalculatorField
            id="ri-withdrawal"
            label="Planning withdrawal rate (percent per year)"
            hint="A teaching shortcut. It does not promise money lasts to any age."
            value={withdrawalRate}
            onChange={setWithdrawalRate}
            min={WITHDRAWAL_PERCENT_MIN}
            max={WITHDRAWAL_PERCENT_MAX}
            step={0.25}
            suffix="%"
          />
          <CalculatorField
            id="ri-planning-age"
            label="Planning age (years)"
            hint="Shown so you can see how long retirement might last. It does not change the dollar math."
            value={planningAge}
            onChange={setPlanningAge}
            min={retirementAge}
            max={100}
          />
        </AssumptionsPanel>
      }
      keep={
        <KeepWorksheet
          title="Retirement Income Planner"
          subtitle="Would the income in this picture cover the monthly bills you typed?"
          inputs={[
            { label: "Current age (years)", value: String(currentAge) },
            { label: "Retirement age (years)", value: String(retirementAge) },
            { label: "Pay today (dollars per month)", value: formatUSD(currentMonthlyIncome) },
            { label: "Bills in retirement (dollars per month)", value: formatUSD(expenses) },
            {
              label: "Social Security or pension you typed (dollars per month)",
              value: formatUSD(socialSecurity),
            },
            { label: "Savings now (dollars)", value: formatUSD(savings) },
            { label: "Added each month (dollars)", value: formatUSD(contribution) },
            { label: "Growth rate before retirement (percent per year)", value: `${preRetireReturn}%` },
            { label: "Planning withdrawal rate (percent per year)", value: `${withdrawalRate}%` },
            { label: "Planning age (years)", value: String(planningAge) },
          ]}
          results={[
            {
              label: "Illustrated monthly income",
              value: `${formatUSD(result.projectedMonthlyIncome)} per month`,
            },
            { label: "Bills you typed", value: `${formatUSD(result.estimatedNeed)} per month` },
            { label: gapLabel, value: `${formatUSD(result.monthlyGap)} per month` },
            { label: "Savings at retirement in this picture", value: formatUSD(result.projectedNestEgg) },
            {
              label: "Income from savings in this picture",
              value: `${formatUSD(result.monthlyFromSavings)} per month`,
            },
            {
              label: "Social Security or pension you typed",
              value: `${formatUSD(result.socialSecurityPension)} per month`,
            },
          ]}
          meaning={[meaning, notMeaning]}
          disclaimer="This worksheet is an illustration, not a quote, not a forecast, and not advice. Actual investment performance is not guaranteed. Official Social Security figures come from the Social Security Administration."
          toolHref="/tools/retirement-income"
        />
      }
      results={
        <div>
          <ResultCard
            question="Would this income cover the monthly bills you typed?"
            answer={`${formatUSD(result.projectedMonthlyIncome)} a month`}
            meaning={meaning}
            notMeaning={notMeaning}
          >
            <ResultStat label="Bills you typed" value={`${formatUSD(result.estimatedNeed)} per month`} />
            <ResultStat label={gapLabel} value={`${formatUSD(result.monthlyGap)} per month`} />
            <ResultStat
              label="Savings at retirement in this picture"
              value={formatUSD(result.projectedNestEgg)}
            />
            <ResultStat
              label="Income from savings in this picture"
              value={`${formatUSD(result.monthlyFromSavings)} per month`}
            />
            <ResultStat
              label="Social Security or pension you typed"
              value={`${formatUSD(result.socialSecurityPension)} per month`}
            />
            {!result.planningHorizonValid ? (
              <p className="mt-3 text-sm text-muted">
                Choose a planning age after retirement so the years in retirement are clear.
              </p>
            ) : null}
          </ResultCard>
          <CalculatorCta toolSlug="retirement-income" />
        </div>
      }
    >
      <CalculatorField
        id="ri-age"
        label="Your age today (years)"
        value={currentAge}
        onChange={setCurrentAge}
        min={18}
        max={100}
      />
      <CalculatorField
        id="ri-retire-age"
        label="Age you hope to stop working (years)"
        value={retirementAge}
        onChange={setRetirementAge}
        min={18}
        max={100}
      />
      <CalculatorField
        id="ri-income"
        label="Pay today (dollars per month)"
        hint="Used only to suggest a starting bill figure. You can change the next box."
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
        label="Bills in retirement (dollars per month)"
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
        label="Social Security or pension you expect (dollars per month)"
        hint="Type the amount you already know. This page does not look it up."
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
        label="Savings set aside for retirement (dollars)"
        value={savings}
        prefix="$"
        onChange={setSavings}
        min={0}
        max={5000000}
        step={1000}
      />
      <CalculatorField
        id="ri-contribution"
        label="Amount you may add each month (dollars)"
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
