"use client";

import { useState } from "react";
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

  const gapLabel =
    result.status === "shortfall" ? "Savings still missing in this picture" : "Extra savings in this picture";
  const meaning = `To draw ${formatUSD(result.netMonthlyNeed)} a month from savings, after the Social Security or pension you typed, this picture uses a ${withdrawalRate}% yearly withdrawal rate and lands on ${formatUSD(result.retirementGoal)}.`;
  const notMeaning =
    "This is not a savings target you must hit. It is not official Social Security. The withdrawal rate is a teaching shortcut, not a promise money lasts to the planning age.";

  return (
    <CalculatorShell
      summary={{
        label: "Illustrated savings figure",
        value: formatUSD(result.retirementGoal),
      }}
      assumptions={
        <AssumptionsPanel>
          <CalculatorField
            id="rg-return"
            label="Growth rate before retirement (percent per year)"
            value={preRetireReturn}
            onChange={setPreRetireReturn}
            min={0}
            max={12}
            step={0.25}
            suffix="%"
          />
          <CalculatorField
            id="rg-withdrawal"
            label="Planning withdrawal rate (percent per year)"
            hint="A teaching shortcut. It does not promise money lasts to any age."
            value={withdrawalRate}
            onChange={setWithdrawalRate}
            min={WITHDRAWAL_PERCENT_MIN}
            max={WITHDRAWAL_PERCENT_MAX}
            step={0.25}
            suffix="%"
          />
        </AssumptionsPanel>
      }
      keep={
        <KeepWorksheet
          title="Retirement Goal Calculator"
          subtitle="A savings figure that could support the monthly income you typed."
          inputs={[
            { label: "Current age (years)", value: String(currentAge) },
            { label: "Retirement age (years)", value: String(retirementAge) },
            { label: "Monthly income you have in mind (dollars)", value: formatUSD(desiredIncome) },
            {
              label: "Social Security or pension you typed (dollars per month)",
              value: formatUSD(socialSecurity),
            },
            { label: "Savings now (dollars)", value: formatUSD(savings) },
            { label: "Added each month (dollars)", value: formatUSD(contribution) },
            { label: "Planning age (years)", value: String(planningAge) },
            { label: "Growth rate before retirement (percent per year)", value: `${preRetireReturn}%` },
            { label: "Planning withdrawal rate (percent per year)", value: `${withdrawalRate}%` },
          ]}
          results={[
            { label: "Illustrated savings figure", value: formatUSD(result.retirementGoal) },
            { label: "Savings at retirement in this picture", value: formatUSD(result.projectedSavings) },
            { label: gapLabel, value: formatUSD(result.planningGap) },
            {
              label: "Monthly amount left for savings to cover",
              value: `${formatUSD(result.netMonthlyNeed)} per month`,
            },
          ]}
          meaning={[
            meaning,
            result.planningHorizonValid
              ? `The planning age of ${planningAge} is context for how long retirement might last. The dollar figure uses the withdrawal rate, not a spend-down to that age.`
              : "Choose a planning age after retirement so the years in retirement are clear.",
            notMeaning,
          ]}
          disclaimer="This worksheet is an educational estimate in today's dollars, not a quote, not a savings-target recommendation, and not advice. A planning withdrawal rate is a shorthand, not a promise that assets last to any age."
          toolHref="/tools/retirement-goal"
        />
      }
      results={
        <div>
          <ResultCard
            question="What savings figure would support the monthly income you typed?"
            answer={formatUSD(result.retirementGoal)}
            meaning={meaning}
            notMeaning={notMeaning}
          >
            <ResultStat
              label="Savings at retirement in this picture"
              value={formatUSD(result.projectedSavings)}
            />
            <ResultStat label={gapLabel} value={formatUSD(result.planningGap)} />
            <ResultStat
              label="Monthly amount left for savings to cover"
              value={`${formatUSD(result.netMonthlyNeed)} per month`}
            />
            {result.planningHorizonValid ? (
              <p className="mt-3 text-sm leading-6 text-muted">
                Planning age {planningAge} is context. The dollar figure uses the
                withdrawal rate, not a spend-down to that age.
              </p>
            ) : (
              <p className="mt-3 text-sm text-muted">
                Choose a planning age after retirement so the years in retirement are clear.
              </p>
            )}
          </ResultCard>
          <CalculatorCta toolSlug="retirement-goal" />
        </div>
      }
    >
      <CalculatorField
        id="rg-age"
        label="Your age today (years)"
        value={currentAge}
        onChange={setCurrentAge}
        min={18}
        max={100}
      />
      <CalculatorField
        id="rg-retire-age"
        label="Age you hope to stop working (years)"
        value={retirementAge}
        onChange={setRetirementAge}
        min={18}
        max={100}
      />
      <CalculatorField
        id="rg-income"
        label="Monthly income you have in mind (dollars)"
        value={desiredIncome}
        prefix="$"
        onChange={setDesiredIncome}
        min={0}
        max={30000}
        step={100}
      />
      <CalculatorField
        id="rg-ss"
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
        id="rg-savings"
        label="Savings set aside now (dollars)"
        value={savings}
        prefix="$"
        onChange={setSavings}
        min={0}
        max={5000000}
        step={1000}
      />
      <CalculatorField
        id="rg-contribution"
        label="Amount you may add each month (dollars)"
        value={contribution}
        prefix="$"
        onChange={setContribution}
        min={0}
        max={10000}
        step={25}
      />
      <CalculatorField
        id="rg-planning-age"
        label="Planning age (years)"
        hint="Shown so you can see how long retirement might last."
        value={planningAge}
        onChange={setPlanningAge}
        min={retirementAge}
        max={100}
      />
    </CalculatorShell>
  );
}
