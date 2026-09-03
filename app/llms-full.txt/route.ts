import { getPublishedArticles } from "@/lib/content/articles";
import { estherFrancis } from "@/lib/content/authors";
import { formatPublicAddressSingleLine, siteConfig } from "@/lib/content/site";
import {
  getPublicEmail,
  getPublicPostalAddress,
  getPublicTelephone,
} from "@/lib/seo/public-identity";
import {
  absoluteUrl,
  clipForLlms,
  firstSentences,
  getIndexableEntriesByGroup,
  type IndexGroup,
  type IndexableEntry,
} from "@/lib/seo/site-index";
import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

const LLM_HEADINGS: Record<IndexGroup, string> = {
  "Start here": "About",
  Services: "Services",
  Insights: "Insights",
  Tools: "Tools",
  Legal: "Legal",
};

function listItem(entry: IndexableEntry, siteUrl: string) {
  return `- [${entry.title}](${absoluteUrl(entry.path, siteUrl)}): ${clipForLlms(entry.description, 160)}`;
}

function publicReachLines() {
  const lines: string[] = [];
  const telephone = getPublicTelephone();
  const email = getPublicEmail();
  const address = getPublicPostalAddress();
  if (telephone) {
    lines.push(`Phone: ${telephone}`);
  }
  if (email) {
    lines.push(`Email: ${email}`);
  }
  if (address) {
    lines.push(`Mailing address: ${formatPublicAddressSingleLine()}`);
  }
  return lines;
}

export function GET() {
  const siteUrl = getSiteUrl();
  const sections = getIndexableEntriesByGroup();
  const articles = getPublishedArticles();
  const reach = publicReachLines();

  const lines: string[] = [
    `# ${siteConfig.name}`,
    "",
    `> Educational insurance conversations with ${estherFrancis.name}, licensed in Florida and California. ${siteConfig.name} is not affiliated with or endorsed by the U.S. government or the federal Medicare program.`,
    "",
    siteConfig.entityNote,
    "",
    "## Who Esther Francis is",
    "",
    estherFrancis.shortBio,
    estherFrancis.bio[0],
    "",
    `She is an insurance agent licensed in Florida and California. Florida license ${siteConfig.licenses.floridaNumber}. California license ${siteConfig.licenses.californiaNumber}. No other states are claimed here.`,
    "",
    "## How to reach LeadStar",
    "",
    ...(reach.length > 0
      ? reach
      : ["Public contact details are listed on the Contact page when they are confirmed."]),
    "",
    "## Licensed states",
    "",
    "Florida and California. Confirm coverage during a conversation. This site does not claim nationwide service.",
    "",
    "## What pages cover",
    "",
  ];

  for (const section of sections) {
    const heading = LLM_HEADINGS[section.group];
    const entries =
      section.group === "Legal"
        ? section.entries.filter((item) => item.path !== "/sitemap")
        : section.group === "Insights"
          ? section.entries.filter((item) => item.path === "/blog")
          : section.entries;
    lines.push(`### ${heading}`);
    lines.push(...entries.map((entry) => listItem(entry, siteUrl)));
    lines.push("");
  }

  lines.push("## What this site does not do");
  lines.push("");
  lines.push("- It does not provide insurance quotes on the website.");
  lines.push("- Medicare pages do not compare or recommend specific Medicare plans.");
  lines.push("- LeadStar Financial is not a Registered Investment Adviser.");
  lines.push("- LeadStar Financial is not affiliated with or endorsed by the U.S. government or the federal Medicare program.");
  lines.push("- Calculators are illustrations that use the numbers you type. They are not quotes, product illustrations, or recommendations.");
  lines.push("- Browsing, using a tool, or sending the contact form does not create a client or insurance relationship.");
  lines.push("");
  lines.push("## Insights");
  lines.push("");
  lines.push("Educational articles. This is not individualized advice. Summaries below are from each article's published summary, not the full body.");
  lines.push("");

  for (const article of articles) {
    lines.push(`### ${article.title}`);
    lines.push(absoluteUrl(article.href, siteUrl));
    lines.push(firstSentences(article.summary, 2));
    lines.push("");
  }

  lines.push("## Optional");
  lines.push("");
  lines.push(`- [HTML sitemap](${siteUrl}/sitemap): A plain-language list of LeadStar pages.`);
  lines.push(`- [XML sitemap](${siteUrl}/sitemap.xml): Machine-readable list of public indexable URLs.`);
  lines.push(`- [LLM index](${siteUrl}/llms.txt): Short citation index.`);

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
