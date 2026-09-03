"use client";

import type { ComponentType } from "react";
import { BeneficiaryChecklist } from "@/components/tools/calculators/BeneficiaryChecklist";
import { CompoundGrowthCalculator } from "@/components/tools/calculators/CompoundGrowthCalculator";
import { FinancialSafetyCalculator } from "@/components/tools/calculators/FinancialSafetyCalculator";
import { MortgageProtectionCalculator } from "@/components/tools/calculators/MortgageProtectionCalculator";
import { ProtectionNeedsCalculator } from "@/components/tools/calculators/ProtectionNeedsCalculator";
import { RetirementGoalCalculator } from "@/components/tools/calculators/RetirementGoalCalculator";
import { RetirementIncomeCalculator } from "@/components/tools/calculators/RetirementIncomeCalculator";
import { Turning65Calendar } from "@/components/tools/calculators/Turning65Calendar";
import type { ToolSlug } from "@/lib/content/tools";

/**
 * Calculators run on the client, so the publication schedule is resolved on the
 * server and passed down. Only slugs that are live today may be linked.
 */
export type CalculatorProps = {
  readonly liveArticleSlugs?: readonly string[];
};

const calculators = {
  "retirement-income": RetirementIncomeCalculator,
  "compound-growth": CompoundGrowthCalculator,
  "retirement-goal": RetirementGoalCalculator,
  "protection-needs": ProtectionNeedsCalculator,
  "mortgage-protection": MortgageProtectionCalculator,
  "financial-safety": FinancialSafetyCalculator,
  "turning-65": Turning65Calendar,
  "beneficiary-checklist": BeneficiaryChecklist,
} satisfies Record<ToolSlug, ComponentType<CalculatorProps>>;

export function ToolCalculator({
  slug,
  liveArticleSlugs = [],
}: {
  slug: ToolSlug;
  liveArticleSlugs?: readonly string[];
}) {
  const Calculator = calculators[slug];
  return <Calculator liveArticleSlugs={liveArticleSlugs} />;
}
