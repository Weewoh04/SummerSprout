import Link from "next/link";
import { ArrowRight, Clock, ListChecks, Utensils } from "lucide-react";
import type { Activity, BlogPost, Meal, Printable } from "@/data/siteData";
import { ShareButtons } from "@/components/ShareButtons";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card blog-card">
      <div className="card-art" aria-hidden="true" />
      <p className="meta">{post.category} · {post.date}</p>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <Link className="text-link" href={`/blog/${post.slug}`}>
        Read Post <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <article className="card resource-card" id={activity.slug}>
      <p className="pill">{activity.category}</p>
      <h3>{activity.title}</h3>
      <p>{activity.description}</p>
      <dl className="details-list">
        <div><dt>Age</dt><dd>{activity.ageRange}</dd></div>
        <div><dt>Time</dt><dd>{activity.timeNeeded}</dd></div>
        <div><dt>Supplies</dt><dd>{activity.supplies}</dd></div>
      </dl>
      <ShareButtons title={activity.title} path={`/activities#${activity.slug}`} />
      <Link className="button button--small" href={`/activities#${activity.slug}`}>
        <ListChecks size={16} aria-hidden="true" />
        View Activity
      </Link>
    </article>
  );
}

export function MealCard({ meal }: { meal: Meal }) {
  return (
    <article className="card resource-card" id={meal.slug}>
      <p className="pill pill--coral">{meal.category}</p>
      <h3>{meal.title}</h3>
      <p>{meal.description}</p>
      <dl className="details-list">
        <div><dt>Prep</dt><dd>{meal.prepTime}</dd></div>
        <div><dt>Kid note</dt><dd>{meal.notes}</dd></div>
        <div><dt>Ingredients</dt><dd>{meal.ingredients}</dd></div>
      </dl>
      <ShareButtons title={meal.title} path={`/meal-ideas#${meal.slug}`} />
      <Link className="button button--small button--coral" href={`/meal-ideas#${meal.slug}`}>
        <Utensils size={16} aria-hidden="true" />
        View Meal Idea
      </Link>
    </article>
  );
}

export function PrintableCard({ printable }: { printable: Printable }) {
  return (
    <article className="card resource-card" id={printable.slug}>
      <p className="pill pill--blue">Printable</p>
      <h3>{printable.title}</h3>
      <p>{printable.description}</p>
      <p className="meta">Recommended age: {printable.age}</p>
      <div className="download-gate">
        <p>Enter your email above to unlock this download.</p>
        {/* Replace this placeholder with gated file delivery after connecting your email provider. */}
        <button type="button">Download Placeholder</button>
      </div>
      <ShareButtons title={printable.title} path={`/printables#${printable.slug}`} />
    </article>
  );
}

export function StatCard({ label, value, icon }: { label: string; value: string; icon: "clock" | "list" }) {
  const Icon = icon === "clock" ? Clock : ListChecks;
  return (
    <div className="stat-card">
      <Icon size={20} aria-hidden="true" />
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
