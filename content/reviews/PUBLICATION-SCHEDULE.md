# Publication schedule

Status: SUPERSEDED on 2026-09-03. All ten articles now have `publishedAt` and
`updatedAt` of 2026-09-03 in `lib/content/article-entries/`.

## What was decided

On 2026-09-03 the owner asked to publish every article immediately so `/blog`
shows the full set the same day. That request superseded the staggered
forward schedule that had been applied earlier on 2026-09-03 (first article
2026-09-03, remaining nine dated 2026-09-05 through 2026-09-17). Nothing was
backdated: the public site had not yet served those later articles, and every
`publishedAt` is today.

The visibility gate is unchanged. An article still has to be `publicationStatus:
"published"` with `publishedAt` on or before the current day in
`America/New_York`. All ten current articles now meet that rule today.

## Current dates

| Article | publishedAt | updatedAt | Note |
| --- | --- | --- | --- |
| how-much-life-insurance-do-i-need | 2026-09-03 | 2026-09-03 | Pillar page. |
| turning-65-medicare-timeline | 2026-09-03 | 2026-09-03 | `annual-review`, `nextReviewAt: 2026-10-01`. |
| retirement-income-transition | 2026-09-03 | 2026-09-03 | Evergreen. |
| mortgage-protection-vs-term-life | 2026-09-03 | 2026-09-03 | Evergreen. |
| health-coverage-before-medicare | 2026-09-03 | 2026-09-03 | `annual-review`, `nextReviewAt: 2026-11-27`. |
| what-final-expense-insurance-does | 2026-09-03 | 2026-09-03 | Evergreen. |
| life-insurance-single-parents-solo-earners | 2026-09-03 | 2026-09-03 | Evergreen. |
| financial-questions-after-divorce | 2026-09-03 | 2026-09-03 | Evergreen. |
| key-person-vs-buy-sell | 2026-09-03 | 2026-09-03 | Evergreen. |
| first-financial-planning-meeting | 2026-09-03 | 2026-09-03 | Evergreen. |

`updatedAt` matches `publishedAt` because the copy was not edited as part of
this date change.

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

The site is prerendered, so an article appears on the first build or
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

Publishing all ten on 2026-09-03 changes when an article is visible. It does not
change what has been reviewed.
