export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: "Fabric Engineering" | "Industry Insights" | "Dyeing & Chemistry" | "Sustainability";
  author?: {
    name: string;
    role: string;
    avatar?: string;
  };
  date: string;
  readTime: string;
  tags: string[];
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      keyTakeaway?: string;
    }[];
    conclusion: string;
  };
}

export const INITIAL_BLOGS: BlogPost[] = [
  {
    id: "fabric-gsm-guide",
    slug: "how-to-choose-the-right-knitted-fabric-gsm",
    title: "How to Choose the Right Knitted Fabric GSM for Premium T-Shirts & Hoodies",
    excerpt:
      "A practical engineering guide for apparel brands and garment exporters on selecting optimal GSM, yarn counts, and compaction parameters for summer tees and winter sweatshirts.",
    coverImage: "/images/process-knitting.jpg",
    category: "Fabric Engineering",
    author: {
      name: "Harish Jindal",
      role: "Founder & Managing Director",
    },
    date: "August 14, 2026",
    readTime: "5 min read",
    tags: ["GSM Guide", "Single Jersey", "Fleece", "Textile Engineering"],
    content: {
      intro:
        "Grams per Square Metre (GSM) is the single most critical metric defining fabric weight, handfeel, opacity, and drape in circular knitted textiles. Selecting the wrong GSM can lead to garment sagging, excessive wash shrinkage, or uncomfortable wear.",
      sections: [
        {
          heading: "1. Summer Essentials: 140 to 220 GSM Single Jersey & Pique",
          body: [
            "For classic summer t-shirts, polo shirts, and innerwear, single jersey fabrics knitted from 30s to 40s combed cotton yarn in the 160–200 GSM range provide the ideal balance between breathability and opacity.",
            "If your brand designs structured golf and corporate polo shirts, honeycomb pique matty at 220–260 GSM ensures collar integrity and zero clinginess under warm, humid conditions.",
          ],
          keyTakeaway:
            "Always specify biowash enzymatic finishing for 180+ GSM jersey to eliminate surface fuzz and guarantee Grade 4.5 wash fastness.",
        },
        {
          heading: "2. Winter & Heavyweight Streetwear: 280 to 420 GSM Fleece",
          body: [
            "Oversized luxury hoodies and winter joggers demand structural density. Our 3-thread fleece (380–420 GSM) features a heavy-denier brushed loopback layer that provides high thermal insulation with zero fiber shedding.",
            "For mid-weight transeasonal tops and babywear, double-sided interlock knit (220–280 GSM) guarantees identical smooth face and reverse surfaces with zero edge curl during cutting.",
          ],
          keyTakeaway:
            "Felt compaction is mandatory for heavy fleece to keep residual wash shrinkage under 3.0% along course and wale directions.",
        },
        {
          heading: "3. The Role of Elastane (Lycra) in Shape Retention",
          body: [
            "Adding 5% to 8% DuPont Lycra into 24G–34G circular knitting feeds allows single jersey and 2x2 rib knits to recover their original dimensions even after 50+ industrial washes, preventing neckband stretching and bagging knees in joggers.",
          ],
        },
      ],
      conclusion:
        "At Siya Ram Fabrics, our Ludhiana facility manufactures knitted fabrics from 120 GSM ultra-light jersey up to 420 GSM heavyweight winter fleece. Request physical sample swatches to test exact GSM drape and handfeel before bulk production.",
    },
  },
  {
    id: "sustainable-dyeing-chemistry",
    slug: "understanding-sustainable-softflow-dyeing-and-etp",
    title: "Zero-AZO Chemistry & Low-Liquor Ratios: Modern Sustainable Dyeing",
    excerpt:
      "How computerized softflow vessels, 1:5 low-liquor ratios, and in-house biological effluent treatment plants (ETP) deliver consistent Delta E < 0.8 shades with zero toxic discharge.",
    coverImage: "/images/process-dyeing.jpg",
    category: "Sustainability",
    author: {
      name: "Saransh Jindal",
      role: "Director of Operations",
    },
    date: "July 28, 2026",
    readTime: "6 min read",
    tags: ["Eco Dyeing", "OEKO-TEX", "ETP Plant", "Delta E Accuracy"],
    content: {
      intro:
        "Wet processing is traditionally the most resource-intensive phase of textile manufacturing. Modern fabric buyers now demand not only vibrant, wash-fast shades but also absolute traceability and eco-friendly processing.",
      sections: [
        {
          heading: "1. Ultra-Low 1:5 Liquor Ratio Softflow Vessels",
          body: [
            "Older winch dyeing systems consumed up to 15 litres of water per kilogram of fabric. Our modern computerized softflow vessels operate at a 1:5 liquor ratio, reducing fresh water consumption by over 60% while ensuring uniform dye liquor penetration.",
            "Automated color kitchen dispensing guarantees recipe repeat accuracy with color variance tolerance under Delta E < 0.8 between initial lab dips and bulk 1,000 Kg production lots.",
          ],
          keyTakeaway:
            "Lower water volumes mean higher dye exhaust efficiency, resulting in deeper color depth and lower chemical auxiliary usage.",
        },
        {
          heading: "2. Zero-AZO, OEKO-TEX Standard 100 Class I Dyes",
          body: [
            "Every reactive and disperse dyestuff used at Siya Ram Fabrics is certified free from banned aromatic amines, formaldehyde, and heavy metals. This ensures the finished fabric is safe even for infant clothing and sensitive skin applications.",
          ],
        },
        {
          heading: "3. Complete Zero Liquid Discharge (ZLD) via In-House ETP",
          body: [
            "Our integrated effluent treatment plant uses multi-stage biological digestion, clarifiers, and reverse osmosis (RO) membrane filtration. Up to 85% of treated water is recycled back into non-critical washing cycles, ensuring environmental sustainability in Ludhiana.",
          ],
          keyTakeaway:
            "Sustainable manufacturing is an investment in long-term brand credibility and compliance with global export standards.",
        },
      ],
      conclusion:
        "By combining digital shade recipe databases with state-of-the-art effluent control, Siya Ram Fabrics delivers world-class color accuracy with responsible ecological responsibility.",
    },
  },
  {
    id: "fast-fashion-sampling",
    slug: "speed-to-market-agile-textile-sampling",
    title: "Speed to Market: How 48-Hour Rapid Sampling Empowers Apparel Brands",
    excerpt:
      "Why second-generation textile agility, computerized lab dips, and quick-turnaround circular knitting lines are essential for modern retail brands.",
    coverImage: "/images/factory_floor.png",
    category: "Industry Insights",
    author: {
      name: "Yuvraj Jindal",
      role: "Director of Strategy & Technology",
    },
    date: "July 10, 2026",
    readTime: "4 min read",
    tags: ["Fast Fashion", "Lab Dips", "Supply Chain", "Retail Speed"],
    content: {
      intro:
        "In modern fashion retail, trend cycles that once lasted six months now evolve in weeks. Garment manufacturers and direct-to-consumer (D2C) brands cannot afford four-week lead times just to approve a fabric color swatch.",
      sections: [
        {
          heading: "1. The 48-Hour Computerized Lab Dip Express",
          body: [
            "Using spectrophotometer digital color matching and 12-beaker automated lab dyeing units, our color laboratory creates accurate 3-shade Pantone TCX lab dips within 48 hours of receiving physical swatches or color codes.",
            "This eliminates weeks of back-and-forth couriers and allows design teams to lock production schedules with confidence.",
          ],
          keyTakeaway:
            "Faster sample approvals shorten total garment production lead times by up to 35%.",
        },
        {
          heading: "2. Flexible Low MOQ Trial Knitting",
          body: [
            "We support growing apparel labels with dedicated trial sample rolls (20–50 Kg) across single jersey, pique, french terry, and custom jacquard textures before committing to multi-ton bulk production runs.",
          ],
        },
      ],
      conclusion:
        "Second-generation leadership at Siya Ram Fabrics blends 28+ years of manufacturing discipline with digital agile workflows to help your brand launch faster.",
    },
  },
];
