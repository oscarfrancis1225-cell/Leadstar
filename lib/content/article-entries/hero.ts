import type { ArticleImage } from "@/lib/content/types";

export function articleHero(
  slug: string,
  alt: string,
  caption: string,
): ArticleImage {
  return {
    src: `/images/blog/${slug}/hero.webp`,
    alt,
    width: 1536,
    height: 864,
    caption,
    purpose: "hero",
  };
}
