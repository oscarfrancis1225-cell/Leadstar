import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { getImageModel, getOpenAIClient } from "../../lib/openai";

type HeroBrief = {
  slug: string;
  filename: string;
  purpose: string;
  prompt: string;
};

type BriefFile = {
  sharedConstraints: string;
  heroes: HeroBrief[];
};

const briefsPath = path.join(
  process.cwd(),
  "content",
  "editorial",
  "image-briefs",
  "article-heroes.json",
);

const requested = process.argv.slice(2).filter((value) => value !== "--all");

async function generateHero(brief: HeroBrief, sharedConstraints: string) {
  const client = getOpenAIClient();
  const model = getImageModel();
  const destDir = path.join(process.cwd(), "public", "images", "blog", brief.slug);
  const dest = path.join(destDir, brief.filename);

  console.log(`Generating ${brief.slug} with ${model}...`);

  const response = await client.images.generate({
    model,
    prompt: `${brief.prompt}\n\n${sharedConstraints}`,
    size: "1536x864",
    quality: "high",
    output_format: "webp",
    output_compression: 82,
    n: 1,
  });

  const image = response.data?.[0]?.b64_json;
  if (!image) {
    throw new Error(`No image data returned for ${brief.slug}`);
  }

  await mkdir(destDir, { recursive: true });
  await writeFile(dest, Buffer.from(image, "base64"));
  console.log(`Wrote ${dest}`);
}

async function main() {
  const file = JSON.parse(await readFile(briefsPath, "utf8")) as BriefFile;
  const selected = requested.length
    ? file.heroes.filter((hero) => requested.includes(hero.slug))
    : file.heroes;

  if (selected.length === 0) {
    throw new Error("No matching image briefs. Pass slugs or omit args to generate all.");
  }

  for (const hero of selected) {
    await generateHero(hero, file.sharedConstraints);
  }
}

void main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
