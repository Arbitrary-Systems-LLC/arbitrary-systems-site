import Image from "next/image";
import type { Metadata } from "next";
import { company } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

const baseMetadata = createMetadata({
  title: "Logos",
  description: "Internal reference page for Arbitrary Systems logo assets.",
  path: "/logos",
});

export const metadata: Metadata = {
  ...baseMetadata,
  robots: {
    index: false,
    follow: false,
  },
};

const assetBaseUrl = company.domain.replace(/\/+$/, "");

const logos = [
  {
    name: "Arbitrary Systems",
    kind: "Company mark",
    src: "/branding/logo-mark.png",
    downloadName: "arbitrary-systems-logo-mark.png",
    alt: "Arbitrary Systems logo",
    width: 494,
    height: 505,
    tone: "mark" as const,
  },
  {
    name: "The Registry",
    kind: "Product mark",
    src: "/products/the-registry-logo.png",
    downloadName: "the-registry-logo.png",
    alt: "The Registry logo",
    width: 1024,
    height: 1024,
    tone: "mark" as const,
  },
  {
    name: "PranaLogic",
    kind: "Product mark",
    src: "/products/pranalogic-mark.png",
    downloadName: "pranalogic-mark.png",
    alt: "PranaLogic mark",
    width: 1920,
    height: 1920,
    tone: "mark" as const,
  },
  {
    name: "PranaLogic",
    kind: "Product wordmark",
    src: "/products/pranalogic-wordmark.svg",
    downloadName: "pranalogic-wordmark.svg",
    alt: "PranaLogic wordmark",
    width: 560,
    height: 120,
    tone: "wordmark" as const,
  },
  {
    name: "I'm open 2",
    kind: "Product mark",
    src: "/products/imopen2-logo.png",
    downloadName: "im-open-2-logo.png",
    alt: "I'm open 2 logo",
    width: 2082,
    height: 2082,
    tone: "mark" as const,
  },
  {
    name: "Group Pours",
    kind: "Product mark",
    src: "/products/group-pours-icon.png",
    downloadName: "group-pours-icon.png",
    alt: "Group Pours icon",
    width: 512,
    height: 512,
    tone: "mark" as const,
  },
  {
    name: "Group Pours",
    kind: "Product wordmark",
    src: "/products/group-pours-wordmark.png",
    downloadName: "group-pours-wordmark.png",
    alt: "Group Pours wordmark",
    width: 720,
    height: 297,
    tone: "wordmark" as const,
  },
  {
    name: "Renaissance Yoga",
    kind: "Property mark",
    src: "/products/renaissance-yoga-logo.png",
    downloadName: "renaissance-yoga-logo.png",
    alt: "Renaissance Yoga logo",
    width: 1920,
    height: 1920,
    tone: "mark" as const,
  },
];

export default function LogosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Logo Library</div>
          <h1>Brand assets in one place.</h1>
          <p>
            This unlinked page is a simple visual reference for the current Arbitrary Systems family of logos and related properties.
          </p>
        </div>
      </section>
      <section className="page-content">
        <div className="container page-stack">
          <div className="logo-library-grid">
            {logos.map((logo) => {
              const absoluteUrl = `${assetBaseUrl}${logo.src}`;

              return (
                <article key={logo.src} className="panel logo-card">
                  <a
                    href={absoluteUrl}
                    className={`logo-preview logo-preview-${logo.tone}`}
                    aria-label={`Open ${logo.name} file`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className={`logo-preview-image logo-preview-image-${logo.tone}`}
                    />
                  </a>
                  <div className="product-card-top">
                    <span className="status-pill">{logo.kind}</span>
                  </div>
                  <h2 className="section-heading">{logo.name}</h2>
                  <p className="logo-asset-path">{absoluteUrl}</p>
                  <div className="button-row logo-actions">
                    <a href={absoluteUrl} target="_blank" rel="noreferrer" className="button primary">
                      Open File URL
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
