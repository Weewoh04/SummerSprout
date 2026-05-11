import type { Metadata } from "next";

export const site = {
  name: "Summer Sprout",
  url: "https://summer-sprout.com",
  description:
    "Simple summer activities, kid-friendly meals, printables, routines, and family fun ideas for sunny days.",
  keywords: [
    "summer activities for kids",
    "summer fun for families",
    "kids summer printables",
    "summer meal ideas for kids",
    "screen-free summer activities",
    "summer bucket list for kids",
    "rainy day activities for kids",
    "easy summer lunch ideas"
  ]
};

export function pageMetadata({
  title,
  description,
  path = "/",
  keywords = []
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const fullTitle = title === site.name ? title : `${title} | ${site.name}`;
  const url = new URL(path, site.url).toString();

  return {
    title: fullTitle,
    description,
    keywords: [...site.keywords, ...keywords],
    alternates: {
      canonical: url
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description
    }
  };
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
