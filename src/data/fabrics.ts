export interface CollectionInfo {
  id: "summer" | "winter";
  title: string;
  subtitle: string;
  highlights: string;
  description: string;
  image: string;
  badge: string;
  seasonIcon: "sun" | "snowflake";
  fabricCount: number;
  slug: string;
}

export const COLLECTIONS: CollectionInfo[] = [
  {
    id: "summer",
    title: "Summer Collection",
    subtitle: "Lightweight, breathable & smooth knitted structures for warm seasons",
    highlights: "140 – 260 GSM • Spun Matty, Fake Cotton, Sharina & Dull Plating",
    description:
      "Lightweight, breathable, and exceptionally smooth knitted fabrics engineered for polo shirts, casual t-shirts, tops, and fast fashion retail collections.",
    image: "/images/summer-collection-collage.jpg",
    badge: "Summer Knits",
    seasonIcon: "sun",
    fabricCount: 4,
    slug: "/products/summer",
  },
  {
    id: "winter",
    title: "Winter Collection",
    subtitle: "Heavyweight, plush & high-insulation fleece and thermal winter knits",
    highlights: "260 – 450 GSM • Russian, Airjet, 3-Thread & Cotton Fleece",
    description:
      "Plush brushed inner lining and dense knit structures providing maximum thermal insulation, shape retention, and luxury handfeel for hoodies, sweatshirts, and joggers.",
    image: "/images/winter-collection-fleece.jpg",
    badge: "Winter Warmth",
    seasonIcon: "snowflake",
    fabricCount: 6,
    slug: "/products/winter",
  },
];

export interface FabricItem {
  id: string;
  name: string;
  category: "all" | "basics" | "textured" | "heavyweight" | "fast-fashion";
  collections: ("summer" | "winter")[];
  description: string;
  gsmRange: string;
  features: string[];
  bestFor: string;
  tag?: string;
  composition: string;
  availableColors: string[];
  image?: string;
}

export const FABRICS: FabricItem[] = [
  // ================= SUMMER COLLECTION (4 PRODUCTS) =================
  {
    id: "spun-matty",
    name: "Spun Matty",
    category: "textured",
    collections: ["summer"],
    description:
      "Classic honeycomb pique knitted structure crafted from premium spun yarns. Highly breathable, shape-retaining, and engineered for high durability in warm climates.",
    gsmRange: "210 – 260 GSM",
    composition: "100% Spun Polyester / PC Yarn Blend",
    availableColors: ["Navy Blue", "Royal Blue", "Jet Black", "Pure White", "Maroon", "Custom Shades"],
    features: [
      "Durable Honeycomb Matty Pique Weave",
      "High Color Fastness & Minimal Shrinkage",
      "Breathable & Shape-Retaining Collar Fit",
    ],
    bestFor: "Corporate Polo T-Shirts, School & Work Uniforms, Collared Sportswear",
    tag: "Best Seller",
    image: "/images/spun_matty.JPG",
  },
  {
    id: "fake-cotton",
    name: "Fake Cotton",
    category: "basics",
    collections: ["summer"],
    description:
      "Engineered spun knit fabric delivering the natural, soft handfeel of cotton with the superior wrinkle resistance, quick-dry performance, and tensile strength of micro synthetics.",
    gsmRange: "160 – 220 GSM",
    composition: "Cotton-Touch Spun Micro / Poly-Cotton Blend",
    availableColors: ["Melange Grey", "Pure White", "Jet Black", "Pastel Sky Blue", "Olive Green"],
    features: [
      "Natural Cotton Touch with Synthetic Durability",
      "Quick-Drying & Wrinkle-Free Structure",
      "High Tensile Strength & Smooth Fall",
    ],
    bestFor: "Casual Summer T-Shirts, Promotional Wear, Daily Casual Tops",
    tag: "Popular",
    image: "/images/Fake Cotton.JPG",
  },
  {
    id: "sharina-fabric",
    name: "Sharina Fabric",
    category: "fast-fashion",
    collections: ["summer"],
    description:
      "Ultra-soft, silky drapey lightweight knitted fabric. Designed for the modern fast-fashion segment with fluid drape, natural stretch recovery, and rich aesthetic finish.",
    gsmRange: "140 – 200 GSM",
    composition: "Fine Drape Textured Filament Knit",
    availableColors: ["Wine / Maroon", "Emerald Green", "Dusty Pink", "Lavender", "Seasonal Trend Dips"],
    features: [
      "Ultra-Soft Luxurious Handfeel & Silky Drape",
      "Fluid Movement & High Breathability",
      "Excellent Elasticity & Crease Resistance",
    ],
    bestFor: "Ladies Tops, Fast Fashion Retail, Summer Drape Tees, Designer Lines",
    tag: "Fast Fashion",
    image: "/images/products/sharina-fabric.jpg",
  },
  {
    id: "dull-plating",
    name: "Dull Plating",
    category: "textured",
    collections: ["summer"],
    description:
      "Specialised dual-layer plated knit structure featuring a sophisticated non-shiny matte face. Offers high dimensional stability, anti-snag resistance, and premium body fall.",
    gsmRange: "180 – 250 GSM",
    composition: "Dual-Sided Plated Knitted Structure (Matte Face)",
    availableColors: ["Charcoal Grey", "Olive Green", "Midnight Blue", "Sand Beige", "Custom Mill Dips"],
    features: [
      "Refined Non-Reflective Matte Face Finish",
      "Dual-Layer Plated Stability & Anti-Snag",
      "Compact Knit Structure with Clean Fall",
    ],
    bestFor: "Premium Polo Shirts, Fashion T-Shirts, Modern Athleisure",
    tag: "Premium Matte",
    image: "/images/dull plating.JPG",
  },

  // ================= WINTER COLLECTION (6 PRODUCTS) =================
  {
    id: "russian-fleece",
    name: "Russian Fleece",
    category: "heavyweight",
    collections: ["winter"],
    description:
      "Ultra-dense heavyweight winter fleece with an exceptionally thick, velvety plush thermal inner pile. Provides maximum insulation and wind-blocking warmth for harsh winters.",
    gsmRange: "320 – 450 GSM",
    composition: "High-Density Brushed Fleece with Plush Thermal Backing",
    availableColors: ["Charcoal Black", "Military Olive", "Deep Navy", "Burgundy", "Custom Shades"],
    features: [
      "Extra Thick Plush Brushed Velvety Inner Insulation",
      "Extreme Cold Climate Warmth & Wind Resistance",
      "Luxurious Heavyweight Fall & Structure",
    ],
    bestFor: "Heavy Winter Hoodies, Cold-Weather Jackets, Thermal Sweatshirts, Heavy Tracksuits",
    tag: "Heavy Duty Warmth",
    image: "/images/russian fleece.JPG",
  },
  {
    id: "airjet-fleece",
    name: "Airjet Fleece",
    category: "heavyweight",
    collections: ["winter"],
    description:
      "Knitted using advanced airjet-spun yarns to eliminate outer pilling and fuzz. Features a glass-smooth outer face ideal for high-definition printing and a cosy brushed interior.",
    gsmRange: "280 – 380 GSM",
    composition: "Airjet Spun Yarn Fleece with Brushed Inner",
    availableColors: ["Royal Blue", "Jet Black", "Heather Grey", "Crimson Red", "Solid Dyed Colors"],
    features: [
      "Pill-Resistant Airjet Yarn Exterior",
      "Ultra-Smooth Printing Surface (DTF, Screen, Embroidery)",
      "Soft Thermal Brushed Back for Maximum Comfort",
    ],
    bestFor: "Branded Hoodies, Export-Quality Sweatshirts, High-Def Printed Apparel",
    tag: "Zero Pilling",
    image: "/images/products/airjet-fleece.jpg",
  },
  {
    id: "spun-fleece",
    name: "Spun Fleece",
    category: "heavyweight",
    collections: ["winter"],
    description:
      "Durable and cost-effective winter fleece knitted from 100% spun polyester yarns. Delivers reliable warmth, high tear resistance, and anti-static finish for volume apparel production.",
    gsmRange: "260 – 360 GSM",
    composition: "100% Spun Polyester / PC Winter Fleece",
    availableColors: ["Oatmeal Beige", "Charcoal Melange", "Navy", "Bottle Green", "Black"],
    features: [
      "High Warmth-to-Weight Ratio & Heat Retention",
      "Cost-Effective Bulk Winter Production Fabric",
      "Resilient Anti-Static & Easy-Care Finish",
    ],
    bestFor: "Everyday Winter Hoodies, Fleece Joggers, Sweatpants, School Winter Uniforms",
    tag: "Bulk Production",
    image: "/images/products/spun-fleece.jpg",
  },
  {
    id: "rfd-fleece-cotton",
    name: "RFD Fleece Cotton",
    category: "basics",
    collections: ["winter"],
    description:
      "Ready-For-Dyeing (RFD) premium cotton fleece delivered in pure natural unbleached state. Engineered with high dye affinity for garment-dyeing, vintage enzyme washes, and tie-dye.",
    gsmRange: "300 – 400 GSM",
    composition: "100% Premium Combed Cotton (Ready-For-Dyeing)",
    availableColors: ["Natural Ecru / Unbleached Raw Off-White (Ready for Custom Garment Dyeing)"],
    features: [
      "Unprocessed Pure Cotton Ready for Custom Garment Dyeing",
      "Ideal for Acid Wash, Vintage Wash & Pigment Dyeing",
      "Superior Dye Absorption & Soft Natural Handfeel",
    ],
    bestFor: "Custom Streetwear Brands, Dye Houses, Vintage Washed Hoodies, Acid Wash Joggers",
    tag: "Ready For Dyeing",
    image: "/images/products/rfd-fleece-cotton.jpg",
  },
  {
    id: "three-thread-fleece",
    name: "3 Thread Fleece",
    category: "heavyweight",
    collections: ["winter"],
    description:
      "The gold standard in premium winter knitwear. Constructed using 3 distinct yarns (face yarn, tie yarn, and heavy loop yarn) to create an ultra-heavy, structured, and non-sagging fabric.",
    gsmRange: "320 – 420 GSM",
    composition: "3-Thread Knitted Structure (Face Yarn, Tie Yarn, Heavy Loop)",
    availableColors: ["Wine Red", "Deep Black", "Sage Green", "Heather Grey", "Earthy Tones"],
    features: [
      "Authentic 3-Yarn Engineered Heavyweight Knitted Construction",
      "Super Dense Diagonal Loop & Deep Brushed Interior",
      "Superior Shape Retention & Zero Sagging Structure",
    ],
    bestFor: "Luxury Oversized Hoodies, Premium Streetwear Sweatshirts, Heavyweight Winter Joggers",
    tag: "Streetwear Benchmark",
    image: "/images/products/3-thread-fleece.jpg",
  },
  {
    id: "cotton-fleece",
    name: "Cotton Fleece",
    category: "basics",
    collections: ["winter"],
    description:
      "100% pure combed cotton winter fleece with biowashed finish. Extremely breathable, skin-friendly, and non-allergenic with a soft brushed inner lining for premium winter comfort.",
    gsmRange: "280 – 380 GSM",
    composition: "100% Combed Cotton / Cotton-Rich Winter Fleece",
    availableColors: ["Pure Jet Black", "Optic White", "Navy Blue", "Melange Tones", "Custom Pantone Shades"],
    features: [
      "100% Breathable Combed Cotton Skin-Friendly Softness",
      "Biowashed & Pre-Shrunk Luxury Brushed Interior",
      "Natural Thermal Insulation with Zero Itch",
    ],
    bestFor: "Premium Brand Hoodies, Comfort Loungewear, Winter Sweatshirts, High-End Winter Lines",
    tag: "100% Cotton",
    image: "/images/products/cotton-fleece.jpg",
  },
];
