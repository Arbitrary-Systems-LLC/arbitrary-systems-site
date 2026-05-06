import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

const routes = ["", "/about", "/contact", "/products", "/products/the-registry", "/products/pranalogic", "/products/group-pours", "/products/imopen2", "/support"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route || "/", siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
