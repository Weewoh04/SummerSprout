import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { AdBlock } from "@/components/AdBlock";
import { BlogCard } from "@/components/Cards";
import { EmailSignup } from "@/components/EmailSignup";
import { blogPosts, featuredCards, startHereLinks } from "@/data/siteData";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Sunny ideas for real family days</p>
            <h1>Simple Summer Fun for Kids & Families</h1>
            <p>
              Activities, meal ideas, printables, and easy summer routines to
              help your family make the most of sunny days.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/activities">
                <Sparkles size={18} aria-hidden="true" />
                Browse Activities
              </Link>
              <Link className="button button--secondary" href="/printables">
                <Download size={18} aria-hidden="true" />
                Get Free Printables
              </Link>
            </div>
          </div>
          <div className="hero-visual" aria-label="Illustrated sunny backyard summer scene" />
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner">
          <div className="card-grid">
            {featuredCards.map((card) => (
              <Link className="card feature-card" data-tone={card.tone} href={card.href} key={card.title}>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <span className="text-link">
                  Explore <ArrowRight size={16} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AdBlock size="leaderboard" />

      <section className="page-section">
        <div className="section-inner two-column">
          <div className="section-heading">
            <p className="eyebrow">Start here</p>
            <h2>Easy paths into summer fun</h2>
            <p>
              Jump into the most helpful seasonal guides for summer activities
              for kids, routines, lunches, and kids summer printables.
            </p>
          </div>
          <div className="start-list">
            {startHereLinks.map((link) => (
              <Link href={link.href} key={link.title}>
                {link.title}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Latest guides</p>
            <h2>Fresh summer ideas for families</h2>
          </div>
          <div className="content-grid">
            {blogPosts.slice(0, 6).map((post) => (
              <BlogCard post={post} key={post.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner">
          <EmailSignup />
        </div>
      </section>
    </>
  );
}
