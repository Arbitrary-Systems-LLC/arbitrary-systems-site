import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="wordmark wordmark-group" aria-label="Arbitrary Systems home">
          <Image
            src="/branding/logo-mark.png"
            alt="Arbitrary Systems logo"
            width={60}
            height={60}
            className="wordmark-logo"
            priority
          />
          <span className="wordmark-copy">
            <strong>Arbitrary Systems</strong>
            <small>Quiet software for exacting work.</small>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
