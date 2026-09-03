import type { MetadataRoute } from "next";
import { absoluteUrl, getIndexableEntries } from "@/lib/seo/site-index";

export default function sitemap(): MetadataRoute.Sitemap {
  return getIndexableEntries().map((entry) => ({
    url: absoluteUrl(entry.path),
    ...(entry.lastModified ? { lastModified: entry.lastModified } : {}),
  }));
}