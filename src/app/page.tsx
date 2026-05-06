import Image from "next/image";
import Link from "next/link";
import { capabilities, company, featuredProducts, principles } from "@/lib/content";
import { ProductCard } from "@/components/product-card";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  description:
    "Arbitrary Systems builds beta software for serious collections, studio operations, collaborative tastings, and private plans between trusted people.",
  path: "/",
});

const signals = [
  "Collector software for wine, spirits, beer, and cigars",
  "Studio operations software for yoga and boutique fitness",
  "Collaborative tasting software built around GPAT and live results",
  "Private, circle-based pulses and syncs for small real-world plans",
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Arbitrary Systems</div>
            <h1>Software for the work people still do carefully.</h1>
            <p className="hero-intro">
              Arbitrary Systems builds beta products for serious collections, studio operations, collaborative tastings, and private plans between trusted people.
            </p>
            <p className="hero-secondary">
              Each product starts with a real workflow and a real operating rhythm, with enough structure underneath to stay useful once the records, schedules, pours, or plans become part of ordinary life.
            </p>
            <div className="button-row">
              <Link href="/products" className="button primary">
                Explore Beta Products
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
            <p>Four beta products with live links: The Registry, PranaLogic, Group Pours, and I&apos;m open 2.</p>
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
              Arbitrary Systems is less interested in generic SaaS than in products that honestly model the job: collection stewardship, studio operations, or the quiet logistics of making plans with people you trust. The work favors durable systems that stay clear as the detail level rises.
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
            <h2 className="section-heading">Four beta products, each with a real job to do.</h2>
            <p className="section-intro narrow-copy">
              Each product grows from an active codebase and a concrete domain model, not just a concept. The visual glimpses below are meant to show the kind of work each product is built to hold: collector records, live studio operations, tasting sessions, and private planning between trusted people.
            </p>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
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
            <h2 className="section-heading">If you are close to any of these domains, we should talk.</h2>
            <p className="section-intro narrow-copy">
              {company.name} maintains this site as a company presence and contact point for collectors, studio operators, tasting hosts, community builders, collaborators, and other early product conversations.
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
