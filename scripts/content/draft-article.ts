console.error(
  [
    "Draft generation is offline and gated.",
    "Do not call the public website to generate articles.",
    "Use the approved brief, fact ledger, and style guide.",
    "The draft model may not introduce quantitative facts outside the verified source pack.",
    "Usage after approval: node --env-file=.env.local --import tsx scripts/content/draft-article.ts <slug>",
  ].join("\n"),
);
process.exit(2);
