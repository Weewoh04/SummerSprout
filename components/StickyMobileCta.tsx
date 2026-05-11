import Link from "next/link";
import { Download } from "lucide-react";

export function StickyMobileCta() {
  return (
    <Link className="sticky-mobile-cta" href="/printables">
      <Download size={18} aria-hidden="true" />
      Get Free Printables
    </Link>
  );
}
