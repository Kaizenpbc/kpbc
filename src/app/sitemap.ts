import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const lastModified = "2026-02-26";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kpbc.ca";

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/products`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/products/ecm`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products/bpm`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products/cbs`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products/los`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products/ai-resume`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products/crm`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/products/itsm`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/products/csm`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/products/lms`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/products/sis`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/products/ma`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/products/chat`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/products/phone`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
