import { featuredProducts } from "@/lib/content";
import { ProductCard } from "@/components/product-card";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Products",
  description:
    "See the current Arbitrary Systems beta product portfolio, including The Registry, PranaLogic, Group Pours, and I'm open 2.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Product portfolio</div>
          <h1>Four beta products, each built around a real pattern of use.</h1>
          <p>
            Arbitrary Systems currently has four products in beta. Each one starts from a different operating environment and a different kind of trust: private collections, live studio operations, collaborative tastings, and low-pressure plans between trusted people.
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
