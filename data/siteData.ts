import { slugify } from "@/lib/site";

export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  intro: string;
  pinterestTitle: string;
  pinterestDescription: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  takeaway: string;
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
  setup: string;
  steps: string[];
  tips: string[];
  variations: string[];
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

const relatedFor = (title: string) =>
  blogTitles
    .filter(([relatedTitle]) => relatedTitle !== title)
    .slice(0, 3)
    .map(([relatedTitle]) => slugify(relatedTitle));

const blogPost = (
  title: string,
  category: string,
  date: string,
  excerpt: string,
  intro: string,
  sections: BlogPost["sections"],
  takeaway: string
): BlogPost => ({
  title,
  slug: slugify(title),
  date,
  category,
  excerpt,
  intro,
  pinterestTitle: `${title} - Summer Sprout`,
  pinterestDescription:
    "Save this cheerful summer guide for easy kid activities, family routines, printables, and screen-free ideas.",
  sections,
  takeaway,
  related: relatedFor(title)
});

export const blogPosts: BlogPost[] = [
  blogPost(
    "50 Easy Summer Activities for Kids at Home",
    "Activities",
    "2026-05-01",
    "A big list of simple summer activities for kids that work at home, in the backyard, or around the kitchen table.",
    "You do not need a packed calendar to make summer feel fun. A few repeatable ideas, a handful of supplies, and permission to keep things simple can carry a lot of ordinary weekdays.",
    [
      {
        heading: "Quick backyard ideas",
        body: "Start outside when the weather is kind. These ideas use space kids already know, which makes setup easier and cleanup faster.",
        bullets: [
          "Sidewalk chalk obstacle course",
          "Water paint with buckets and brushes",
          "Bubble dance party after dinner",
          "Backyard nature color hunt",
          "Toy car wash with soapy water"
        ]
      },
      {
        heading: "Calm indoor ideas",
        body: "When the afternoon gets hot, move to low-key activities that help kids reset without screens.",
        bullets: [
          "Sticker story pages",
          "Living room camp-in",
          "Audiobook drawing station",
          "Kitchen table building lab",
          "Pretend farmer's market"
        ]
      },
      {
        heading: "Creative summer projects",
        body: "A small project gives kids something to work toward without needing an all-day craft plan.",
        bullets: [
          "Pressed flower bookmarks",
          "Paper plate sunshine faces",
          "Nature collage cards",
          "Friendship bracelets",
          "Cardboard lemonade stand"
        ]
      },
      {
        heading: "How to make the list work",
        body: "Choose one active idea, one quiet idea, and one rainy day backup each week. Keep the supplies visible in a basket so kids can help choose."
      }
    ],
    "A simple summer at home can still feel full when kids have a few easy choices they can return to again and again."
  ),
  blogPost(
    "Cheap Summer Fun Ideas for Families",
    "Family Fun",
    "2026-05-02",
    "Budget-friendly family fun ideas for long summer days, slow weekends, and memory-making without overspending.",
    "Summer costs can climb quickly, but kids often remember the small rituals most: picnic dinners, library mornings, neighborhood walks, and homemade treats.",
    [
      {
        heading: "Free places to start",
        body: "Look for repeatable outings close to home before planning bigger paid days.",
        bullets: ["Library programs", "Splash pads", "Playground rotations", "Community concerts", "Nature trails"]
      },
      {
        heading: "Low-cost family rituals",
        body: "Turn ordinary routines into seasonal traditions with tiny upgrades.",
        bullets: ["Friday porch popsicles", "Breakfast picnic", "Sunset walk", "Backyard movie night", "Homemade lemonade stand"]
      },
      {
        heading: "Use what you already have",
        body: "Chalk, blankets, buckets, cardboard, books, and kitchen tools can become an entire activity plan."
      },
      {
        heading: "Save paid outings for anchor days",
        body: "If your budget allows a few bigger outings, space them out and let simple home days fill the gaps."
      }
    ],
    "Cheap summer fun works best when it feels intentional, not like a consolation prize."
  ),
  blogPost(
    "Easy Summer Lunch Ideas for Kids",
    "Meal Ideas",
    "2026-05-03",
    "Simple easy summer lunch ideas for kids, including no-cook meals, snack plates, picnic lunches, and flexible leftovers.",
    "Hot days call for lunches that are fast, flexible, and friendly to picky eaters. Think mix-and-match instead of complicated recipes.",
    [
      {
        heading: "No-cook lunch ideas",
        body: "Keep a short list of lunches that do not require turning on the stove.",
        bullets: ["Turkey cucumber roll-ups", "Snack board lunches", "Hummus pita pockets", "Fruit and yogurt plates", "Cold pasta cups"]
      },
      {
        heading: "Picnic-ready lunches",
        body: "Pack foods that hold well and are easy for kids to eat outside.",
        bullets: ["Pinwheel wraps", "Cheese cubes and crackers", "Mini muffins", "Grapes or berries", "Veggie cups with dip"]
      },
      {
        heading: "Use a lunch formula",
        body: "Try protein plus fruit or veggie plus crunchy side plus small treat. The formula keeps decisions light."
      },
      {
        heading: "Prep once, coast twice",
        body: "Wash fruit, slice veggies, and portion dips once or twice a week so lunch assembly takes minutes."
      }
    ],
    "The easiest summer lunches are the ones your kids will actually eat and you can repeat without overthinking."
  ),
  blogPost(
    "How to Create a Simple Summer Routine",
    "Routines",
    "2026-05-04",
    "A realistic summer routine for kids with flexible blocks for chores, meals, quiet time, activities, and outdoor play.",
    "A summer routine does not have to feel strict. It can simply give the day a gentle shape so everyone knows what comes next.",
    [
      {
        heading: "Use flexible blocks",
        body: "Think in anchors instead of exact times. Morning reset, outside time, lunch, quiet time, activity, dinner, and bedtime can be enough."
      },
      {
        heading: "Add daily non-negotiables",
        body: "Pick a few simple expectations that happen before bigger fun.",
        bullets: ["Get dressed", "Brush teeth", "Help with one chore", "Read or listen to a book", "Tidy activity supplies"]
      },
      {
        heading: "Build in quiet time",
        body: "Even older kids benefit from a predictable calm block with books, drawing, puzzles, or audiobooks."
      },
      {
        heading: "Keep the chart visible",
        body: "A printable summer routine chart helps kids check the rhythm without asking you every ten minutes."
      }
    ],
    "The best summer routine creates calm without squeezing the easy magic out of the day."
  ),
  blogPost(
    "Best Screen-Free Activities for Kids",
    "Activities",
    "2026-05-05",
    "Screen-free summer activities for kids that are easy to set up, repeatable, and realistic for home days.",
    "Screen-free time works better when kids know what they can do instead. A visible list of choices can make the transition much smoother.",
    [
      {
        heading: "Set up activity zones",
        body: "Create small stations kids can use without much help: art, building, reading, pretend play, and outside play."
      },
      {
        heading: "Offer choices, not lectures",
        body: "A short menu keeps kids from feeling stuck.",
        bullets: ["Build something", "Make something", "Read something", "Move your body", "Help with something"]
      },
      {
        heading: "Use boredom as a bridge",
        body: "A little boredom often comes before creative play. Keep calm and point kids back to the activity menu."
      },
      {
        heading: "Make it repeatable",
        body: "Choose screen-free summer activities that can be used again with small changes, like new chalk targets or a different scavenger hunt."
      }
    ],
    "Screen-free days get easier when the alternatives are visible, simple, and genuinely fun."
  ),
  blogPost(
    "Rainy Day Summer Activities",
    "Indoor Play",
    "2026-05-06",
    "Rainy day activities for kids that keep summer afternoons calm, creative, and playful indoors.",
    "Rainy summer days can feel long, but they are also a chance to slow down and pull out cozy, creative activities.",
    [
      {
        heading: "Cozy setup ideas",
        body: "Start by making the house feel inviting: pillows, books, music, soft lighting, and a simple snack tray."
      },
      {
        heading: "Creative rainy day activities",
        body: "Use easy materials and let the project stretch.",
        bullets: ["Puppet show", "Rain window art", "Paper boat races", "Sticker stories", "Cardboard town"]
      },
      {
        heading: "Move indoors safely",
        body: "If kids need movement, use sock toss, hallway bowling, freeze dance, or a couch-cushion obstacle path."
      },
      {
        heading: "Save a few ideas for storms",
        body: "Keep a rainy day basket tucked away so it feels fresh when the weather changes plans."
      }
    ],
    "A rainy day can become one of summer's sweetest pauses with a few cozy ideas ready to go."
  ),
  blogPost(
    "Backyard Water Play Ideas",
    "Outdoor Play",
    "2026-05-07",
    "Backyard water play ideas for kids using buckets, sponges, sprinklers, ice, toys, and simple household supplies.",
    "Water play is one of the easiest ways to reset a hot summer afternoon. Most ideas only need a bucket, towel, and a little supervision.",
    [
      {
        heading: "Low-prep water games",
        body: "These ideas are easy to set up and easy to repeat.",
        bullets: ["Sponge toss", "Toy car wash", "Water painting", "Sprinkler freeze dance", "Ice cube rescue"]
      },
      {
        heading: "Learning with water",
        body: "Add gentle STEM play with sink-or-float tests, measuring cups, pouring stations, and ice melting experiments."
      },
      {
        heading: "Keep cleanup simple",
        body: "Set towels by the door, choose washable toys, and keep water play in one zone when possible."
      },
      {
        heading: "Safety reminders",
        body: "Stay close, empty bins after play, and adjust activities for age and swimming ability."
      }
    ],
    "Backyard water play does not need a pool to feel like a summer highlight."
  ),
  blogPost(
    "Road Trip Activities for Kids",
    "Travel",
    "2026-05-08",
    "Road trip activities for kids with printable games, conversation prompts, snack ideas, and low-mess backseat fun.",
    "The best road trip activities are easy to reach, low-mess, and flexible enough to use for ten minutes or an hour.",
    [
      {
        heading: "Printable road trip games",
        body: "Print a few activities before leaving so you have screen-free options ready.",
        bullets: ["License plate bingo", "Window scavenger hunt", "Road sign search", "Travel tic-tac-toe", "Destination countdown"]
      },
      {
        heading: "Conversation games",
        body: "Use simple prompts when everyone needs a reset.",
        bullets: ["Would you rather", "Story chain", "Guess the animal", "Two truths and a wish", "Favorite vacation memory"]
      },
      {
        heading: "Snack activities",
        body: "For younger kids, sorting snack mix by color or shape can buy a calm stretch of road."
      },
      {
        heading: "Pack in small batches",
        body: "Instead of handing everything out at once, save a few surprises for later in the drive."
      }
    ],
    "A little road trip prep can make the miles feel calmer for kids and grownups."
  ),
  blogPost(
    "Summer Chore Chart Ideas",
    "Routines",
    "2026-05-09",
    "Summer chore chart ideas for kids that are simple, visual, age-friendly, and easy to maintain.",
    "A summer chore chart works best when it is short, visible, and tied to the daily rhythm kids already understand.",
    [
      {
        heading: "Choose age-friendly jobs",
        body: "Keep chores realistic and specific.",
        bullets: ["Water plants", "Match socks", "Clear lunch dishes", "Feed pets", "Tidy shoes", "Wipe outdoor table"]
      },
      {
        heading: "Use picture cues",
        body: "Young kids respond well to simple icons or drawings next to each job."
      },
      {
        heading: "Pair chores with routine anchors",
        body: "Attach chores to moments like after breakfast, before lunch, or before outside play."
      },
      {
        heading: "Keep rewards simple",
        body: "Try family rewards, extra read-aloud time, choosing dinner music, or picking the next activity."
      }
    ],
    "A good summer chore chart helps kids participate in family life without turning every morning into a negotiation."
  ),
  blogPost(
    "Printable Summer Bucket List for Kids",
    "Printables",
    "2026-05-10",
    "How to use a printable summer bucket list for kids without overplanning the season.",
    "A printable summer bucket list gives kids something cheerful to anticipate while still leaving room for slow days.",
    [
      {
        heading: "Choose a realistic number",
        body: "Instead of trying to finish everything, invite each family member to pick a few must-do ideas."
      },
      {
        heading: "Mix free and special ideas",
        body: "Balance bigger outings with simple ideas like popsicles outside, library mornings, and backyard campouts."
      },
      {
        heading: "Display it where kids can see it",
        body: "Put the list on the fridge, command center, or pantry door so it becomes part of summer conversation."
      },
      {
        heading: "Use it as a menu",
        body: "The bucket list is not a contract. It is a menu for days when everyone wants a little spark."
      }
    ],
    "The best summer bucket list adds joy and direction without becoming another assignment."
  )
];

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
  description,
  setup: `Gather ${supplies.toLowerCase()} and choose a comfortable spot for ${category.toLowerCase()}. Keep water, shade, and cleanup supplies nearby when the activity is outside.`,
  steps: [
    "Set out the supplies before inviting kids to begin.",
    "Explain the activity in one or two simple sentences.",
    "Let kids help make one choice, such as the order, colors, rules, or starting spot.",
    "Play for the suggested time, then wrap up before everyone is overtired.",
    "Do a quick reset together so the idea is easy to repeat another day."
  ],
  tips: [
    "Adjust the rules for younger siblings so everyone can join.",
    "Keep expectations loose; the best version is the one your kids actually enjoy.",
    "Take a photo or jot down what worked if you want to repeat it later."
  ],
  variations: [
    "Make it quieter by turning it into a solo activity.",
    "Make it social by inviting siblings, cousins, neighbors, or friends.",
    "Make it educational by adding counting, color sorting, storytelling, measuring, or observation."
  ]
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
