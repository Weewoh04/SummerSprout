import type { Metadata } from "next";
import { AdBlock } from "@/components/AdBlock";
import { ActivityCard } from "@/components/Cards";
import { activities, activityCategories } from "@/data/siteData";
import { pageMetadata, slugify } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Activities",
  path: "/activities",
  description:
    "Browse 48 kid-friendly summer activities including outdoor play, indoor activities, rainy day ideas, water play, crafts, learning activities, road trip activities, and backyard fun."
});

export default function ActivitiesPage() {
  return (
    <>
      <section className="page-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Activities</p>
            <h1>Summer activities for kids</h1>
            <p>
              Browse 48 low-prep ideas for sunny days, rainy afternoons,
              backyard play, road trips, crafts, learning, and screen-free
              summer activities.
            </p>
          </div>
          <div className="card-grid">
            {activityCategories.map((category) => (
              <a className="card" href={`#${slugify(category)}`} key={category}>
                <h2>{category}</h2>
                <p>
                  {activities.filter((activity) => activity.category === category).length} simple family ideas for{" "}
                  {category.toLowerCase()}.
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <AdBlock size="leaderboard" />
      <section className="page-section">
        <div className="section-inner resource-sections">
          {activityCategories.map((category) => (
            <section className="category-section" id={slugify(category)} key={category}>
              <div className="section-heading">
                <h2>{category}</h2>
                <p>Easy, parent-friendly ideas for {category.toLowerCase()}.</p>
              </div>
              <div className="content-grid">
                {activities
                  .filter((activity) => activity.category === category)
                  .map((activity) => (
                    <ActivityCard activity={activity} key={activity.slug} />
                  ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
