import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Factory, ShieldCheck, BarChart3, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";

const YEARS = new Date().getFullYear() - 1998;

export const metadata: Metadata = {
  title: "Manufacturing Process & Quality | Siya Ram Fabrics",
  description:
    "From yarn receiving to final dispatch, every step is carefully controlled in our 1.5 Lac sq ft Ludhiana facility to ensure high standards of fabric quality.",
};

const steps = [
  { number: "01", title: "Yarn Receiving", description: "Quality yarn is received, verified, and lab-inspected before entering production." },
  { number: "02", title: "Knitting", description: "Premium yarn is knitted into fabric according to required GSM, width, and structure specs." },
  { number: "03", title: "Grey Fabric", description: "Freshly knitted grey fabric is rolled, barcoded, and prepared for initial inspection." },
  { number: "04", title: "Grey Inspection", description: "Every roll is checked for GSM, width, knitting defects, and tension consistency." },
  { number: "05", title: "Colour Processing", description: "Fabric undergoes eco-friendly colour processing for accurate, fast shades." },
  { number: "06", title: "Drying", description: "Processed fabric is dried under digitally controlled conditions to preserve elasticity." },
  { number: "07", title: "Finishing", description: "Passes through compacting, raising, and stentering for dimensional stability." },
  { number: "08", title: "Quality Check", description: "Final lab inspection verifies shade match, shrinkage, GSM, and hand-feel." },
  { number: "09", title: "Rolling", description: "Approved fabric is rolled onto heavy-duty cores into standard roll lengths." },
  { number: "10", title: "Packing", description: "Fabric rolls are double-wrapped, poly-sealed, and barcoded for shipment." },
  { number: "11", title: "Documentation", description: "Quality test certificates and dispatch paperwork are generated instantly." },
  { number: "12", title: "Dispatch", description: "Finished fabric is loaded into protected transport trucks for delivery nationwide." },
];

export default function ManufacturingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-end overflow-hidden pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/factory_floor.png"
            alt="Siya Ram Fabrics manufacturing facility floor"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/60 to-black/30" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 pb-20 md:pb-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 border border-brand-bright/50 text-brand-bright text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2 mb-6 bg-black/40 rounded-full backdrop-blur-sm">
              Manufacturing Operations
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-8xl font-bold uppercase tracking-tight text-white mb-6 leading-[0.9]">
              Precision
              <br />
              <span className="text-brand-bright">Engineered</span>
              <br />
              Every Metre
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-10">
              Our facility combines modern circular knitting technology with rigorous quality control to produce consistent, high-performance knitted fabrics at scale.
            </p>
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className: "uppercase tracking-widest font-semibold bg-white text-foreground hover:bg-white/90 rounded-full px-8",
              })}
            >
              Discuss Technical Specs
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="py-16 md:py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
            {[
              { value: `${YEARS}+`, label: "Years in Operation" },
              { value: "1.5 Lac", label: "Sq Ft Facility" },
              { value: "12", label: "Process Stages" },
              { value: "300+", label: "Textile Professionals" },
            ].map((stat) => (
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

      {/* Process Grid */}
      <section className="py-20 md:py-[120px] bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn direction="up">
            <div className="max-w-2xl mb-16 md:mb-20">
              <span className="text-primary font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
                12-Step Manufacturing Journey
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
                From Raw Yarn to Nationwide Dispatch
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every metre of fabric passes through twelve carefully monitored stages — across our 1.5 lac sq ft facility run by 300+ skilled textile professionals.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <StaggerItem
                key={step.number}
                className="bg-card border border-border p-8 rounded-3xl hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="font-heading font-numbers text-5xl md:text-6xl font-bold text-primary/20 group-hover:text-primary transition-colors duration-300 leading-none block mb-6">
                    {step.number}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 md:py-[120px] bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] md:h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl border border-border">
              <Image
                src="/images/knitting_machine.png"
                alt="Circular knitting machine in action"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-primary font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
                Machinery & Infrastructure
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
                Modern Knitting Technology.
                <br />
                Flawless Consistency.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our plant houses high-capacity circular knitting machines capable of producing single jersey, pique, rib, interlock, and fleece with tight tension control.
              </p>
              <div className="space-y-4">
                {[
                  "High-speed circular knitting machines with automated tension control",
                  "Digital inspection systems for real-time defect detection",
                  "Climate-controlled environment for consistent fabric tension & GSM",
                  "Experienced textile engineers supervising every shift",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/90 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 md:py-[120px] bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mb-16 md:mb-20">
            <span className="text-brand-bright font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
              Quality Assurance Culture
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
              Built on Zero Compromise
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Quality is embedded in every stage — from yarn inspection to roll dispatch. 3 checkpoints, 1 unwavering standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Multi-Stage Inspection",
                description:
                  "Every roll is inspected at grey stage, post-processing, and prior to final packaging. Discrepancies are logged and corrected instantly.",
              },
              {
                icon: Factory,
                title: "Process Control",
                description:
                  "Machine speed, feed tension, and processing temperatures are digitally calibrated to ensure batch-to-batch shade and GSM uniformity.",
              },
              {
                icon: BarChart3,
                title: "100% Traceability",
                description:
                  "Each fabric roll is barcoded and tracked. We know exactly which yarn batch, machine, operator, and shift produced it.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-bright/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-bright/10 flex items-center justify-center mb-8 text-brand-bright">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-[100px] bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <span className="text-primary font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
            Partner With Us
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
            Looking for a Trusted Knitted Fabric Partner?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            Experience manufacturing reliability backed by 26+ years of industry leadership in Ludhiana.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className: "uppercase tracking-widest font-semibold bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6 w-full sm:w-auto shadow-lg",
              })}
            >
              Request a Custom Quote
            </Link>
            <Link
              href="/products"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: "uppercase tracking-widest font-semibold border-foreground text-foreground rounded-full px-8 py-6 w-full sm:w-auto",
              })}
            >
              Explore Products <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
