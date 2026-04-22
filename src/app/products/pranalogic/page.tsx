import Link from "next/link";
import { products } from "@/lib/content";
import { ProductLogo } from "@/components/product-logo";
import { createMetadata } from "@/lib/metadata";

const product = products.pranalogic;

export const metadata = createMetadata({
  title: product.name,
  description: product.description,
  path: `/products/${product.slug}`,
});

export default function PranaLogicPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <ProductLogo product={product} priority />
          <div className="eyebrow">{product.eyebrow}</div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      </section>
      <section className="page-content">
        <div className="container page-stack">
          <div className="split-grid">
            <div className="panel">
              <h2 className="section-heading">Overview</h2>
              <p>{product.overview}</p>
              <p>{product.direction}</p>
            </div>
            <div className="panel">
              <h2 className="section-heading">Built for</h2>
              <p>{product.audience}</p>
              <p>{product.promise}</p>
            </div>
          </div>
          <div className="panel">
            <h2 className="section-heading">What matters most</h2>
            <ul className="detail-list">
              {product.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <span className="status-pill">{product.status}</span>
            <div className="button-row">
              <Link href="/contact" className="button primary">
                Ask About PranaLogic
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
