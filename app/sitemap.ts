import type { MetadataRoute } from "next";
import { getPublishedArticles } from "@/lib/content/articles";
import { getOwnedProductHrefs } from "@/lib/content/product-entries";
import { services } from "@/lib/content/services";
import { tools } from "@/lib/content/tools";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  const staticRoutes: Array<{ path: string; lastModified?: string }> = [
    { path: "" },
    { path: "/about" },
    { path: "/about/esther-francis" },
    { path: "/contact" },
    { path: "/services" },
    { path: "/blog" },
    { path: "/office" },
    { path: "/faq" },
    { path: "/careers" },
    { path: "/privacy" },
    { path: "/terms" },
    { path: "/temporary-use" },
    { path: "/disclosures" },
    { path: "/tools" },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path || "/"}`,
    })),
    ...services.map((service) => ({
      url: `${siteUrl}${service.href}`,
    })),
    ...getOwnedProductHrefs().map((path) => ({
      url: `${siteUrl}${path}`,
    })),
    ...getPublishedArticles().map((article) => ({
      url: `${siteUrl}${article.href}`,
      lastModified: article.updatedAt,
    })),
    ...tools.map((tool) => ({
      url: `${siteUrl}${tool.href}`,
    })),
  ];
}
