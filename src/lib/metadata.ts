import type { Metadata } from "next";
import { company } from "@/lib/content";

export const siteUrl = new URL(company.domain);
export const defaultOgImage = "/branding/logo-mark.jpg";

type PageMetadataInput = {
  title?: string;
  description: string;
  path?: string;
};

export function createMetadata({ title, description, path = "/" }: PageMetadataInput): Metadata {
  const canonical = new URL(path, siteUrl).toString();

  return {
    title,
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
