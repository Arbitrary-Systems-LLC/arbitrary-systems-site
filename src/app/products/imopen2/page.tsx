import { imopen2DetailSections, imopen2Pricing, products } from "@/lib/content";
import { ProductLogo } from "@/components/product-logo";
import { ProductDetailSections } from "@/components/product-detail-sections";
import { createMetadata } from "@/lib/metadata";

const product = products.imopen2;

export const metadata = createMetadata({
  title: product.name,
  description: product.description,
  path: `/products/${product.slug}`,
});

export default function Imopen2Page() {
  return (
    <>
      <section className="page-hero page-hero-imopen2">
        <div className="container">
          <ProductLogo product={product} priority />
          <div className="eyebrow">{product.eyebrow}</div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      </section>
      <ProductDetailSections product={product} pageStackClassName="page-stack-imopen2">
        <div className="split-grid">
          {imopen2DetailSections.slice(0, 2).map((section) => (
            <div key={section.title} className="panel detail-feature-panel">
              <h2 className="section-heading">{section.title}</h2>
              <p>{section.body}</p>
              <ul className="detail-list">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="split-grid">
          <div className="panel detail-feature-panel">
            <h2 className="section-heading">{imopen2DetailSections[2].title}</h2>
            <p>{imopen2DetailSections[2].body}</p>
            <ul className="detail-list">
              {imopen2DetailSections[2].bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="panel detail-pricing-panel">
            <h2 className="section-heading">{imopen2Pricing.title}</h2>
            <p>{imopen2Pricing.body}</p>
            <div className="detail-pricing-grid detail-pricing-grid-three">
              {imopen2Pricing.tiers.map((tier) => (
                <div key={tier.name} className="detail-pricing-tier">
                  <div className="detail-pricing-tier-head">
                    <h3>{tier.name}</h3>
                    <span>{tier.price}</span>
                  </div>
                  <ul className="detail-list">
                    {tier.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ProductDetailSections>
    </>
  );
}
