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
    name: "The Arbitrary Register",
    kind: "Product mark",
    src: "/products/arbitrary-register-logo.png",
    downloadName: "the-arbitrary-register-logo.png",
    alt: "The Arbitrary Register logo",
    width: 480,
    height: 480,
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
    name: "I'm Open To",
    kind: "Product mark",
    src: "/products/imopento-logo.png",
    downloadName: "im-open-to-logo.png",
    alt: "I'm Open To logo",
    width: 512,
    height: 512,
    tone: "mark" as const,
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
                    <img
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
