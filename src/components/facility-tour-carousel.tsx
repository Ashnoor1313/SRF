"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FacilityHighlight {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  imagePosition?: string;
}

export const FACILITY_HIGHLIGHTS: FacilityHighlight[] = [
  {
    id: "circular-knitting",
    title: "Circular Knitting Line",
    subtitle: "High-speed multi-feeder machines for jersey, pique & fleece",
    category: "Knitting Unit",
    image: "/images/SDW01497.JPG.jpeg",
  },
  {
    id: "dyeing-wet-processing",
    title: "Dyeing & Processing Plant",
    subtitle: "Precise temperature & automated shade-matching vessels",
    category: "Dyeing & Wet Processing",
    image: "/images/SDW01594.JPG.jpeg",
  },
  {
    id: "quality-inspection",
    title: "Quality Inspection Floor",
    subtitle: "4-point inspection system with digital tracking & defect logging",
    category: "Quality Assurance",
    image: "/images/SDW 01420.png",
  },
  {
    id: "etp-sustainability",
    title: "In-House ETP Plant",
    subtitle: "Advanced effluent treatment ensuring zero liquid discharge",
    category: "Sustainability",
    image: "/images/etp plant.jpg",
  },
  {
    id: "finishing-stenter",
    title: "Finishing & Stenter Range",
    subtitle: "Continuous heat setting, width calibration & bow/skew correction",
    category: "Finishing Line",
    image: "/images/Stenter.png",
  },
  {
    id: "storage-logistics",
    title: "Fabric Storage & Logistics",
    subtitle: "Systematic lot-wise warehousing & organized inventory for rapid dispatch",
    category: "Storage & Logistics",
    image: "/images/fabric storage.JPG",
  },
  {
    id: "raw-material-store",
    title: "Raw Material & Yarn Store",
    subtitle: "Organized inventory & lot-wise storage for cotton and blended yarns",
    category: "Raw Material Store",
    image: "/images/yarn storage.jpg",
  },
  {
    id: "testing-lab",
    title: "Textile Testing & R&D Lab",
    subtitle: "Testing GSM, color fastness, shrinkage, pilling & tensile strength",
    category: "Testing & R&D Lab",
    image: "/images/textile testing lab.JPG",
  },
];

export function FacilityTourCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    skipSnaps: false,
    duration: 35,
    watchDrag: (_emblaApi, evt) => {
      // Allow touch swipe gestures on mobile/touch screens, disable desktop mouse dragging
      return typeof window !== "undefined" && "PointerEvent" in window
        ? (evt as PointerEvent).pointerType === "touch"
        : evt.type.startsWith("touch");
    },
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Smooth Mouse Wheel / Trackpad Horizontal Swipe Gesture
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container || !emblaApi) return;

    let isThrottled = false;
    let accumulatedDelta = 0;

    const handleWheel = (e: WheelEvent) => {
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const isShiftVertical = e.shiftKey && Math.abs(e.deltaY) > 5;

      if (isHorizontal || isShiftVertical) {
        e.preventDefault();
        if (isThrottled) return;

        const delta = isHorizontal ? e.deltaX : e.deltaY;
        accumulatedDelta += delta;

        if (accumulatedDelta > 20) {
          if (emblaApi.canScrollNext()) {
            emblaApi.scrollNext();
          }
          accumulatedDelta = 0;
          isThrottled = true;
          setTimeout(() => {
            isThrottled = false;
          }, 300);
        } else if (accumulatedDelta < -20) {
          if (emblaApi.canScrollPrev()) {
            emblaApi.scrollPrev();
          }
          accumulatedDelta = 0;
          isThrottled = true;
          setTimeout(() => {
            isThrottled = false;
          }, 300);
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 md:py-[100px] bg-background relative overflow-hidden border-t border-border">
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-bright/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header with Navigation Toggle Buttons close to the cards */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-8 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Plant Tour & Visuals
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-[1.05]">
              Inside Our <span className="text-primary">Facility</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2.5 leading-relaxed">
              A visual tour across our circular knitting halls, automated dyeing vessels, multi-stage inspection bays, and sustainable plant infrastructure.
            </p>
          </div>

          {/* Prev & Next Navigation Buttons - Positioned right above the cards */}
          <div className="flex items-center gap-2.5 self-start md:self-end pb-1">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Previous facility slide"
              className={cn(
                "w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 shadow-sm",
                canScrollPrev
                  ? "bg-card border-border text-foreground hover:bg-primary hover:text-white hover:border-primary hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                  : "bg-muted/30 border-border/30 text-muted-foreground/30 cursor-not-allowed"
              )}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Next facility slide"
              className={cn(
                "w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 shadow-sm",
                canScrollNext
                  ? "bg-card border-border text-foreground hover:bg-primary hover:text-white hover:border-primary hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                  : "bg-muted/30 border-border/30 text-muted-foreground/30 cursor-not-allowed"
              )}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container with Wheel / Swipe Gesture */}
        <div ref={containerRef} className="relative">
          {/* Embla Viewport */}
          <div ref={emblaRef} className="overflow-hidden select-none py-2">
            <div className="flex gap-4 sm:gap-5 -ml-1">
              {FACILITY_HIGHLIGHTS.map((item, index) => {
                const isSelected = selectedIndex === index;
                return (
                  <div
                    key={item.id}
                    className="shrink-0 grow-0 basis-[76%] sm:basis-[48%] md:basis-[36%] lg:basis-[28%] xl:basis-[23.5%] min-w-0"
                  >
                    <div
                      className={cn(
                        "group relative h-[360px] sm:h-[390px] md:h-[410px] rounded-2xl sm:rounded-3xl overflow-hidden border bg-card transition-all duration-500 ease-out flex flex-col justify-between p-5 sm:p-6 shadow-sm",
                        isSelected
                          ? "border-primary/80 ring-2 ring-primary/20 shadow-[0_15px_35px_rgba(177,33,55,0.15)]"
                          : "border-border hover:border-primary/60 hover:shadow-xl hover:-translate-y-1.5"
                      )}
                    >
                      {/* Background Image with Clean Smooth Zoom */}
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
                        className={cn(
                          "object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out brightness-105 contrast-105",
                          item.imagePosition || "object-[center_35%]"
                        )}
                      />

                      {/* Clean targeted gradient at bottom for text readability, keeping the machine crisp & brightly lit */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 via-45% to-transparent group-hover:from-black/95 group-hover:via-black/25 transition-colors duration-500 z-10" />

                      {/* Top Header Row inside Card: Category Badge */}
                      <div className="relative z-20 flex items-center justify-between">
                        <span
                          className={cn(
                            "text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full backdrop-blur-md transition-all duration-300",
                            isSelected
                              ? "bg-primary text-white border border-primary shadow-sm"
                              : "bg-black/60 text-brand-bright border border-brand-bright/30 group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                          )}
                        >
                          {item.category}
                        </span>
                      </div>

                      {/* Bottom Content Area: Title & Brief Description */}
                      <div className="relative z-20 space-y-2 transform translate-y-0.5 group-hover:translate-y-0 transition-transform duration-300">
                        {/* Title */}
                        <h3
                          className={cn(
                            "font-heading text-lg sm:text-xl font-bold uppercase tracking-wide transition-colors duration-300 leading-snug",
                            isSelected ? "text-brand-bright" : "text-white group-hover:text-brand-bright"
                          )}
                        >
                          {item.title}
                        </h3>

                        {/* Subtitle / Short Description */}
                        <p className="text-white/75 text-xs leading-relaxed line-clamp-2 group-hover:text-white/95 transition-colors duration-300">
                          {item.subtitle}
                        </p>
                      </div>

                      {/* Accent Bottom Glow Border */}
                      <div
                        className={cn(
                          "absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-brand-bright to-primary transition-opacity duration-500 z-30",
                          isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        )}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
