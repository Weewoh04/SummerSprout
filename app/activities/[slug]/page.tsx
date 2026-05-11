import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ListChecks, Package, Users } from "lucide-react";
import { AdBlock } from "@/components/AdBlock";
import { ActivityCard } from "@/components/Cards";
import { EmailSignup } from "@/components/EmailSignup";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ShareButtons } from "@/components/ShareButtons";
import { activities } from "@/data/siteData";
import { pageMetadata } from "@/lib/site";

type ActivityPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return activities.map((activity) => ({ slug: activity.slug }));
}

export async function generateMetadata({ params }: ActivityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const activity = activities.find((item) => item.slug === slug);

  if (!activity) {
    return pageMetadata({
      title: "Activity Not Found",
      description: "This Summer Sprout activity could not be found."
    });
  }

  return pageMetadata({
    title: activity.title,
    path: `/activities/${activity.slug}`,
    description: `${activity.description} Includes age range, time needed, supplies, setup, steps, and simple variations.`,
    keywords: [activity.category, "summer activities for kids", "screen-free summer activities"]
  });
}

export default async function ActivityPage({ params }: ActivityPageProps) {
  const { slug } = await params;
  const activity = activities.find((item) => item.slug === slug);

  if (!activity) {
    notFound();
  }

  const related = activities
    .filter((item) => item.category === activity.category && item.slug !== activity.slug)
    .slice(0, 3);

  return (
    <>
      <section className="post-hero">
        <div className="section-inner">
          <Link className="text-link" href="/activities">
            <ArrowLeft size={16} aria-hidden="true" />
            All Activities
          </Link>
          <p className="eyebrow">{activity.category}</p>
          <h1>{activity.title}</h1>
          <p>{activity.description}</p>
          <ShareButtons title={activity.title} path={`/activities/${activity.slug}`} />
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner post-layout">
          <article className="post-content">
            <PlaceholderImage label={`${activity.title} featured image placeholder`} />
            <div className="activity-facts">
              <div className="stat-card">
                <Users size={20} aria-hidden="true" />
                <span>Age range</span>
                <strong>{activity.ageRange}</strong>
              </div>
              <div className="stat-card">
                <Clock size={20} aria-hidden="true" />
                <span>Time needed</span>
                <strong>{activity.timeNeeded}</strong>
              </div>
              <div className="stat-card">
                <Package size={20} aria-hidden="true" />
                <span>Supplies</span>
                <strong>{activity.supplies}</strong>
              </div>
            </div>
            <AdBlock />
            <section id="setup">
              <h2>Setup</h2>
              <p>{activity.setup}</p>
            </section>
            <section id="how-to-do-it">
              <h2>How to do it</h2>
              <ol className="pretty-list">
                {activity.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>
            <section id="parent-tips">
              <h2>Parent tips</h2>
              <ul className="pretty-list">
                {activity.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </section>
            <section id="easy-variations">
              <h2>Easy variations</h2>
              <ul className="pretty-list">
                {activity.variations.map((variation) => (
                  <li key={variation}>{variation}</li>
                ))}
              </ul>
            </section>
            <EmailSignup compact title="Get the free activity printable pack" />
          </article>

          <aside className="toc">
            <h2>Activity plan</h2>
            <ol>
              <li><Link href="#setup">Setup</Link></li>
              <li><Link href="#how-to-do-it">How to do it</Link></li>
              <li><Link href="#parent-tips">Parent tips</Link></li>
              <li><Link href="#easy-variations">Easy variations</Link></li>
            </ol>
            <AdBlock size="rectangle" />
          </aside>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">More {activity.category.toLowerCase()}</p>
            <h2>Try these next</h2>
          </div>
          <div className="content-grid">
            {related.map((item) => (
              <ActivityCard activity={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
