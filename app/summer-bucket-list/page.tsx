import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { AdBlock } from "@/components/AdBlock";
import { EmailSignup } from "@/components/EmailSignup";
import { bucketListGroups } from "@/data/siteData";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Summer Bucket List",
  path: "/summer-bucket-list",
  description:
    "A 75-idea summer bucket list for kids with free ideas, backyard ideas, food ideas, creative ideas, outdoor adventures, and rainy day ideas."
});

export default function SummerBucketListPage() {
  return (
    <>
      <section className="page-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">75 ideas</p>
            <h1>Summer bucket list for kids</h1>
            <p>
              A cheerful mix of free ideas, backyard fun, food projects,
              creative activities, outdoor adventures, and rainy day activities
              for kids.
            </p>
          </div>
          <EmailSignup compact title="Grab the printable summer bucket list" />
        </div>
      </section>
      <AdBlock size="leaderboard" />
      <section className="page-section">
        <div className="section-inner bucket-grid">
          {bucketListGroups.map((group) => (
            <article className="card bucket-group" key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.ideas.map((idea) => (
                  <li key={idea}>
                    <CheckCircle2 size={16} aria-hidden="true" /> {idea}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
