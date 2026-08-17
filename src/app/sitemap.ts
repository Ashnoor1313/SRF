import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://siyaramfabrics.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/process", priority: 0.9, changeFrequency: "monthly" },
    { path: "/process/manufacturing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/process/dyeing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/process/finishing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/infrastructure", priority: 0.8, changeFrequency: "monthly" },
    { path: "/products", priority: 0.8, changeFrequency: "monthly" },
    { path: "/whats-new", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
