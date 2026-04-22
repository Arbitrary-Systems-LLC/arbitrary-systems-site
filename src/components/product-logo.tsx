import Image from "next/image";
import type { Product } from "@/lib/content";

type ProductLogoProps = {
  product: Product;
  priority?: boolean;
};

export function ProductLogo({ product, priority = false }: ProductLogoProps) {
  const className =
    product.logoStyle === "wordmark" ? "product-logo product-logo-wordmark" : "product-logo product-logo-mark";

  return (
    <div className="product-logo-wrap">
      <Image
        src={product.logoSrc}
        alt={product.logoAlt}
        width={product.logoWidth}
        height={product.logoHeight}
        className={className}
        priority={priority}
      />
    </div>
  );
}
