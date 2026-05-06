import { products, registryDetailSections, registryPricing } from "@/lib/content";
import { ProductLogo } from "@/components/product-logo";
import { ProductDetailSections } from "@/components/product-detail-sections";
import { createMetadata } from "@/lib/metadata";

const product = products.register;

export const metadata = createMetadata({
  title: product.name,
  description: product.description,
  path: `/products/${product.slug}`,
});

export default function RegistryPage() {
  return (
    <>
      <section className="page-hero page-hero-register">
        <div className="container">
          <ProductLogo product={product} priority />
          <div className="eyebrow">{product.eyebrow}</div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      </section>
      <ProductDetailSections product={product} pageStackClassName="page-stack-register">
        <div className="panel registry-feature-panel">
          <h2 className="section-heading">{registryDetailSections[0].title}</h2>
          <p>{registryDetailSections[0].body}</p>
          <ul className="detail-list">
            {registryDetailSections[0].bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="split-grid">
          {registryDetailSections.slice(1, 3).map((section) => (
            <div key={section.title} className="panel registry-feature-panel">
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
          <div className="panel registry-feature-panel">
            <h2 className="section-heading">{registryDetailSections[3].title}</h2>
            <p>{registryDetailSections[3].body}</p>
            <ul className="detail-list">
              {registryDetailSections[3].bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="panel registry-pricing-panel" id="collector">
            <h2 className="section-heading">{registryPricing.title}</h2>
            <p>{registryPricing.body}</p>
            <div className="registry-pricing-grid">
              {registryPricing.tiers.map((tier) => (
                <div key={tier.name} className="registry-pricing-tier">
                  <div className="registry-pricing-tier-head">
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
