"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, MessageSquare, Search, Shirt, Sparkles, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export interface FabricItem {
  id: string;
  name: string;
  category: "basics" | "textured" | "heavyweight" | "fast-fashion";
  description: string;
  gsmRange: string;
  features: string[];
  bestFor: string;
  tag?: string;
  composition: string;
  availableColors: string[];
}

export const FABRICS: FabricItem[] = [
  {
    id: "single-jersey",
    name: "Single Jersey",
    category: "basics",
    description: "Lightweight, breathable, and exceptionally smooth — the everyday workhorse fabric for t-shirts, innerwear, and tops.",
    gsmRange: "120 – 240 GSM",
    composition: "100% Combed Cotton, Cotton-Poly Blends, Lycra Jersey",
    availableColors: ["Pure White", "Jet Black", "Navy Blue", "Melange Grey", "Custom Shades"],
    features: ["100% Cotton & Cotton-Poly Blends", "Biowashed & Soft Finish Options", "High Color Fastness & Dimensional Stability"],
    bestFor: "Basic T-Shirts, Polo Shirts, Casual Tops, Sleepwear",
  },
  {
    id: "pique",
    name: "Pique Fabric",
    category: "textured",
    description: "Distinct honeycomb waffle texture engineered for classic polo shirts with superior breathability and structural integrity.",
    gsmRange: "180 – 280 GSM",
    composition: "Cotton Pique, PC Matty, Poly Pique",
    availableColors: ["Royal Blue", "Maroon", "Emerald Green", "Charcoal", "Bright Red"],
    features: ["Classic Honeycomb & Matty Weave", "Minimal Shrinkage & Pill Resistance", "Vibrant Piece-Dyed Shades"],
    bestFor: "Corporate Polo Shirts, Sportswear, Collar T-Shirts",
    tag: "Popular",
  },
  {
    id: "rib",
    name: "Rib Knit (1x1 & 2x2)",
    category: "textured",
    description: "Highly elastic, form-fitting double knit with vertical ribs — essential for collar cuffs, waistbands, and fitted garments.",
    gsmRange: "160 – 320 GSM",
    composition: "1x1 Cotton Rib, 2x2 Heavy Rib, Spandex Rib",
    availableColors: ["Matching Dyeing for All Body Fabrics"],
    features: ["Excellent Stretch Recovery", "Lycra/Spandex Infused Options", "Resilient Texture Under Tension"],
    bestFor: "Collars, Cuffs, Ribbed Tank Tops, Trim Accents",
  },
  {
    id: "interlock",
    name: "Interlock Double Knit",
    category: "heavyweight",
    description: "Smooth double-sided knit fabric with no curling edges. Luxuriously soft, thick, and ideal for mid-weight apparel.",
    gsmRange: "200 – 340 GSM",
    composition: "100% Compacted Cotton Interlock",
    availableColors: ["Pastel Shades", "Dark Tones", "Custom Dyeing"],
    features: ["Identical Smooth Surfaces on Both Sides", "Heavyweight Comfort & Zero Curl", "Superior Thermal Insulation"],
    bestFor: "Premium T-Shirts, Babywear, Activewear, Loungewear",
  },
  {
    id: "fleece",
    name: "Fleece & Loopknit",
    category: "heavyweight",
    description: "Brushed inner lining providing plush insulation and warmth. Available in 2-thread, 3-thread fleece, and French Terry.",
    gsmRange: "280 – 420 GSM",
    composition: "3-Thread Fleece, 2-Thread Loopknit, French Terry",
    availableColors: ["Heather Grey", "Olive Green", "Oatmeal", "Black", "Burgundy"],
    features: ["Brushed Soft Inner Texture", "Heavyweight Winter Fabric", "Anti-Pilling Finish"],
    bestFor: "Hoodies, Sweatshirts, Joggers, Winterwear",
    tag: "Heavy Duty",
  },
  {
    id: "fast-fashion",
    name: "Fast Fashion Structures",
    category: "fast-fashion",
    description: "Trend-driven textured knits introduced by the 2nd generation — engineered for modern retail speed and rapid sampling.",
    gsmRange: "140 – 300 GSM",
    composition: "Waffle Knit, Jacquard Textures, Slub Knit, Ottoman",
    availableColors: ["Seasonal Trend Palettes & Customized Lab Dips"],
    features: ["Rapid Sampling & Quick Turnaround", "Unique Textures & Slub Designs", "Seasonal Color Matching"],
    bestFor: "Retail Collections, Fast-Cycle Fashion, Designer Lines",
    tag: "2nd Gen Innovation",
  },
];

export function ProductsInteractiveCatalog() {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [modalFabric, setModalFabric] = useState<FabricItem | null>(null);

  const filteredFabrics = FABRICS.filter((fabric) => {
    const matchesCategory = selectedTab === "all" || fabric.category === selectedTab;
    const matchesSearch =
      searchQuery === "" ||
      fabric.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fabric.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fabric.gsmRange.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fabric.bestFor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full space-y-8 sm:space-y-10">
      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Tabs with Mobile Swipe */}
        <div className="w-full md:w-auto overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-muted p-1.5 sm:p-2 rounded-2xl border border-border w-max max-w-full">
            {[
              { id: "all", label: "All Fabrics" },
              { id: "basics", label: "Basics & Jersey" },
              { id: "textured", label: "Textured & Pique" },
              { id: "heavyweight", label: "Interlock & Fleece" },
              { id: "fast-fashion", label: "Fast Fashion" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 ${
                  selectedTab === tab.id
                    ? "bg-primary text-white shadow-sm scale-102"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search GSM, cotton, fleece..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-muted/60 border border-border rounded-xl text-xs font-medium focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/70"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Fabric Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab + searchQuery}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredFabrics.map((fabric) => (
            <div
              key={fabric.id}
              className="bg-card border border-border rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {fabric.tag && (
                <span className="absolute top-5 sm:top-6 right-5 sm:right-6 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary px-2.5 sm:px-3 py-1 rounded-full border border-primary/20">
                  {fabric.tag}
                </span>
              )}

              <div>
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 sm:mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Shirt className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="font-numbers text-xs font-bold text-primary bg-muted px-2.5 py-1 rounded-md">
                    {fabric.gsmRange}
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wide text-foreground mb-2 sm:mb-3">
                  {fabric.name}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
                  {fabric.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {fabric.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-medium text-foreground/80">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 sm:pt-6 border-t border-border space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold block mb-1">Recommended End-Use</span>
                  <span className="text-xs font-bold text-foreground">{fabric.bestFor}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setModalFabric(fabric)}
                    className="w-full uppercase tracking-widest text-[11px] font-bold py-2.5 rounded-full border border-border bg-muted hover:bg-card text-foreground transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>View Specs</span>
                  </button>
                  <Link
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi Siya Ram Fabrics, I am interested in inquiring about ${fabric.name} (${fabric.gsmRange}). Please send sample roll details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({
                      size: "sm",
                      className: "w-full uppercase tracking-widest text-[11px] font-bold rounded-full bg-primary hover:bg-primary/90 text-white transition-all py-2.5 justify-center gap-1",
                    })}
                  >
                    <span>Sample Roll</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modal Dialog for Specs & Direct Inquiry */}
      <AnimatePresence>
        {modalFabric && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
            >
              <button
                onClick={() => setModalFabric(null)}
                className="absolute top-5 right-5 text-muted-foreground hover:text-foreground text-lg font-bold w-8 h-8 rounded-full bg-muted flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Technical Specifications
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-foreground">{modalFabric.name}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{modalFabric.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-muted/60 p-4 rounded-2xl border border-border/60">
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block mb-0.5">GSM Range</span>
                  <span className="font-numbers text-sm font-bold text-primary">{modalFabric.gsmRange}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block mb-0.5">Fiber Composition</span>
                  <span className="text-xs font-semibold text-foreground">{modalFabric.composition}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block mb-0.5">Available Colors & Dyeing</span>
                  <span className="text-xs font-medium text-foreground">{modalFabric.availableColors.join(", ")}</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-primary tracking-widest block">Key Attributes</span>
                {modalFabric.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-foreground/90">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/contact"
                  onClick={() => setModalFabric(null)}
                  className={buttonVariants({
                    size: "default",
                    className: "w-full uppercase tracking-widest text-xs font-bold rounded-full bg-primary hover:bg-primary/90 text-white justify-center",
                  })}
                >
                  Fill Inquiry Form <Sparkles className="w-3.5 h-3.5 ml-1.5" />
                </Link>
                <Link
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi Siya Ram Fabrics, I would like to request physical sample swatches for ${modalFabric.name} (${modalFabric.gsmRange}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    size: "default",
                    variant: "outline",
                    className: "w-full uppercase tracking-widest text-xs font-bold rounded-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white justify-center gap-2",
                  })}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
