import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/content";

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
        <div className="footer-brand">
          <Image src="/branding/logo-mark.png" alt="Arbitrary Systems logo" width={54} height={54} className="footer-logo" />
          <div>
            <div className="footer-wordmark">{company.name}</div>
            <p className="footer-copy">{company.tagline}</p>
            <a href={`mailto:${company.email}`} className="inline-link footer-email">
              {company.email}
            </a>
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
