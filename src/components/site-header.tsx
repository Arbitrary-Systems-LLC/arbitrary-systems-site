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
          <Image src="/branding/asio-128.png" alt="Arbitrary Systems" width={68} height={68} className="wordmark-logo" priority />
          <span>Arbitrary Systems</span>
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
