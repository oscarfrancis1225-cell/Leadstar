# Search Console and measurement plan

Connect after the production domain is final.

## Accounts

- Google Search Console for the production property
- Google Analytics only if desired; do not send calculator inputs or other financial figures as dimensions or events
- Bing Webmaster Tools (Copilot and ChatGPT search grounding use Bing)
- Consider IndexNow after Bing verification

## Track

- Impressions, queries, CTR, average position
- Landing-page traffic
- Engagement on `/blog`, `/about`, `/about/esther-francis`
- Consultation CTA clicks (existing analytics events)
- Tool page views, not tool inputs
- Search Console Generative AI performance report (impressions-only as of 2026)

## Do not track

- Income, coverage amounts, ages, or other calculator inputs
- Health or Medicare personal details
- Form field values beyond the existing lead webhook

## Monthly manual check

- Brand citations in ChatGPT and Perplexity
- Server logs for allowed search/citation crawlers
- Duplicate titles and descriptions via `npm run content:validate`
