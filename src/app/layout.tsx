import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { company } from "@/lib/content";
import { siteUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: company.name,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  referrer: "origin-when-cross-origin",
  keywords: [
    "Arbitrary Systems",
    "software company",
    "collector software",
    "inventory software",
    "studio management software",
    "yoga studio software",
    "wine tasting app",
    "collaborative tasting software",
    "GPAT tasting app",
    "private social planning app",
    "pulse planning app",
    "circle-based planning app",
    "social coordination app",
    "operations software",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  category: "technology",
  icons: {
    shortcut: [{ url: "/favicon.ico" }],
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: company.name,
    description: company.description,
    url: company.domain,
    siteName: company.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/branding/logo-mark.png",
        alt: `${company.name} brand mark`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: company.name,
    description: company.description,
    images: ["/branding/logo-mark.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f171c",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: company.domain,
  logo: `${company.domain}/branding/logo-mark.png`,
  email: company.email,
  description: company.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="site-shell">
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
