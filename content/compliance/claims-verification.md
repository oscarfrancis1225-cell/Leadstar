# Claims Verification Matrix

Status key: `VERIFIED` | `NEEDS VERIFICATION` | `REWRITE SAFER` | `DO NOT PUBLISH` | `PROHIBITED`

Public site copy must stay inside verified or rewritten-safer language until this file is updated.

## Immediate production actions

| Claim / asset | Status | Notes |
| --- | --- | --- |
| Fabricated testimonials on `/reviews` and home | `DO NOT PUBLISH` | Unpublished 2026-08-27. Delete `lib/content/testimonials.ts` and `public/images/testimonials/` manually when ready. |
| "Serving clients across the United States" | `REWRITE SAFER` | Do not claim nationwide service. Public copy may say licensed in Florida and California only. |
| "15+ Years Experience" | `REWRITE SAFER` | Removed from the live advisor band. Confirm Esther's start year before republishing any tenure figure. |
| Placeholder phone `(800) 000-0000` | `NEEDS VERIFICATION` | Do not add to Organization schema until replaced. |
| `hello@leadstarfinancial.com` | `NEEDS VERIFICATION` | Confirm mailbox ownership before schema `email`. |
| Missing local images, logo, favicon | `NEEDS VERIFICATION` | Locate/restore binaries before captioning any photo as real. |

## Business identity

| Claim | Status | Safer public language until verified |
| --- | --- | --- |
| Legal name LeadStar Financial Inc. | `NEEDS VERIFICATION` | Public copy uses "LeadStar Financial" until formation documents are confirmed. |
| Founded 2017 | `NEEDS VERIFICATION` | Do not publish founding year. |
| Fort Lauderdale office / 110 SE 6th St. | `NEEDS VERIFICATION` | Do not publish a street address or LocalBusiness schema. |
| Licensed states (Florida and California) | `VERIFIED` | Public copy may say Esther Francis is licensed in Florida and California. |
| Florida and California license numbers | `NEEDS VERIFICATION` | Slots exist in `lib/content/site.ts` (`licenses.floridaNumber`, `licenses.californiaNumber`). Display falls back to “not yet listed” until pasted. |
| MA/PDP carrier appointments (TPMO status) | `NEEDS VERIFICATION` | Medicare pages stay educational-only until determined. |
| Complimentary initial consultation | `NEEDS VERIFICATION` | "Start a conversation" — no complimentary/free claim. |
| Referral-only practice | `NEEDS VERIFICATION` | Do not claim referral-only intake. |
| LinkedIn sameAs URLs | `NEEDS VERIFICATION` | Do not output `sameAs` until confirmed. |
| Community roles (Red Cross, Women of Tomorrow) | `NEEDS VERIFICATION` | Confirm with Esther before publishing. |

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
| 18+ years experience | `NEEDS VERIFICATION` | Attribute to Esther personally, never to the firm age. |
| Plan. Protect. Prosper. | `REWRITE SAFER` | Tagline only, with the approved semantics in the About page. Never next to product-performance language. |
| Protect and grow assets | `PROHIBITED` | Use "consider strategies for protection and long-term progress." |

## Phase 0 open items for the business owner

1. Confirm phone, email, office address, founding year.
2. Paste Florida and California license numbers into `siteConfig.licenses` (states are confirmed; numbers are still pending).
3. Confirm whether Esther holds MA/PDP appointments (TPMO determination).
4. Confirm 18+ years experience and the year it begins.
5. Confirm consultation and referral policies.
6. Confirm LinkedIn URLs and community-involvement details with Esther.
7. Locate/restore image binaries and classify REAL / AI / STOCK / PLACEHOLDER.
8. Decide whether to block training-only AI crawlers. Current robots policy: allow search/citation bots; block training-only bots.
9. Approve final disclaimer wording with compliance counsel.
10. Approve optional reader-facing AI-transparency sentence.
