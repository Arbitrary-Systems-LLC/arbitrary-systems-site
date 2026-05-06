import Link from "next/link";
import type { Product } from "@/lib/content";
import { ProductLogo } from "@/components/product-logo";
import { ProductPreview } from "@/components/product-preview";

type ProductCardProps = {
  product: Product;
  headingLevel?: "h2" | "h3";
};

export function ProductCard({ product, headingLevel = "h3" }: ProductCardProps) {
  const TitleTag = headingLevel;

  return (
    <article className={`product-card product-card-${product.slug}`}>
      <ProductLogo product={product} />
      <div className="product-card-top">
        <span className="status-pill">{product.status}</span>
        <span className="product-eyebrow">{product.eyebrow}</span>
      </div>
      <TitleTag>{product.name}</TitleTag>
      <p>{product.description}</p>
      <ProductPreview product={product} />
      <p className="product-audience">{product.audience}</p>
      <div className="button-row">
        <a href={product.appUrl} className="button primary" target="_blank" rel="noreferrer">
          {product.betaCtaLabel}
        </a>
        <Link href={`/products/${product.slug}`} className="button">
          Learn More
        </Link>
      </div>
    </article>
  );
}
