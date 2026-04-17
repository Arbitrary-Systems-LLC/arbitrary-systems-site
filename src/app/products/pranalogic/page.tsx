import Link from "next/link";
import { products } from "@/lib/content";

const product = products.pranalogic;

export default function PranaLogicPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Product</div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      </section>
      <section className="page-content">
        <div className="container page-stack">
          <div className="panel">
            <h2 className="section-heading">Overview</h2>
            <p>{product.overview}</p>
            <p>{product.direction}</p>
          </div>
          <div className="panel">
            <h2 className="section-heading">Product direction</h2>
            <ul className="detail-list">
              {product.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <span className="status-pill">Currently in prototype</span>
            <div className="button-row">
              <Link href="/contact" className="button primary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
