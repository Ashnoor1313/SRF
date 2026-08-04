import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Gauge, PackageCheck, Thermometer } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Infrastructure | Siya Ram Fabrics",
  description:
    "A 1.5 lac sq ft complete in-house manufacturing facility with high-speed circular knitting, dyeing, finishing, and quality control — staffed by 300+ specialists.",
};

const facilityStats = [
  { value: "1.5 Lac", label: "Sq Ft Facility" },
  { value: "300+", label: "Employees" },
  { value: "3", label: "In-House Units" },
  { value: "12", label: "Process Stages" },
];

const capabilities = [
  { icon: Factory, title: "High-Speed Knitting", description: "Latest circular knitting machines capable of single jersey, pique, rib, interlock, and fleece — at speed, with minimal variation." },
  { icon: Gauge, title: "Precision Processing", description: "In-house dyeing and finishing under climate-controlled conditions to maintain consistent shade, GSM, and texture." },
  { icon: PackageCheck, title: "Automated Quality Control", description: "Multi-stage inspection at grey, after-processing, and before dispatch — every roll tagged and tracked end to end." },
  { icon: Thermometer, title: "Climate-Controlled", description: "A stable production environment that keeps every batch consistent, regardless of season, humidity, or order size." },
];

export default function InfrastructurePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/factory_floor.png"
            alt="Siya Ram Fabrics manufacturing facility"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 pb-20 md:pb-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 border border-brand-bright/50 text-brand-bright text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2 mb-6 bg-black/40 rounded-full">
              Infrastructure
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-8xl font-bold uppercase tracking-tight text-white mb-6 leading-[0.9]">
              Built for
              <br />
              <span className="text-brand-bright">Scale.</span>
              <br />
              Obsessed with Precision.
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mb-10">
              From 500 sq ft in 1998 to a 1.5 lac sq ft complete in-house facility —
              knitting, dyeing, and finishing under one roof with 300+ specialists.
            </p>
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className: "uppercase tracking-widest font-semibold bg-white text-foreground hover:bg-white/90 rounded-full",
              })}
            >
              Discuss Your Requirements
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {facilityStats.map((stat) => (
              <div key={stat.label} className="text-center px-4 md:px-8 py-8 bg-secondary">
                <p className="font-heading text-4xl md:text-6xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-white/40 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-[120px] bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn direction="up">
            <div className="max-w-2xl mb-16 md:mb-20">
              <span className="text-primary font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
                Our Facility
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
                Everything Under One Roof
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We continuously invest in technology to improve efficiency, reduce
                turnaround times, and expand capabilities. The second generation has
                further accelerated this with new technology and automation across
                every stage.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-border rounded-2xl overflow-hidden shadow-lg">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <StaggerItem key={cap.title} className="bg-white p-8 md:p-12 hover:bg-[#FAFAFA] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                    <Icon className="w-7 h-7 text-primary" />
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
      <section className="py-20 md:py-[120px] bg-[#FAFAFA]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] md:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/knitting_machine.png"
                alt="High-speed circular knitting machine"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-primary font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
                Modern Machinery
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
                New Technology.<br />Higher Standards.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our machines produce single jersey, pique, rib, interlock, and fleece
                at high speeds with minimal variation — alongside fast fashion fabrics
                introduced by the second generation for trend-responsive retail.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "High-speed circular knitting machines with automated tension control",
                  "Digital inspection systems for real-time defect detection",
                  "Climate-controlled environment for consistent fabric quality",
                  "Automation implemented across knitting, dyeing, and finishing",
                  "Experienced textile engineers at every stage",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2.5 h-2.5 bg-primary shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/products" className={buttonVariants({ size: "lg", className: "uppercase tracking-widest font-semibold bg-secondary text-white hover:bg-white/10 rounded-full" })}>
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-[100px] bg-secondary">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <span className="text-brand-bright font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
            Visit Our Facility
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6">
            See the Scale
            <br />
            for Yourself
          </h2>
          <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-xl mx-auto">
            Spread over 1.5 lac sq ft in Ludhiana — we welcome serious partners to
            tour our plant and witness our quality systems first-hand.
          </p>
          <Link
            href="/contact"
            className={buttonVariants({
              size: "lg",
              className: "uppercase tracking-widest font-semibold bg-white text-foreground hover:bg-white/90 rounded-full",
            })}
          >
            Book a Facility Visit
          </Link>
        </div>
      </section>
    </div>
  );
}