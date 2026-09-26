import Link from "next/link";
import type { ReactNode } from "react";
import type { Product } from "@/lib/content";
import { ProductPreview } from "@/components/product-preview";

type ProductDetailSectionsProps = {
  product: Product;
  pageStackClassName: string;
  children?: ReactNode;
};

export function ProductDetailSections({ product, pageStackClassName, children }: ProductDetailSectionsProps) {
  return (
    <section className="page-content">
      <div className={`container page-stack ${pageStackClassName}`}>
        <div className="split-grid">
          <div className="panel product-detail-copy">
            <h2 className="section-heading">Overview</h2>
            <p>{product.overview}</p>
            <p>{product.direction}</p>
          </div>

          <div className="panel product-preview-panel">
            <ProductPreview product={product} flat />
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

        {children}

        <div className="panel product-action-panel">
          {product.releaseNote && <p>{product.releaseNote}</p>}
          <div className="button-row">
            <a href={product.appUrl} className="button primary" target="_blank" rel="noreferrer">
              {product.appCtaLabel}
            </a>
            {product.appStoreUrl && (
              <a href={product.appStoreUrl} className="button" target="_blank" rel="noreferrer">
                View on the App Store
              </a>
            )}
            <Link href="/contact" className="button">
              {product.contactCtaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
