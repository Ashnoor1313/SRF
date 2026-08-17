import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Zap,
  Sliders,
  Maximize2,
  Scissors,
  Eye,
  Layers,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Fabric Finishing Process | Compacting, Stentering & Raising | Siya Ram Fabrics",
  description:
    "Explore our advanced fabric finishing workflow: multi-chamber stenter frames, felt compactors, raising units, and strict 4-point inspection in Ludhiana.",
};

const FINISHING_STEPS = [
  {
    step: "01",
    title: "Multi-Chamber Stentering & Heat Setting",
    description:
      "Dyed fabric enters multi-chamber stenter frames with precise pin/clip tension control. We calibrate thermal heat setting temperatures, lock in width dimensions, and eliminate spirality.",
    metric: "Spirality < 2.0%",
  },
  {
    step: "02",
    title: "Tubular & Open-Width Felt Compacting",
    description:
      "Heavy-duty felt calender compactors compress the stitch loops longitudinally, preshrinking the fabric to guarantee residual length and width shrinkage under 3% after commercial garment washing.",
    metric: "Shrinkage < 3.0%",
  },
  {
    step: "03",
    title: "Precision Raising, Brushing & Shearing",
    description:
      "For winter sweatshirt fabrics and fleece, multi-roller raising machines extract dense, ultra-soft loop pile. High-speed precision shearing cylinders trim the pile to uniform micrometric height.",
    metric: "Plush Zero-Shed Pile",
  },
  {
    step: "04",
    title: "Dimensional Stability & GSM Testing",
    description:
      "Cut swatches from every batch undergo oven conditioning and circular GSM cutter weighing. Wash tests measure dimensional distortion across 3 consecutive hot-water cycles.",
    metric: "100% Batch Tested",
  },
  {
    step: "05",
    title: "4-Point System Final Quality Inspection",
    description:
      "Every single finished roll passes over high-CRI LED inspection tables. Experienced master inspectors grade every defect using the international 4-Point System before shrink-wrapping.",
    metric: "100% Roll Inspection",
  },
];

const FINISHING_MACHINES = [
  {
    title: "Multi-Chamber Stenter Frame",
    purpose: "Width Stabilization & Heat Setting",
    functions: "Overfeed pin chain, moisture sensor control, automatic bow & skew weft straightening.",
    speciality: "Locks Lycra/Spandex recovery memory and establishes uniform finished widths without edge curling.",
  },
  {
    title: "Felt Calender Compactor",
    purpose: "Anti-Shrinkage & Handfeel Softening",
    functions: "Dual heating cylinders with thick Nomex felt belts compressing the fabric structure mechanically.",
    speciality: "Delivers a luxurious, silky drape while locking residual shrinkage well within international export benchmarks (<3%).",
  },
  {
    title: "Heavy-Duty Raising & Shearing Line",
    purpose: "Fleece & Terry Surface Texturing",
    functions: "Wire-covered counter-rotating rollers extracting surface fibers, followed by rotary shearing blades.",
    speciality: "Creates uniform, non-pilling, ultra-warm fleece textures ideal for premium hoodies, joggers, and tracksuits.",
  },
];

export default function FinishingProcessPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-24 bg-gradient-to-b from-[#111111] via-[#1a0e12] to-[#111111] text-white overflow-hidden">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-white/60 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/process" className="hover:text-white transition-colors">Our Process</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-bright">Advanced Fabric Finishing</span>
          </div>

          <FadeIn direction="up">
            <div className="max-w-4xl space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-bright bg-brand-bright/10 border border-brand-bright/30 px-4 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" /> Stage 03 • Touch, Texture & Shrinkage Control
              </span>
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white leading-tight">
                Advanced <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-bright to-white">
                  Fabric Finishing
                </span>
              </h1>
              <p className="text-white/80 text-base sm:text-xl leading-relaxed max-w-2xl">
                Where fabric gains its signature premium feel and wash-and-wear durability. We master dimensional compaction, stentering width precision, and luxury brushed fleece texturing.
              </p>
            </div>
          </FadeIn>

          {/* Plant Visual Hero */}
          <FadeIn direction="up" delay={0.2}>
            <div className="mt-12 relative w-full h-72 sm:h-96 md:h-[450px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src="/images/process-finishing.jpg"
                alt="Stenter Frames and Felt Compactor Plant Floor"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-heading text-lg sm:text-2xl font-bold uppercase tracking-wide text-white">
                  Multi-Chamber Stenter &amp; Felt Calender Compactor Floor
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Step-by-Step Finishing Process */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm block">Finishing Sequence</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-foreground">
              Precision Texture & Stability Control
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Every roll passes through calibrated thermal and mechanical finishing machines to eliminate distortion and produce exceptional softness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FINISHING_STEPS.map((st, idx) => (
              <FadeIn key={st.step} direction="up" delay={idx * 0.1}>
                <div className="bg-card border border-border p-8 rounded-3xl h-full flex flex-col justify-between hover:shadow-xl hover:border-primary/40 transition-all duration-300 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-numbers text-3xl font-black text-primary/30 group-hover:text-primary transition-colors">
                        {st.step}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/10 text-primary">
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

      {/* Finishing Machines Detail */}
      <section className="py-20 md:py-24 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 md:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm block">Machinery Breakdown</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-foreground">
              Finishing Plant Equipment
            </h2>
            <p className="text-muted-foreground text-sm">
              Discover the functions, purpose, and specialty of each finishing unit in our Ludhiana plant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FINISHING_MACHINES.map((m) => (
              <div key={m.title} className="bg-card border border-border p-8 rounded-3xl space-y-4 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">
                  {m.title}
                </h3>
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {m.purpose}
                </span>
                <div className="space-y-3 pt-2 text-xs">
                  <p><strong className="text-foreground">Core Functions:</strong> <span className="text-muted-foreground">{m.functions}</span></p>
                  <p><strong className="text-foreground">Product Speciality:</strong> <span className="text-muted-foreground">{m.speciality}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary CTA Bridge */}
      <section className="py-16 md:py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-bright block mb-2">Complete 3-Stage Process</span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white">
                Experience the Scale of Siya Ram Fabrics
              </h3>
              <p className="text-white/70 text-sm mt-1 max-w-xl">
                Inspect our full 1.5 lac sq ft infrastructure, browse our catalogue of 40+ knitted fabrics, or request custom lab dips and trial rolls today.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                href="/products"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "uppercase tracking-widest font-semibold text-white border-white/40 hover:bg-white hover:text-black rounded-full",
                })}
              >
                Browse Fabrics
              </Link>
              <Link
                href="/contact"
                className={buttonVariants({
                  size: "lg",
                  className: "uppercase tracking-widest font-semibold rounded-full bg-brand-bright text-black hover:bg-white",
                })}
              >
                Request Custom Sample
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
