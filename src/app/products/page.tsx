import Link from "next/link";
import { collectorProducts, otherProducts, products } from "@/lib/content";
import { ProductCard } from "@/components/product-card";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Products",
  description:
    "Explore The Registry, Group Pours, and Group Draws with one Collector membership, plus PranaLogic, I'm open 2, and LW:S - Power Up.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Product portfolio</div>
          <h1>A family of apps, each built around a real pattern of use.</h1>
          <p>
            Arbitrary Systems builds a focused portfolio of apps for private collections, studio operations, social planning, wine, beer, spirits, and cigar tastings, and game communities. {products.groupPours.releaseNote} <a href={products.groupPours.appStoreUrl}>View Group Pours on the App Store</a>.
          </p>
        </div>
      </section>
      <section className="page-content">
        <div className="container page-stack">
          <div className="portfolio-group">
            <div className="membership-intro">
              <span className="eyebrow">The collection and tasting family</span>
              <h2>One Collector membership. Three connected apps.</h2>
              <p>The Registry keeps the collection; Group Pours handles wine, beer, and spirits tastings; Group Draws handles cigars. Subscribe once to unlock paid features across all three, using the same account. Each app is free to start.</p>
              <Link href="/products/the-registry#collector" className="inline-link">See Collector pricing</Link>
            </div>
            <div className="product-grid">
              {collectorProducts.map((product) => (
                <ProductCard key={product.slug} product={product} headingLevel="h3" />
              ))}
            </div>
          </div>
          <div className="portfolio-group">
            <h2 className="portfolio-group-label">More from Arbitrary Systems</h2>
            <div className="product-grid">
              {otherProducts.map((product) => (
                <ProductCard key={product.slug} product={product} headingLevel="h3" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
