export const CATEGORIES = [
  {
    id: 'chairs',
    name: 'Chairs',
    description: 'Ergonomic task chairs, stylish accents, and cozy recliners.',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80',
    count: 4
  },
  {
    id: 'sofas',
    name: 'Sofas',
    description: 'Luxurious Chesterfields, sectionals, and comfortable loveseats.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    count: 4
  },
  {
    id: 'beds',
    name: 'Beds',
    description: 'Premium platform frames, tufted beds, and classic poster designs.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
    count: 4
  },
  {
    id: 'tables',
    name: 'Tables',
    description: 'Elegant coffee tables, desks, and minimalist end tables.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80',
    count: 4
  },
  {
    id: 'dining',
    name: 'Dining',
    description: 'Complete family dining sets, marble tables, and bistro sets.',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80',
    count: 4
  },
  {
    id: 'wardrobes',
    name: 'Wardrobes',
    description: 'Spacious sliding wardrobes, modern armoires, and walk-in organizers.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80',
    count: 4
  }
];

export const PRODUCTS = [
  // --- CHAIRS ---
  {
    id: 'chair-1',
    name: 'Aero Velvet Lounge Chair',
    category: 'chairs',
    brand: 'Stella Casa',
    price: 349,
    rating: 4.8,
    reviews: 128,
    description: 'Unwind in style with our Aero Velvet Lounge Chair. Upholstered in premium stain-resistant velvet fabric, this chair features a deep cushioned seat and an elegant matte gold powder-coated frame. Perfect for living rooms, bedrooms, or reading nooks.',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '32" W x 30" D x 34" H',
      Material: 'Velvet & Stainless Steel',
      Assembly: 'No assembly required',
      Warranty: '2-Year Limited Warranty'
    }
  },
  {
    id: 'chair-2',
    name: 'ErgoPro High-Back Office Chair',
    category: 'chairs',
    brand: 'Orthofit',
    price: 289,
    rating: 4.9,
    reviews: 340,
    description: 'Engineered for comfort during long working hours. The ErgoPro offers full lumbar support, adjustable 3D armrests, a breathable mesh back, and synchro-tilt mechanism to reduce posture fatigue. Features durable premium PU caster wheels.',
    image: 'https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '26" W x 26" D x 44"-48" H',
      Material: 'Breathable Nylon Mesh & Aluminum Base',
      Assembly: 'Easy Self-Assembly',
      Warranty: '5-Year Mechanical Warranty'
    }
  },
  {
    id: 'chair-3',
    name: 'Scandi Ashwood Accent Chair',
    category: 'chairs',
    brand: 'Nordic Craft',
    price: 199,
    rating: 4.6,
    reviews: 84,
    description: 'Embodying clean lines and minimalist design, this accent chair features a solid American ash wood frame in a natural finish, coupled with a woven linen upholstery seat. It brings warmth and simple Nordic beauty to any corner.',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '24" W x 26" D x 30" H',
      Material: 'Solid Ash Wood & Linen Blend',
      Assembly: 'Partial Assembly Required',
      Warranty: '1-Year Limited Warranty'
    }
  },
  {
    id: 'chair-4',
    name: 'Hearthside Wooden Rocking Chair',
    category: 'chairs',
    brand: 'Heritage Woodworks',
    price: 249,
    rating: 4.7,
    reviews: 62,
    description: 'Bring nostalgic warmth back into your home. The Hearthside Rocker is handcrafted from selected hardwoods and treated with a water-resistant lacquer finish. Contoured seat slats and curved armrests provide optimal rustic comfort.',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '27" W x 32" D x 41" H',
      Material: 'Solid Oak Wood',
      Assembly: 'Fully Assembled',
      Warranty: '3-Year Wood Warranty'
    }
  },

  // --- SOFAS ---
  {
    id: 'sofa-1',
    name: 'Emerald Chesterfield Sofa',
    category: 'sofas',
    brand: 'Stella Casa',
    price: 1299,
    rating: 4.9,
    reviews: 95,
    description: 'A striking statement piece that reinvents a classic. The Emerald Chesterfield features deep button tufting, rolled arms, and turned wooden legs with vintage brass casters. Wrapped in deep green plush velvet that feels as good as it looks.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '88" W x 37" D x 29" H',
      Material: 'Velvet, Birchwood & High-density Foam',
      Assembly: 'Leg Attachment Required',
      Warranty: '5-Year Frame Warranty'
    }
  },
  {
    id: 'sofa-2',
    name: 'Sola Mid-Century L-Sectional',
    category: 'sofas',
    brand: 'Modura',
    price: 1699,
    rating: 4.7,
    reviews: 112,
    description: 'Perfect for hosting movie nights or lounging. The Sola sectional features clean-cut cushions, tapered walnut-stained legs, and a customizable right/left-facing chaise. Upholstered in a durable, pet-friendly textured weave.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '104" W x 62" D x 33" H',
      Material: 'Hardwood frame, Polyester blend',
      Assembly: 'Full Assembly Included',
      Warranty: '3-Year Limited Warranty'
    }
  },
  {
    id: 'sofa-3',
    name: 'Haven Cozy Fabric Loveseat',
    category: 'sofas',
    brand: 'Nordic Craft',
    price: 649,
    rating: 4.5,
    reviews: 58,
    description: 'Snuggle up in the Haven Loveseat. Crafted with deep, feather-blend pillows, this compact sofa is designed for smaller spaces without compromising on luxury comfort. Removable and washable cushion covers for easy care.',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '64" W x 36" D x 34" H',
      Material: '100% Cotton Linen & Feather-Down Mix',
      Assembly: 'No Assembly Required',
      Warranty: '2-Year Warranty'
    }
  },
  {
    id: 'sofa-4',
    name: 'Meridian Full-Grain Leather Couch',
    category: 'sofas',
    brand: 'Heritage Woodworks',
    price: 1999,
    rating: 4.8,
    reviews: 43,
    description: 'Designed to age beautifully. The Meridian Couch is upholstered in top-tier Italian aniline leather that develops a rich, unique patina over time. Features pocket-spring support and solid block ashwood bases.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '84" W x 38" D x 32" H',
      Material: 'Top Grain Italian Leather & Ashwood',
      Assembly: 'Leg Attachment Required',
      Warranty: 'Lifetime Frame Warranty'
    }
  },

  // --- BEDS ---
  {
    id: 'bed-1',
    name: 'Soren Oak Platform Bed',
    category: 'beds',
    brand: 'Nordic Craft',
    price: 799,
    rating: 4.8,
    reviews: 73,
    description: 'Embrace organic luxury. The Soren Platform Bed features a beautifully simple headboard, rounded corners, and extra-thick slats that eliminate the need for a box spring. Crafted from sustainably harvested white oak.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '65" W x 86" D x 42" H (Queen)',
      Material: 'Solid White Oak & Birch Slats',
      Assembly: '2-Person Assembly Required',
      Warranty: '5-Year Structural Warranty'
    }
  },
  {
    id: 'bed-2',
    name: 'Aurelia Tufted Wingback Bed',
    category: 'beds',
    brand: 'Stella Casa',
    price: 949,
    rating: 4.9,
    reviews: 104,
    description: 'Create a majestic center point in your master bedroom. The Aurelia features a tall, grand wingback headboard with hand-tufted details and gorgeous silver nailhead trim. Fully upholstered in performance woven linen.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '85" W x 88" D x 58" H (King)',
      Material: 'Woven Linen, Plywood, Metal Support',
      Assembly: 'Full Assembly Required',
      Warranty: '2-Year Limited Warranty'
    }
  },
  {
    id: 'bed-3',
    name: 'Luna LED Floating Bed Frame',
    category: 'beds',
    brand: 'Modura',
    price: 899,
    rating: 4.7,
    reviews: 55,
    description: 'Give your bedroom a futuristic, high-end feel. The Luna bed uses inset legs to create an optical floating illusion. Comes equipped with remote-controlled warm LED under-bed accent lighting to create a soothing evening ambiance.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '63" W x 84" D x 38" H (Queen)',
      Material: 'MDF Core, Oak Veneer & LED Kit',
      Assembly: 'Assembly & Wiring Required',
      Warranty: '1-Year Electronics, 3-Year Frame'
    }
  },
  {
    id: 'bed-4',
    name: 'Elizabeth Solid Oak Poster Bed',
    category: 'beds',
    brand: 'Heritage Woodworks',
    price: 1499,
    rating: 4.9,
    reviews: 29,
    description: 'A traditional masterpiece designed for generations. The Elizabeth is sculpted from solid Red Oak with intricate turned pillars and an optional overhead canopy frame. Finished in a warm honey varnish.',
    image: 'https://images.unsplash.com/photo-1505693395321-883724634266?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '82" W x 87" D x 82" H (King)',
      Material: 'Solid American Red Oak',
      Assembly: 'Professional Assembly Recommended',
      Warranty: '10-Year Wood Warranty'
    }
  },

  // --- TABLES ---
  {
    id: 'table-1',
    name: 'Remi Solid Oak Coffee Table',
    category: 'tables',
    brand: 'Nordic Craft',
    price: 299,
    rating: 4.7,
    reviews: 145,
    description: 'Minimalist form meets natural texture. The Remi features thick oak veneer construction with a warm matte finish and a built-in lower shelf for books, tablets, or storage baskets. Its rounded rectangular silhouette fits beautifully with modern sofas.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '47" W x 23" D x 16" H',
      Material: 'White Oak Wood Veneer & Engineered Core',
      Assembly: 'No Assembly Required',
      Warranty: '2-Year Limited Warranty'
    }
  },
  {
    id: 'table-2',
    name: 'Trident Glass End Table',
    category: 'tables',
    brand: 'Modura',
    price: 149,
    rating: 4.5,
    reviews: 32,
    description: 'Modern geometric elegance. The Trident End Table features three interlocking matte black steel plates topped with a high-strength tempered clear glass top. An ideal partner for leather armchairs.',
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '20" Diameter x 22" H',
      Material: 'Tempered Glass & Powder-coated Steel',
      Assembly: 'Quick 10-Minute Assembly',
      Warranty: '1-Year Warranty'
    }
  },
  {
    id: 'table-3',
    name: 'Verdant Live-Edge Workstation',
    category: 'tables',
    brand: 'Heritage Woodworks',
    price: 599,
    rating: 4.9,
    reviews: 49,
    description: 'No two pieces are alike. Made from a solid single slab of walnut wood with natural bark lines intact, supported by solid iron hairpin legs. This workstation features integrated cord slots and power routing underneath.',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '55" W x 28" D x 30" H',
      Material: 'Solid Walnut Slab & Wrought Iron Legs',
      Assembly: 'Leg Attachment Required',
      Warranty: '5-Year Wood Structural Warranty'
    }
  },
  {
    id: 'table-4',
    name: 'Milano Nesting Marble Tables',
    category: 'tables',
    brand: 'Stella Casa',
    price: 399,
    rating: 4.8,
    reviews: 67,
    description: 'Maximize space and aesthetic grandeur. The Milano Nesting Tables come in a set of two round coffee tables. The larger table features a polished white Carrara marble top, and the smaller table slides perfectly underneath with a black Nero Marquina top.',
    image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: 'Large: 32" Dia x 18" H; Small: 24" Dia x 15" H',
      Material: 'Natural Marble & Gold-Finished Brass Frame',
      Assembly: 'Fully Assembled',
      Warranty: '2-Year Limited Warranty'
    }
  },

  // --- DINING ---
  {
    id: 'dining-1',
    name: 'Skye Scandi 6-Seater Dining Set',
    category: 'dining',
    brand: 'Nordic Craft',
    price: 1199,
    rating: 4.7,
    reviews: 80,
    description: 'Bring the family together around the Skye Dining Set. Crafted from solid ashwood, this set includes a spacious 72-inch dining table and six matching chairs with padded light grey upholstered cushions. Clean, airy, and inviting.',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: 'Table: 72" W x 36" D x 30" H; Chairs: 18" W x 20" D x 33" H',
      Material: 'Solid Ashwood & Polyester Upholstery',
      Assembly: 'Table legs and chair backs assembly required',
      Warranty: '3-Year Limited Warranty'
    }
  },
  {
    id: 'dining-2',
    name: 'Forge Industrial Dining Ensemble',
    category: 'dining',
    brand: 'Modura',
    price: 899,
    rating: 4.6,
    reviews: 41,
    description: 'Robust, edgy, and modern. The Forge Dining Set features a reclaimed wood dining top set on a cross-braced steel frame. Comes with a matching long dining bench and four matte black powder-coated steel bistro chairs.',
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: 'Table: 60" W x 34" D x 30" H; Bench: 48" W x 14" D x 18" H',
      Material: 'Reclaimed Pine & Heavy Duty Steel',
      Assembly: 'Full Assembly Kit Included',
      Warranty: '2-Year Frame Warranty'
    }
  },
  {
    id: 'dining-3',
    name: 'Imperial Round Marble Dining Table',
    category: 'dining',
    brand: 'Stella Casa',
    price: 1499,
    rating: 4.9,
    reviews: 53,
    description: 'Host unforgettable dinner parties. The Imperial Round Table sits up to 6 guests. Features a luxurious, thick circular Carrara marble top with a modern fluted cylinder wood pedestal base. High-gloss sealant prevents staining.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '54" Diameter x 30" H',
      Material: 'Carrara Marble & Fluted Walnut Pedestal',
      Assembly: 'White Glove Assembly Recommended (Very Heavy)',
      Warranty: '5-Year Sealed Stone Warranty'
    }
  },
  {
    id: 'dining-4',
    name: 'Verona Compact Bistro Set',
    category: 'dining',
    brand: 'Heritage Woodworks',
    price: 349,
    rating: 4.5,
    reviews: 19,
    description: 'Perfect for sunny breakfast nooks or apartments. The Verona Set consists of a small circular solid oak drop-leaf table and two slender, matching ladder-back chairs with cushioned seat bases.',
    image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: 'Table: 30" Dia (leaves collapsed: 18") x 29" H',
      Material: 'Solid Oak Wood & Woven Cotton Cushions',
      Assembly: 'Minimal Assembly Required',
      Warranty: '1-Year Wood Warranty'
    }
  },

  // --- WARDROBES ---
  {
    id: 'wardrobe-1',
    name: 'Reflecta Sliding Mirror Wardrobe',
    category: 'wardrobes',
    brand: 'Modura',
    price: 849,
    rating: 4.8,
    reviews: 62,
    description: 'Declutter your bedroom in ultimate style. The Reflecta sliding wardrobe features two massive floor-to-ceiling mirror doors that run smoothly on premium dampening tracks. Inside includes dual hanging rails, 6 adjustable shelves, and 3 soft-close drawers.',
    image: 'https://images.unsplash.com/photo-1558882224-cca166733360?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '72" W x 24" D x 85" H',
      Material: 'Engineered Wood, Aluminum & Tempered Mirrors',
      Assembly: 'Professional Assembly Recommended (Heavier panels)',
      Warranty: '3-Year Track & Panel Warranty'
    }
  },
  {
    id: 'wardrobe-2',
    name: 'Louis Vintage Oak Armoire',
    category: 'wardrobes',
    brand: 'Heritage Woodworks',
    price: 1199,
    rating: 4.9,
    reviews: 31,
    description: 'Inspired by traditional French country craftsmanship. The Louis Armoire is made from solid oak with gorgeous hand-carved moldings, brass key locks, and a distressed warm oil finish. Features a spacious top shelf and full hanging clearance.',
    image: 'https://images.unsplash.com/photo-1602872030219-cbf948a9144c?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '48" W x 22" D x 76" H',
      Material: 'Solid Oak & Solid Brass Hardware',
      Assembly: 'Fully Assembled (Single Unit)',
      Warranty: '10-Year Wood & Joint Warranty'
    }
  },
  {
    id: 'wardrobe-3',
    name: 'Elise Modular Open Wardrobe',
    category: 'wardrobes',
    brand: 'Nordic Craft',
    price: 499,
    rating: 4.6,
    reviews: 48,
    description: 'An open-concept closet solution that organizes and displays your wardrobe. Built from lightweight, high-strength birchwood, the Elise offers adjustable industrial metal hanging rods, shoe racks, and modular storage baskets. Easy to wall-mount.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '60" W x 18" D x 80" H',
      Material: 'Birch Plywood & Powder-coated Steel Rods',
      Assembly: 'Wall Anchoring Required',
      Warranty: '2-Year Limited Warranty'
    }
  },
  {
    id: 'wardrobe-4',
    name: 'Apex Minimalist 3-Door Closet',
    category: 'wardrobes',
    brand: 'Stella Casa',
    price: 749,
    rating: 4.7,
    reviews: 37,
    description: 'Clean lines, seamless look. The Apex 3-Door Closet features handle-less push-to-open doors in a beautiful matte white finish. The rightmost third door opens to reveal specialized shelves, while the double doors house a long clothes hanger and tie hooks.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    specs: {
      Dimensions: '59" W x 22" D x 78" H',
      Material: 'Premium Particle Board & Soft-close Hinges',
      Assembly: 'Full Self-Assembly (2-Person)',
      Warranty: '2-Year Hinge & Structure Warranty'
    }
  }
];
