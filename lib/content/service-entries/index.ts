import { businessPlanningService } from "@/lib/content/service-entries/business-planning";
import { finalExpenseService } from "@/lib/content/service-entries/final-expense";
import { healthInsuranceService } from "@/lib/content/service-entries/health-insurance";
import { lifeInsuranceService } from "@/lib/content/service-entries/life-insurance";
import { medicareInsuranceService } from "@/lib/content/service-entries/medicare-insurance";
import { mortgageProtectionService } from "@/lib/content/service-entries/mortgage-protection";
import { retirementServicesService } from "@/lib/content/service-entries/retirement-services";
import type { ServicePageContent } from "@/lib/content/types";

export const servicePages = [
  lifeInsuranceService,
  retirementServicesService,
  medicareInsuranceService,
  healthInsuranceService,
  finalExpenseService,
  mortgageProtectionService,
  businessPlanningService,
] as const satisfies readonly ServicePageContent[];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}
