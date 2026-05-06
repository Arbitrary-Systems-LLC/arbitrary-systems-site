import type { Product } from "@/lib/content";

type ProductPreviewProps = {
  product: Product;
};

export function ProductPreview({ product }: ProductPreviewProps) {
  return (
    <div className={`product-preview product-preview-${product.slug}`}>
      <div className="product-preview-head">
        <span className="product-preview-eyebrow">{product.preview.eyebrow}</span>
        <strong>{product.preview.title}</strong>
      </div>
      <div className="product-preview-stats">
        {product.preview.stats.map((stat) => (
          <div key={stat.label} className="product-preview-stat">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </div>
      <ul className="product-preview-list">
        {product.preview.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <div className="product-preview-footer">{product.preview.footer}</div>
    </div>
  );
}
