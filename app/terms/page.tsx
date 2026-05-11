import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms",
  path: "/terms",
  description: "Terms of use for Summer Sprout."
});

export default function TermsPage() {
  return (
    <section className="page-section">
      <div className="section-inner legal-content">
        <p className="eyebrow">Legal</p>
        <h1>Terms of Use</h1>
        <p>
          These starter terms are placeholders and should be reviewed before
          publication.
        </p>
        <h2>Content use</h2>
        <p>
          Summer Sprout content is provided for personal family use and general
          inspiration.
        </p>
        <h2>Printables</h2>
        <p>
          Printable downloads are intended for personal, classroom, or household
          use unless otherwise stated.
        </p>
        <h2>Liability</h2>
        <p>
          Families should use their own judgment and supervise children during
          activities, recipes, and outdoor play.
        </p>
      </div>
    </section>
  );
}
