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
    { path: "/products/summer", priority: 0.8, changeFrequency: "monthly" },
    { path: "/products/winter", priority: 0.8, changeFrequency: "monthly" },
    { path: "/whats-new", priority: 0.8, changeFrequency: "weekly" },
    { path: "/whats-new/blog/how-to-choose-the-right-knitted-fabric-gsm", priority: 0.7, changeFrequency: "monthly" },
    { path: "/whats-new/blog/understanding-sustainable-softflow-dyeing-and-etp", priority: 0.7, changeFrequency: "monthly" },
    { path: "/whats-new/blog/speed-to-market-agile-textile-sampling", priority: 0.7, changeFrequency: "monthly" },
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
