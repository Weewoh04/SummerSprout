import type { Metadata } from "next";
import { AdBlock } from "@/components/AdBlock";
import { MealCard } from "@/components/Cards";
import { mealCategories, meals } from "@/data/siteData";
import { pageMetadata, slugify } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Meal Ideas",
  path: "/meal-ideas",
  description:
    "Summer meal ideas for kids, including easy summer lunches, kid-friendly dinners, picnic ideas, snack boards, frozen treats, budget meals, and no-cook meals."
});

export default function MealIdeasPage() {
  return (
    <>
      <section className="page-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Meal ideas</p>
            <h1>Easy summer meal ideas for kids</h1>
            <p>
              Simple lunches, dinners, picnic food, snack boards, frozen treats,
              budget meals, and no-cook options for hot days.
            </p>
          </div>
          <div className="card-grid">
            {mealCategories.map((category) => (
              <a className="card" href={`#${slugify(category)}`} key={category}>
                <h2>{category}</h2>
                <p>Quick inspiration for {category.toLowerCase()}.</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <AdBlock size="leaderboard" />
      <section className="page-section">
        <div className="section-inner resource-sections">
          {mealCategories.map((category) => (
            <section className="category-section" id={slugify(category)} key={category}>
              <div className="section-heading">
                <h2>{category}</h2>
                <p>Starter meal ideas for {category.toLowerCase()}.</p>
              </div>
              <div className="content-grid">
                {meals
                  .filter((meal) => meal.category === category)
                  .map((meal) => (
                    <MealCard meal={meal} key={meal.slug} />
                  ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
