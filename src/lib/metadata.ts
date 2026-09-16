import type { Metadata } from "next";
import { company } from "@/lib/content";

// Match the production host; the apex redirects here.
export const siteUrl = new URL("https://www.arbitrarysystems.io");
export const defaultOgImage = "/branding/logo-mark.png";

type PageMetadataInput = {
  title?: string;
  description: string;
  path?: string;
};

export function createMetadata({ title, description, path = "/" }: PageMetadataInput): Metadata {
  const canonical = new URL(path, siteUrl).toString();

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: title ? `${title} | ${company.name}` : company.name,
      description,
      url: canonical,
      siteName: company.name,
      type: "website",
      images: [
        {
          url: defaultOgImage,
          alt: `${company.name} brand mark`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${company.name}` : company.name,
      description,
      images: [defaultOgImage],
    },
  };
}
