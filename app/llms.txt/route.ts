import { getPublishedArticles } from "@/lib/content/articles";
import { services } from "@/lib/content/services";
import { tools } from "@/lib/content/tools";
import { estherFrancis } from "@/lib/content/authors";
import { siteConfig } from "@/lib/content/site";
import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export function GET() {
  const siteUrl = getSiteUrl();
  const lines = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.tagline}`,
    "",
    siteConfig.metadata.description,
    "",
    siteConfig.entityNote,
    "",
    `${estherFrancis.name} is an insurance agent licensed in Florida and California.`,
    "",
    "## About",
    `- [About](${siteUrl}/about): Company story and Plan. Protect. Prosper.`,
    `- [${estherFrancis.name}](${siteUrl}${estherFrancis.href}): ${estherFrancis.jobTitle}.`,
    `- [Contact](${siteUrl}/contact): Start a conversation.`,
    "",
    "## Legal",
    `- [Privacy Policy](${siteUrl}/privacy)`,
    `- [Terms of Use](${siteUrl}/terms)`,
    `- [Temporary Use](${siteUrl}/temporary-use)`,
    `- [Disclosures](${siteUrl}/disclosures)`,
    "",
    "## Services",
    ...services.map((service) => `- [${service.title}](${siteUrl}${service.href}): ${service.description}`),
    "",
    "## Articles",
    ...getPublishedArticles().map(
      (article) => `- [${article.title}](${siteUrl}${article.href}): ${article.summary}`,
    ),
    "",
    "## Tools",
    `- [Educational tools](${siteUrl}/tools)`,
    ...tools.map((tool) => `- [${tool.title}](${siteUrl}${tool.href}): ${tool.description}`),
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
