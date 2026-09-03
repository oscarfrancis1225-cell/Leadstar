"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { analyticsEvents, trackEvent } from "@/lib/analytics";
import {
  leadSchema,
  preferredContactLabels,
  preferredContactValues,
  serviceInterestLabels,
  serviceInterestValues,
  type LeadInput,
} from "@/lib/lead-schema";
import { siteConfig } from "@/lib/content/site";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  preferredContact: string;
  message: string;
  consent: boolean;
  companyWebsite: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  preferredContact: "either",
  message: "",
  consent: false,
  companyWebsite: "",
};

type LeadFormProps = {
  compact?: boolean;
  onSuccess?: () => void;
};

export function LeadForm({ compact = false, onSuccess }: LeadFormProps) {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadInput, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [started, setStarted] = useState(false);

  const fieldIds = useMemo(
    () => ({
      fullName: "lead-full-name",
      email: "lead-email",
      phone: "lead-phone",
      service: "lead-service",
      preferredContact: "lead-preferred-contact",
      message: "lead-message",
      consent: "lead-consent",
    }),
    [],
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    if (!started) {
      setStarted(true);
      trackEvent(analyticsEvents.leadFormStarted);
    }
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parsed = leadSchema.safeParse({
      ...values,
      preferredContact: values.preferredContact || undefined,
      message: values.message || undefined,
      consent: values.consent ? true : undefined,
    });

    if (!parsed.success) {
      const nextErrors: Partial<Record<keyof LeadInput, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !nextErrors[key as keyof LeadInput]) {
          nextErrors[key as keyof LeadInput] = issue.message;
        }
      }
      setErrors(nextErrors);
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        let serverMessage = "";
        try {
          const data = (await response.json()) as { message?: unknown };
          if (typeof data.message === "string") {
            serverMessage = data.message.trim();
          }
        } catch {
          serverMessage = "";
        }
        if (response.status === 503 && serverMessage) {
          setErrorMessage(serverMessage);
        }
        throw new Error("Request failed");
      }

      setStatus("success");
      trackEvent(analyticsEvents.leadFormSubmitted);
      onSuccess?.();
    } catch {
      setStatus("error");
      trackEvent(analyticsEvents.leadFormError);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[16px] border border-line bg-cream px-6 py-10 text-center">
        <p className="eyebrow">Request received</p>
        <h3 className="headline mt-3 text-3xl">Thank you.</h3>
        <p className="lead mx-auto mt-4 max-w-md">
          We&apos;ve received your request. Esther will follow up with you
          soon.
        </p>
        <div className="mt-7">
          <Button href="/" variant="primary">
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      noValidate
      aria-describedby="lead-privacy-note"
    >
      <div className={compact ? "grid gap-5" : "grid gap-5 sm:grid-cols-2"}>
        <Field
          id={fieldIds.fullName}
          label="Full Name"
          error={errors.fullName}
        >
          <input
            id={fieldIds.fullName}
            className="input"
            name="fullName"
            autoComplete="name"
            value={values.fullName}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? `${fieldIds.fullName}-error` : undefined}
            onChange={(event) => update("fullName", event.target.value)}
          />
        </Field>
        <Field id={fieldIds.email} label="Email Address" error={errors.email}>
          <input
            id={fieldIds.email}
            className="input"
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${fieldIds.email}-error` : undefined}
            onChange={(event) => update("email", event.target.value)}
          />
        </Field>
        <Field id={fieldIds.phone} label="Phone Number" error={errors.phone}>
          <input
            id={fieldIds.phone}
            className="input"
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${fieldIds.phone}-error` : undefined}
            onChange={(event) => update("phone", event.target.value)}
          />
        </Field>
        <Field
          id={fieldIds.service}
          label="Service Interested In"
          error={errors.service}
        >
          <select
            id={fieldIds.service}
            className="select"
            name="service"
            value={values.service}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? `${fieldIds.service}-error` : undefined}
            onChange={(event) => update("service", event.target.value)}
          >
            <option value="">Select a service</option>
            {serviceInterestValues.map((value) => (
              <option key={value} value={value}>
                {serviceInterestLabels[value]}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        id={fieldIds.preferredContact}
        label="Preferred Contact Method"
        optional
      >
        <select
          id={fieldIds.preferredContact}
          className="select"
          name="preferredContact"
          value={values.preferredContact}
          onChange={(event) => update("preferredContact", event.target.value)}
        >
          {preferredContactValues.map((value) => (
            <option key={value} value={value}>
              {preferredContactLabels[value]}
            </option>
          ))}
        </select>
      </Field>

      <Field id={fieldIds.message} label="Message" optional>
        <textarea
          id={fieldIds.message}
          className="textarea"
          name="message"
          maxLength={1000}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
        />
      </Field>

      <div className="honeypot" aria-hidden>
        <label htmlFor="companyWebsite">Company website</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
          value={values.companyWebsite}
          onChange={(event) => update("companyWebsite", event.target.value)}
        />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-6 text-ink">
          <input
            id={fieldIds.consent}
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-line text-blue"
            checked={values.consent}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? `${fieldIds.consent}-error` : undefined}
            onChange={(event) => update("consent", event.target.checked)}
          />
          <span>
            I agree that a licensed insurance professional may contact me by
            phone, text, or email about this request. I can opt out of future
            messages. Consent is not required to request information. See the{" "}
            <Link href="/privacy" className="font-semibold text-blue hover:underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.consent ? (
          <p id={`${fieldIds.consent}-error`} className="mt-2 text-sm text-[#b42318]">
            {errors.consent}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p className="rounded-xl bg-[#fef3f2] px-4 py-3 text-sm text-[#b42318]" role="alert">
          {errorMessage ? (
            <>
              {errorMessage}{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold underline"
              >
                Email {siteConfig.email}
              </a>
              .
            </>
          ) : (
            <>
              We couldn&apos;t submit your request right now. Please try again
              or contact us directly.
            </>
          )}
        </p>
      ) : null}

      <Button
        type="submit"
        variant="blue"
        className="w-full sm:w-auto"
        showArrow
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Submit request"}
      </Button>

      <p id="lead-privacy-note" className="text-sm leading-6 text-muted">
        Your information will only be used to respond to your request. Read the{" "}
        <Link href="/privacy" className="font-semibold text-blue hover:underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/disclosures" className="font-semibold text-blue hover:underline">
          Disclosures
        </Link>
        .
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  optional = false,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-navy">
        {label}
        {optional ? (
          <span className="ml-1 font-normal text-muted">(optional)</span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#b42318]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
