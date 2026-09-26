import { featuredProducts, products } from "@/lib/content";
import { ProductCard } from "@/components/product-card";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Products",
  description:
    "See the current Arbitrary Systems product portfolio, including The Registry, PranaLogic, I'm open 2, Group Pours, Group Draws, and LW:S - Power Up.",
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
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} headingLevel="h2" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
