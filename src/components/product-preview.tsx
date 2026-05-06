import type { Product } from "@/lib/content";

type ProductPreviewProps = {
  product: Product;
  flat?: boolean;
};

export function ProductPreview({ product, flat = false }: ProductPreviewProps) {
  return (
    <div className={`product-preview product-preview-${product.slug}${flat ? " product-preview-flat" : ""}`}>
      <div className="product-preview-head">
        <span className="product-preview-eyebrow">{product.preview.eyebrow}</span>
        <strong>{product.preview.title}</strong>
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
