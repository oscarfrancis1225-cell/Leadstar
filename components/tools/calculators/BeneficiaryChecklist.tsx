"use client";

import { useState } from "react";
import { CalculatorCta } from "@/components/tools/CalculatorCta";
import { CalculatorShell } from "@/components/tools/CalculatorShell";
import { KeepWorksheet } from "@/components/tools/KeepWorksheet";

const LIFE_EVENTS = [
  { id: "marriage", label: "Marriage" },
  { id: "divorce", label: "Divorce" },
  { id: "new-child", label: "New child" },
  { id: "death-of-beneficiary", label: "Death of a beneficiary" },
  { id: "new-job", label: "New job" },
  { id: "retirement", label: "Retirement" },
  { id: "new-house", label: "New house" },
  { id: "paid-off-mortgage", label: "Paid-off mortgage" },
  { id: "new-life-policy", label: "New life policy" },
  { id: "moved-states", label: "Moved to another state" },
] as const;

const ACCOUNT_TYPES = [
  { id: "life-insurance", label: "Life insurance" },
  { id: "workplace-life", label: "Workplace life" },
  { id: "ira", label: "IRA" },
  { id: "workplace-retire", label: "401(k) or 403(b)" },
  { id: "bank-tod", label: "Bank TOD or POD" },
  { id: "brokerage-tod", label: "Brokerage transfer-on-death" },
] as const;

type AccountNote = {
  review: boolean;
  where: string;
};

const emptyAccount = (): AccountNote => ({ review: false, where: "" });

export function BeneficiaryChecklist() {
  const [events, setEvents] = useState<Record<string, boolean>>({});
  const [accounts, setAccounts] = useState<Record<string, AccountNote>>({});

  function accountState(id: string): AccountNote {
    return accounts[id] ?? emptyAccount();
  }

  const checkedEvents = LIFE_EVENTS.filter((item) => events[item.id]);
  const reviewedAccounts = ACCOUNT_TYPES.filter((item) => accountState(item.id).review);

  const worksheetRows = [
    {
      label: "Life events checked",
      value:
        checkedEvents.length > 0
          ? checkedEvents.map((item) => item.label).join(", ")
          : "None checked",
    },
    ...ACCOUNT_TYPES.map((item) => {
      const state = accountState(item.id);
      if (!state.review && !state.where.trim()) {
        return { label: item.label, value: "Not marked" };
      }
      const bits = [
        state.review ? "Review" : "Not marked for review",
        state.where.trim() ? `Where it lives: ${state.where.trim()}` : null,
      ].filter(Boolean);
      return { label: item.label, value: bits.join(". ") };
    }),
  ];

  return (
    <CalculatorShell
      summary={{
        label: "Items marked",
        value: `${checkedEvents.length} events, ${reviewedAccounts.length} accounts`,
      }}
      keep={
        <KeepWorksheet
          title="Beneficiary and life-event checklist"
          subtitle="A local worksheet. Nothing on this list is saved on LeadStar servers."
          rows={worksheetRows}
          notes={[
            "A divorce decree does not automatically change a beneficiary form.",
            "Employer plans may follow ERISA and the plan document. This is not legal advice.",
            "Do not write account numbers, Social Security numbers, or policy numbers on this page.",
          ]}
          disclaimer="This checklist is an illustration, not a quote, and not advice. It is not a legal document and not a claim form. Print it or email it only to yourself if you choose."
          toolHref="/tools/beneficiary-checklist"
        />
      }
      results={
        <div>
          <p className="text-sm font-medium text-navy">What you marked</p>
          <p className="headline mt-2 text-3xl text-navy sm:text-4xl">
            {checkedEvents.length} life event{checkedEvents.length === 1 ? "" : "s"}
          </p>
          <p className="mt-2 text-sm text-muted">
            {reviewedAccounts.length} account type
            {reviewedAccounts.length === 1 ? "" : "s"} marked to review
          </p>
          <div className="mt-6">
            {checkedEvents.length > 0 ? (
              <ul className="grid gap-2 text-sm leading-6 text-navy">
                {checkedEvents.map((item) => (
                  <li key={item.id}>{item.label}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm leading-6 text-muted">
                Check life events on the left. They will show up here.
              </p>
            )}
          </div>
          <div className="mt-5 border-t border-line pt-4">
            {reviewedAccounts.length > 0 ? (
              <ul className="grid gap-2 text-sm leading-6 text-navy">
                {reviewedAccounts.map((item) => {
                  const where = accountState(item.id).where.trim();
                  return (
                    <li key={item.id}>
                      {item.label}
                      {where ? ` · ${where}` : ""}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-sm leading-6 text-muted">
                Mark account types to review. You can add where each one lives
                without typing an account number.
              </p>
            )}
          </div>
          <p className="mt-5 text-sm leading-6 text-muted">
            A divorce decree does not automatically change the beneficiary form.
            Employer plans may follow ERISA and the plan document. This is not
            legal advice.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Nothing is saved on LeadStar servers. Print this page. Email it only
            to yourself if you choose. Do not type account numbers, Social
            Security numbers, or policy numbers.
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            Related reading:{" "}
            <a href="/blog/financial-questions-after-divorce" className="font-semibold text-blue">
              A divorce decree does not update your beneficiaries
            </a>
            {" "}and{" "}
            <a href="/blog/first-financial-planning-meeting" className="font-semibold text-blue">
              the first financial meeting
            </a>
            .
          </p>
          <CalculatorCta toolSlug="beneficiary-checklist" />
        </div>
      }
    >
      <fieldset>
        <legend className="text-sm font-medium text-navy">Life events since you last looked</legend>
        <ul className="mt-3 grid gap-2">
          {LIFE_EVENTS.map((item) => (
            <li key={item.id}>
              <label className="flex min-h-11 items-center gap-3 text-sm text-navy">
                <input
                  type="checkbox"
                  className="h-4 w-4 shrink-0"
                  checked={Boolean(events[item.id])}
                  onChange={(event) =>
                    setEvents((current) => ({
                      ...current,
                      [item.id]: event.target.checked,
                    }))
                  }
                />
                {item.label}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
      <fieldset>
        <legend className="text-sm font-medium text-navy">Account types to review</legend>
        <p className="mt-1 text-xs leading-5 text-muted">
          Optional: type where this account lives, such as an institution name.
          Do not type account numbers.
        </p>
        <ul className="mt-3 grid gap-4">
          {ACCOUNT_TYPES.map((item) => {
            const state = accountState(item.id);
            const whereId = `where-${item.id}`;
            return (
              <li key={item.id} className="rounded-[12px] border border-line bg-cream/80 p-3">
                <label className="flex items-center gap-3 text-sm font-medium text-navy">
                  <input
                    type="checkbox"
                    className="h-4 w-4 shrink-0"
                    checked={state.review}
                    onChange={(event) =>
                      setAccounts((current) => ({
                        ...current,
                        [item.id]: {
                          ...accountState(item.id),
                          review: event.target.checked,
                        },
                      }))
                    }
                  />
                  {item.label}
                </label>
                <label htmlFor={whereId} className="mt-2 block text-xs text-muted">
                  Where this account lives
                </label>
                <input
                  id={whereId}
                  className="input mt-1"
                  type="text"
                  autoComplete="off"
                  maxLength={80}
                  placeholder="Institution name, not a number"
                  value={state.where}
                  onChange={(event) =>
                    setAccounts((current) => ({
                      ...current,
                      [item.id]: {
                        ...accountState(item.id),
                        where: event.target.value,
                      },
                    }))
                  }
                />
              </li>
            );
          })}
        </ul>
      </fieldset>
    </CalculatorShell>
  );
}
