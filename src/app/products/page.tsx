import Link from "next/link";
import { featuredProducts } from "@/lib/content";
import { ProductLogo } from "@/components/product-logo";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Products",
  description:
    "See the current Arbitrary Systems product portfolio, including The Arbitrary Register, PranaLogic, and I'm open 2.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Product portfolio</div>
          <h1>Three focused products, each built around a real pattern of use.</h1>
          <p>
            Arbitrary Systems is currently developing three products. One is for serious collectors managing private inventories. One is for studios managing schedules, people, bookings, and service operations. One is for private, low-pressure coordination between trusted people.
          </p>
        </div>
      </section>
      <section className="page-content">
        <div className="container page-stack">
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <article key={product.slug} className={`product-card product-card-${product.slug}`}>
                <ProductLogo product={product} />
                <div className="product-card-top">
                  <span className="status-pill">{product.status}</span>
                  <span className="product-eyebrow">{product.eyebrow}</span>
                </div>
                <h2 className="section-heading">{product.name}</h2>
                <p>{product.description}</p>
                <p className="product-audience">{product.audience}</p>
                <p>{product.promise}</p>
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
    </>
  );
}
