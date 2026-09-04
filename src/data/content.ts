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

export interface WorkshopItem {
  name: string;
  tag: string;
  image: string;
  description: string;
}

export const content = {
  hero: {
    est: 'EST. 2026 — POLLACHI',
    title: 'ALIVENESS IS THE ULTIMATE HIGH',
    tagline: 'A Zero Substance Celebration of Life, Movement & Art',
    dates: '23 — 25 OCTOBER 2026',
    location: 'CocoNest Eco Village, Pollachi, Tamil Nadu',
    imageBg: '/assets/img181.jpg',
  },
  philosophy: {
    lead: 'A CONSCIOUS SANCTUARY',
    statement:
      'We create spaces that help us reconnect with our bodies, express ourselves freely, and discover the joy of simply being alive.',
    points: [
      {
        number: '01',
        title: 'Movement & Flow',
        description:
          'Move, balance, and discover what your physical body can accomplish when you drop self-judgment and inhabit every breath.',
      },
      {
        number: '02',
        title: 'Voice & Catharsis',
        description:
          'Listen deeply, vocalize without fear, and release the tension and unspoken stories stored in your nervous system.',
      },
      {
        number: '03',
        title: 'Authentic Kinship',
        description:
          'Bypass casual small talk. Meet strangers in vulnerability and leave with lifelong friends who see you for who you are.',
      },
    ],
  },
  spaces: [
    {
      id: 'breathing-zone',
      name: 'Breathing Zone',
      subtitle: 'Stillness within the canopy',
      description:
        'The sanctuary you step into when you need a pause. Slow down, step away from everything and just breathe.',
      concept:
        "In an overstimulated world, pausing is the most radical act of self-reclamation. The Breathing Zone is crafted as an organic sanctuary cushioned by Pollachi's palm groves. Without alcohol or synthetic stimulants, our breath becomes the sole rhythm anchoring consciousness to the present moment.",
      experience: [
        'Guided conscious pranayama & cyclical somatic breathing',
        'Grounding mats laid directly on raw forest soil',
        'Acoustic sound bathing with singing bowls and flutes',
        'Silent contemplation circles throughout sunrise and twilight',
      ],
      energyLevel: 'Restorative / Meditative',
      atmosphere: 'Sacred silence, dappled shade, earth resonance',
      capacity: '35 seekers',
      whatToBring: 'Bare feet and an open chest',
      image: '/assets/img97.jpg',
    },
    {
      id: 'screaming-zone',
      name: 'Screaming Zone',
      subtitle: 'Primal acoustic release',
      description:
        'Sometimes you just need to let something out. Here, you can use your full voice and leave accumulated tension behind.',
      concept:
        'Civilized life commands us to modulate our volume, swallow our anger, and tuck away grief. The Screaming Zone provides an acoustic clearing in nature where decorum is shattered. Here, vocal cords are instruments of total liberation, releasing somatic armor.',
      experience: [
        'Acoustically isolated forest clearing for raw vocal release',
        'Full-body primal shakeout rituals',
        'Collective howling circles at dusk',
        'Post-release somatic breath realignment',
      ],
      energyLevel: 'High Cathartic / Peak Release',
      atmosphere: 'Raw, uninhibited, fierce, forgiving',
      capacity: 'Open clearing (20-40 participants)',
      whatToBring: 'Zero inhibitions and pent-up emotion',
      image: '/assets/img98.jpg',
    },
    {
      id: 'rage-circle',
      name: 'The Rage Circle',
      subtitle: 'Transforming fire into flow',
      description:
        "A space to drop the mask, move through what you're holding inside and finally let the emotion out.",
      concept:
        'Anger is suppressed passion; rage is unexpressed boundary. In the Rage Circle, aggression is neither demonized nor destructive—it is transmuted. Through dynamic somatic movement, we honor the fire in our belly and convert it into clarity and vitality.',
      experience: [
        'Padded strike totems and heavy earth cushions',
        'Guided emotional alchemy facilitators',
        'Dynamic grounding and foot stomping rhythms',
        'Re-centering and heart reconciliation circles',
      ],
      energyLevel: 'Intense / Transformative',
      atmosphere: 'Fierce, supportive, grounded, electrifying',
      capacity: '15 in circle at a time',
      whatToBring: 'Comfortable movement clothes',
      image: '/assets/img155.jpg',
    },
    {
      id: 'connection-bench',
      name: 'Connection Bench Area',
      subtitle: 'Unscripted human resonance',
      description:
        "Sit next to someone you don't know. Start a conversation. You might walk away with a new friend.",
      concept:
        'Modern loneliness thrives in crowded rooms where eye contact is avoided. The Connection Benches are scattered under canopy trees, accompanied by thoughtful inquiry prompts that bypass trivial small talk and dive directly into human vulnerability.',
      experience: [
        'Two-person wooden benches built into natural landscape',
        'Inquiry prompt stones for meaningful dialogue',
        'Eye-gazing partner meditations',
        'Open tea-sharing and spontaneous dialogue',
      ],
      energyLevel: 'Gentle / Intimate',
      atmosphere: 'Warm, unhurried, curious, gentle',
      capacity: 'Pairs throughout the grove',
      whatToBring: 'Willingness to listen without fixing',
      image: '/assets/img168.jpg',
    },
    {
      id: 'slackline',
      name: 'Slackline Area',
      subtitle: 'Dynamic equilibrium in the air',
      description:
        'Walk the line, lose your balance, find it again. A simple challenge that keeps bringing you back to the present.',
      concept:
        'Balance is not a static position; it is a relentless conversation between gravity, breath, and micro-adjustments. Suspended between ancient coconut palms, the slacklines offer a physical meditation where the mind cannot wander without immediately losing footing.',
      experience: [
        'Low-rigged beginner lines with spotters',
        'Rodeo and long-line challenges for experienced movers',
        'Proprioception and core alignment coaching',
        'Falling with grace and laughter workshops',
      ],
      energyLevel: 'Focused / Playful Challenge',
      atmosphere: 'Focus, encouragement, resilience',
      capacity: '12 lines active simultaneously',
      whatToBring: 'Grippy soles or bare feet',
      image: '/assets/img103.jpg',
    },
    {
      id: 'combat-zone',
      name: 'Combat Zone',
      subtitle: 'Playful martial dialogue',
      description:
        'A safe, playful space to test your strength, challenge yourself and engage with others through controlled movement.',
      concept:
        'Physical dialogue is an ancient language. By pairing traditional South Indian martial arts like Kalaripayattu and Silambam with modern movement drills, the Combat Zone cultivates sharp reflexes, profound spatial awareness, and deep respect for your partner.',
      experience: [
        'Traditional Kalaripayattu body postures and animal forms',
        'Silambam bamboo staff handling basics',
        'Playful grappling and partner balance tugs',
        'Breath control under physical intensity',
      ],
      energyLevel: 'Dynamic / Vigorous',
      atmosphere: 'Electrifying, respectful, grounded discipline',
      capacity: '30 participants',
      whatToBring: 'Flexible clothing, water bottle',
      image: '/assets/img141.jpg',
    },
    {
      id: 'painting-zone',
      name: 'Painting Zone',
      subtitle: 'Unrestricted pigment & imagination',
      description:
        "Take what's inside your head and put it on paper. No rules, no perfect final result, just your imagination taking over.",
      concept:
        'Too often art is judged by technique and market value. Here, creation is an instinctive physical gesture. Fingers, branches, pigments made from turmeric, charcoal, and clay turn large outdoor canvases into collective dreamscapes.',
      experience: [
        'Giant communal forest mural rolls',
        'Plant-based organic pigment extraction',
        'Blindfolded intuitive sensory painting',
        'Hands, feet, and whole-body mark making',
      ],
      energyLevel: 'Creative / Expansive',
      atmosphere: 'Vibrant, messy, liberated, collaborative',
      capacity: '40 artists simultaneously',
      whatToBring: 'Clothes that love getting stained',
      image: '/assets/img165.jpg',
    },
    {
      id: 'balance-board',
      name: 'Balance Board Area',
      subtitle: 'Micro-movements and coordination',
      description:
        'Step on, wobble, adjust and try again. A quick challenge for your balance, coordination and focus.',
      concept:
        'When your center of gravity is constantly shifting beneath you, the chatter of everyday worries disappears. The balance board zone trains neuromuscular responsiveness while triggering the childlike thrill of physical mastery.',
      experience: [
        'Roller-and-plank balance rigs on grass',
        'Single-leg coordination drills',
        'Synchronized partner balancing',
        'Balance board flow sequences to music',
      ],
      energyLevel: 'Active / Focused Play',
      atmosphere: 'Laughter, cheering, deep neuromuscular focus',
      capacity: '20 stations',
      whatToBring: 'Athletic agility and patience',
      image: '/assets/img112.jpg',
    },
    {
      id: 'skimboard',
      name: 'Skimboard & Balance Zone',
      subtitle: 'Gliding across surface tension',
      description:
        'Get on the board and figure it out as you move. A playful way to challenge your balance and trust your body.',
      concept:
        'Momentum dissolves hesitation. In this shallow-water track nestled inside CocoNest Eco Village, participants sprint, drop, and slide across the thin sheet of water, merging speed, balance, and pure unadulterated euphoria.',
      experience: [
        'Natural shallow-water skim runway',
        'Drop-and-slide mechanics instruction',
        'Surface spin and balance trick play',
        'Sunset skim sessions under string lights',
      ],
      energyLevel: 'High Energy / Kinetic Rush',
      atmosphere: 'Splashing, exhilarating, fast-paced',
      capacity: 'Continuous flow queue',
      whatToBring: 'Swimwear or quick-dry shorts, towel',
      image: '/assets/img112.jpg',
    },
  ] as SpaceDetail[],

  workshops: [
    {
      name: 'Bachata Sensual & Flow',
      tag: 'Movement',
      image: '/assets/img131.jpg',
      description:
        'Rhythm, partner connection, and hip motion without performance anxiety.',
    },
    {
      name: 'Natural Body Calisthenics',
      tag: 'Strength',
      image: '/assets/img133.jpg',
      description:
        'Explore strength, suspension, and mobility using your body as the sole apparatus.',
    },
    {
      name: 'Expressive Somatic Movement',
      tag: 'Movement',
      image: '/assets/img135.jpg',
      description:
        'Listen to spontaneous muscle impulses and express emotion through uncensored form.',
    },
    {
      name: 'Play & Movement Lab',
      tag: 'Play',
      image: '/assets/img134.jpg',
      description:
        'Childlike agility games, animal crawls, and spatial awareness challenges.',
    },
    {
      name: 'Kalaripayattu Basics',
      tag: 'Martial Arts',
      image: '/assets/img141.jpg',
      description:
        'Ancient Kerala warrior training, animal stances, and sacred salutations.',
    },
    {
      name: 'Instinctive Archery',
      tag: 'Focus',
      image: '/assets/img103.jpg',
      description:
        'Aiming with somatic intuition and breath instead of mechanical sights.',
    },
    {
      name: 'Botanical Fabric Dyeing',
      tag: 'Craft',
      image: '/assets/img147.jpg',
      description:
        'Extracting pigments from marigold petals, madder roots, and indigo leaves.',
    },
    {
      name: 'Haiku & Forest Writing',
      tag: 'Expression',
      image: '/assets/img163.jpg',
      description:
        'Capturing fleeting natural phenomena in three precise, observant lines.',
    },
    {
      name: 'Organic Soap Crafting',
      tag: 'Craft',
      image: '/assets/img158.jpg',
      description:
        'Cold-pressed coconut oils, essential eucalyptus, and raw botanical botanics.',
    },
    {
      name: 'Flow Arts & Poi Spinning',
      tag: 'Flow',
      image: '/assets/img150.jpg',
      description:
        'Geometric momentum patterns and bilateral brain integration.',
    },
    {
      name: 'Physical Theatre & Mask',
      tag: 'Play',
      image: '/assets/img116.jpg',
      description:
        'Exploring hidden archetypes through wooden masks and exaggerated physicality.',
    },
    {
      name: 'Acoustic Sound Bathing',
      tag: 'Sound',
      image: '/assets/img142.jpg',
      description:
        'Deep frequency entrainment using Tibetan gongs, chimes, and tribal flutes.',
    },
    {
      name: "Women's Sacred Circle",
      tag: 'Community',
      image: '/assets/img166.jpg',
      description:
        'Unfiltered storytelling, womb resonance, and mutual sisterhood support.',
    },
    {
      name: "Men's Fire Council",
      tag: 'Community',
      image: '/assets/img188.jpg',
      description:
        'Vulnerability without bravado. Honest accountability around the midnight embers.',
    },
    {
      name: 'Parkour & Natural Agility',
      tag: 'Movement',
      image: '/assets/img101.jpg',
      description:
        'Vaulting boulders, balancing on trunks, and fluent locomotion across earth.',
    },
    {
      name: 'Heart-to-Heart Inquiry',
      tag: 'Community',
      image: '/assets/img135.jpg',
      description:
        'Deep structured dyad inquiries that reveal our shared human condition.',
    },
  ] as WorkshopItem[],

  about: {
    founder: {
      name: 'Jijo',
      role: 'Movement Artist & Founder',
      collective: 'AANMAA Movement Collective',
      story:
        'I’ve spent years traveling between loud festivals and quiet retreats. At festivals, people danced wildly, but almost everyone depended on alcohol or substances to let go. At retreats, the energy was peaceful, but everything was quiet, structured, and solemn. I realized something vital was missing in between: a sanctuary where you can dance without inhibitions, play like a child, shout at the top of your lungs, and connect intimately—without needing a single drop of alcohol or drugs to unlock that joy. Life itself is the ultimate high.',
      image: '/assets/founder-jijo-Bwk7A7Rz.png',
    },
    spiritAnimal: {
      name: 'The Dragonfly',
      tagline: 'Symbol of Transformation & Weightless Flight',
      story:
        'A dragonfly spends the first stage of its life submerged underwater as a nymph. One dawn, it crawls into the sunlight and undergoes hours of rigorous transformation until iridescent wings unfold. It takes flight with four wings operating in harmonious counter-rhythm. When Movement, Nature, Art, and Community unite, our spirit takes flight in exactly the same way.',
    },
  },

  tickets: {
    phases: [
      {
        id: 'phase-1',
        name: 'Phase 01',
        badge: 'EARLY INTAKE',
        note: 'Limited allocation for early seekers.',
        items: [
          {
            id: 'p1-tent',
            type: 'Tent Stay',
            price: '13,333',
            rawPrice: 13333,
            limit: 'First 50 participants',
            features: [
              'Camping gear provided',
              'Access to all workshops',
              'Organic festival meals',
            ],
          },
          {
            id: 'p1-shared',
            type: 'Shared Stay in Villa',
            price: '16,666',
            rawPrice: 16666,
            limit: 'First 50 participants',
            features: [
              'Shared luxury villa',
              'Ensuite bathroom',
              'All meals included',
            ],
          },
          {
            id: 'p1-double',
            type: 'Double Occupancy Room',
            price: '18,888',
            rawPrice: 18888,
            limit: 'First 20 participants',
            features: [
              'Private room for two',
              'Eco-village garden view',
              'All inclusive pass',
            ],
          },
          {
            id: 'p1-single',
            type: 'Single Occupancy Room',
            price: '24,999',
            rawPrice: 24999,
            limit: 'Until August 31',
            features: [
              'Exclusive private suite',
              'Dedicated concierge',
              'Full festival pass',
            ],
          },
        ],
      },
      {
        id: 'phase-2',
        name: 'Phase 02',
        badge: 'GENERAL RELEASE',
        note: 'Standard allocation tier.',
        items: [
          {
            id: 'p2-tent',
            type: 'Tent Stay',
            price: '14,444',
            rawPrice: 14444,
            limit: 'Next 50 participants',
            features: [
              'Camping gear provided',
              'Access to all workshops',
              'Organic festival meals',
            ],
          },
          {
            id: 'p2-shared',
            type: 'Shared Stay in Villa',
            price: '17,777',
            rawPrice: 17777,
            limit: 'Next 50 participants',
            features: [
              'Shared luxury villa',
              'Ensuite bathroom',
              'All meals included',
            ],
          },
          {
            id: 'p2-double',
            type: 'Double Occupancy Room',
            price: '19,999',
            rawPrice: 19999,
            limit: 'Final 20 participants',
            features: [
              'Private room for two',
              'Eco-village garden view',
              'All inclusive pass',
            ],
          },
          {
            id: 'p2-single',
            type: 'Single Occupancy Room',
            price: '25,999',
            rawPrice: 25999,
            limit: 'Until September 23',
            features: [
              'Exclusive private suite',
              'Dedicated concierge',
              'Full festival pass',
            ],
          },
        ],
      },
      {
        id: 'phase-3',
        name: 'Phase 03',
        badge: 'FINAL CALL',
        note: 'Last remaining passes before festival start.',
        items: [
          {
            id: 'p3-tent',
            type: 'Tent Stay',
            price: '15,555',
            rawPrice: 15555,
            limit: 'Final remaining slots',
            features: [
              'Camping gear provided',
              'Access to all workshops',
              'Organic festival meals',
            ],
          },
          {
            id: 'p3-shared',
            type: 'Shared Stay in Villa',
            price: '18,888',
            rawPrice: 18888,
            limit: 'Final remaining slots',
            features: [
              'Shared luxury villa',
              'Ensuite bathroom',
              'All meals included',
            ],
          },
          {
            id: 'p3-double',
            type: 'Double Occupancy Room',
            price: '21,999',
            rawPrice: 21999,
            limit: 'Final remaining slots',
            features: [
              'Private room for two',
              'Eco-village garden view',
              'All inclusive pass',
            ],
          },
          {
            id: 'p3-single',
            type: 'Single Occupancy Room',
            price: '26,999',
            rawPrice: 26999,
            limit: 'After September 23',
            features: [
              'Exclusive private suite',
              'Dedicated concierge',
              'Full festival pass',
            ],
          },
        ],
      },
    ],
  },
};
