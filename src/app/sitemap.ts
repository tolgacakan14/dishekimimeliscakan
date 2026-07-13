import type { MetadataRoute } from "next";
import { services } from "@/lib/content";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/hakkimizda",
    "/hizmetler",
    "/galeri",
    "/referanslar",
    "/sss",
    "/iletisim",
    "/kvkk",
    "/gizlilik-politikasi",
    "/cerez-politikasi",
  ];

  const serviceRoutes = services.map((s) => `/hizmetler/${s.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
