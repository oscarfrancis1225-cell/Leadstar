"use client";

import { useMemo, useState } from "react";
import { CalculatorCta } from "@/components/tools/CalculatorCta";
import { CalculatorShell } from "@/components/tools/CalculatorShell";
import { KeepWorksheet } from "@/components/tools/KeepWorksheet";
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

const CHECKLIST = [
  {
    id: "ssa-account",
    label: "Create or sign in to my Social Security account",
    href: "https://www.ssa.gov/myaccount",
    hrefLabel: "ssa.gov/myaccount",
  },
  {
    id: "already-ss",
    label:
      "See whether I already get Social Security. That group is often enrolled in Part A and Part B automatically. If I do not get Social Security, I usually have to sign up.",
  },
  {
    id: "medicare-dates",
    label: "Read Medicare.gov signup dates",
    href: "https://www.medicare.gov/basics/get-started-with-medicare/sign-up/when-can-i-sign-up-for-medicare",
    hrefLabel: "Medicare.gov signup dates",
  },
  {
    id: "write-months",
    label: "Write my seven Initial Enrollment Period months on a calendar",
  },
  {
    id: "still-working",
    label:
      "If I am still working, ask the employer benefits office whether my coverage is creditable and whether I can delay Part B. This page does not answer that for you.",
  },
] as const;

const KIND_LABEL = {
  before: "Before the birthday month",
  birthday: "Birthday month",
  after: "After the birthday month",
} as const;

export function Turning65Calendar() {
  const [year, setYear] = useState(1961);
  const [month, setMonth] = useState(6);
  const [day, setDay] = useState(15);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const dob = clampCalendarDate({ year, month, day });
  const maxDay = daysInMonth(dob.year, dob.month);
  const period = useMemo(() => getInitialEnrollmentPeriod(dob), [dob.year, dob.month, dob.day]);

  const worksheetRows = [
    { label: "Date of birth", value: formatCalendarDate(dob) },
    { label: "65th birthday", value: formatCalendarDate(period.sixtyFifthBirthday) },
    {
      label: "Birthday on the 1st",
      value: period.isFirstOfMonthBirthday ? "Yes. The period starts and ends a month earlier." : "No",
    },
    { label: "First IEP month", value: formatMonthYear(period.start) },
    { label: "Last IEP month", value: formatMonthYear(period.end) },
    {
      label: "Seven IEP months",
      value: period.months.map((item) => formatMonthYear(item)).join(", "),
    },
    ...CHECKLIST.map((item) => ({
      label: item.label,
      value: checked[item.id] ? "Checked" : "Not checked",
    })),
  ];

  return (
    <CalculatorShell
      summary={{
        label: "IEP months",
        value: `${formatMonthYear(period.start)} to ${formatMonthYear(period.end)}`,
      }}
      keep={
        <KeepWorksheet
          title="Turning 65 enrollment-period calendar"
          subtitle="Illustrated months around a 65th birthday. Not a Medicare signup."
          rows={worksheetRows}
          notes={[
            period.isFirstOfMonthBirthday
              ? "Because the 65th birthday is on the 1st of the month, Initial Enrollment Period starts a month earlier and ends a month earlier."
              : "Initial Enrollment Period is the three months before the birthday month, the birthday month, and the three months after.",
            "This page does not compare Medicare Advantage, Medigap, Part D, premiums, star ratings, or carriers.",
            "LeadStar is not affiliated with Medicare.",
          ]}
          disclaimer="This calendar is an illustration, not a quote, and not advice. Confirm dates on Medicare.gov. LeadStar is not affiliated with Medicare or Social Security."
          toolHref="/tools/turning-65"
        />
      }
      results={
        <div>
          <p className="text-sm font-medium text-navy">65th birthday illustrated</p>
          <p className="headline mt-2 text-3xl text-navy sm:text-4xl">
            {formatCalendarDate(period.sixtyFifthBirthday)}
          </p>
          <p className="mt-2 text-sm text-muted">
            Initial Enrollment Period: {formatMonthYear(period.start)} through{" "}
            {formatMonthYear(period.end)}
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Seven months in Medicare Initial Enrollment Period
              </caption>
              <thead>
                <tr className="border-b border-line text-xs uppercase tracking-wide text-muted">
                  <th className="py-2 pr-3 font-medium">Month</th>
                  <th className="py-2 font-medium">In this period</th>
                </tr>
              </thead>
              <tbody>
                {period.months.map((item) => (
                  <tr key={`${item.year}-${item.month}`} className="border-b border-line">
                    <td className="py-2 pr-3 font-semibold text-navy">
                      {formatMonthYear(item)}
                    </td>
                    <td className="py-2 text-muted">{KIND_LABEL[item.kind]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {period.isFirstOfMonthBirthday ? (
            <p className="mt-4 text-sm leading-6 text-muted">
              Your 65th birthday is on the 1st of the month. Medicare.gov says
              Initial Enrollment Period then starts a month earlier and ends a
              month earlier. Confirm your months on Medicare.gov rather than
              counting only on this table.
            </p>
          ) : (
            <p className="mt-4 text-sm leading-6 text-muted">
              For most people, Initial Enrollment Period is seven months: three
              before the birthday month, the birthday month, and three after.
              Confirm your months on Medicare.gov.
            </p>
          )}

          <div className="mt-6">
            <p className="text-sm font-semibold text-navy">A short checklist</p>
            <p className="mt-1 text-xs leading-5 text-muted">
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
          </div>

          <p className="mt-5 text-sm leading-6 text-muted">
            This page does not compare Medicare Advantage, Medigap, Part D,
            premiums, star ratings, or carriers. It does not sign you up.
            LeadStar is not affiliated with Medicare. Use Social Security and
            Medicare.gov for official dates and accounts.
          </p>
          <CalculatorCta toolSlug="turning-65" />
        </div>
      }
    >
      <div>
        <p className="text-sm font-medium text-navy">Date of birth</p>
        <p className="mt-1 text-xs leading-5 text-muted">
          Month, day, and year. The tool finds the 65th birthday from that date.
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <label className="text-sm text-navy">
            Month
            <select
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
          <label className="text-sm text-navy">
            Day
            <select
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
          <label className="text-sm text-navy">
            Year
            <input
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
      <p className="text-sm leading-6 text-muted">
        Official signup rules live on{" "}
        <a
          href="https://www.medicare.gov/basics/get-started-with-medicare/sign-up/when-can-i-sign-up-for-medicare"
          className="font-semibold text-blue"
          target="_blank"
          rel="noreferrer"
        >
          Medicare.gov
        </a>{" "}
        and{" "}
        <a
          href="https://www.ssa.gov/medicare/"
          className="font-semibold text-blue"
          target="_blank"
          rel="noreferrer"
        >
          Social Security
        </a>
        . This is not a LeadStar Social Security calculator.
      </p>
    </CalculatorShell>
  );
}
