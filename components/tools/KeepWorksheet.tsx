"use client";

import { useEffect, useId, useState, type FormEvent } from "react";

export type WorksheetRow = {
  label: string;
  value: string;
};

type KeepWorksheetProps = {
  title: string;
  subtitle?: string;
  rows: WorksheetRow[];
  notes?: string[];
  disclaimer: string;
  toolHref: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function formatWorksheetDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function buildWorksheetText({
  title,
  subtitle,
  rows,
  notes,
  disclaimer,
  pageUrl,
  dateLabel,
}: {
  title: string;
  subtitle?: string;
  rows: WorksheetRow[];
  notes?: string[];
  disclaimer: string;
  pageUrl: string;
  dateLabel: string;
}) {
  const lines = [
    title,
    subtitle ? subtitle : "",
    `Date: ${dateLabel}`,
    "",
    ...rows.map((row) => `${row.label}: ${row.value}`),
  ];

  if (notes && notes.length > 0) {
    lines.push("", "Notes");
    for (const note of notes) {
      lines.push(`- ${note}`);
    }
  }

  lines.push("", disclaimer, "", pageUrl);
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

export function KeepWorksheet({
  title,
  subtitle,
  rows,
  notes,
  disclaimer,
  toolHref,
}: KeepWorksheetProps) {
  const emailId = useId();
  const consentId = useId();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const [dateLabel, setDateLabel] = useState("");
  const [pageUrl, setPageUrl] = useState(toolHref);

  useEffect(() => {
    setDateLabel(formatWorksheetDate(new Date()));
    setPageUrl(`${window.location.origin}${toolHref}`);
  }, [toolHref]);

  const plainText = buildWorksheetText({
    title,
    subtitle,
    rows,
    notes,
    disclaimer,
    pageUrl,
    dateLabel,
  });

  function handleEmail(event: FormEvent) {
    event.preventDefault();
    const trimmed = email.trim();
    if (!consent) {
      setError("Check the box if you want to email this illustration to yourself.");
      return;
    }
    if (!isValidEmail(trimmed)) {
      setError("Enter an email address that looks like name@example.com.");
      return;
    }
    setError("");
    const emailRows = rows.map((row) =>
      /date of birth/i.test(row.label)
        ? { label: row.label, value: "date of birth entered on this device" }
        : row,
    );
    const emailText = buildWorksheetText({
      title,
      subtitle,
      rows: emailRows,
      notes,
      disclaimer,
      pageUrl,
      dateLabel,
    });
    const subject = encodeURIComponent(`LeadStar illustration: ${title}`);
    const body = encodeURIComponent(emailText);
    window.location.href = `mailto:${trimmed}?subject=${subject}&body=${body}`;
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(plainText);
      setCopyStatus("Summary copied.");
    } catch {
      setCopyStatus("Copy did not work. You can still print or email.");
    }
  }

  return (
    <div className="mt-6 border-t border-line pt-5">
      <div className="print-only">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
          LeadStar illustration
        </p>
        <h2 className="headline mt-2 text-2xl text-navy">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-muted">{subtitle}</p> : null}
        <p className="mt-2 text-sm text-muted">{dateLabel}</p>
        <dl className="mt-4 grid gap-2">
          {rows.map((row) => (
            <div key={row.label} className="flex items-start justify-between gap-4 border-t border-line py-2">
              <dt className="text-sm text-muted">{row.label}</dt>
              <dd className="text-right text-sm font-semibold text-navy">{row.value}</dd>
            </div>
          ))}
        </dl>
        {notes && notes.length > 0 ? (
          <ul className="mt-4 grid gap-1 text-sm leading-6 text-navy">
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        ) : null}
        <p className="mt-4 text-xs leading-5 text-muted">{disclaimer}</p>
        <p className="mt-2 text-xs text-muted">{pageUrl}</p>
      </div>

      <div className="no-print">
        <p className="text-sm font-semibold text-navy">Keep this worksheet</p>
        <p className="mt-1 text-sm leading-6 text-muted">
          You will see the numbers on screen either way. Email is optional.
        </p>
        <div className="mt-4 flex flex-col gap-3">
          <button type="button" className="btn btn-secondary w-full" onClick={() => window.print()}>
            Print or save as PDF
          </button>
          <button type="button" className="btn btn-secondary w-full" onClick={() => void handleCopy()}>
            Copy summary
          </button>
        </div>
        {copyStatus ? (
          <p className="mt-2 text-sm text-navy" role="status" aria-live="polite">
            {copyStatus}
          </p>
        ) : null}

        <details className="mt-4 rounded-[12px] border border-line bg-white p-4">
          <summary className="cursor-pointer text-sm font-semibold text-navy">
            Email this illustration to myself
          </summary>
          <form className="mt-4 grid gap-3" onSubmit={handleEmail} noValidate>
            <div>
              <label htmlFor={emailId} className="text-sm font-medium text-navy">
                Your email
              </label>
              <input
                id={emailId}
                className="input mt-2"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (error) {
                    setError("");
                  }
                }}
                aria-invalid={Boolean(error) || undefined}
              />
            </div>
            <label htmlFor={consentId} className="flex items-start gap-3 text-sm leading-6 text-navy">
              <input
                id={consentId}
                className="mt-1 h-4 w-4 shrink-0"
                type="checkbox"
                checked={consent}
                onChange={(event) => {
                  setConsent(event.target.checked);
                  if (error) {
                    setError("");
                  }
                }}
              />
              <span>Email this illustration to me. It is not a quote.</span>
            </label>
            {error ? (
              <p className="text-sm text-[#b42318]" role="alert">
                {error}
              </p>
            ) : null}
            <button type="submit" className="btn btn-secondary w-full">
              Email me this page
            </button>
            <p className="text-xs leading-5 text-muted">
              This opens your own mail app. LeadStar does not receive the numbers
              or send the message for you.
            </p>
          </form>
        </details>
      </div>
    </div>
  );
}
