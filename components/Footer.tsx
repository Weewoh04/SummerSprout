import Link from "next/link";
import { EmailSignup } from "@/components/EmailSignup";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-signup">
        <EmailSignup compact title="Get cheerful summer ideas in your inbox" />
      </div>
      <div className="footer-grid">
        <div>
          <h2>Summer Sprout</h2>
          <p>
            Warm, helpful summer ideas for kids, caregivers, slow mornings, and
            sunny afternoons.
          </p>
        </div>
        <div>
          <h3>Categories</h3>
          <Link href="/activities">Activities</Link>
          <Link href="/meal-ideas">Meal Ideas</Link>
          <Link href="/printables">Printables</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div>
          <h3>Start Here</h3>
          <Link href="/summer-bucket-list">Summer Bucket List</Link>
          <Link href="/blog/best-screen-free-activities-for-kids">Screen-Free Activities</Link>
          <Link href="/blog/easy-summer-lunch-ideas-for-kids">Easy Lunch Ideas</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h3>Legal</h3>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
      <p className="copyright">Copyright 2026 Summer Sprout. All rights reserved.</p>
    </footer>
  );
}
