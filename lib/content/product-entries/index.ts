import { businessPlanningProducts } from "@/lib/content/product-entries/business-planning";
import { finalExpenseProducts } from "@/lib/content/product-entries/final-expense";
import { healthInsuranceProducts } from "@/lib/content/product-entries/health-insurance";
import { lifeInsuranceProducts } from "@/lib/content/product-entries/life-insurance";
import { medicareInsuranceProducts } from "@/lib/content/product-entries/medicare-insurance";
import { mortgageProtectionProducts } from "@/lib/content/product-entries/mortgage-protection";
import { retirementServicesProducts } from "@/lib/content/product-entries/retirement-services";
import type { ProductPageContent } from "@/lib/content/types";

export const productPages = [
  ...lifeInsuranceProducts,
  ...retirementServicesProducts,
  ...medicareInsuranceProducts,
  ...healthInsuranceProducts,
  ...finalExpenseProducts,
  ...mortgageProtectionProducts,
  ...businessPlanningProducts,
] as const satisfies readonly ProductPageContent[];

export function getProductPage(serviceSlug: string, productSlug: string) {
  return productPages.find(
    (page) => page.serviceSlug === serviceSlug && page.slug === productSlug,
  );
}

export function getOwnedProductParams() {
  return productPages.map((page) => ({
    slug: page.serviceSlug,
    productSlug: page.slug,
  }));
}

export function getOwnedProductHrefs() {
  return productPages.map((page) => page.href);
}
