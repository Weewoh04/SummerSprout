import type { Metadata } from "next";
import { AdBlock } from "@/components/AdBlock";
import { BlogCard } from "@/components/Cards";
import { blogPosts } from "@/data/siteData";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  path: "/blog",
  description:
    "Summer activities for kids, screen-free ideas, family routines, easy lunches, rainy day activities, and printable summer guides."
});

export default function BlogPage() {
  return (
    <>
      <section className="page-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Summer Sprout Blog</p>
            <h1>Helpful summer ideas for kids and families</h1>
            <p>
              Browse seasonal guides for screen-free summer activities, easy
              summer lunch ideas, routines, and simple family fun.
            </p>
          </div>
          <AdBlock size="leaderboard" />
        </div>
      </section>
      <section className="page-section">
        <div className="section-inner content-grid">
          {blogPosts.map((post) => (
            <BlogCard post={post} key={post.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
