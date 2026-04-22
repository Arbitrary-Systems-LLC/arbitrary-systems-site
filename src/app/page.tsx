import Image from "next/image";
import Link from "next/link";
import { capabilities, company, featuredProducts, principles } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  description:
    "Arbitrary Systems builds focused software products for serious collectors and studio operators, with current work in The Arbitrary Register and PranaLogic.",
  path: "/",
});

const signals = [
  "Collector software for wine, spirits, beer, and cigars",
  "Studio operations software for yoga and boutique fitness",
  "Calm interfaces shaped around trust, records, and daily use",
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Arbitrary Systems</div>
            <h1>Focused software for collectors and studios.</h1>
            <p className="hero-intro">
              We build products around specific operating realities, with current work focused on collector-grade inventory software and studio management for yoga businesses.
            </p>
            <p className="hero-secondary">
              The aim is practical: strong underlying models, calmer interfaces, and software that feels trustworthy once it becomes part of the weekly routine.
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
            <p>Product company building software around real workflows instead of generic admin templates.</p>
          </div>
          <div className="signal-card">
            <span className="signal-label">Current scope</span>
            <p>The Arbitrary Register for collectors, and PranaLogic for studio scheduling and customer operations.</p>
          </div>
          <div className="signal-card">
            <span className="signal-label">Operating preference</span>
            <p>Clear records, calm interfaces, and dependable execution over feature noise and unnecessary complexity.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-heading-group">
            <div className="eyebrow">What we build toward</div>
            <h2 className="section-heading">Software that understands the work underneath it.</h2>
            <p className="section-intro">
              Arbitrary Systems is less interested in generic SaaS than in products that honestly model the job: collection stewardship on one side, studio operations on the other. The work favors durable systems that stay clear as the detail level rises.
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
            <h2 className="section-heading">Two products, each rooted in a real operating environment.</h2>
            <p className="section-intro narrow-copy">
              Each product grows from an active codebase and a concrete domain model, not just a concept. One centers on serious collections. The other centers on the daily mechanics of running a studio well.
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
            <h2 className="section-heading">A steadier way to build product.</h2>
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
            <h2 className="section-heading">If you are close to either domain, we should talk.</h2>
            <p className="section-intro narrow-copy">
              {company.name} maintains this site as a company presence and contact point for collectors, studio operators, collaborators, and other early product conversations.
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
