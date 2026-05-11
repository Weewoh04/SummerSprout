import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  path: "/privacy-policy",
  description: "Privacy policy for Summer Sprout."
});

export default function PrivacyPolicyPage() {
  return (
    <section className="page-section">
      <div className="section-inner legal-content">
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p>
          This starter privacy policy is a placeholder and should be reviewed by
          a qualified professional before launch.
        </p>
        <h2>Email collection</h2>
        <p>
          Summer Sprout may collect names and email addresses when visitors sign
          up for printable downloads or newsletters.
        </p>
        <h2>Advertising and analytics</h2>
        <p>
          Future integrations may include analytics, Google AdSense, Mediavine
          Journey, Raptive, Ezoic, affiliate links, and social sharing tools.
        </p>
        <h2>Contact</h2>
        <p>Questions can be sent through the contact page.</p>
      </div>
    </section>
  );
}
