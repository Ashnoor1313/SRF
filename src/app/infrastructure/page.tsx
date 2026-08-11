import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Gauge, PackageCheck, Thermometer, Building2, Cpu, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";

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
  { icon: Gauge, title: "Precision Processing", description: "In-house dyeing and finishing under climate-controlled conditions to maintain consistent shade, GSM, and luxurious hand-feel." },
  { icon: PackageCheck, title: "Automated Quality Inspection", description: "Multi-stage inspection at grey stage, post-processing, and prior to final roll packaging — every roll tagged and barcoded end to end." },
  { icon: Thermometer, title: "Climate-Controlled Plant", description: "A stable production environment that keeps fabric tension and yarn humidity consistent regardless of external weather changes." },
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
                size: "lg",
                className: "uppercase tracking-widest font-semibold bg-white text-foreground hover:bg-white/90 rounded-full px-8",
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

      {/* Equipment Showcase */}
      <section className="py-20 md:py-[120px] bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] md:h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl border border-border">
              <Image
                src="/images/knitting_machine.png"
                alt="High-speed circular knitting machine"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-primary font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
                State-of-the-Art Technology
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
                New Generation Technology.<br />Higher Performance.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our plant produces basic jersey, pique, rib, interlock, and fleece at high speeds with tight tension control — alongside trend-driven fast-fashion structures.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "High-speed circular knitting machinery with tension sensors",
                  "Automated yarn feeder mechanisms reducing structural flaws",
                  "Environmental control systems regulating ambient temperature & humidity",
                  "Second-generation digital barcode tracking across all 12 stages",
                  "Experienced textile engineers supervising each machine line",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border">
                    <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/90 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/products" className={buttonVariants({ size: "lg", className: "uppercase tracking-widest font-semibold bg-primary text-white hover:bg-primary/90 rounded-full px-8 shadow-md" })}>
                Explore Products Catalogue <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

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
              size: "lg",
              className: "uppercase tracking-widest font-semibold bg-white text-foreground hover:bg-white/90 rounded-full px-8 py-6 shadow-lg",
            })}
          >
            Schedule a Facility Visit
          </Link>
        </div>
      </section>
    </div>
  );
}