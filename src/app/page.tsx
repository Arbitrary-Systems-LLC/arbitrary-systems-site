import Image from "next/image";
import Link from "next/link";
import { capabilities, company, featuredProducts, principles } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  description:
    "Arbitrary Systems builds composed software for detail-driven businesses, with current product work in luxury collections and wellness operations.",
  path: "/",
});

const signals = [
  "Luxury collections and collection-centered operations",
  "Yoga studios and wellness businesses",
  "Interfaces built for discretion, legibility, and trust",
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Arbitrary Systems</div>
            <h1>Quiet software for businesses where precision matters.</h1>
            <p className="hero-intro">
              We design composed systems for detail-heavy operations, with current product work focused on luxury collections and wellness businesses.
            </p>
            <p className="hero-secondary">
              The aim is simple: software that feels clear, reliable, and unusually well considered from the first screen to the everyday workflow behind it.
            </p>
            <div className="button-row">
              <Link href="/products" className="button primary">
                Explore Products
              </Link>
              <Link href="/contact" className="button">
                Start a Conversation
              </Link>
            </div>
          </div>
          <div className="hero-panel panel">
            <div className="hero-mark-wrap">
              <Image
                src="/branding/logo-mark.png"
                alt="Arbitrary Systems brand mark"
                width={440}
                height={451}
                className="hero-mark"
                priority
              />
            </div>
            <div className="hero-panel-copy">
              <div className="eyebrow">Current focus</div>
              <ul className="signal-list">
                {signals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="signal-band">
        <div className="container signal-grid">
          <div className="signal-card">
            <span className="signal-label">Positioning</span>
            <p>Product-minded software company with a restrained aesthetic and a high-trust operational focus.</p>
          </div>
          <div className="signal-card">
            <span className="signal-label">Current scope</span>
            <p>Two product directions: one for collection stewardship, one for wellness operations.</p>
          </div>
          <div className="signal-card">
            <span className="signal-label">Operating preference</span>
            <p>Clarity, discretion, and dependable execution over feature noise and unnecessary complexity.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-heading-group">
            <div className="eyebrow">What we build toward</div>
            <h2 className="section-heading">A more composed kind of business software.</h2>
            <p className="section-intro">
              Arbitrary Systems is shaped around the belief that software can feel premium, legible, and calm without becoming vague or ornamental. The work favors durable systems that help operators see clearly and act confidently.
            </p>
          </div>
          <div className="card-grid">
            {capabilities.map((capability) => (
              <article key={capability.title} className="card">
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-heading-group">
            <div className="eyebrow">Current product work</div>
            <h2 className="section-heading">Two product directions, one consistent point of view.</h2>
            <p className="section-intro narrow-copy">
              Each product is being developed for a domain where operational detail matters, but where the surrounding software often feels clumsy, noisy, or insufficiently thoughtful.
            </p>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <article key={product.slug} className="product-card">
                <div className="product-card-top">
                  <span className="status-pill">{product.status}</span>
                  <span className="product-eyebrow">{product.eyebrow}</span>
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="product-audience">{product.audience}</p>
                <div className="button-row">
                  <Link href={`/products/${product.slug}`} className="button primary">
                    Learn More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-heading-group">
            <div className="eyebrow">How we work</div>
            <h2 className="section-heading">Software with a steadier temperament.</h2>
          </div>
          <div className="principles-grid">
            {principles.map((principle) => (
              <div key={principle.title} className="principle">
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container cta-band">
          <div>
            <div className="eyebrow">Get in touch</div>
            <h2 className="section-heading">If the direction resonates, we should talk.</h2>
            <p className="section-intro narrow-copy">
              {company.name} maintains this site as a company presence, product overview, and contact point for future customers, collaborators, and early conversations.
            </p>
          </div>
          <div className="button-row">
            <Link href="/contact" className="button primary">
              Contact
            </Link>
            <Link href="/about" className="button">
              Learn About the Company
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
