import Link from "next/link";
import type { Product } from "@/lib/content";
import { ProductPreview } from "@/components/product-preview";

type ProductDetailSectionsProps = {
  product: Product;
  pageStackClassName: string;
};

export function ProductDetailSections({ product, pageStackClassName }: ProductDetailSectionsProps) {
  return (
    <section className="page-content">
      <div className={`container page-stack ${pageStackClassName}`}>
        <div className="panel product-detail-top">
          <div className="product-detail-grid">
            <ProductPreview product={product} />
            <div className="product-detail-copy">
              <h2 className="section-heading">Overview</h2>
              <p>{product.overview}</p>
              <p>{product.direction}</p>
            </div>
          </div>
        </div>

        <div className="split-grid">
          <div className="panel">
            <h2 className="section-heading">Built for</h2>
            <p>{product.audience}</p>
            <p>{product.promise}</p>
          </div>

          <div className="panel">
            <h2 className="section-heading">What matters most</h2>
            <ul className="detail-list">
              {product.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="panel product-action-panel">
          <span className="status-pill">{product.status}</span>
          <div className="button-row">
            <a href={product.appUrl} className="button primary" target="_blank" rel="noreferrer">
              {product.betaCtaLabel}
            </a>
            <Link href="/contact" className="button">
              {product.contactCtaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
