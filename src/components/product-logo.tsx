import Image from "next/image";
import type { Product } from "@/lib/content";

type ProductLogoProps = {
  product: Product;
  priority?: boolean;
};

export function ProductLogo({ product, priority = false }: ProductLogoProps) {
  const className =
    product.logoStyle === "wordmark" ? "product-logo product-logo-wordmark" : "product-logo product-logo-mark";

  if (
    product.logoStyle === "wordmark" &&
    typeof product.logoIconSrc === "string" &&
    typeof product.logoIconWidth === "number" &&
    typeof product.logoIconHeight === "number"
  ) {
    return (
      <div className="product-logo-wrap">
        <div className="product-logo-lockup">
          <Image
            src={product.logoIconSrc}
            alt=""
            aria-hidden="true"
            width={product.logoIconWidth}
            height={product.logoIconHeight}
            className="product-logo-icon"
            priority={priority}
          />
          <Image
            src={product.logoSrc}
            alt={product.logoAlt}
            width={product.logoWidth}
            height={product.logoHeight}
            className={className}
            priority={priority}
          />
        </div>
      </div>
    );
  }

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
