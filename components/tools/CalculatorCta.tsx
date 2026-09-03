import { Button } from "@/components/ui/Button";
import { getTool } from "@/lib/content/tools";

type CalculatorCtaProps = {
  toolSlug: string;
};

export function CalculatorCta({ toolSlug }: CalculatorCtaProps) {
  const tool = getTool(toolSlug);

  if (!tool) {
    return null;
  }

  return (
    <div className="no-print mt-5">
      <p className="text-sm leading-6 text-muted">
        This is a worksheet, not a quote and not advice.
      </p>
      <div className="mt-3 flex w-full flex-col gap-3">
        <Button className="w-full" href="/contact" variant="blue" showArrow>
          {tool.ctaLabel}
        </Button>
        <Button className="w-full" href={tool.relatedServiceHref} variant="secondary">
          {tool.secondaryCtaLabel}
        </Button>
      </div>
    </div>
  );
}
