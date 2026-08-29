"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Calendar,
  Tag,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  ExternalLink,
  Award,
  Layers,
  MapPin,
  Clock,
  BookOpen,
  Radio,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";
import { BlogListAndUpload } from "@/components/blog-list-and-upload";

const LAUNCH_CATEGORIES = [
  "All Updates",
  "New Collections",
  "Exhibitions & Events",
  "Plant & Tech Upgrades",
  "Sustainability & Accreditations",
];

const UPDATES = [
  {
    id: "aw26-french-terry",
    category: "New Collections",
    title: "Autumn/Winter 2026: 400 GSM Heavyweight Bio-Wash French Terry",
    date: "August 2026",
    badge: "New Release",
    badgeColor: "bg-primary/10 text-primary border-primary/30",
    image: "/images/fabric_rolls.png",
    summary:
      "Engineered for luxury streetwear hoodies and oversized winter sweatshirts. Crafted with 100% combed cotton, zero-twist loopback backing, and enzymatic bio-wash finish for an ultra-soft handfeel.",
    highlights: [
      "400 GSM heavy-knit loopback structure with zero shedding",
      "Available in 24 ready stock seasonal shades with matching 2x2 Lycra rib",
      "Preshrunk via felt compaction with <3% residual shrinkage",
    ],
    ctaText: "Order Sample Hanger",
  },
  {
    id: "bharat-tex-2026",
    category: "Exhibitions & Events",
    title: "Bharat Tex 2026: Meet Siya Ram Fabrics at Yashobhoomi, Delhi",
    date: "July 2026",
    badge: "Trade Exhibition",
    badgeColor: "bg-primary/10 text-primary border-primary/30",
    image: "/images/factory_floor.png",
    summary:
      "Join our directors and textile engineering team at India's premier international textile showcase. Experience live sampling of our 40+ circular knitted fabrics and explore B2B contract manufacturing partnerships.",
    highlights: [
      "Booth Hall 4 • Stall B-12 (Yashobhoomi IICC, New Delhi)",
      "Live touch & feel sample library with 100+ swatch shades",
      "Special priority booking slots for garment exporters and fashion brands",
    ],
    ctaText: "Schedule Booth Meeting",
  },
  {
    id: "plant-solar-upgrade",
    category: "Plant & Tech Upgrades",
    title: "Plant Modernization: Solar Array & Digital Spindle Barcoding",
    date: "June 2026",
    badge: "Infrastructure",
    badgeColor: "bg-primary/10 text-primary border-primary/30",
    image: "/images/knitting_machine.png",
    summary:
      "As part of our commitment to sustainable scale, we commissioned a 500 kW rooftop solar generation plant and completed full QR-barcode tracking across all 12 manufacturing stages in Ludhiana.",
    highlights: [
      "40% of plant daily daytime energy powered by on-site solar",
      "Digital roll tracking from raw yarn cone to final dispatch carton",
      "Automated inspection table sync with ERP quality certificates",
    ],
    ctaText: "Explore Infrastructure",
  },
  {
    id: "bamboo-modal-drop",
    category: "New Collections",
    title: "Eco-Luxe Drop: Organic Bamboo & Micro-Modal Stretch Rib",
    date: "May 2026",
    badge: "Eco Series",
    badgeColor: "bg-primary/10 text-primary border-primary/30",
    image: "/images/fabric_rolls.png",
    summary:
      "Silky, breathable, and naturally antibacterial. Our newly launched Bamboo-Cotton and Micro-Modal blends (220–260 GSM) cater to premium innerwear, athleisure, and relaxed loungewear brands.",
    highlights: [
      "Natural thermo-regulating and moisture-wicking organic fibers",
      "4-way stretch retention with DuPont Lycra integration",
      "Ultra-fine 32G knitting delivering a buttery soft touch",
    ],
    ctaText: "Request Swatch Kit",
  },
  {
    id: "oeko-tex-renewal",
    category: "Sustainability & Accreditations",
    title: "OEKO-TEX Standard 100 Class I Renewal & Zero-AZO Certification",
    date: "April 2026",
    badge: "Certification",
    badgeColor: "bg-primary/10 text-primary border-primary/30",
    image: "/images/factory_floor.png",
    summary:
      "All dyeing and finishing operations in our Ludhiana plant have successfully passed rigorous annual third-party audits, certified safe even for infant and sensitive skin apparel.",
    highlights: [
      "Tested for over 300 regulated and non-regulated harmful chemicals",
      "100% heavy-metal-free reactive dyestuffs and auxiliaries",
      "Zero toxic effluent discharge verified by state environmental boards",
    ],
    ctaText: "View Accreditations",
  },
  {
    id: "fast-sampling-program",
    category: "New Collections",
    title: "48-Hour Rapid Sampling Express for Fast-Fashion Retailers",
    date: "March 2026",
    badge: "Service Update",
    badgeColor: "bg-primary/10 text-primary border-primary/30",
    image: "/images/knitting_machine.png",
    summary:
      "Spearheaded by second-generation director Yuvraj Jindal (MBA 2023), our express lab dip program delivers custom pantone-matched sample swatches in 48 to 72 hours for rapid design approvals.",
    highlights: [
      "12-beaker computerized automated lab dyeing machines",
      "Pantone TCX and physical swatch matching with spectrophotometer confirmation",
      "Low minimum order quantity (MOQ) sampling rolls supported",
    ],
    ctaText: "Start Sample Request",
  },
];

export default function WhatsNewPage() {
  const [activeMainTab, setActiveMainTab] = useState<"blogs" | "launches">("launches");
  const [selectedLaunchCategory, setSelectedLaunchCategory] = useState("All Updates");

  const filteredUpdates =
    selectedLaunchCategory === "All Updates"
      ? UPDATES
      : UPDATES.filter((u) => u.category === selectedLaunchCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-20 bg-gradient-to-b from-[#111111] via-[#1a0e12] to-[#111111] text-white overflow-hidden">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-bright/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-white/60 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-bright">What&apos;s New</span>
          </div>

          <FadeIn direction="up">
            <div className="max-w-4xl space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-bright bg-brand-bright/10 border border-brand-bright/30 px-4 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" /> Latest Launches, Insights & Blogs
              </span>
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white leading-tight">
                What&apos;s New at <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-bright to-white">
                  Siya Ram Fabrics
                </span>
              </h1>
              <p className="text-white/80 text-base sm:text-xl leading-relaxed max-w-2xl">
                Explore technical fabric guides, seasonal collection launches, textile engineering blogs, and company milestones.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Section Switcher Tabs */}
      <section className="py-6 bg-muted/60 border-b border-border sticky top-16 md:top-20 z-30 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveMainTab("launches")}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeMainTab === "launches"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-card text-foreground hover:bg-card/80 border border-border"
              }`}
            >
              <Radio className="w-4 h-4" />
              <span>Plant & Collection Launches</span>
            </button>

            <button
              onClick={() => setActiveMainTab("blogs")}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeMainTab === "blogs"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-card text-foreground hover:bg-card/80 border border-border"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Technical Blogs & Guides</span>
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          {activeMainTab === "blogs" ? (
            /* 1. Interactive Blogs & Upload Section */
            <BlogListAndUpload />
          ) : (
            /* 2. Launches & Company Announcements Section */
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl">
                  <span className="text-primary font-semibold tracking-[0.15em] uppercase text-xs sm:text-sm mb-2 block">
                    Company Updates
                  </span>
                  <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
                    Plant & Product Releases
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base mt-2 leading-relaxed">
                    Live updates on new circular knit structure launches, exhibition showcases, and facility expansions.
                  </p>
                </div>
              </div>

              {/* Filter Pills for Launches */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-border pt-2">
                {LAUNCH_CATEGORIES.map((cat) => {
                  const isSelected = selectedLaunchCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedLaunchCategory(cat)}
                      className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                        isSelected
                          ? "bg-primary text-white shadow-sm"
                          : "bg-card text-foreground/80 hover:bg-card/80 hover:text-primary border border-border"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Launches Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredUpdates.map((item, idx) => (
                  <FadeIn key={item.id} direction="up" delay={idx * 0.1}>
                    <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
                      {/* Image with Tag */}
                      <div className="relative h-56 w-full overflow-hidden bg-muted">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                          <span
                            className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border backdrop-blur-md bg-black/60 ${item.badgeColor}`}
                          >
                            {item.badge}
                          </span>
                          <span className="text-[11px] font-semibold text-white/90 bg-black/60 px-2.5 py-1 rounded-full border border-white/20">
                            {item.date}
                          </span>
                        </div>
                      </div>

                      {/* Body Content */}
                      <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-3">
                          <span className="text-[11px] font-bold uppercase tracking-widest text-primary block">
                            {item.category}
                          </span>
                          <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground leading-snug group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                            {item.summary}
                          </p>
                        </div>

                        {/* Bullet Highlights */}
                        <div className="space-y-2 border-t border-border/60 pt-4 text-xs">
                          {item.highlights.map((h) => (
                            <div key={h} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                              <span className="text-foreground/80 leading-snug">{h}</span>
                            </div>
                          ))}
                        </div>

                        {/* Action Button */}
                        <div className="pt-4 border-t border-border/60">
                          <Link
                            href="/contact"
                            className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-widest text-primary hover:text-foreground transition-colors group/btn"
                          >
                            <span>{item.ctaText}</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Direct Factory Connect CTA */}
      <section className="py-16 md:py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-bright block">
                Direct Factory Connect
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white">
                Looking for a Custom Knit Development?
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Connect directly with our 2nd generation directors to develop proprietary knit structures, seasonal shade recipes, and dedicated plant production slots.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                href="/contact"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "uppercase tracking-widest font-semibold rounded-full bg-primary text-white hover:bg-[#8F1A2C] hover:text-white transition-all shadow-md",
                })}
              >
                Inquire With Directors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
