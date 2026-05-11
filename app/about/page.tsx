import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About",
  path: "/about",
  description:
    "Learn about Summer Sprout, a family lifestyle site for simple summer activities, meal ideas, routines, and printable downloads."
});

export default function AboutPage() {
  return (
    <section className="page-section">
      <div className="section-inner legal-content">
        <p className="eyebrow">About</p>
        <h1>Summer Sprout helps families make sunny days simpler.</h1>
        <p>
          Summer Sprout is a seasonal family lifestyle site for parents and
          caregivers who want useful ideas without pressure. Here you will find
          kid-friendly activities, easy summer meal ideas, routines, printables,
          and quiet little ways to make the season feel special.
        </p>
        <p>
          The site is built to grow into a deep resource library for Google,
          Pinterest, Facebook, email subscribers, and future ad monetization.
        </p>
      </div>
    </section>
  );
}
