import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Zap,
  Gauge,
  RotateCw,
  Activity,
  Sparkles,
  Sliders,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Manufacturing & Knitting Process | High-Speed Circular Knitting | Siya Ram Fabrics",
  description:
    "Explore our precision knitting workflow: multi-track circular knitting machines, tension-controlled positive feeders, and continuous loop formation in Ludhiana.",
};

const KNITTING_STEPS = [
  {
    step: "01",
    title: "Yarn Receipt & Tensile Testing",
    description:
      "Every yarn lot (100% Combed Cotton, Cotton-Lycra, Modal, Bamboo, PC & Poly Blends) is tested for count uniformity, CSP strength, twist per inch (TPI), and hairiness before mounting on creels.",
    metric: "100% Lot Inspected",
  },
  {
    step: "02",
    title: "Creel Setup & Positive Yarn Feeding",
    description:
      "Automated Memminger positive storage feeders maintain uniform tension across all yarn strands. Electronic yarn break detectors stop machines in milliseconds if tension fluctuates.",
    metric: "0.02g Tension Precision",
  },
  {
    step: "03",
    title: "Precision Circular Knitting",
    description:
      "High-speed circular knitting machines (20G to 34G) interlock loops with mathematical accuracy. Cam angles and cylinder synchronization are calibrated to prevent needle lines and spirality.",
    metric: "15,000+ Kg/Day",
  },
  {
    step: "04",
    title: "Inline Optical Inspection & Defect Tagging",
    description:
      "Continuous LED-illuminated backlighting and optical scanning inspect the knitted tube as it emerges from the cylinder, instantly flagging missed loops or dropped stitches.",
    metric: "Zero Drop Stitches",
  },
  {
    step: "05",
    title: "Greige Roll Doffing & Barcode Tagging",
    description:
      "Knitted rolls are weighed, tagged with digital batch barcodes (tracking yarn lot, operator, machine ID, and exact GSM), and transferred immediately to the in-house dyeing plant.",
    metric: "Full Lot Traceability",
  },
];

const MACHINE_TYPES = [
  {
    name: "Single Jersey Multitrack Machines",
    gauges: "24G, 28G, 32G, 34G",
    diameters: "26\" to 34\" Cylinder",
    fabrics: "Single Jersey, Lycra Jersey, Pique, Honeycomb, Slub Jersey",
    features: "4-track cam box for structured knit textures, high feeder count for high-speed output.",
  },
  {
    name: "Double Jersey & Interlock Machines",
    gauges: "24G, 28G, 30G",
    diameters: "30\" to 34\" Cylinder",
    fabrics: "Interlock, Rib 1x1, Rib 2x2, Ottoman, Waffle, Thermal Knits",
    features: "Dial and cylinder needle synchronization delivering reversible, non-curling edge stability.",
  },
  {
    name: "3-Thread Fleece & Terry Knitting",
    gauges: "20G, 24G",
    diameters: "30\" to 32\" Cylinder",
    fabrics: "French Terry, Heavyweight 3-Thread Fleece, Loopback Terry",
    features: "Engineered tie-yarn and loop-yarn sinkers creating lofty, brushed-ready winter structures.",
  },
];

export default function ManufacturingProcessPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb & Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-24 bg-gradient-to-b from-[#111111] via-[#1a0e12] to-[#111111] text-white overflow-hidden">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-red-600/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-white/60 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/process" className="hover:text-white transition-colors">Our Process</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-bright">Manufacturing & Knitting</span>
          </div>

          <FadeIn direction="up">
            <div className="max-w-4xl space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-red-400 bg-red-500/10 border border-red-500/30 px-4 py-1.5 rounded-full">
                <Layers className="w-3.5 h-3.5" /> Stage 01 • Structural Fabric Formation
              </span>
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white leading-tight">
                High-Speed <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white">
                  Knitting & Manufacturing
                </span>
              </h1>
              <p className="text-white/80 text-base sm:text-xl leading-relaxed max-w-2xl">
                Civil engineering discipline applied to stitch formation. We utilize state-of-the-art circular knitting machines to transform premium yarns into dimensionally stable, ultra-consistent greige fabric.
              </p>
            </div>
          </FadeIn>

          {/* Plant Visual Hero */}
          <FadeIn direction="up" delay={0.2}>
            <div className="mt-12 relative w-full h-72 sm:h-96 md:h-[450px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src="/images/process-knitting.jpg"
                alt="Knitting Manufacturing Plant Floor"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-heading text-lg sm:text-2xl font-bold uppercase tracking-wide text-white">
                  Mayer &amp; Cie / Terrot High-Gauge Circular Knitting Floor
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Step-by-Step Knitting Process */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm block">Step-by-Step Workflow</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-foreground">
              How Our Knitting Lines Operate
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              From raw cone mounting to finished greige roll doffing, each stage is controlled by digital yarn tension systems and optical sensors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KNITTING_STEPS.map((st, idx) => (
              <FadeIn key={st.step} direction="up" delay={idx * 0.1}>
                <div className="bg-card border border-border p-8 rounded-3xl h-full flex flex-col justify-between hover:shadow-xl hover:border-primary/40 transition-all duration-300 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-numbers text-3xl font-black text-primary/30 group-hover:text-primary transition-colors">
                        {st.step}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-muted text-foreground">
                        {st.metric}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground">
                      {st.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Specifications */}
      <section className="py-20 md:py-24 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 md:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm block">Machine Capabilities</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-foreground">
              Specialized Knitting Machinery
            </h2>
            <p className="text-muted-foreground text-sm">
              Our battery of circular knitting machines covers everything from ultra-fine lightweight single jersey to heavyweight 450 GSM winter fleece.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MACHINE_TYPES.map((m) => (
              <div key={m.name} className="bg-card border border-border p-8 rounded-3xl space-y-5 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
                  {m.name}
                </h3>
                <div className="space-y-2 text-xs border-y border-border/60 py-3">
                  <p><strong className="text-foreground">Gauges:</strong> <span className="text-muted-foreground">{m.gauges}</span></p>
                  <p><strong className="text-foreground">Cylinders:</strong> <span className="text-muted-foreground">{m.diameters}</span></p>
                  <p><strong className="text-foreground">Key Products:</strong> <span className="text-muted-foreground">{m.fabrics}</span></p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {m.features}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step Navigation Bridge */}
      <section className="py-16 md:py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-bright block mb-2">Next in Workflow</span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white">
                Stage 02: Dyeing & Color Chemistry
              </h3>
              <p className="text-white/70 text-sm mt-1 max-w-xl">
                See how greige rolls undergo bio-polishing, low liquor softflow dyeing, and computerized spectrophotometer color matching.
              </p>
            </div>
            <Link
              href="/process/dyeing"
              className={buttonVariants({
                size: "lg",
                className: "uppercase tracking-widest font-semibold rounded-full bg-brand-bright text-black hover:bg-white gap-2 shrink-0",
              })}
            >
              <span>Explore Dyeing Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
