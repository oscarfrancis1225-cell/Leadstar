# Claims Verification Matrix

Status key: `VERIFIED` | `NEEDS VERIFICATION` | `REWRITE SAFER` | `DO NOT PUBLISH` | `PROHIBITED`

Public site copy must stay inside verified or rewritten-safer language until this file is updated.

## Immediate production actions

| Claim / asset | Status | Notes |
| --- | --- | --- |
| Fabricated testimonials on `/reviews` and home | `DO NOT PUBLISH` | Unpublished 2026-08-27. Delete `lib/content/testimonials.ts` and `public/images/testimonials/` manually when ready. |
| "Serving clients across the United States" | `REWRITE SAFER` | Do not claim nationwide service. Public copy may say licensed in Florida and California only. |
| "15+ Years Experience" | `REWRITE SAFER` | Removed from the live advisor band. Do not republish a tenure badge such as 16 years. You MAY say she has been licensed in Florida for life insurance since 2010 (DFS life-license issue date). |
| Phone `(954) 449-3101` | `VERIFIED` | User asked to publish. Was the CA DOI listing number. In `siteConfig.phone`. `contactVerified.phone` is true. |
| `efrancis@leadstarfinancial.com` | `VERIFIED` | User said "e francis at leadstar dot com". Published on leadstarfinancial.com (Google Workspace MX). Do not publish `@leadstar.com` (GoDaddy MX, not proven as this practice). `contactVerified.email` is true. |
| Missing local images, logo, favicon | `NEEDS VERIFICATION` | Locate/restore binaries before captioning any photo as real. |

## Business identity

| Claim | Status | Safer public language until verified |
| --- | --- | --- |
| Legal name LeadStar Financial Inc. | `NEEDS VERIFICATION` | Public copy uses "LeadStar Financial" until formation documents are confirmed. |
| Founded 2017 | `NEEDS VERIFICATION` | Do not publish founding year. |
| Fort Lauderdale office / 110 SE 6th St. | `DO NOT PUBLISH` | Do not publish a street address or LocalBusiness schema. |
| 6666 Saltaire Terrace, Margate, FL 33063 | `VERIFIED` | User confirmed for public use. NAP street is Margate. In `siteConfig.location`. `contactVerified.address` is true. |
| Boca Raton locality | `VERIFIED` | User stated plus LinkedIn location. Visible About/bio copy may say she lives in Boca Raton. Schema locality is Margate (NAP). |
| Licensed states (Florida and California) | `VERIFIED` | Public copy may say Esther Francis is licensed in Florida and California. |
| Florida license number W011875 | `VERIFIED` | Official Florida DFS Licensee Search record FRANCIS, ESTHER: https://licenseesearch.fldfs.com/Licensee/1154038. Status valid/active. In `siteConfig.licenses.floridaNumber`. Lookup URL stays the DFS search. NPN 15932380 is not published (no NPN slot on Disclosures). |
| Florida life license since 2010 | `VERIFIED` | LIFE INCL VARIABLE ANNUITY (0214) issued 9/1/2010. Public copy may say licensed in Florida for life insurance since 2010. Do not add a "16 years experience" marketing badge. |
| Florida health license | `VERIFIED` | HEALTH (0240) issued 12/4/2014. Public copy may say she also holds a Florida health license. |
| Florida general lines P&C (0220) | `DO NOT PUBLISH` as a site service | Issued 9/12/2023. LeadStar site services stay life, retirement, Medicare education, health coverage, final expense, mortgage, business. Do not add auto/home/P&C. |
| California license number 0J00767 | `VERIFIED` | Official California DOI name search. Same person as Florida W011875. Status Active. Lines: Life (original issue 11/16/2023, expires 11/30/2027); Accident and Health or Sickness (original issue 01/22/2025, expires 11/30/2027). In `siteConfig.licenses.californiaNumber`. CA legal name on the record is ESTHER FRANCIS FRANCIS. Public site name stays Esther Francis. Ignore inactive CA record ESTHER ALANA FRANCIS 0E46318. |
| MA/PDP carrier appointments (TPMO status) | `NEEDS VERIFICATION` | Medicare pages stay educational-only until determined. Do not publish carrier appointment names from DFS or CDI. |
| Complimentary initial consultation | `NEEDS VERIFICATION` | "Start a conversation", no complimentary/free claim. |
| Referral-only practice | `NEEDS VERIFICATION` | Do not claim referral-only intake. |
| LinkedIn sameAs URL | `VERIFIED` | https://www.linkedin.com/in/francisesther is in `siteConfig.sameAs`. Do not add other social URLs. |
| Single-parent self-description | `VERIFIED` | Paraphrase from LinkedIn About. Do not paste that About verbatim. |
| Community roles (Red Cross, Women of Tomorrow) | `NEEDS VERIFICATION` | Confirm with Esther before publishing. Do not name those organizations. |

## Prohibited terms

These may not appear in public copy, captions, schema, or ads:

- consistent returns
- guaranteed growth / guaranteed income
- secure financial future (as an outcome promise)
- protect and grow assets
- tax-efficient / tax-free (as a promise)
- risk-free / safe returns
- independent advice / fiduciary / Registered Investment Adviser / CFP (unless documented)
- Medicare specialist
- best / #1 / lowest cost (unsupported superlatives)
- invented testimonials, ratings, awards, carrier endorsements, client counts

## Language requiring rewrite or support

| Claim | Status | Approved direction |
| --- | --- | --- |
| Independent advice / represent clients not one company | `REWRITE SAFER` | Use "works with multiple carriers" only after carrier list is verified. |
| 18+ years experience | `NEEDS VERIFICATION` | Attribute to Esther personally, never to the firm age. Do not republish a tenure figure. Licensed in Florida for life insurance since 2010 is allowed. |
| Plan. Protect. Prosper. | `REWRITE SAFER` | Tagline only, with the approved semantics in the About page. Never next to product-performance language. |
| Protect and grow assets | `PROHIBITED` | Use "consider strategies for protection and long-term progress." |

## Phase 0 open items for the business owner

1. Phone, email, and Margate mailing address are now public. Founding year stays unpublished.
2. Florida W011875 and California 0J00767 are now in `siteConfig.licenses`. Confirm they should stay on Disclosures.
3. Confirm whether Esther holds MA/PDP appointments (TPMO determination).
4. Tenure badge still unpublished. Licensed-in-Florida-since-2010 language is allowed.
5. Confirm consultation and referral policies.
6. LinkedIn URL is published as sameAs. Confirm community-involvement details before naming organizations.
7. Locate/restore image binaries and classify REAL / AI / STOCK / PLACEHOLDER.
8. Decide whether to block training-only AI crawlers. Current robots policy: allow search/citation bots; block training-only bots.
9. Approve final disclaimer wording with compliance counsel.
10. Approve optional reader-facing AI-transparency sentence.