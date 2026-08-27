import { z } from "zod";

export const serviceInterestValues = [
  "life-insurance",
  "retirement-services",
  "medicare-insurance",
  "health-insurance",
  "final-expense",
  "mortgage-protection",
  "business-planning",
  "not-sure-yet",
] as const;

export const preferredContactValues = ["phone", "email", "either"] as const;

export const serviceInterestLabels: Record<(typeof serviceInterestValues)[number], string> = {
  "life-insurance": "Life Insurance",
  "retirement-services": "Retirement Services",
  "medicare-insurance": "Medicare Insurance",
  "health-insurance": "Health Insurance",
  "final-expense": "Final Expense",
  "mortgage-protection": "Mortgage Protection",
  "business-planning": "Business Planning",
  "not-sure-yet": "Not Sure Yet",
};

export const preferredContactLabels: Record<(typeof preferredContactValues)[number], string> = {
  phone: "Phone",
  email: "Email",
  either: "Either",
};

const phoneDigits = (value: string) => value.replace(/\D/g, "");

export const leadSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name must be 100 characters or fewer."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email must be 254 characters or fewer."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(30, "Phone number is too long.")
    .refine((value) => {
      const digits = phoneDigits(value);
      return digits.length >= 10 && digits.length <= 15;
    }, "Please enter a valid phone number."),
  service: z.enum(serviceInterestValues, {
    error: "Please select a service.",
  }),
  preferredContact: z.enum(preferredContactValues).optional(),
  message: z
    .string()
    .trim()
    .max(1000, "Message must be 1,000 characters or fewer.")
    .optional()
    .or(z.literal("")),
  consent: z.literal(true, {
    error: "Consent is required so we can follow up on your request.",
  }),
  companyWebsite: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export type LeadPayload = {
  requestId: string;
  createdAt: string;
  fullName: string;
  email: string;
  phone: string;
  service: (typeof serviceInterestValues)[number];
  preferredContact: (typeof preferredContactValues)[number] | "";
  message: string;
  consent: true;
  consentAt: string;
  source: "website";
};
