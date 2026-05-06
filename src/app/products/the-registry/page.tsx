import { products } from "@/lib/content";
import { ProductLogo } from "@/components/product-logo";
import { ProductDetailSections } from "@/components/product-detail-sections";
import { createMetadata } from "@/lib/metadata";

const product = products.register;

export const metadata = createMetadata({
  title: product.name,
  description: product.description,
  path: `/products/${product.slug}`,
});

export default function RegistryPage() {
  return (
    <>
      <section className="page-hero page-hero-register">
        <div className="container">
          <ProductLogo product={product} priority />
          <div className="eyebrow">{product.eyebrow}</div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      </section>
      <ProductDetailSections product={product} pageStackClassName="page-stack-register" />
    </>
  );
}
