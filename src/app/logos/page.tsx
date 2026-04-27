import Image from "next/image";
import type { Metadata } from "next";
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

const logos = [
  {
    name: "Arbitrary Systems",
    kind: "Company mark",
    src: "/branding/logo-mark.png",
    alt: "Arbitrary Systems logo",
    width: 494,
    height: 505,
    tone: "mark" as const,
  },
  {
    name: "The Arbitrary Register",
    kind: "Product mark",
    src: "/products/arbitrary-register-logo.webp",
    alt: "The Arbitrary Register logo",
    width: 480,
    height: 480,
    tone: "mark" as const,
  },
  {
    name: "PranaLogic",
    kind: "Product mark",
    src: "/products/pranalogic-mark.png",
    alt: "PranaLogic mark",
    width: 1920,
    height: 1920,
    tone: "mark" as const,
  },
  {
    name: "PranaLogic",
    kind: "Product wordmark",
    src: "/products/pranalogic-wordmark.svg",
    alt: "PranaLogic wordmark",
    width: 560,
    height: 120,
    tone: "wordmark" as const,
  },
  {
    name: "I'm Open To",
    kind: "Product mark",
    src: "/products/imopento-logo.png",
    alt: "I'm Open To logo",
    width: 512,
    height: 512,
    tone: "mark" as const,
  },
  {
    name: "Renaissance Yoga",
    kind: "Property mark",
    src: "/products/renaissance-yoga-logo.png",
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
            {logos.map((logo) => (
              <article key={logo.src} className="panel logo-card">
                <div className={`logo-preview logo-preview-${logo.tone}`}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className={`logo-preview-image logo-preview-image-${logo.tone}`}
                  />
                </div>
                <div className="product-card-top">
                  <span className="status-pill">{logo.kind}</span>
                </div>
                <h2 className="section-heading">{logo.name}</h2>
                <p className="logo-asset-path">{logo.src}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
