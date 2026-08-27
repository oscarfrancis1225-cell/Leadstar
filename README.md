# LeadStar Financial

Premium marketing website for LeadStar Financial: **Plan. Protect. Prosper.**

The site is a production-ready Next.js marketing experience with a working lead funnel, centralized business content, and placeholder photography that can be replaced before launch.

## Start locally

```bash
npm install
npm run dev
```

Open [http://localhost:2000](http://localhost:2000).

## Production check

```bash
npm run lint
npm run build
```

## Environment variables

Copy `.env.example` to `.env.local` and adjust as needed:

```text
NEXT_PUBLIC_SITE_URL=http://localhost:2000
LEAD_WEBHOOK_URL=
```

- `NEXT_PUBLIC_SITE_URL` is used for canonical URLs, Open Graph metadata, sitemap, and robots.
- `LEAD_WEBHOOK_URL` is the server-only destination for qualified lead submissions. Never expose it to the browser.

## Lead integration

`POST /api/lead` validates submissions with Zod, rejects honeypot traffic, applies a simple in-memory rate limit, and then:

1. Forwards the payload to `LEAD_WEBHOOK_URL` when configured.
2. In development, if no webhook is set, logs a sanitized record and still returns success.

Webhook payload:

```json
{
  "requestId": "lsf_...",
  "createdAt": "2026-01-01T00:00:00.000Z",
  "fullName": "...",
  "email": "...",
  "phone": "...",
  "service": "life-insurance",
  "preferredContact": "either",
  "message": "...",
  "consent": true,
  "source": "website"
}
```

Production lead delivery requires `LEAD_WEBHOOK_URL`.

## Images

Recommended files in `public/images`:

```text
hero-family.jpg
advisor-consultation.jpg
resource-life-insurance.jpg
resource-medicare.jpg
resource-retirement.jpg
```

Until those files are added, the site uses licensed Unsplash placeholders defined in `lib/images.ts`. After you add local photography, change each `src` in that file to the matching local path, for example `/images/hero-family.jpg`.

Missing images fall back to a navy gradient so the layout does not break.

## Business content to verify before launch

All of the following lives in `lib/constants.ts` or environment configuration and should be reviewed before publication:

```text
[ ] Phone number
[ ] Email
[ ] Office address if applicable
[ ] Company licensing disclosures
[ ] Privacy policy
[ ] Terms
[ ] Testimonials
[ ] Statistics
[ ] Accreditations
[ ] Carrier relationships
[ ] Final photography
[ ] CRM webhook
[ ] Analytics
```

Do not publish placeholder statistics, demo testimonials, or unverified credentials as facts.

## Project notes

- Homepage quote buttons open a lead-form modal.
- Header **Get Started** goes to `/contact`.
- Services, articles, metrics, and navigation are data-driven.
- Analytics events exist as a no-op helper in `lib/analytics.ts`.
