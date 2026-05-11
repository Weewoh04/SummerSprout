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

const activity = (
  title: string,
  category: string,
  ageRange: string,
  timeNeeded: string,
  supplies: string,
  description: string
): Activity => ({
  title,
  slug: slugify(title),
  category,
  ageRange,
  timeNeeded,
  supplies,
  description
});

export const activities: Activity[] = [
  activity(
    "Sidewalk Chalk Obstacle Course",
    "Outdoor Play",
    "3-8",
    "25 min",
    "Chalk, driveway or sidewalk",
    "Draw arrows, balance lines, jump circles, silly walks, and finish-line stars for a quick movement course."
  ),
  activity(
    "Park Explorer Challenge",
    "Outdoor Play",
    "4-10",
    "45 min",
    "Water bottle, simple checklist",
    "Visit a familiar park with a short challenge list: climb, swing, spot a bird, find shade, and choose a quiet bench."
  ),
  activity(
    "Nature Color Hunt",
    "Outdoor Play",
    "3-9",
    "20 min",
    "Color card or crayons, small bag",
    "Kids search for leaves, flowers, rocks, and outdoor objects that match each color on their card."
  ),
  activity(
    "Scooter Parade",
    "Outdoor Play",
    "4-10",
    "30 min",
    "Scooters, bikes, helmets, streamers",
    "Decorate wheels with streamers, then make a mini parade route around the driveway or sidewalk."
  ),
  activity(
    "Sun Shadow Tracing",
    "Outdoor Play",
    "5-12",
    "30 min",
    "Chalk, toys, sunny pavement",
    "Trace shadows from toys or family members, then return later to see how the shapes moved."
  ),
  activity(
    "Outdoor Story Walk",
    "Outdoor Play",
    "4-9",
    "25 min",
    "Picture book, tape, paper",
    "Tape pages or scene prompts along a porch, fence, or path so kids move from stop to stop as the story unfolds."
  ),
  activity(
    "Living Room Camp-In",
    "Indoor Activities",
    "4-10",
    "45 min",
    "Blankets, pillows, flashlight",
    "Build a cozy indoor campsite with a reading pile, pretend fire, snack cups, and flashlight stories."
  ),
  activity(
    "Laundry Basket Ball Toss",
    "Indoor Activities",
    "2-7",
    "15 min",
    "Laundry basket, rolled socks",
    "Use rolled socks as soft balls and move the basket farther away each round for an easy energy reset."
  ),
  activity(
    "Sticker Story Pages",
    "Indoor Activities",
    "3-8",
    "25 min",
    "Paper, stickers, markers",
    "Kids place stickers on a page and draw the rest of the story around them."
  ),
  activity(
    "Kitchen Table Building Lab",
    "Indoor Activities",
    "4-12",
    "40 min",
    "Blocks, cups, craft sticks, tape",
    "Set out safe building supplies and challenge kids to make a bridge, tower, tiny town, or marble path."
  ),
  activity(
    "Quiet Time Listening Station",
    "Indoor Activities",
    "3-10",
    "30 min",
    "Audiobook or music, pillows, paper",
    "Pair a short audiobook or playlist with drawing paper for a calm afternoon activity."
  ),
  activity(
    "Indoor Farmer's Market",
    "Indoor Activities",
    "3-8",
    "30 min",
    "Play food, baskets, paper money",
    "Turn the living room into a pretend market where kids sort, price, sell, and pack groceries."
  ),
  activity(
    "Rainy Day Treasure Hunt",
    "Rainy Day Ideas",
    "3-9",
    "30 min",
    "Paper clues, small prize",
    "Hide simple picture or word clues around the house leading to a snack, book, or printable activity."
  ),
  activity(
    "Puddle Observation Walk",
    "Rainy Day Ideas",
    "4-10",
    "20 min",
    "Rain boots, jacket",
    "After heavy rain, take a slow walk to look for ripples, reflections, worms, leaves, and clouds in puddles."
  ),
  activity(
    "Rain Window Art",
    "Rainy Day Ideas",
    "3-8",
    "20 min",
    "Washable window markers",
    "Draw umbrellas, clouds, flowers, and raindrops on a window while watching the weather outside."
  ),
  activity(
    "Board Game Cafe",
    "Rainy Day Ideas",
    "5-12",
    "60 min",
    "Board games, snack tray, menu paper",
    "Set up a pretend cafe with game choices, simple snacks, and a cozy table for stormy afternoon play."
  ),
  activity(
    "Paper Boat Races",
    "Rainy Day Ideas",
    "5-10",
    "25 min",
    "Paper, shallow bin, straw",
    "Fold paper boats and use straws to blow them across a bin of water or a supervised sink."
  ),
  activity(
    "Rainy Day Puppet Show",
    "Rainy Day Ideas",
    "4-10",
    "35 min",
    "Socks or paper bags, markers",
    "Make quick puppets and perform a three-scene show from behind the couch."
  ),
  activity(
    "Sponge Toss Water Games",
    "Water Play",
    "4-12",
    "35 min",
    "Sponges, buckets, water",
    "Soak sponges and toss them into buckets, onto chalk targets, or back and forth with a partner."
  ),
  activity(
    "Ice Cube Rescue",
    "Water Play",
    "3-8",
    "25 min",
    "Ice cubes, small toys, warm water, spoons",
    "Freeze tiny toys in ice or use plain cubes, then let kids melt and scoop them with warm water."
  ),
  activity(
    "Toy Car Wash",
    "Water Play",
    "2-7",
    "25 min",
    "Toy cars, bin, soap, towels",
    "Create a mini wash station for toy cars, animals, or washable outdoor toys."
  ),
  activity(
    "Water Paint the Fence",
    "Water Play",
    "2-6",
    "20 min",
    "Bucket of water, paintbrushes",
    "Kids paint fences, sidewalks, rocks, or patio furniture with water and watch it disappear in the sun."
  ),
  activity(
    "Sink or Float Lab",
    "Water Play",
    "4-10",
    "30 min",
    "Tub of water, household objects",
    "Gather safe objects and let kids predict, test, and sort what sinks and what floats."
  ),
  activity(
    "Sprinkler Freeze Dance",
    "Water Play",
    "3-10",
    "20 min",
    "Sprinkler, music, towels",
    "Play music near the sprinkler and freeze every time the song pauses."
  ),
  activity(
    "Pressed Flower Bookmarks",
    "Crafts",
    "5-12",
    "40 min",
    "Flowers, paper, glue",
    "Press small flowers or leaves, then turn them into bookmarks with paper, glue, and clear tape."
  ),
  activity(
    "Paper Plate Sunshine Faces",
    "Crafts",
    "3-7",
    "25 min",
    "Paper plates, markers, paper strips",
    "Make cheerful sunshine faces with paper rays, silly expressions, and bright summer colors."
  ),
  activity(
    "Nature Collage Cards",
    "Crafts",
    "4-10",
    "35 min",
    "Cardstock, leaves, petals, glue",
    "Collect small nature finds and arrange them into cards for grandparents, neighbors, or friends."
  ),
  activity(
    "Friendship Bracelet Porch Time",
    "Crafts",
    "6-12",
    "45 min",
    "Embroidery floss or beads",
    "Set up bracelet supplies outside for a calm porch project with a take-home result."
  ),
  activity(
    "Cardboard Lemonade Stand",
    "Crafts",
    "4-10",
    "60 min",
    "Cardboard box, markers, tape",
    "Build and decorate a pretend lemonade stand for dramatic play, math practice, or a real family snack."
  ),
  activity(
    "Ice Pop Stick Picture Frames",
    "Crafts",
    "5-10",
    "35 min",
    "Craft sticks, glue, markers",
    "Glue craft sticks into frames and decorate them for summer photos, drawings, or fridge art."
  ),
  activity(
    "Backyard Nature Journal",
    "Learning Activities",
    "6-12",
    "20 min",
    "Notebook, crayons, pencil",
    "Spend ten minutes observing outside, then draw or write one thing noticed, wondered, and learned."
  ),
  activity(
    "Summer Reading Picnic",
    "Learning Activities",
    "4-12",
    "30 min",
    "Books, blanket, snack",
    "Take books outdoors and pair reading time with a blanket snack to make daily reading feel special."
  ),
  activity(
    "Lemonade Stand Math",
    "Learning Activities",
    "5-10",
    "30 min",
    "Play money, cups, price signs",
    "Practice counting, pricing, adding, and making change with a pretend or real lemonade stand."
  ),
  activity(
    "Alphabet Nature Tray",
    "Learning Activities",
    "3-7",
    "25 min",
    "Tray, nature items, letter cards",
    "Collect safe outdoor items and match them to beginning letter sounds."
  ),
  activity(
    "Weather Tracker Chart",
    "Learning Activities",
    "4-10",
    "5 min daily",
    "Printable chart, crayons",
    "Track sunny, cloudy, rainy, and windy days for a week, then talk about patterns."
  ),
  activity(
    "Backyard Measuring Hunt",
    "Learning Activities",
    "5-11",
    "25 min",
    "Tape measure or ruler",
    "Measure leaves, sticks, toys, stepping stones, and shadows, then compare longest and shortest finds."
  ),
  activity(
    "License Plate Bingo",
    "Road Trip Activities",
    "5-12",
    "Car ride",
    "Printable bingo sheet, pencil",
    "Kids mark off states, colors, or letters they spot on license plates during a drive."
  ),
  activity(
    "Would You Rather Road Trip",
    "Road Trip Activities",
    "4-12",
    "Car ride",
    "Question list",
    "Use silly summer questions to keep conversation going without screens."
  ),
  activity(
    "Travel Snack Sorting",
    "Road Trip Activities",
    "3-7",
    "15 min",
    "Snack mix, small cups",
    "Let kids sort snack pieces by color, shape, or type before eating."
  ),
  activity(
    "Window Scavenger Hunt",
    "Road Trip Activities",
    "4-10",
    "Car ride",
    "Printable checklist",
    "Look for bridges, flags, cows, water towers, construction trucks, and other road trip sights."
  ),
  activity(
    "Backseat Story Chain",
    "Road Trip Activities",
    "5-12",
    "20 min",
    "None",
    "One person starts a story, then each rider adds a sentence until the tale becomes wonderfully silly."
  ),
  activity(
    "Map the Route",
    "Road Trip Activities",
    "6-12",
    "Car ride",
    "Printed map, highlighter",
    "Give kids a simple map and let them trace towns, rest stops, landmarks, and the destination."
  ),
  activity(
    "Sunset Bubble Party",
    "Backyard Fun",
    "2-8",
    "20 min",
    "Bubbles, music, picnic blanket",
    "Bring bubbles outside after dinner for an easy end-of-day ritual before bedtime."
  ),
  activity(
    "Backyard Campout Checklist",
    "Backyard Fun",
    "4-12",
    "60 min setup",
    "Tent or blankets, flashlight",
    "Set up a simple backyard camp with sleeping bags, a flashlight walk, and a bedtime snack."
  ),
  activity(
    "Bug Safari",
    "Backyard Fun",
    "4-10",
    "25 min",
    "Magnifying glass, notebook",
    "Look carefully for ants, beetles, butterflies, and other small visitors without touching them."
  ),
  activity(
    "Porch Popsicle Reading",
    "Backyard Fun",
    "3-10",
    "20 min",
    "Popsicles, books, towels",
    "Pair a frozen treat with a short read-aloud outside for a low-effort summer tradition."
  ),
  activity(
    "Mini Garden Helper Hour",
    "Backyard Fun",
    "3-9",
    "30 min",
    "Watering can, gloves, small tools",
    "Give kids simple garden jobs like watering pots, pulling obvious weeds, or checking for ripe tomatoes."
  ),
  activity(
    "Backyard Olympics",
    "Backyard Fun",
    "4-12",
    "45 min",
    "Balls, cones, chalk, ribbons",
    "Create silly events like sock toss, crab-walk races, balance walks, and chalk long jump."
  )
];

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
