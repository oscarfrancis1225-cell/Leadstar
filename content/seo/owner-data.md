# Owner data to publish (fill in, then verify)

Use this checklist when real values are confirmed. Do not invent placeholders that look like real numbers. Leave a field blank until the owner has confirmed it.

Publishing a value in on-page copy is separate from publishing it in JSON-LD schema. Schema uses `lib/seo/public-identity.ts`, which reads `siteConfig` in `lib/content/site.ts` and **only outputs phone, email, address, or sameAs after the matching `contactVerified` flag is set to `true`**. License numbers are included in Person `hasCredential` only when the string is non-empty. LinkedIn `sameAs` is output when the array has a non-empty URL (no extra flag).

See `content/compliance/claims-verification.md` before flipping any flag.

## Production domain

- Value: `[ ________________ ]` (example shape only: `https://www.example.com`, not a guess at the live host)
- Goes in: environment `NEXT_PUBLIC_SITE_URL` (see `.env.example`). Not a `site.ts` field.
- Currently: empty / local or preview host via `getSiteUrl()`.
- Schema: site URL is used as Organization `url`. Confirm the production host before Search Console submission.

## Google Search Console

- Value: `[ ________________ ]` (HTML tag content only, not a made-up token)
- Goes in: `siteConfig.search.googleSiteVerification` in `lib/content/site.ts`
- Currently: empty string. `app/layout.tsx` omits `verification.google` while empty.
- Schema / head: the verification meta tag is emitted only when this string is non-empty.

## Bing Webmaster Tools

- Value: `[ ________________ ]`
- Goes in: `siteConfig.search.bingSiteVerification` in `lib/content/site.ts`
- Currently: empty string. `app/layout.tsx` omits the Bing `msvalidate.01` tag while empty.
- Schema / head: emitted only when this string is non-empty.

## Phone

- Value: `(954) 449-3101`
- Goes in: `siteConfig.phone` in `lib/content/site.ts`
- Currently: published. User asked to publish this number (it was the CA DOI listing number).
- Schema: `getPublicTelephone()` publishes it because it is not a placeholder and `contactVerified.phone` is `true`.

## Email confirmation

- Value on the site today: `efrancis@leadstarfinancial.com`
- Goes in: `siteConfig.email` in `lib/content/site.ts`
- Currently: published. User said "e francis at leadstar dot com". Official/DFS/RocketReach domain is leadstarfinancial.com. `leadstar.com` MX is generic GoDaddy (`smtp.secureserver.net`), not proven as this practice mailbox. `leadstarfinancial.com` MX is Google Workspace.
- `contactVerified.email` is `true` for this address only.

## Street address

- Street: `6666 Saltaire Terrace` (one word Saltaire)
- City: Margate (NAP). Boca Raton stays in bio copy because she lives in Boca.
- Region / state: FL
- Postal code: `33063`
- Country: `US`
- Goes in: `siteConfig.location.*` in `lib/content/site.ts`
- Currently: published. `contactVerified.address` is `true`.
- Do not publish 110 SE 6th St / Fort Lauderdale.
- Schema: `getPublicPostalAddress()` publishes the Margate mailing address.

## Florida license number

- Value: W011875
- Goes in: `siteConfig.licenses.floridaNumber` in `lib/content/site.ts`
- Currently: W011875, verified from Florida DFS Licensee Search (FRANCIS, ESTHER). Public copy shows the number on Disclosures.
- Schema: Person `hasCredential` includes a Florida EducationalOccupationalCredential when this string is non-empty.

## California license number

- Value: 0J00767
- Goes in: `siteConfig.licenses.californiaNumber` in `lib/content/site.ts`
- Currently: 0J00767, verified from California DOI name search. Public copy shows the number on Disclosures. Public site name stays Esther Francis (record legal name ESTHER FRANCIS FRANCIS is not used). Ignore inactive CA record ESTHER ALANA FRANCIS 0E46318.
- Schema: Person `hasCredential` includes a California EducationalOccupationalCredential when this string is non-empty.

## LinkedIn / sameAs profile URLs

- Profile URL 1: https://www.linkedin.com/in/francisesther
- Profile URL 2: leave empty. Do not invent Facebook or other social URLs.
- Goes in: `siteConfig.sameAs` in `lib/content/site.ts` (array of absolute profile URLs)
- Currently: LinkedIn URL is in the array.
- Schema: Organization `sameAs` is emitted when the array has at least one non-empty URL.

## Google Business Profile URL

- Value: `[ ________________ ]`
- Goes in: `siteConfig.sameAs` (same array as other profile URLs) after the listing is confirmed. Do not create a LocalBusiness node from this URL alone.
- Currently: empty.
- Schema: included only as a `sameAs` string, and only after it is added to the array. Still requires a verified street address before LocalBusiness.

## After filling a field

1. Update the matching row in `content/compliance/claims-verification.md`.
2. For phone, email, or address, set the matching `contactVerified` flag to `true` only after that verification file says VERIFIED.
3. Rebuild and check Organization JSON-LD: it must not show unverified NAP.