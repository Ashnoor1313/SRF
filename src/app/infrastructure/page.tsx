import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Gauge, PackageCheck, Droplets, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";
import { FacilityTourCarousel } from "@/components/facility-tour-carousel";

export const metadata: Metadata = {
  title: "Infrastructure & Plant Capacity | Siya Ram Fabrics",
  description:
    "A 1.5 lac sq ft complete in-house manufacturing facility with high-speed circular knitting, dyeing, finishing, and quality control — staffed by 300+ specialists in Ludhiana.",
};

const facilityStats = [
  { value: "1.5 Lac", label: "Sq Ft Facility" },
  { value: "300+", label: "Textile Specialists" },
  { value: "3", label: "In-House Units" },
  { value: "12", label: "Process Stages" },
];

const capabilities = [
  { icon: Factory, title: "High-Speed Circular Knitting", description: "State-of-the-art circular knitting machinery producing single jersey, pique, rib, interlock, and fleece with high speed and tight quality control." },
  { icon: Gauge, title: "Precision Processing", description: "In-house dyeing and finishing under precise process parameters to maintain consistent shade, GSM, and luxurious hand-feel." },
  { icon: PackageCheck, title: "Thorough Quality Inspection", description: "Multi-stage inspection at grey stage, post-processing, and prior to final roll packaging — every roll tagged and barcoded end to end." },
  { icon: Droplets, title: "In-House ETP Control", description: "Dedicated effluent treatment plant ensuring eco-friendly operations, responsible water management, and stringent environmental compliance." },
];

export default function InfrastructurePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-end overflow-hidden pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/factory_floor.png"
            alt="Siya Ram Fabrics 1.5 Lac sq ft manufacturing facility"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/60 to-black/30" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 pb-20 md:pb-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 border border-brand-bright/50 text-brand-bright text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2 mb-6 bg-black/40 rounded-full backdrop-blur-sm">
              In-House Plant & Capacity
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-8xl font-bold uppercase tracking-tight text-white mb-6 leading-[0.9]">
              Built for
              <br />
              <span className="text-brand-bright">Scale.</span>
              <br />
              Obsessed with Precision.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-10">
              From a modest 500 sq ft unit in 1998 to a 1.5 lac sq ft integrated manufacturing facility — knitting, dyeing, and finishing under one roof with 300+ specialists.
            </p>
            <Link
              href="/contact"
              className={buttonVariants({
                variant: "white",
                size: "lg",
                className: "uppercase tracking-widest font-semibold rounded-full px-8",
              })}
            >
              Book a Plant Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="py-16 md:py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
            {facilityStats.map((stat) => (
              <div key={stat.label} className="text-center px-4 md:px-8 py-10 bg-secondary">
                <p className="font-heading font-numbers text-4xl md:text-6xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-white/60 uppercase tracking-widest font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-[120px] bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn direction="up">
            <div className="max-w-2xl mb-16 md:mb-20">
              <span className="text-primary font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
                Infrastructure Overview
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
                Everything Integrated Under One Roof
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We continuously invest in circular knitting technology and automation to streamline production lead times and expand fabric texture capabilities.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <StaggerItem key={cap.title} className="bg-card border border-border p-8 md:p-12 rounded-3xl hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {cap.description}
                  </p>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Machinery & Engineering Capabilities Deep-Dive */}
      <section className="py-20 md:py-[120px] bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 md:px-8 space-y-16">
          <FadeIn direction="up">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold tracking-[0.15em] uppercase text-sm mb-3 block">
                Engineering Machinery Specs
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
                Plant Machinery, Functions & Purpose
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mt-4 leading-relaxed">
                Every unit in our 1.5 lac sq ft facility is selected for high throughput, strict dimensional tolerance, and low environmental impact.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "High-Speed Circular Knitting Range",
                category: "Knitting Division",
                purpose: "Continuous Multi-Track Greige Fabric Formation",
                functions: "Positive yarn storage feeding, positive Lycra attachments, ceramic guide eyelets, and automated optical stop-motion detectors.",
                speciality: "Handles fine single jersey (24G–34G) to heavyweight double jersey and 3-thread fleece with zero spirality and exact loop uniformity.",
                image: "/images/SDW01497.JPG.jpeg",
                stat: "15,000+ Kg/Day",
              },
              {
                name: "Eco Softflow Dyeing Vessels",
                category: "Dyeing Division",
                purpose: "Low-Liquor Gentle Tension Shade Infusion",
                functions: "Microprocessor-controlled heating/cooling curves, automated chemical injection pumps, and variable nozzle pressure.",
                speciality: "Operates at ultra-low 1:5 liquor ratio, reducing water/energy usage while guaranteeing Delta E < 0.8 shade accuracy.",
                image: "/images/IMG-20260825-WA0002.jpg",
                stat: "Delta E < 0.8",
              },
              {
                name: "Multi-Chamber Stenter & Heat Setter",
                category: "Finishing Division",
                purpose: "Width Calibration, Heat Stabilization & Bow Correction",
                functions: "Overfeed pin/clip chain, continuous moisture sensing, automated bow and skew weft straightening, and hot-air circulation.",
                speciality: "Stabilizes elastane recovery memory, eliminates edge-curling, and locks in exact finished width specifications.",
                image: "/images/Stenter.png",
                stat: "Spirality < 2.0%",
              },
              {
                name: "Tubular & Open-Width Felt Compactor",
                category: "Finishing Division",
                purpose: "Mechanical Pre-Shrinkage & Luxury Handfeel",
                functions: "Dual high-temperature chrome cylinders paired with thick Nomex felt blankets compressing knitted loops longitudinally.",
                speciality: "Guarantees residual wash shrinkage under 3.0% while imparting a silky, smooth, and full-bodied drape.",
                image: "/images/tubular machine.jpeg",
                imagePosition: "object-center",
                stat: "Shrinkage < 3.0%",
              },
              {
                name: "Heavy-Duty Raising & Shearing Line",
                category: "Specialized Finishing",
                purpose: "Plush Winter Fleece & Terry Texture Extraction",
                functions: "Multi-roller counter-rotating wire cylinders extracting dense micro-pile, followed by high-speed rotary shearing blades.",
                speciality: "Creates uniform, non-shedding, ultra-warm brushed fleece for winter hoodies, sweatpants, and luxury loungewear.",
                image: "/images/shearing.jpeg",
                imagePosition: "object-[center_45%]",
                stat: "Zero-Shed Pile",
              },
              {
                name: "High-CRI Digital Inspection Tables",
                category: "Quality Assurance",
                purpose: "100% Roll 4-Point Defect Detection & Barcode Tagging",
                functions: "Variable-speed continuous roll unrolling under D65 daylight-calibrated high-CRI LED backlighting, with digital defect logging.",
                speciality: "Ensures every roll leaves our factory with complete digital batch traceability, zero defect tolerance, and verified GSM.",
                image: "/images/SDW 01420.png",
                stat: "100% Rolls Graded",
              },
            ].map((m, idx) => (
              <FadeIn key={m.name} direction="up" delay={idx * 0.1}>
                <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-muted">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      unoptimized
                      className={`object-cover ${m.imagePosition || "object-[center_35%]"} group-hover:scale-105 transition-transform duration-500 brightness-105`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-primary text-white shadow-sm">
                        {m.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-4">
                      <span className="font-numbers text-xs font-bold text-white bg-black/60 px-2.5 py-1 rounded-full border border-white/20">
                        {m.stat}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
                        {m.name}
                      </h3>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {m.purpose}
                      </p>
                    </div>

                    <div className="space-y-2.5 text-xs border-t border-border/60 pt-3">
                      <p>
                        <strong className="text-foreground">Functions:</strong>{" "}
                        <span className="text-muted-foreground leading-relaxed">{m.functions}</span>
                      </p>
                      <p>
                        <strong className="text-foreground">Speciality:</strong>{" "}
                        <span className="text-muted-foreground leading-relaxed">{m.speciality}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Inside Our Facility Interactive Carousel Showcase */}
      <FacilityTourCarousel />

      {/* CTA */}
      <section className="py-20 md:py-[100px] bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <span className="text-brand-bright font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
            Visit Our Facility
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6">
            See the Scale
            <br />
            First-Hand
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
            Spread over 1.5 lac sq ft in Ludhiana — we welcome textile buyers, garment exporters, and brand teams to tour our plant.
          </p>
          <Link
            href="/contact"
            className={buttonVariants({
              variant: "white",
              size: "lg",
              className: "uppercase tracking-widest font-semibold rounded-full px-8 py-6 shadow-lg",
            })}
          >
            Schedule a Facility Visit
          </Link>
        </div>
      </section>
    </div>
  );
}