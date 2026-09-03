"use client";

import { useMemo, useState } from "react";
import { CalculatorCta } from "@/components/tools/CalculatorCta";
import { CalculatorShell } from "@/components/tools/CalculatorShell";
import { KeepWorksheet } from "@/components/tools/KeepWorksheet";
import { ResultCard } from "@/components/tools/ResultCard";
import {
  clampCalendarDate,
  daysInMonth,
  formatCalendarDate,
  formatMonthYear,
  getInitialEnrollmentPeriod,
} from "@/lib/tools/medicare-iep";

const MONTH_OPTIONS = [
  { value: 1, label: "January" },
  { value: 2, label: "February" },
  { value: 3, label: "March" },
  { value: 4, label: "April" },
  { value: 5, label: "May" },
  { value: 6, label: "June" },
  { value: 7, label: "July" },
  { value: 8, label: "August" },
  { value: 9, label: "September" },
  { value: 10, label: "October" },
  { value: 11, label: "November" },
  { value: 12, label: "December" },
] as const;

const MEDICARE_SIGNUP_HREF =
  "https://www.medicare.gov/basics/get-started-with-medicare/sign-up/when-can-i-sign-up-for-medicare";

const CHECKLIST = [
  {
    id: "medicare-dates",
    label: "Read the official Medicare signup months",
    href: MEDICARE_SIGNUP_HREF,
    hrefLabel: "Medicare.gov",
  },
  {
    id: "write-months",
    label: "Write the seven Initial Enrollment Period months on a calendar",
  },
  {
    id: "still-working",
    label:
      "If I still work, ask the employer benefits office whether coverage is creditable. This page does not answer that.",
  },
  {
    id: "ssa-account",
    label: "If I need a Social Security account later, I can open one on ssa.gov. That is a different program.",
    href: "https://www.ssa.gov/myaccount",
    hrefLabel: "ssa.gov/myaccount",
  },
] as const;

export function Turning65Calendar() {
  const [year, setYear] = useState(1961);
  const [month, setMonth] = useState(6);
  const [day, setDay] = useState(15);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const dob = clampCalendarDate({ year, month, day });
  const maxDay = daysInMonth(dob.year, dob.month);
  const period = useMemo(
    () => getInitialEnrollmentPeriod(dob),
    [dob.year, dob.month, dob.day],
  );

  const iepRange = `${formatMonthYear(period.start)} through ${formatMonthYear(period.end)}`;
  const meaning = period.isFirstOfMonthBirthday
    ? `Medicare Initial Enrollment Period in this picture is ${iepRange}. That is seven months: four before the birthday month, the birthday month, and two after.`
    : `Medicare Initial Enrollment Period in this picture is ${iepRange}. That is seven months: three before the birthday month, the birthday month, and three after.`;
  const notMeaning =
    "This is not a signup and not a Social Security calculator. Enrollment is not automatic for everyone. Confirm the months on Medicare.gov.";

  const firstOfMonthNote =
    "If the 65th birthday is the 1st of the month, Medicare starts and ends this period one month earlier.";

  return (
    <CalculatorShell
      summary={{
        label: "Medicare IEP",
        value: iepRange,
      }}
      keep={
        <KeepWorksheet
          title="Turning 65 Medicare Calendar"
          subtitle="The seven months of Medicare Initial Enrollment Period around a 65th birthday."
          inputs={[
            { label: "Date of birth", value: formatCalendarDate(dob) },
          ]}
          results={[
            { label: "65th birthday", value: formatCalendarDate(period.sixtyFifthBirthday) },
            {
              label: "Birthday on the 1st of the month",
              value: period.isFirstOfMonthBirthday ? "Yes" : "No",
            },
            { label: "Medicare Initial Enrollment Period", value: iepRange },
            {
              label: "The seven months",
              value: period.months.map((item) => formatMonthYear(item)).join(", "),
            },
            ...CHECKLIST.map((item) => ({
              label: item.label,
              value: checked[item.id] ? "Checked" : "Not checked",
            })),
          ]}
          meaning={[
            meaning,
            period.isFirstOfMonthBirthday
              ? "Because the 65th birthday is on the 1st, this period starts a month earlier and ends a month earlier."
              : firstOfMonthNote,
            "Medicare is health coverage. Social Security is a monthly check. This page only shows Medicare months.",
            notMeaning,
          ]}
          sources={[
            { label: "Medicare.gov signup months", href: MEDICARE_SIGNUP_HREF },
          ]}
          disclaimer="This calendar is an illustration, not a quote, and not advice. Confirm dates on Medicare.gov. LeadStar is not affiliated with Medicare or Social Security."
          toolHref="/tools/turning-65"
        />
      }
      results={
        <div>
          <ResultCard
            question="When is Medicare Initial Enrollment Period in this picture?"
            answer={iepRange}
            meaning={meaning}
            notMeaning={notMeaning}
          >
            <p className="pt-2 text-sm text-navy">
              65th birthday illustrated: {formatCalendarDate(period.sixtyFifthBirthday)}
            </p>
          </ResultCard>

          <ol
            className="mt-5 grid gap-2 sm:grid-cols-3"
            aria-label="Seven Medicare Initial Enrollment Period months"
          >
            <li className="rounded-[12px] border border-line bg-white p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                {period.isFirstOfMonthBirthday ? "4 months before" : "3 months before"}
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-navy">
                {period.months
                  .filter((item) => item.kind === "before")
                  .map((item) => formatMonthYear(item))
                  .join(", ")}
              </p>
            </li>
            <li className="rounded-[12px] border border-navy bg-white p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Birthday month
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-navy">
                {period.months
                  .filter((item) => item.kind === "birthday")
                  .map((item) => formatMonthYear(item))
                  .join(", ")}
              </p>
            </li>
            <li className="rounded-[12px] border border-line bg-white p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                {period.isFirstOfMonthBirthday ? "2 months after" : "3 months after"}
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-navy">
                {period.months
                  .filter((item) => item.kind === "after")
                  .map((item) => formatMonthYear(item))
                  .join(", ")}
              </p>
            </li>
          </ol>
          <p className="mt-2 text-xs leading-5 text-muted">
            Seven months in all. Confirm them on Medicare.gov.
          </p>

          {period.isFirstOfMonthBirthday ? (
            <p className="mt-4 rounded-[12px] border border-gold bg-gold-soft px-3 py-3 text-sm leading-6 text-navy">
              {firstOfMonthNote} Your 65th birthday is on the 1st, so this table already
              moved one month earlier. Still confirm on Medicare.gov.
            </p>
          ) : (
            <p className="mt-4 rounded-[12px] border border-line bg-white px-3 py-3 text-sm leading-6 text-navy">
              {firstOfMonthNote}
            </p>
          )}

          <div className="mt-4 rounded-[12px] border border-line bg-white px-3 py-3">
            <p className="text-sm font-semibold text-navy">Two different programs</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Medicare is health coverage around age 65. Social Security is a monthly
              check. This page only shows Medicare months. It does not estimate a
              Social Security check, and it does not sign anyone up.
            </p>
          </div>

          <p className="mt-4 text-sm leading-6 text-muted">
            Official months live on{" "}
            <a
              href={MEDICARE_SIGNUP_HREF}
              className="font-semibold text-blue"
              target="_blank"
              rel="noreferrer"
            >
              Medicare.gov
            </a>
            . Enrollment is not automatic for everyone. LeadStar is not affiliated
            with Medicare.
          </p>

          <details className="mt-4 rounded-[12px] border border-line bg-white p-3">
            <summary className="cursor-pointer text-sm font-semibold text-navy">
              A short checklist
            </summary>
            <p className="mt-2 text-xs leading-5 text-muted">
              Checks stay on this device. They are not saved on LeadStar servers.
            </p>
            <ul className="mt-3 grid gap-3">
              {CHECKLIST.map((item) => (
                <li key={item.id}>
                  <label className="flex items-start gap-3 text-sm leading-6 text-navy">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 shrink-0"
                      checked={Boolean(checked[item.id])}
                      onChange={(event) =>
                        setChecked((current) => ({
                          ...current,
                          [item.id]: event.target.checked,
                        }))
                      }
                    />
                    <span>
                      {item.label}
                      {"href" in item && item.href ? (
                        <>
                          {" "}
                          <a
                            href={item.href}
                            className="font-semibold text-blue"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {item.hrefLabel}
                          </a>
                        </>
                      ) : null}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </details>
          <CalculatorCta toolSlug="turning-65" />
        </div>
      }
    >
      <div>
        <p className="text-sm font-medium text-navy">Date of birth</p>
        <p className="mt-1 text-xs leading-5 text-muted">
          Month, day, and year. The page finds the 65th birthday from that date.
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <label className="text-sm text-navy" htmlFor="t65-month">
            Month
            <select
              id="t65-month"
              className="select mt-1"
              value={month}
              onChange={(event) => setMonth(Number(event.target.value))}
            >
              {MONTH_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm text-navy" htmlFor="t65-day">
            Day
            <select
              id="t65-day"
              className="select mt-1"
              value={Math.min(day, maxDay)}
              onChange={(event) => setDay(Number(event.target.value))}
            >
              {Array.from({ length: maxDay }, (_, index) => index + 1).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm text-navy" htmlFor="t65-year">
            Year
            <input
              id="t65-year"
              className="input mt-1 tabular-nums"
              type="number"
              inputMode="numeric"
              min={1920}
              max={2010}
              value={year}
              onChange={(event) => setYear(Number(event.target.value))}
            />
          </label>
        </div>
      </div>
    </CalculatorShell>
  );
}
