import Link from "next/link";
import { products } from "@/lib/content";

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Product Portfolio</div>
          <h1>Products</h1>
          <p>
            Arbitrary Systems is currently developing two prototype products. Each reflects the company&apos;s broader interest in systems that are composed, reliable, and suited to domains where operational detail and user experience matter at once.
          </p>
        </div>
      </section>
      <section className="page-content">
        <div className="container page-stack">
          {[products.register, products.pranalogic].map((product) => (
            <article key={product.slug} className="panel">
              <h2 className="section-heading">{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.direction}</p>
              <div className="button-row">
                <Link href={`/products/${product.slug}`} className="button primary">
                  Learn More
                </Link>
              </div>
            </article>
          ))}
          <p className="section-intro">Both products are currently in development as part of the company&apos;s broader product portfolio.</p>
        </div>
      </section>
    </>
  );
}
