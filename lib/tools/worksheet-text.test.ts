import { describe, expect, it } from "vitest";
import {
  buildWorksheetText,
  redactRowsForEmail,
} from "@/lib/tools/worksheet-text";

const content = {
  title: "Financial Safety Cushion",
  subtitle: "How long cash could cover the bills you typed.",
  dateLabel: "September 3, 2026",
  inputs: [
    { label: "Bills you must pay each month", value: "$3,000" },
    { label: "Cash you could use today", value: "$18,000" },
  ],
  results: [{ label: "Months your cash could cover", value: "4.7 months" }],
  meaning: ["This is your cash divided by the monthly bills you typed."],
  sources: [{ label: "Medicare.gov", href: "https://www.medicare.gov" }],
  disclaimer: "An illustration, not a quote, and not advice.",
  pageUrl: "https://example.com/tools/financial-safety",
};

describe("buildWorksheetText", () => {
  it("keeps the calculator name, inputs, result, meaning, source, disclaimer, and date", () => {
    const text = buildWorksheetText(content);

    expect(text).toContain("LeadStar illustration: Financial Safety Cushion");
    expect(text).toContain("Generated: September 3, 2026");
    expect(text).toContain("What you entered");
    expect(text).toContain("- Bills you must pay each month: $3,000");
    expect(text).toContain("Your result");
    expect(text).toContain("- Months your cash could cover: 4.7 months");
    expect(text).toContain("What this means");
    expect(text).toContain("Official source");
    expect(text).toContain("https://www.medicare.gov");
    expect(text).toContain("Disclaimer");
    expect(text).toContain("An illustration, not a quote, and not advice.");
    expect(text).toContain("https://example.com/tools/financial-safety");
    expect(text.endsWith("\n")).toBe(true);
    expect(text).not.toMatch(/\n{3,}/);
  });

  it("skips sections that have nothing in them", () => {
    const text = buildWorksheetText({
      ...content,
      sources: [],
      meaning: [],
    });

    expect(text).not.toContain("Official source");
    expect(text).not.toContain("What this means");
    expect(text).toContain("Your result");
  });

  it("has no em dash anywhere in the worksheet text", () => {
    expect(buildWorksheetText(content)).not.toContain("\u2014");
  });
});

describe("redactRowsForEmail", () => {
  it("summarizes a date of birth and leaves other rows alone", () => {
    const rows = redactRowsForEmail([
      { label: "Date of birth", value: "June 15, 1961" },
      { label: "65th birthday", value: "June 15, 2026" },
    ]);

    expect(rows[0]).toEqual({
      label: "Date of birth",
      value: "entered on this device",
    });
    expect(rows[1]).toEqual({
      label: "65th birthday",
      value: "June 15, 2026",
    });
  });
});
