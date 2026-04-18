import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">
            <Image src="/branding/asio-128.png" alt="Arbitrary Systems" width={40} height={40} className="wordmark-logo" />
            <div>
              <div className="footer-wordmark">Arbitrary Systems</div>
              <p className="footer-copy">Refined systems, thoughtfully built.</p>
            </div>
          </div>
        </div>
        <div className="footer-links">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
