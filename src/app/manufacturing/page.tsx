import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Factory, ShieldCheck, BarChart3 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Manufacturing | Siya Ram Fabrics",
  description:
    "From yarn receiving to final dispatch, every step is carefully controlled to ensure the highest standards of quality and consistency.",
};

const steps = [
  { number: "01", title: "Yarn Receiving", description: "Quality yarn is received, verified, and inspected before entering production." },
  { number: "02", title: "Knitting", description: "Premium yarn is knitted into fabric according to required GSM, width, and specifications." },
  { number: "03", title: "Grey Fabric", description: "Freshly knitted grey fabric is rolled, identified, and prepared for inspection." },
  { number: "04", title: "Grey Inspection", description: "Every roll is checked for GSM, width, knitting defects, and consistency." },
  { number: "05", title: "Colour Processing", description: "Fabric undergoes colour processing to achieve the required shade and consistency." },
  { number: "06", title: "Drying", description: "Processed fabric is dried under controlled conditions to maintain quality." },
  { number: "07", title: "Finishing", description: "Fabric passes through compacting, raising, and stentering for dimensional stability and enhanced texture." },
  { number: "08", title: "Quality Check", description: "Final inspection ensures GSM, shade, width, softness, and overall quality meet standards." },
  { number: "09", title: "Rolling", description: "Approved fabric is rolled into standard lengths for packaging." },
  { number: "10", title: "Packing", description: "Fabric rolls are securely packed, labelled, and prepared for dispatch." },
  { number: "11", title: "Documentation", description: "Order documentation and dispatch paperwork are prepared for seamless delivery." },
  { number: "12", title: "Dispatch", description: "Finished fabric is dispatched safely to customers across India." },
];

export default function ManufacturingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/factory_floor.png"
            alt="Siya Ram Fabrics manufacturing facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 pb-20 md:pb-28">
          <div className="max-w-3xl">
            <span className="inline-block border border-[#B12137]/50 text-[#B12137] text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 mb-6">
              Manufacturing
            </span>
            <h1 className="font-heading text-6xl md:text-8xl font-bold uppercase tracking-tight text-white mb-6 leading-[0.9]">
              Precision
              <br />
              <span className="text-[#B12137]">Engineered</span>
              <br />
              Every Metre
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mb-10">
              Our facility combines modern circular knitting technology with
              rigorous quality control to produce consistent, high-performance
              knitted fabrics at scale.
            </p>
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className:
                  "uppercase tracking-widest font-semibold bg-white text-[#111] hover:bg-white/90 rounded-none",
              })}
            >
              Discuss Your Requirements
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-[#111]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "25+", label: "Years in Operation" },
              { value: "50K+", label: "Metres / Day" },
              { value: "12", label: "Process Stages" },
              { value: "100%", label: "Inspection Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-4 md:px-8 py-4">
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

      {/* Process Grid */}
      <section className="py-20 md:py-[120px] bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mb-16 md:mb-20">
            <span className="text-[#B12137] font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
              12-Step Process
            </span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-[#323232] mb-6">
              From Yarn to Dispatch
            </h2>
            <p className="text-lg text-[#323232]/60 leading-relaxed">
              Every metre of fabric passes through twelve carefully controlled
              stages. Our process is designed to catch issues early, maintain
              consistency, and deliver exactly what was promised.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8E2DF]">
            {steps.map((step) => (
              <div key={step.number} className="bg-white p-8 md:p-10 hover:bg-[#FAFAFA] transition-colors duration-300">
                <span className="font-heading text-5xl md:text-6xl font-bold text-[#B12137]/10 leading-none block mb-6">
                  {step.number}
                </span>
                <h3 className="font-heading text-lg font-bold text-[#323232] mb-3 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-sm text-[#323232]/55 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 md:py-[120px] bg-[#FAFAFA]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] md:h-[550px] w-full">
              <Image
                src="/images/knitting_machine.png"
                alt="Circular knitting machine"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[#B12137] font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
                Infrastructure
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#323232] mb-6">
                Modern Machinery.
                <br />
                Consistent Output.
              </h2>
              <p className="text-[#323232]/65 text-lg leading-relaxed mb-8">
                Our facility is equipped with the latest circular knitting
                machines capable of producing single jersey, pique, rib,
                interlock, and fleece at high speeds with minimal variation.
              </p>
              <ul className="space-y-4">
                {[
                  "High-speed circular knitting machines with automated tension control",
                  "Digital inspection systems for real-time defect detection",
                  "Climate-controlled environment for consistent fabric quality",
                  "Experienced textile engineers at every stage",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B12137] shrink-0 mt-0.5" />
                    <span className="text-[#323232]/75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 md:py-[120px] bg-[#111]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mb-16 md:mb-20">
            <span className="text-[#B12137] font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
              Quality Assurance
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
              Built on a
              <br />
              Quality Culture
            </h2>
            <p className="text-lg text-white/50 leading-relaxed">
              Quality is embedded in every stage — from the yarn we source to
              the roll we dispatch. No shortcuts. No compromises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                icon: ShieldCheck,
                title: "Multi-Stage Inspection",
                description:
                  "Every roll is inspected at grey stage, after processing, and before dispatch. Three checkpoints, one standard.",
              },
              {
                icon: Factory,
                title: "Process Control",
                description:
                  "Machine parameters, temperature, and humidity are monitored continuously to maintain consistent fabric quality across every batch.",
              },
              {
                icon: BarChart3,
                title: "Traceability",
                description:
                  "Each roll is tagged and tracked through every stage. We know exactly when it was knitted, processed, inspected, and packed.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-8 md:p-12 bg-[#111]"
                >
                  <div className="w-12 h-12 rounded-full bg-[#B12137]/10 flex items-center justify-center mb-8">
                    <Icon className="w-6 h-6 text-[#B12137]" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/45 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-[100px] bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <span className="text-[#B12137] font-semibold tracking-[0.15em] uppercase text-sm mb-4 block">
            Let&apos;s Work Together
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-[#323232] mb-6">
            Need Consistent
            <br />
            Knitted Fabric?
          </h2>
          <p className="text-lg text-[#323232]/60 leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you need single jersey for basics or specialised fabrics
            for performance wear, we deliver at scale with uncompromising
            quality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className:
                  "uppercase tracking-widest font-semibold bg-[#111] text-white hover:bg-[#323232] rounded-none w-full sm:w-auto",
              })}
            >
              Request a Quote
            </Link>
            <Link
              href="/products"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className:
                  "uppercase tracking-widest font-semibold border-[#323232] text-[#323232] rounded-none w-full sm:w-auto",
              })}
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
