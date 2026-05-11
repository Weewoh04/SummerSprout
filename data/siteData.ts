import { slugify } from "@/lib/site";

export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  pinterestTitle: string;
  pinterestDescription: string;
  sections: { heading: string; body: string }[];
  related: string[];
};

export type Activity = {
  title: string;
  slug: string;
  category: string;
  ageRange: string;
  timeNeeded: string;
  supplies: string;
  description: string;
};

export type Meal = {
  title: string;
  slug: string;
  category: string;
  prepTime: string;
  notes: string;
  ingredients: string;
  description: string;
};

export type Printable = {
  title: string;
  slug: string;
  description: string;
  age: string;
};

export const featuredCards = [
  {
    title: "Summer Activities",
    description: "Screen-free ideas for backyard mornings, park afternoons, and slow sunny days.",
    href: "/activities",
    tone: "green"
  },
  {
    title: "Easy Kid Meals",
    description: "Low-fuss lunches, picnic ideas, frozen treats, and no-cook favorites.",
    href: "/meal-ideas",
    tone: "coral"
  },
  {
    title: "Free Printables",
    description: "Bucket lists, routine charts, scavenger hunts, trackers, and more.",
    href: "/printables",
    tone: "blue"
  },
  {
    title: "Rainy Day Ideas",
    description: "Calm indoor activities for stormy afternoons and cabin-fever days.",
    href: "/activities#rainy-day-ideas",
    tone: "yellow"
  }
];

export const startHereLinks = [
  { title: "Summer Bucket List", href: "/summer-bucket-list" },
  { title: "Screen-Free Activities", href: "/blog/best-screen-free-activities-for-kids" },
  { title: "Easy Lunch Ideas", href: "/blog/easy-summer-lunch-ideas-for-kids" },
  { title: "Printable Summer Routine Chart", href: "/printables#daily-summer-routine-chart" }
];

const blogTitles = [
  ["50 Easy Summer Activities for Kids at Home", "Activities"],
  ["Cheap Summer Fun Ideas for Families", "Family Fun"],
  ["Easy Summer Lunch Ideas for Kids", "Meal Ideas"],
  ["How to Create a Simple Summer Routine", "Routines"],
  ["Best Screen-Free Activities for Kids", "Activities"],
  ["Rainy Day Summer Activities", "Indoor Play"],
  ["Backyard Water Play Ideas", "Outdoor Play"],
  ["Road Trip Activities for Kids", "Travel"],
  ["Summer Chore Chart Ideas", "Routines"],
  ["Printable Summer Bucket List for Kids", "Printables"]
] as const;

export const blogPosts: BlogPost[] = blogTitles.map(([title, category], index) => {
  const slug = slugify(title);
  return {
    title,
    slug,
    date: `2026-05-${String(index + 1).padStart(2, "0")}`,
    category,
    excerpt:
      "A practical, parent-tested guide with cheerful ideas for simple summer fun for families.",
    pinterestTitle: `${title} - Summer Sprout`,
    pinterestDescription:
      "Save this easy summer idea for kids, family routines, printables, and screen-free fun.",
    related: blogTitles
      .filter(([relatedTitle]) => relatedTitle !== title)
      .slice(0, 3)
      .map(([relatedTitle]) => slugify(relatedTitle)),
    sections: [
      {
        heading: "Start with what feels easy",
        body:
          "Summer activities for kids do not need to be elaborate to feel memorable. Pick one simple idea, set out the supplies, and let the day breathe."
      },
      {
        heading: "Make it work for your rhythm",
        body:
          "Choose a morning activity for high-energy kids, a quiet afternoon option, and a backup rainy day activity for kids when plans change."
      },
      {
        heading: "Keep a few favorites on repeat",
        body:
          "The best summer fun for families often comes from reliable rituals: a weekly picnic, backyard water play, easy summer lunch ideas, or a printable checklist kids can help manage."
      }
    ]
  };
});

export const activityCategories = [
  "Outdoor Play",
  "Indoor Activities",
  "Rainy Day Ideas",
  "Water Play",
  "Crafts",
  "Learning Activities",
  "Road Trip Activities",
  "Backyard Fun"
];

export const activities: Activity[] = activityCategories.map((category, index) => ({
  title:
    [
      "Sidewalk Chalk Obstacle Course",
      "Living Room Camp-In",
      "Rainy Day Treasure Hunt",
      "Sponge Toss Water Games",
      "Pressed Flower Bookmarks",
      "Backyard Nature Journal",
      "License Plate Bingo",
      "Sunset Bubble Party"
    ][index],
  slug: slugify(
    [
      "Sidewalk Chalk Obstacle Course",
      "Living Room Camp-In",
      "Rainy Day Treasure Hunt",
      "Sponge Toss Water Games",
      "Pressed Flower Bookmarks",
      "Backyard Nature Journal",
      "License Plate Bingo",
      "Sunset Bubble Party"
    ][index]
  ),
  category,
  ageRange: ["3-8", "4-10", "3-9", "4-12", "5-12", "6-12", "5-12", "2-8"][index],
  timeNeeded: ["25 min", "45 min", "30 min", "35 min", "40 min", "20 min", "Car ride", "20 min"][index],
  supplies:
    [
      "Chalk, driveway or sidewalk",
      "Blankets, pillows, flashlight",
      "Paper clues, small prize",
      "Sponges, buckets, water",
      "Flowers, paper, glue",
      "Notebook, crayons, pencil",
      "Printable bingo sheet, pencil",
      "Bubbles, music, picnic blanket"
    ][index],
  description:
    "A low-prep activity with flexible rules, easy setup, and plenty of room for siblings to play together."
}));

export const mealCategories = [
  "Easy Summer Lunches",
  "Kid-Friendly Dinners",
  "Picnic Ideas",
  "Snack Boards",
  "Frozen Treats",
  "Budget Meals",
  "No-Cook Meals"
];

export const meals: Meal[] = mealCategories.map((category, index) => ({
  title:
    [
      "Rainbow Pinwheel Lunches",
      "Sheet Pan Taco Nachos",
      "Park Day Pasta Cups",
      "Build-Your-Own Snack Board",
      "Yogurt Berry Pops",
      "Bean and Cheese Quesadillas",
      "Turkey Cucumber Roll-Ups"
    ][index],
  slug: slugify(
    [
      "Rainbow Pinwheel Lunches",
      "Sheet Pan Taco Nachos",
      "Park Day Pasta Cups",
      "Build-Your-Own Snack Board",
      "Yogurt Berry Pops",
      "Bean and Cheese Quesadillas",
      "Turkey Cucumber Roll-Ups"
    ][index]
  ),
  category,
  prepTime: ["15 min", "20 min", "18 min", "10 min", "10 min + freeze", "12 min", "10 min"][index],
  notes:
    [
      "Colorful, customizable, and lunchbox friendly.",
      "Let kids add toppings after baking.",
      "Easy to pack for pool days or parks.",
      "Great for picky eaters who like choices.",
      "A cool treat with simple ingredients.",
      "Budget-friendly and freezer-friendly.",
      "No stove needed on hot afternoons."
    ][index],
  ingredients:
    [
      "Tortillas, cream cheese, turkey, peppers",
      "Tortilla chips, beans, cheese, salsa",
      "Pasta, veggies, mozzarella, dressing",
      "Fruit, crackers, cheese, veggies, dip",
      "Greek yogurt, berries, honey",
      "Tortillas, beans, cheese, mild salsa",
      "Turkey, cucumber, cheese, hummus"
    ][index],
  description:
    "A simple summer meal idea for kids that keeps prep light and makes warm-weather days easier."
}));

export const printables: Printable[] = [
  "Summer Bucket List",
  "Daily Summer Routine Chart",
  "Boredom Buster Jar",
  "Screen-Free Activity List",
  "Road Trip Bingo",
  "Nature Scavenger Hunt",
  "Summer Reading Tracker",
  "Chore Chart",
  "Meal Planner",
  "Backyard Campout Checklist"
].map((title, index) => ({
  title,
  slug: slugify(title),
  description:
    "A family-friendly printable download placeholder designed to capture emails before delivery.",
  age: ["All ages", "3-10", "4-12", "4-12", "5-12", "3-10", "5-12", "4-12", "Grownups", "4-12"][index]
}));

export const bucketListGroups = [
  {
    title: "Free Ideas",
    ideas: [
      "Visit a new playground",
      "Have a library morning",
      "Run through sprinklers",
      "Watch clouds and name shapes",
      "Make a sidewalk chalk mural",
      "Host a toy swap",
      "Take a sunset walk",
      "Build a blanket fort",
      "Have a backyard picnic",
      "Create a nature bracelet",
      "Read under a tree",
      "Make a family playlist",
      "Try a new park trail"
    ]
  },
  {
    title: "Backyard Ideas",
    ideas: [
      "Set up a water balloon toss",
      "Make a mud kitchen",
      "Camp in the backyard",
      "Have a bubble dance party",
      "Build a fairy garden",
      "Create an obstacle course",
      "Do a flashlight scavenger hunt",
      "Paint rocks",
      "Make a bird feeder",
      "Have a backyard car wash",
      "Try shadow tracing",
      "Plant herbs in a pot"
    ]
  },
  {
    title: "Food Ideas",
    ideas: [
      "Make homemade popsicles",
      "Pack a breakfast picnic",
      "Try fruit kabobs",
      "Create a lemonade stand",
      "Make ice cream sundaes",
      "Build mini snack boards",
      "Bake berry muffins",
      "Try a new smoothie",
      "Have taco night outside",
      "Make freezer sandwiches",
      "Eat watermelon on the porch",
      "Make campfire cones"
    ]
  },
  {
    title: "Creative Ideas",
    ideas: [
      "Write postcards to family",
      "Make sun prints",
      "Create a summer scrapbook",
      "Paint with ice cubes",
      "Put on a puppet show",
      "Make friendship bracelets",
      "Draw a family comic",
      "Decorate a reading bookmark",
      "Create a cardboard town",
      "Record a pretend cooking show",
      "Make a paper fan",
      "Design a family flag"
    ]
  },
  {
    title: "Outdoor Adventure Ideas",
    ideas: [
      "Go on a creek walk",
      "Visit a farmers market",
      "Try geocaching",
      "Take a bug safari",
      "Fly a kite",
      "Have a scooter parade",
      "Explore a splash pad",
      "Go stargazing",
      "Take a bike ride",
      "Collect leaves for rubbings",
      "Try a family photo walk",
      "Visit a community garden",
      "Watch an outdoor movie"
    ]
  },
  {
    title: "Rainy Day Ideas",
    ideas: [
      "Make a pillow reading nest",
      "Create a puzzle station",
      "Bake cookies together",
      "Host an indoor picnic",
      "Make a boredom buster jar",
      "Build with recycled boxes",
      "Try a simple science experiment",
      "Have a board game afternoon",
      "Make paper boats",
      "Do indoor bowling",
      "Set up a pretend store",
      "Make a rainy day playlist",
      "Write a summer story"
    ]
  }
];
