import { estherFrancis } from "@/lib/content/authors";
import { siteConfig } from "@/lib/content/site";
import {
  absoluteUrl,
  clipForLlms,
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

function disclosureOneLiner() {
  const first = siteConfig.disclosure.split(/(?<=\.)\s+/)[0];
  return first || siteConfig.disclosure;
}

function listItem(entry: IndexableEntry, siteUrl: string) {
  return `- [${entry.title}](${absoluteUrl(entry.path, siteUrl)}): ${clipForLlms(entry.description)}`;
}

export function GET() {
  const siteUrl = getSiteUrl();
  const sections = getIndexableEntriesByGroup();
  const lines: string[] = [
    `# ${siteConfig.name}`,
    "",
    `> Educational insurance conversations with ${estherFrancis.name}, licensed in Florida and California. ${siteConfig.name} is not affiliated with or endorsed by the U.S. government or the federal Medicare program.`,
    "",
    siteConfig.entityNote,
    disclosureOneLiner(),
    "",
  ];

  for (const section of sections) {
    const heading = LLM_HEADINGS[section.group];
    const entries =
      section.group === "Legal"
        ? section.entries.filter((item) => item.path !== "/sitemap")
        : section.entries;
    lines.push(`## ${heading}`);
    lines.push(...entries.map((entry) => listItem(entry, siteUrl)));
    lines.push("");
  }

  lines.push("## Optional");
  lines.push(
    `- [HTML sitemap](${siteUrl}/sitemap): A plain-language list of LeadStar pages for people and search engines.`,
  );
  lines.push(
    `- [XML sitemap](${siteUrl}/sitemap.xml): Machine-readable list of public indexable URLs.`,
  );

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}