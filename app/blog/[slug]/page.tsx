import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdBlock } from "@/components/AdBlock";
import { BlogCard } from "@/components/Cards";
import { EmailSignup } from "@/components/EmailSignup";
import { PinButton } from "@/components/PinButton";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ShareButtons } from "@/components/ShareButtons";
import { blogPosts } from "@/data/siteData";
import { pageMetadata } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return pageMetadata({
      title: "Post Not Found",
      description: "This Summer Sprout post could not be found."
    });
  }

  return pageMetadata({
    title: post.title,
    path: `/blog/${post.slug}`,
    description: post.excerpt,
    keywords: [post.category, post.pinterestTitle, post.pinterestDescription]
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.related
    .map((relatedSlug) => blogPosts.find((item) => item.slug === relatedSlug))
    .filter((item) => Boolean(item));

  return (
    <>
      <section className="post-hero">
        <div className="section-inner">
          <p className="eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <p className="meta">{post.date}</p>
          <ShareButtons title={post.title} path={`/blog/${post.slug}`} />
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner post-layout">
          <div className="post-content">
            <PlaceholderImage label="Featured image placeholder" />
            <AdBlock />
            <article>
              <p>
                This guide is designed for parents and caregivers who want
                useful, realistic summer fun for families without making every
                day feel overplanned.
              </p>
              {post.sections.map((section) => (
                <section id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")} key={section.heading}>
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                </section>
              ))}
              <section>
                <h2>Pinterest-friendly image</h2>
                <div className="two-column">
                  <PlaceholderImage label="Vertical Pinterest image placeholder" variant="vertical" />
                  <div className="card">
                    <h3>Pinterest fields</h3>
                    <p><strong>Title:</strong> {post.pinterestTitle}</p>
                    <p><strong>Description:</strong> {post.pinterestDescription}</p>
                    <PinButton title={post.pinterestTitle} description={post.pinterestDescription} />
                  </div>
                </div>
              </section>
              <EmailSignup compact />
              <AdBlock />
            </article>
          </div>
          <aside className="toc">
            <h2>Table of contents</h2>
            <ol>
              {post.sections.map((section) => (
                <li key={section.heading}>
                  <Link href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                    {section.heading}
                  </Link>
                </li>
              ))}
              <li><Link href="#related-posts">Related posts</Link></li>
            </ol>
            <AdBlock size="rectangle" />
          </aside>
        </div>
      </section>

      <section className="page-section" id="related-posts">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Keep exploring</p>
            <h2>Related posts</h2>
          </div>
          <div className="content-grid">
            {relatedPosts.map((related) => related && <BlogCard post={related} key={related.slug} />)}
          </div>
        </div>
      </section>
    </>
  );
}
