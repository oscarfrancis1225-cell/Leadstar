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
    <div className="mt-6">
      <p className="text-sm leading-6 text-muted">
        This result is an illustration, not a quote. A conversation can help
        you talk through what the numbers might mean for your situation.
      </p>
      <div className="mt-4 flex w-full flex-col gap-3">
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
