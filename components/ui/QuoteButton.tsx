"use client";

import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useQuoteModal } from "@/components/layout/QuoteProvider";
import { analyticsEvents, trackEvent } from "@/lib/analytics";

type QuoteButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "blue" | "gold" | "secondary" | "ghost";
  showArrow?: boolean;
  showCalendar?: boolean;
  event?: "quote" | "consultation";
  toolSlug?: string;
  className?: string;
};

export function QuoteButton({
  children,
  variant = "blue",
  showArrow = false,
  showCalendar = false,
  event = "quote",
  toolSlug,
  className,
}: QuoteButtonProps) {
  const { openQuote } = useQuoteModal();

  return (
    <Button
      variant={variant}
      showArrow={showArrow}
      className={className}
      onClick={() => {
        if (toolSlug) {
          trackEvent(analyticsEvents.calculatorCtaClicked, { tool: toolSlug });
        }
        trackEvent(
          event === "consultation"
            ? analyticsEvents.consultationCtaClicked
            : analyticsEvents.quoteCtaClicked,
        );
        openQuote();
      }}
    >
      {showCalendar ? <Calendar className="h-4 w-4" aria-hidden /> : null}
      {children}
    </Button>
  );
}
