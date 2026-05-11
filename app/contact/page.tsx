import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  path: "/contact",
  description: "Contact Summer Sprout for family lifestyle content, printables, and partnership questions."
});

export default function ContactPage() {
  return (
    <section className="page-section">
      <div className="section-inner legal-content">
        <p className="eyebrow">Contact</p>
        <h1>Contact Summer Sprout</h1>
        <p>
          For reader questions, printable support, collaboration ideas, or
          partnership inquiries, use this placeholder contact page until a form
          provider is connected.
        </p>
        <div className="card">
          <h2>Contact form placeholder</h2>
          <p>
            Add Formspree, Tally, ConvertKit forms, Klaviyo forms, or a custom
            Next.js route handler here later.
          </p>
        </div>
      </div>
    </section>
  );
}
