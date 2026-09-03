export interface SpaceDetail {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  concept: string;
  experience: string[];
  energyLevel: string;
  atmosphere: string;
  capacity: string;
  whatToBring: string;
  image: string;
}

export const content = {
  hero: {
    est: "EST. 2026 — POLLACHI",
    title: "ALIVENESS IS THE ULTIMATE HIGH",
    subtitle: "A Zero Substance Festival",
    dates: "23 - 25 Oct 2026",
    location: "CocoNest Eco Village, Pollachi",
    videoBg: null,
    imageBg: "/assets/audience-hero-DaZlGUU3.jpg"
  },
  philosophy: {
    statement: "WE CREATE SPACES THAT HELP US RECONNECT WITH OUR BODIES, EXPRESS OURSELVES FREELY, AND DISCOVER THE JOY OF SIMPLY BEING ALIVE.",
    points: [
      {
        title: "MOVEMENT",
        description: "Move, fight, flow, balance and discover what your body can do when you stop overthinking every move."
      },
      {
        title: "EXPRESSION",
        description: "Listen deeply, move freely, use your voice and let out the things you usually keep inside."
      },
      {
        title: "COMMUNITY",
        description: "Meet strangers. Start conversations. Share a little more. Leave with people who no longer feel like strangers."
      }
    ]
  },
  spaces: [
    {
      id: "breathing-zone",
      name: "Breathing Zone",
      subtitle: "Stillness within the landscape",
      description: "The place you step into when you need a pause. Slow down, step away from everything and just breathe.",
      concept: "In an overstimulated world, doing nothing is the most radical act of self-reclamation. The Breathing Zone is crafted as an organic sanctuary cushioned by Pollachi's palm groves. Here, time decelerates. Without substances or synthetic stimulants, our breath becomes the sole rhythm anchoring consciousness to the present moment.",
      experience: [
        "Guided conscious pranayama & cyclical breathing",
        "Somatic grounding mats on natural earth",
        "Ambient sound bathing with singing bowls and flutes",
        "Silent contemplation circles throughout sunrise and twilight"
      ],
      energyLevel: "Restorative / Meditative",
      atmosphere: "Sacred silence, dappled shade, earth resonance",
      capacity: "35 seekers",
      whatToBring: "Bare feet and an open chest",
      image: "/assets/space-breathing-Dg8FaHTI.jpg"
    },
    {
      id: "screaming-zone",
      name: "Screaming Zone",
      subtitle: "Primal catharsis unleashed",
      description: "Sometimes you just need to let something out. Here, you can use your full voice and leave some of that built-up tension behind.",
      concept: "Civilized life commands us to modulate our volume, swallow our anger, and tuck away grief. The Screaming Zone provides an acoustic clearing in nature where decorum is shattered. Here, vocal cords are instruments of total liberation, releasing years of accumulated somatic armor.",
      experience: [
        "Acoustically isolated forest clearing for raw vocal release",
        "Full-body primal shakeout rituals",
        "Collective howling circles at dusk",
        "Post-release somatic breath realignment"
      ],
      energyLevel: "High Cathartic / Peak Release",
      atmosphere: "Raw, uninhibited, fierce, forgiving",
      capacity: "Open clearing (20-40 participants)",
      whatToBring: "Zero inhibitions and pent-up emotion",
      image: "/assets/space-screaming-Bwoq68yf.jpg"
    },
    {
      id: "rage-circle",
      name: "The Rage Circle",
      subtitle: "Transforming fire into flow",
      description: "A space to drop the mask, move through what you're holding inside and finally let the emotion out.",
      concept: "Anger is suppressed passion; rage is unexpressed boundary. In the Rage Circle, aggression is neither demonized nor destructive—it is transmuted. Through dynamic somatic movement and heavy resistance interaction, we honor the fire in our belly and convert it into clarity and vitality.",
      experience: [
        "Padded strike totems and heavy earth cushions",
        "Guided emotional alchemy facilitators",
        "Dynamic grounding and foot stomping rhythms",
        "Re-centering and heart reconciliation circles"
      ],
      energyLevel: "Intense / Transformative",
      atmosphere: "Fierce, supportive, grounded, electrifying",
      capacity: "15 in circle at a time",
      whatToBring: "Comfortable movement clothes",
      image: "/assets/exp-animalflow-7CqLw_ag.jpg"
    },
    {
      id: "connection-bench",
      name: "Connection Bench Area",
      subtitle: "Unscripted human resonance",
      description: "Sit next to someone you don't know. Start a conversation. You might walk away with a new friend.",
      concept: "Modern loneliness thrives in crowded rooms where eye contact is avoided. The Connection Benches are scattered under canopy trees, accompanied by thoughtful inquiry prompts that bypass trivial small talk and dive directly into human vulnerability and wonder.",
      experience: [
        "Two-person wooden benches built into natural landscape",
        "Inquiry prompt stones for meaningful dialogue",
        "Eye-gazing partner meditations",
        "Open tea-sharing and spontaneous dialogue"
      ],
      energyLevel: "Gentle / Intimate",
      atmosphere: "Warm, unhurried, curious, gentle",
      capacity: "Pairs throughout the grove",
      whatToBring: "Willingness to listen without fixing",
      image: "/assets/exp-love-feels-safe-CIMGKwXK.jpg"
    },
    {
      id: "slackline",
      name: "Slackline Area",
      subtitle: "Dynamic equilibrium in the air",
      description: "Walk the line, lose your balance, find it again. A simple challenge that keeps bringing you back to the present.",
      concept: "Balance is not a static position; it is a relentless conversation between gravity, breath, and micro-adjustments. Suspended between ancient coconut palms, the slacklines offer a physical meditation where the mind cannot wander without immediately losing footing.",
      experience: [
        "Low-rigged beginner lines with spotters",
        "Rodeo and long-line challenges for experienced movers",
        "Proprioception and core alignment coaching",
        "Falling with grace and laughter workshops"
      ],
      energyLevel: "Focused / Playful Challenge",
      atmosphere: "Focus, encouragement, resilience",
      capacity: "12 lines active simultaneously",
      whatToBring: "Grippy soles or bare feet",
      image: "/assets/exp-slackline-DvEqpsdf.jpg"
    },
    {
      id: "combat-zone",
      name: "Combat Zone",
      subtitle: "Playful martial dialogue",
      description: "A safe, playful space to test your strength, challenge yourself and engage with others through controlled movement.",
      concept: "Physical dialogue is an ancient language. By pairing traditional South Indian martial arts like Kalaripayattu and Silambam with modern movement drills, the Combat Zone cultivates sharp reflexes, profound spatial awareness, and deep respect for your sparring partner.",
      experience: [
        "Traditional Kalaripayattu body postures and animal forms",
        "Silambam bamboo staff handling basics",
        "Playful grappling and partner balance tugs",
        "Breath control under physical intensity"
      ],
      energyLevel: "Dynamic / Vigorous",
      atmosphere: "Electrifying, respectful, grounded discipline",
      capacity: "30 participants",
      whatToBring: "Flexible clothing, water bottle",
      image: "/assets/exp-kalaripayattu-C7Qe6AxD.jpg"
    },
    {
      id: "painting-zone",
      name: "Painting Zone",
      subtitle: "Unrestricted color & imagination",
      description: "Take what's inside your head and put it on paper. No rules, no perfect final result, just your imagination taking over.",
      concept: "Too often art is judged by technique and market value. Here, creation is an instinctive physical gesture. Fingers, branches, pigments made from turmeric, charcoal, and clay turn large outdoor canvases into collective dreamscapes.",
      experience: [
        "Giant communal forest mural rolls",
        "Plant-based organic pigment extraction",
        "Blindfolded intuitive sensory painting",
        "Hands, feet, and whole-body mark making"
      ],
      energyLevel: "Creative / Expansive",
      atmosphere: "Vibrant, messy, liberated, collaborative",
      capacity: "40 artists simultaneously",
      whatToBring: "Clothes that love getting stained",
      image: "/assets/exp-poetry2-BV8X__Dd.jpg"
    },
    {
      id: "balance-board",
      name: "Balance Board Area",
      subtitle: "Micro-movements and coordination",
      description: "Step on, wobble, adjust and try again. A quick challenge for your balance, coordination and focus.",
      concept: "When your center of gravity is constantly shifting beneath you, the chatter of everyday worries disappears. The balance board zone trains neuromuscular responsiveness while triggering the childlike thrill of physical mastery.",
      experience: [
        "Roller-and-plank balance rigs on grass",
        "Single-leg coordination drills",
        "Synchronized partner balancing",
        "Balance board flow sequences to music"
      ],
      energyLevel: "Active / Focused Play",
      atmosphere: "Laughter, cheering, deep neuromuscular focus",
      capacity: "20 stations",
      whatToBring: "Athletic agility and patience",
      image: "/assets/exp-parkour-D8q-XmT6.jpg"
    },
    {
      id: "skimboard",
      name: "Skimboard & Balance Zone",
      subtitle: "Gliding across surface tension",
      description: "Get on the board and figure it out as you move. A playful way to challenge your balance and trust your body.",
      concept: "Momentum dissolves hesitation. In this shallow-water track nestled inside CocoNest Eco Village, participants sprint, drop, and slide across the thin sheet of water, merging speed, balance, and pure unadulterated euphoria.",
      experience: [
        "Natural shallow-water skim runway",
        "Drop-and-slide mechanics instruction",
        "Surface spin and balance trick play",
        "Sunset skim sessions under string lights"
      ],
      energyLevel: "High Energy / Kinetic Rush",
      atmosphere: "Splashing, exhilarating, fast-paced",
      capacity: "Continuous flow queue",
      whatToBring: "Swimwear or quick-dry shorts, towel",
      image: "/assets/space-playground-C8CHyBpq.jpg"
    }
  ] as SpaceDetail[],
  workshops: {
    title: "25+ New Workshops",
    categories: [
      {
        name: "Movement & Dance",
        items: [
          { name: "Bachata Dance", image: "/assets/activities-hero-DIU5kdcR.jpg" },
          { name: "Calisthenics", image: "/assets/activities-bg-C6GXll-p.jpg" },
          { name: "Movement Exploration", image: "/assets/exp-expressive-movement-DzXY4kLX.jpg" },
          { name: "Movement Lab", image: "/assets/exp-movement-games-D8fA85pM.jpg" }
        ]
      },
      {
        name: "Play & Challenge",
        items: [
          { name: "Mixed Martial Arts", image: "/assets/exp-kalaripayattu-C7Qe6AxD.jpg" },
          { name: "Silambam", image: "/assets/exp-kalaripayattu-C7Qe6AxD.jpg" }
        ]
      },
      {
        name: "Art & Creation",
        items: [
          { name: "Paper Making", image: "/assets/exp-nature-dyeing-DfH3LHgu.jpg" },
          { name: "Trinet Weaving", image: "/assets/exp-poetry2-BV8X__Dd.jpg" },
          { name: "Dappo Star Craft", image: "/assets/exp-soap2-D9Vp9Q7O.jpg" },
          { name: "Art Of Origami", image: "/assets/exp-poetry2-BV8X__Dd.jpg" },
          { name: "Art Meditation", image: "/assets/exp-nature-dyeing-DfH3LHgu.jpg" },
          { name: "Upcycling Workshop", image: "/assets/exp-poetry2-BV8X__Dd.jpg" },
          { name: "Kolam Craft", image: "/assets/exp-soap2-D9Vp9Q7O.jpg" },
          { name: "Clay Modelling", image: "/assets/exp-nature-dyeing-DfH3LHgu.jpg" },
          { name: "Mask Making", image: "/assets/exp-soap2-D9Vp9Q7O.jpg" }
        ]
      },
      {
        name: "Sound & Expression",
        items: [
          { name: "Sound Journey", image: "/assets/exp-soundhealing-bh_dbDly.jpg" },
          { name: "Haiku Writing", image: "/assets/space-poem-DDk02g7q.jpg" }
        ]
      },
      {
        name: "Connection",
        items: [
          { name: "Heart-To-Heart", image: "/assets/exp-womenscircle2-C34OYNr0.jpg" },
          { name: "Men's & Women's Circle", image: "/assets/exp-womenscircle2-C34OYNr0.jpg" },
          { name: "Internal Branding", image: "/assets/exp-womenscircle2-C34OYNr0.jpg" }
        ]
      }
    ]
  },
  about: {
    founder: {
      name: "Jijo",
      title: "Founder, HIGH on Life & AANMAA Movement Collective",
      story: "I’ve been to many festivals, teaching movement and watching people dance, laugh, and celebrate through the night. But I often noticed that people needed alcohol or substances to truly let go. Then there were retreats. Everything was quiet, structured and deeply spiritual. I always felt there was something beautiful missing in between. I wanted to create a space where you could dance like nobody is watching, play like a child, create freely, connect deeply and feel completely alive. A space where you don’t need anything outside of yourself to experience joy. That’s how the idea of HIGH on Life was born.",
      image: "/assets/founder-jijo-Bwk7A7Rz.png"
    },
    spiritAnimal: {
      name: "The Magical Dragonfly",
      story: "A dragonfly begins its life underwater, as a larva. Then, one day, it slowly crawls out of the water and encounters the sun for the very first time. Exposed to its warmth and intensity, it endures hours of transformation as its body slowly changes and its wings begin to emerge. And then, magically, it takes flight. Just like the dragonfly’s four wings work together in an infinite rhythm to create its magical flight without ever needing to learn how. When Movement, Nature, Art and Playfulness come together, they create the ALIVENESS we need to live life at its highest."
    }
  },
  tickets: {
    phases: [
      {
        name: "Phase 1",
        note: "Get in first. Get the best price.",
        items: [
          { id: "p1-tent", type: "Tent Stay", price: "₹13,333", rawPrice: 13333, limit: "First 50 participants" },
          { id: "p1-shared", type: "Shared Stay in Villa", price: "₹16,666", rawPrice: 16666, limit: "First 50 participants" },
          { id: "p1-double", type: "Double Occupancy Room", price: "₹18,888", rawPrice: 18888, limit: "First 20 participants" },
          { id: "p1-single", type: "Single Occupancy Room", price: "₹24,999", rawPrice: 24999, limit: "Until August 31" }
        ]
      },
      {
        name: "Phase 2",
        note: "Next allocation.",
        items: [
          { id: "p2-tent", type: "Tent Stay", price: "₹14,444", rawPrice: 14444, limit: "Next 50 participants" },
          { id: "p2-shared", type: "Shared Stay in Villa", price: "₹17,777", rawPrice: 17777, limit: "Next 50 participants" },
          { id: "p2-double", type: "Double Occupancy Room", price: "₹19,999", rawPrice: 19999, limit: "Final 20 participants" },
          { id: "p2-single", type: "Single Occupancy Room", price: "₹25,999", rawPrice: 25999, limit: "Until September 23" }
        ]
      },
      {
        name: "Phase 3",
        note: "The last chance to come HIGH.",
        items: [
          { id: "p3-tent", type: "Tent Stay", price: "₹15,555", rawPrice: 15555, limit: "General Allocation" },
          { id: "p3-shared", type: "Shared Stay in Villa", price: "₹18,888", rawPrice: 18888, limit: "General Allocation" },
          { id: "p3-double", type: "Double Occupancy Room", price: "₹21,999", rawPrice: 21999, limit: "General Allocation" },
          { id: "p3-single", type: "Single Occupancy Room", price: "₹26,999", rawPrice: 26999, limit: "After September 23" }
        ]
      }
    ]
  }
};
