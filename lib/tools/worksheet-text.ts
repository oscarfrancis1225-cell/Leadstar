export type WorksheetRow = {
  label: string;
  value: string;
};

export type WorksheetSource = {
  label: string;
  href: string;
};

export type WorksheetContent = {
  title: string;
  subtitle?: string;
  dateLabel: string;
  inputs: readonly WorksheetRow[];
  results: readonly WorksheetRow[];
  meaning: readonly string[];
  sources?: readonly WorksheetSource[];
  disclaimer: string;
  pageUrl: string;
};

/**
 * Labels that hold a birth date are summarized instead of copied into an email
 * body, so a date of birth is not carried into a mail app by default.
 */
const SENSITIVE_LABEL = /date of birth|birth date/i;

export function redactRowsForEmail(
  rows: readonly WorksheetRow[],
): WorksheetRow[] {
  return rows.map((row) =>
    SENSITIVE_LABEL.test(row.label)
      ? { label: row.label, value: "entered on this device" }
      : { label: row.label, value: row.value },
  );
}

function section(heading: string, lines: readonly string[]): string[] {
  if (lines.length === 0) {
    return [];
  }
  return ["", heading, ...lines];
}

/**
 * One plain-text worksheet: calculator name, the numbers typed, the result,
 * what it means, the official source, the disclaimer, and the date it was made.
 * Used for the copy button and for the body of a user-triggered mailto link.
 */
export function buildWorksheetText(content: WorksheetContent): string {
  const lines: string[] = [`LeadStar illustration: ${content.title}`];

  if (content.subtitle) {
    lines.push(content.subtitle);
  }

  lines.push(`Generated: ${content.dateLabel}`);

  lines.push(
    ...section(
      "What you entered",
      content.inputs.map((row) => `- ${row.label}: ${row.value}`),
    ),
  );
  lines.push(
    ...section(
      "Your result",
      content.results.map((row) => `- ${row.label}: ${row.value}`),
    ),
  );
  lines.push(
    ...section(
      "What this means",
      content.meaning.map((note) => `- ${note}`),
    ),
  );
  lines.push(
    ...section(
      "Official source",
      (content.sources ?? []).map((source) => `- ${source.label}: ${source.href}`),
    ),
  );
  lines.push(...section("Disclaimer", [content.disclaimer]));
  lines.push(...section("Worksheet page", [content.pageUrl]));

  return `${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}
