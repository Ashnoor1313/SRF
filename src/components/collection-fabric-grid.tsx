"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Eye,
  ImageIcon,
  MessageSquare,
  Search,
  Shirt,
  Sparkles,
  Sun,
  Snowflake,
  X,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FABRICS, FabricItem } from "@/data/fabrics";

// Image display component with graceful fallback for user's real images
function FabricCardImage({
  fabric,
  onOpenModal,
}: {
  fabric: FabricItem;
  onOpenModal: () => void;
}) {
  const [imageError, setImageError] = useState(false);
  const isSummer = fabric.collections.includes("summer");

  return (
    <div
      onClick={onOpenModal}
      className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-muted via-muted/60 to-background border border-border/80 group-hover:border-primary/40 transition-all duration-500 mb-5 shadow-inner cursor-pointer"
    >
      {fabric.image && !imageError ? (
        <Image
          src={fabric.image}
          alt={`${fabric.name} fabric manufactured by Siya Ram Fabrics`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
          onError={() => setImageError(true)}
        />
      ) : (
        /* Aesthetic Textile Swatch Space (ready for real photo) */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-card via-muted/50 to-muted group-hover:from-muted/40 group-hover:to-card transition-colors duration-500">
          {/* Subtle Textile Weave Grid Graphic Pattern */}
          <div
            className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(currentColor 1px, transparent 1px), radial-gradient(currentColor 1px, transparent 1px)`,
              backgroundSize: `16px 16px`,
              backgroundPosition: `0 0, 8px 8px`,
            }}
          />

          <div
            className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center mb-2.5 transition-all duration-300 shadow-sm",
              isSummer
                ? "bg-amber-500/15 text-amber-500 border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-white"
                : "bg-cyan-500/15 text-cyan-500 border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:text-white"
            )}
          >
            <Shirt className="w-6 h-6" />
          </div>

          <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-foreground">
            {fabric.name}
          </span>
          <span className="text-[10px] text-muted-foreground mt-0.5 flex items-center gap-1">
            <ImageIcon className="w-3 h-3 text-muted-foreground/70" />
            <span>Fabric Swatch Photo</span>
          </span>
        </div>
      )}

      {/* Clean Eye Icon Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onOpenModal();
        }}
        aria-label={`View ${fabric.name} specifications`}
        className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/65 hover:bg-primary text-white border border-white/25 hover:border-primary backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 cursor-pointer"
      >
        <Eye className="w-4 h-4" />
      </button>
    </div>
  );
}

interface CollectionFabricGridProps {
  collection: "summer" | "winter" | "all";
}

export function CollectionFabricGrid({ collection }: CollectionFabricGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [modalFabric, setModalFabric] = useState<FabricItem | null>(null);

  const filteredFabrics = FABRICS.filter((fabric) => {
    const matchesCollection =
      collection === "all" || fabric.collections.includes(collection);
    const matchesCategory =
      selectedCategory === "all" || fabric.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      fabric.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fabric.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fabric.gsmRange.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fabric.composition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fabric.bestFor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCollection && matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full space-y-8 sm:space-y-10">
      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="w-full md:w-auto overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-muted p-1.5 sm:p-2 rounded-2xl border border-border w-max max-w-full">
            {[
              {
                id: "all",
                label: `All ${
                  collection === "summer"
                    ? `Summer (${FABRICS.filter((f) => f.collections.includes("summer")).length})`
                    : collection === "winter"
                    ? `Winter (${FABRICS.filter((f) => f.collections.includes("winter")).length})`
                    : `Fabrics (${FABRICS.length})`
                }`,
              },
              { id: "textured", label: "Matty & Textured" },
              { id: "heavyweight", label: "Heavy Fleece & 3-Thread" },
              { id: "basics", label: "Cotton & Basics" },
              { id: "fast-fashion", label: "Fast Fashion & Drape" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={cn(
                  "px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer",
                  selectedCategory === tab.id
                    ? "bg-primary text-white shadow-sm scale-102"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/80"
                )}
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
            placeholder="Search fleece, matty, GSM..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-8 py-2.5 bg-muted/60 border border-border rounded-xl text-xs font-medium focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/70"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              aria-label="Clear search query"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Fabric Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={collection + selectedCategory + searchQuery}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredFabrics.map((fabric) => (
            <div
              key={fabric.id}
              className="bg-card border border-border rounded-3xl p-5 sm:p-6 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between group relative overflow-hidden shadow-xs"
            >
              <div>
                {/* Dedicated Fabric Image Area */}
                <FabricCardImage
                  fabric={fabric}
                  onOpenModal={() => setModalFabric(fabric)}
                />

                {/* Fabric Name, Tag, GSM & Composition Header */}
                <div className="space-y-2 mb-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
                      {fabric.name}
                    </h3>
                    {fabric.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
                        {fabric.tag}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-numbers text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-md">
                      {fabric.gsmRange}
                    </span>
                    <span className="text-[11px] font-medium text-muted-foreground bg-muted/80 border border-border px-2.5 py-0.5 rounded-md">
                      {fabric.composition}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                  {fabric.description}
                </p>

                {/* 3 Features with Checkmarks */}
                <div className="space-y-2 mb-6 bg-muted/40 p-3.5 rounded-2xl border border-border/50">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground block mb-1">
                    Key Specifications
                  </span>
                  {fabric.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs font-medium text-foreground/90"
                    >
                      <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-border space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold block mb-1">
                    RECOMMENDED END-USE
                  </span>
                  <span className="text-xs font-bold text-foreground block">
                    {fabric.bestFor}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => setModalFabric(fabric)}
                    className="w-full uppercase tracking-widest text-[11px] font-bold py-2.5 rounded-full border border-border bg-muted hover:bg-card text-foreground hover:border-primary/40 transition-all flex items-center justify-center cursor-pointer shadow-xs"
                  >
                    <span>VIEW SPECS</span>
                  </button>
                  <Link
                    href={`https://wa.me/919888778082?text=${encodeURIComponent(
                      `Hi Siya Ram Fabrics, I am interested in inquiring about ${fabric.name} (${fabric.gsmRange}) from the ${
                        collection === "winter" ? "Winter" : "Summer"
                      } Collection. Please send sample roll details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({
                      size: "sm",
                      className:
                        "w-full uppercase tracking-widest text-[11px] font-bold rounded-full bg-primary hover:bg-[#8F1A2C] text-white hover:text-white transition-all py-2.5 justify-center gap-1 shadow-xs",
                    })}
                  >
                    <span>SAMPLE ROLL</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modal Dialog for Technical Specs */}
      <AnimatePresence>
        {modalFabric && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-auto"
            >
              <button
                onClick={() => setModalFabric(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 text-muted-foreground hover:text-foreground text-lg font-bold w-9 h-9 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  Technical Specifications
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-muted px-3 py-1 rounded-full border border-border">
                  {modalFabric.collections.includes("summer")
                    ? "☀️ Summer Knits"
                    : "❄️ Winter Knits"}
                </span>
                {modalFabric.tag && (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-primary px-3 py-1 rounded-full">
                    {modalFabric.tag}
                  </span>
                )}
              </div>

              {/* Real Fabric Photo Preview in Modal if Available */}
              {modalFabric.image && (
                <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] rounded-2xl overflow-hidden border border-border/80 bg-muted shadow-inner">
                  <Image
                    src={modalFabric.image}
                    alt={`${modalFabric.name} real fabric photograph`}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3.5 flex items-center gap-2 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                      Real Fabric Swatch
                    </span>
                    <span className="text-[11px] font-numbers font-bold text-brand-bright">
                      {modalFabric.gsmRange}
                    </span>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-foreground">
                  {modalFabric.name}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {modalFabric.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-muted/60 p-4 sm:p-5 rounded-2xl border border-border/60">
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block mb-0.5">
                    GSM Range
                  </span>
                  <span className="font-numbers text-sm font-bold text-primary">
                    {modalFabric.gsmRange}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block mb-0.5">
                    Fiber Composition
                  </span>
                  <span className="text-xs font-semibold text-foreground">
                    {modalFabric.composition}
                  </span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block mb-0.5">
                    Available Colors & Dyeing
                  </span>
                  <span className="text-xs font-medium text-foreground">
                    {modalFabric.availableColors.join(", ")}
                  </span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block mb-0.5">
                    Recommended Apparel End-Use
                  </span>
                  <span className="text-xs font-semibold text-foreground">
                    {modalFabric.bestFor}
                  </span>
                </div>
              </div>

              <div className="space-y-2.5">
                <span className="text-[10px] uppercase font-bold text-primary tracking-widest block">
                  Manufacturing & Quality Attributes
                </span>
                {modalFabric.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs font-medium text-foreground/90"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
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
                    className:
                      "flex-1 w-full uppercase tracking-widest text-xs font-bold rounded-full bg-primary hover:bg-[#8F1A2C] text-white hover:text-white justify-center gap-1.5 shadow-sm py-3 transition-all",
                  })}
                >
                  <span>Fill Inquiry Form</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={`https://wa.me/919888778082?text=${encodeURIComponent(
                    `Hi Siya Ram Fabrics, I would like to request physical sample swatches for ${modalFabric.name} (${modalFabric.gsmRange}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    size: "default",
                    variant: "outline",
                    className:
                      "flex-1 w-full uppercase tracking-widest text-xs font-bold rounded-full border-[#25D366]/50 bg-[#25D366]/5 text-[#25D366] hover:bg-[#25D366]/15 hover:border-[#25D366] hover:text-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.25)] active:bg-[#25D366]/20 transition-all duration-300 justify-center gap-2 py-3",
                  })}
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
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
