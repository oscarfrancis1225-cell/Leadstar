"use client";

import { useEffect, useId, useState } from "react";
import {
  buildWorksheetText,
  redactRowsForEmail,
  type WorksheetRow,
  type WorksheetSource,
} from "@/lib/tools/worksheet-text";

export type { WorksheetRow, WorksheetSource };

type KeepWorksheetProps = {
  title: string;
  subtitle?: string;
  inputs: readonly WorksheetRow[];
  results: readonly WorksheetRow[];
  meaning: readonly string[];
  sources?: readonly WorksheetSource[];
  disclaimer: string;
  toolHref: string;
};

function formatWorksheetDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

/**
 * Print, copy, and email are all started by the visitor. Nothing here is sent
 * to a server: copy uses the clipboard and email opens the visitor's own mail
 * app through a mailto link with an empty To field, so no address is typed
 * into this page or stored anywhere.
 */
export function KeepWorksheet({
  title,
  subtitle,
  inputs,
  results,
  meaning,
  sources,
  disclaimer,
  toolHref,
}: KeepWorksheetProps) {
  const consentId = useId();
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [dateLabel, setDateLabel] = useState("");
  const [pageUrl, setPageUrl] = useState(toolHref);

  useEffect(() => {
    setDateLabel(formatWorksheetDate(new Date()));
    setPageUrl(`${window.location.origin}${toolHref}`);
  }, [toolHref]);

  const worksheet = {
    title,
    subtitle,
    dateLabel,
    inputs,
    results,
    meaning,
    sources,
    disclaimer,
    pageUrl,
  };

  function handleEmail() {
    if (!consent) {
      setError("Tick the box first. Then your email app can open.");
      return;
    }
    setError("");
    setStatus("Opening your email app.");
    const body = buildWorksheetText({
      ...worksheet,
      inputs: redactRowsForEmail(inputs),
      results: redactRowsForEmail(results),
    });
    const subject = encodeURIComponent(`LeadStar worksheet: ${title}`);
    window.location.href = `mailto:?subject=${subject}&body=${encodeURIComponent(body)}`;
  }

  async function handleCopy() {
    setError("");
    try {
      await navigator.clipboard.writeText(buildWorksheetText(worksheet));
      setStatus("Copied. Paste it anywhere you like.");
    } catch {
      setStatus("Copy did not work here. You can still print or email.");
    }
  }

  return (
    <div className="mt-5 border-t border-line pt-4">
      {/* The printed worksheet. Hidden on screen, shown on paper. */}
      <div className="print-only print-worksheet">
        <p className="print-worksheet-eyebrow">LeadStar Financial worksheet</p>
        <h2 className="print-worksheet-title">{title}</h2>
        {subtitle ? <p className="print-worksheet-sub">{subtitle}</p> : null}
        <p className="print-worksheet-sub">Generated {dateLabel}</p>

        <h3 className="print-worksheet-heading">What you entered</h3>
        <dl className="print-worksheet-list">
          {inputs.map((row) => (
            <div key={row.label} className="print-worksheet-row">
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>

        <h3 className="print-worksheet-heading">Your result</h3>
        <dl className="print-worksheet-list">
          {results.map((row) => (
            <div key={row.label} className="print-worksheet-row">
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>

        {meaning.length > 0 ? (
          <>
            <h3 className="print-worksheet-heading">What this means</h3>
            <ul className="print-worksheet-notes">
              {meaning.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </>
        ) : null}

        {sources && sources.length > 0 ? (
          <>
            <h3 className="print-worksheet-heading">Official source</h3>
            <ul className="print-worksheet-notes">
              {sources.map((source) => (
                <li key={source.href}>
                  {source.label}: {source.href}
                </li>
              ))}
            </ul>
          </>
        ) : null}

        <p className="print-worksheet-fine">{disclaimer}</p>
        <p className="print-worksheet-fine">{pageUrl}</p>
      </div>

      <div className="no-print">
        <p className="text-sm font-semibold text-navy">Keep a copy</p>
        <p className="mt-1 text-sm leading-6 text-muted">
          Each copy has your numbers, your result, the date, and the fine print.
        </p>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            className="btn btn-secondary w-full sm:flex-1"
            onClick={() => window.print()}
          >
            Print or save as PDF
          </button>
          <button
            type="button"
            className="btn btn-secondary w-full sm:flex-1"
            onClick={() => void handleCopy()}
          >
            Copy as text
          </button>
        </div>

        <div className="mt-3 rounded-[12px] border border-line bg-white p-3">
          <label
            htmlFor={consentId}
            className="flex items-start gap-3 text-sm leading-6 text-navy"
          >
            <input
              id={consentId}
              className="mt-1 h-4 w-4 shrink-0"
              type="checkbox"
              checked={consent}
              onChange={(event) => {
                setConsent(event.target.checked);
                setError("");
              }}
              aria-describedby={`${consentId}-note`}
            />
            <span>Yes, open my email app with this worksheet in it.</span>
          </label>
          <button
            type="button"
            className="btn btn-secondary mt-3 w-full"
            onClick={handleEmail}
          >
            Open my email app
          </button>
          <p id={`${consentId}-note`} className="mt-2 text-xs leading-5 text-muted">
            This only opens the email app on your device with a draft. You type
            who it goes to. There is no email box on this page, LeadStar never
            sees the message, and LeadStar does not keep your email address.
          </p>
        </div>

        {error ? (
          <p className="mt-2 text-sm text-[#b42318]" role="alert">
            {error}
          </p>
        ) : null}
        <p className="mt-2 text-sm text-navy" role="status" aria-live="polite">
          {error ? "" : status}
        </p>
      </div>
    </div>
  );
}
