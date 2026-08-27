export const analyticsEvents = {
  quoteCtaClicked: "quote_cta_clicked",
  consultationCtaClicked: "consultation_cta_clicked",
  serviceClicked: "service_clicked",
  leadFormStarted: "lead_form_started",
  leadFormSubmitted: "lead_form_submitted",
  leadFormError: "lead_form_error",
  phoneClicked: "phone_clicked",
  emailClicked: "email_clicked",
  toolsCardClicked: "tools_card_clicked",
  calculatorCtaClicked: "calculator_cta_clicked",
} as const;

export type AnalyticsEvent = (typeof analyticsEvents)[keyof typeof analyticsEvents];

type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

/**
 * Placeholder analytics helper. Connect a provider later without sending
 * personal form data.
 */
export function trackEvent(event: AnalyticsEvent, payload?: AnalyticsPayload) {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  if (typeof window === "undefined") {
    return;
  }

  console.info("[analytics]", event, payload ?? {});
}
