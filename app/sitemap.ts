import { MetadataRoute } from "next";

const base = "https://www.rockandpour.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/first-time-guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/premium-selection`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/our-story`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/indie-rock-night`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/birthday-celebration-ideas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/all-inclusive-drinks-events`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/how-to-budget-night-out`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/best-manchester-venues`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/corporate-events`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/team-building-events`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/best-beer-venues-uk`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/best-wine-venues-uk`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/cheshire-events`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/warrington-nights-out`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/britpop-lovers`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/what-to-wear-night-out`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/music-festivals-alternatives`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/house-rules`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
