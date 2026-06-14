import { products } from "@/lib/content";
import { ProductLogo } from "@/components/product-logo";
import { ProductDetailSections } from "@/components/product-detail-sections";
import { createMetadata } from "@/lib/metadata";

const product = products.lwsPowerup;

export const metadata = createMetadata({
  title: product.name,
  description: product.description,
  path: `/products/${product.slug}`,
});

export default function LwsPowerupPage() {
  return (
    <>
      <section className="page-hero page-hero-lws-powerup">
        <div className="container">
          <ProductLogo product={product} priority />
          <div className="eyebrow">{product.eyebrow}</div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      </section>
      <ProductDetailSections product={product} pageStackClassName="page-stack-lws-powerup">
        <div className="panel detail-feature-panel">
          <h2 className="section-heading">Independent by design</h2>
          <p>
            LW:S - Power Up is an independent, unofficial companion for Last War: Survival. It is built around
            manually entered player data, not game-client automation, server scraping, or game-account access.
          </p>
          <ul className="detail-list">
            <li>No Last War login required or requested</li>
            <li>No automated client activity, scanner accounts, or scraped game data</li>
            <li>Visibility stays controlled by each player through alliance, server, and global sharing tiers</li>
          </ul>
        </div>
      </ProductDetailSections>
    </>
  );
}
