# Publication schedule

Status: APPLIED on 2026-09-03. The dates below are set in `lib/content/article-entries/`.

## What was decided

Forward scheduling. Nothing was backdated. The public site does not serve these
articles yet, so no article can honestly carry a publication date in the past.
Each article now carries the future date it is meant to go live, and the site
withholds it until that day arrives.

## The schedule

| Order | Article | publishedAt | Gap | Note |
| --- | --- | --- | --- | --- |
| 1 | how-much-life-insurance-do-i-need | 2026-09-03 | live now | Pillar page. |
| 2 | turning-65-medicare-timeline | 2026-09-05 | 2 days | `annual-review`, `nextReviewAt: 2026-10-01`. Re-check Medicare.gov and SSA sources on the publish date. |
| 3 | retirement-income-transition | 2026-09-07 | 2 days | Evergreen. |
| 4 | mortgage-protection-vs-term-life | 2026-09-08 | 1 day | Evergreen. |
| 5 | health-coverage-before-medicare | 2026-09-10 | 2 days | `annual-review`, `nextReviewAt: 2026-11-27`. Confirm current HealthCare.gov subsidy and enrollment rules on the publish date. |
| 6 | what-final-expense-insurance-does | 2026-09-11 | 1 day | Evergreen. |
| 7 | life-insurance-single-parents-solo-earners | 2026-09-13 | 2 days | Evergreen. Confirm SSA survivor-benefit references still current. |
| 8 | financial-questions-after-divorce | 2026-09-15 | 2 days | Evergreen. |
| 9 | key-person-vs-buy-sell | 2026-09-16 | 1 day | Evergreen. |
| 10 | first-financial-planning-meeting | 2026-09-17 | 1 day | Evergreen. |

`updatedAt` matches `publishedAt` on every article, because no article is edited
between now and its release. `lib/content/articles.test.ts` locks the sequence:
first date 2026-09-03, last date 2026-09-17, gaps of one or two days, no
duplicates.

## How the gate works

`lib/content/articles.ts` holds the whole rule. `isArticleVisible` requires
`publicationStatus: "published"` and a `publishedAt` on or before the current
day in `America/New_York`. Everything public reads through it:

- `getPublishedArticles` feeds the blog index, `getArticlesByPillar`,
  `getFeaturedArticles` on the home page, the Esther Francis profile page,
  `lib/seo/site-index.ts`, and through that the XML sitemap, the HTML sitemap,
  `llms.txt`, and `llms-full.txt`.
- `getVisibleArticle` gates the article page itself and its metadata, so a
  scheduled URL returns 404 until its date.
- `getVisibleArticles` and `getRelatedArticles` gate every related-article rail,
  including the service pages and the beneficiary checklist tool, so no rail can
  link to a page that is not live yet.

The site is prerendered, so a scheduled article appears on the first build or
revalidation that runs on or after its date. If the site is not rebuilt on that
day, the article simply stays hidden. That is a build cadence question, not a
content question.

## Dates that must not move

- `nextReviewAt` on the two `annual-review` articles (2026-10-01 and
  2026-11-27). Those govern source freshness, not marketing cadence.
- Any date inside article body copy that comes from a cited source, such as
  enrollment period timing on Medicare.gov or SSA.gov.
- `lastReviewedAt` stays 2026-09-03 and must not be advanced to imply a
  professional review that has not happened.

## Attestation blocker, still open

Esther Francis has not signed a review attestation for any of the ten articles.
`content/reviews/how-much-life-insurance-do-i-need.md` is `PENDING_SIGNATURE`
with an unchecked checklist, and there is no review record at all for the other
nine. Until a signed record exists:

- `reviewAttestation` stays `pending` on every article.
- Public bylines say "Prepared for general education" and do not name a reviewer.
- No "Reviewed by Esther Francis" byline may be published, and no review date may
  be shown.

Scheduling changes when an article is visible. It does not change what has been
reviewed.
