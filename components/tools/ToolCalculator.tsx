"use client";

import { CompoundGrowthCalculator } from "@/components/tools/calculators/CompoundGrowthCalculator";
import { FinancialSafetyCalculator } from "@/components/tools/calculators/FinancialSafetyCalculator";
import { MortgageProtectionCalculator } from "@/components/tools/calculators/MortgageProtectionCalculator";
import { ProtectionNeedsCalculator } from "@/components/tools/calculators/ProtectionNeedsCalculator";
import { RetirementGoalCalculator } from "@/components/tools/calculators/RetirementGoalCalculator";
import { RetirementIncomeCalculator } from "@/components/tools/calculators/RetirementIncomeCalculator";
import type { ToolSlug } from "@/lib/content/tools";

const calculators = {
  "retirement-income": RetirementIncomeCalculator,
  "compound-growth": CompoundGrowthCalculator,
  "retirement-goal": RetirementGoalCalculator,
  "protection-needs": ProtectionNeedsCalculator,
  "mortgage-protection": MortgageProtectionCalculator,
  "financial-safety": FinancialSafetyCalculator,
} as const;

export function ToolCalculator({ slug }: { slug: ToolSlug }) {
  const Calculator = calculators[slug];
  return <Calculator />;
}
