import { Button } from "@/components/ui/Button";
import { QuoteButton } from "@/components/ui/QuoteButton";
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
        Want to explore what this could mean for you?
      </p>
      <div className="mt-4 flex w-full flex-col gap-3">
        <QuoteButton
          className="w-full"
          variant="blue"
          showArrow
          event="consultation"
          toolSlug={toolSlug}
        >
          {tool.ctaLabel}
        </QuoteButton>
        <Button className="w-full" href={tool.relatedServiceHref} variant="secondary">
          {tool.secondaryCtaLabel}
        </Button>
      </div>
    </div>
  );
}
