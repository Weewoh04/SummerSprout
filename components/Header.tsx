import Link from "next/link";
import { Download, Leaf } from "lucide-react";

const navItems = [
  ["Blog", "/blog"],
  ["Activities", "/activities"],
  ["Meal Ideas", "/meal-ideas"],
  ["Printables", "/printables"],
  ["Bucket List", "/summer-bucket-list"],
  ["About", "/about"]
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="logo" href="/">
        <Leaf size={24} aria-hidden="true" />
        <span>Summer Sprout</span>
      </Link>
      <nav aria-label="Main navigation">
        {navItems.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" href="/printables">
        <Download size={18} aria-hidden="true" />
        Free Printables
      </Link>
    </header>
  );
}
