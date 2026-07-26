import { products } from "@/lib/content";
import { ProductLogo } from "@/components/product-logo";
import { ProductDetailSections } from "@/components/product-detail-sections";
import { createMetadata } from "@/lib/metadata";

const product = products.groupDraws;

export const metadata = createMetadata({
  title: product.name,
  description: product.description,
  path: `/products/${product.slug}`,
});

export default function GroupDrawsPage() {
  return (
    <>
      <section className="page-hero page-hero-group-draws">
        <div className="container">
          <ProductLogo product={product} priority />
          <div className="eyebrow">{product.eyebrow}</div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      </section>
      <ProductDetailSections product={product} pageStackClassName="page-stack-group-draws">
        <div className="panel detail-feature-panel">
          <h2 className="section-heading">A cigar sibling to Group Pours</h2>
          <p>
            Group Draws follows the same tasting-system philosophy as Group Pours, but the workflow is cigar-specific:
            cold draw, construction, burn, flavor across the thirds, retrohale, final impressions, and optional
            guess-the-cigar play for blind flights.
          </p>
          <ul className="detail-list">
            <li>Hosts can run a room from a phone with share codes or QR joins</li>
            <li>Tasters can join a group flight or capture private solo notes</li>
            <li>Collector accounts can connect Group Draws notes back to The Registry humidor record</li>
          </ul>
        </div>
      </ProductDetailSections>
    </>
  );
}
