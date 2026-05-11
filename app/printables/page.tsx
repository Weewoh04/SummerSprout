import type { Metadata } from "next";
import { AdBlock } from "@/components/AdBlock";
import { PrintableCard } from "@/components/Cards";
import { EmailSignup } from "@/components/EmailSignup";
import { printables } from "@/data/siteData";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Printables",
  path: "/printables",
  description:
    "Kids summer printables including a summer bucket list, daily routine chart, boredom buster jar, road trip bingo, nature scavenger hunt, reading tracker, and meal planner."
});

export default function PrintablesPage() {
  return (
    <>
      <section className="page-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Free downloads</p>
            <h1>Kids summer printables</h1>
            <p>
              Printable summer routines, activity lists, trackers, charts, and
              boredom busters designed for families and caregivers.
            </p>
          </div>
          <EmailSignup />
        </div>
      </section>
      <AdBlock size="leaderboard" />
      <section className="page-section">
        <div className="section-inner content-grid">
          {printables.map((printable) => (
            <PrintableCard printable={printable} key={printable.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
