import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  Droplets,
  Sparkles,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Zap,
  Gauge,
  RotateCw,
  FlaskConical,
  ImageIcon,
  Camera,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Our Process | Complete Knitted Fabric Manufacturing Workflow | Siya Ram Fabrics",
  description:
    "Explore our vertically integrated 3-stage textile process: High-Speed Knitting & Manufacturing, Computerized Softflow Dyeing, and Advanced Fabric Finishing in Ludhiana.",
};

const PROCESS_STAGES = [
  {
    step: "01",
    id: "manufacturing",
    title: "Knitting & Manufacturing",
    subtitle: "Stage 01 • Structural Fabric Formation",
    tag: "High-Speed Circular Knitting",
    description:
      "Raw combed, carded, and spun yarns are transformed into precision knitted greige fabrics using high-gauge multitrack circular knitting machines. Every stitch loop is engineered for exact GSM, course-wale density, and elastic recovery.",
    imageSpec: {
      subject: "Circular Knitting Machinery & Greige Fabric Formation",
      dimensions: "1200 × 675 px (16:9)",
      fileName: "SDW01497.JPG.jpeg",
      assetPath: "/images/SDW01497.JPG.jpeg",
      badge: "High-Speed Knitting Line",
    },
    stats: [
      { label: "Daily Output", value: "15,000+ Kg" },
      { label: "Gauge Range", value: "20G – 34G" },
      { label: "Loop Uniformity", value: "99.8%" },
    ],
    highlights: [
      "High-speed multitrack circular knitting lines (Mayer & Cie / Terrot)",
      "Automated positive yarn feeders & digital tension regulators",
      "Specialised greige structures: Single Jersey, Interlock, Rib & Terry",
      "Inline optical stop-motion detectors preventing needle defects",
    ],
    href: "/process/manufacturing",
    icon: Layers,
    color: "from-primary to-brand-bright",
    badgeColor: "bg-primary/10 text-primary border-primary/30",
  },
  {
    step: "02",
    id: "dyeing",
    title: "Dyeing & Color Chemistry",
    subtitle: "Stage 02 • Precision Color Matching",
    tag: "Computerized Softflow Dyeing",
    description:
      "Greige fabrics undergo enzymatic bio-polishing, scouring, and automated softflow dyeing in low-liquor ratio vessels. Using spectrophotometer recipe formulations, we achieve precise shade consistency with Delta E under 0.8 across repeat dye lots.",
    imageSpec: {
      subject: "Softflow Dyeing Vessels & Computerized Color Kitchen",
      dimensions: "1200 × 675 px (16:9)",
      fileName: "IMG-20260825-WA0002.jpg",
      assetPath: "/images/IMG-20260825-WA0002.jpg",
      badge: "Eco Softflow Dyehouse",
    },
    stats: [
      { label: "Delta E Tolerance", value: "< 0.8" },
      { label: "Batch Capacity", value: "50–1200 Kg" },
      { label: "Fastness Rating", value: "Grade 4.5+" },
    ],
    highlights: [
      "Low liquor ratio (1:5) eco softflow vessels minimizing water usage",
      "Computerized spectrophotometer automated recipe calculations",
      "OEKO-TEX compliant reactive and disperse AZO-free dyes",
      "100% in-house biological Effluent Treatment Plant (ETP)",
    ],
    href: "/process/dyeing",
    icon: Droplets,
    color: "from-primary to-brand-bright",
    badgeColor: "bg-primary/10 text-primary border-primary/30",
  },
  {
    step: "03",
    id: "finishing",
    title: "Advanced Fabric Finishing",
    subtitle: "Stage 03 • Touch, Texture & Shrinkage Control",
    tag: "Compacting & Stentering",
    description:
      "Dyed fabrics pass through multi-chamber stenter frames, felt calender compactors, and heavy-duty raising units. We lock in dimensional stability, eliminate spirality, control residual shrinkage under 3%, and produce luxurious handfeels.",
    imageSpec: {
      subject: "Stenter Frames, Felt Compactor & 4-Point Grading",
      dimensions: "1200 × 675 px (16:9)",
      fileName: "Stenter.png",
      assetPath: "/images/Stenter.png",
      badge: "Compacting & Stenter Finishing",
    },
    stats: [
      { label: "Residual Shrinkage", value: "< 3.0%" },
      { label: "Spirality Control", value: "< 2.0%" },
      { label: "Inspection Stages", value: "3 Tiers" },
    ],
    highlights: [
      "Multi-chamber heat-setting stenter frames with overfeed control",
      "Open-width & tubular felt compactors for anti-shrinkage handle",
      "Heavy-duty raising machines for plush fleece & sweatshirt textures",
      "100% 4-point grading under D65 high-CRI color matching booths",
    ],
    href: "/process/finishing",
    icon: Sparkles,
    color: "from-primary to-brand-bright",
    badgeColor: "bg-primary/10 text-primary border-primary/30",
  },
];

export default function ProcessHubPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-gradient-to-b from-[#111111] via-[#1a0e12] to-[#111111] text-white overflow-hidden">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-bright/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-bright bg-brand-bright/10 border border-brand-bright/30 px-4 py-1.5 rounded-full">
                <Cpu className="w-3.5 h-3.5" /> End-to-End Vertical Integration
              </span>
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white leading-tight">
                Our 3-Stage <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-bright to-white">
                  Manufacturing Process
                </span>
              </h1>
              <p className="text-white/80 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
                Under one 1.5 lac sq ft roof in Ludhiana, raw yarn transforms into high-grade knitted fabric through precision circular knitting, computerized softflow dyeing, and advanced compacting finishing.
              </p>
            </div>
          </FadeIn>

          {/* Quick Metrics Bar */}
          <FadeIn direction="up" delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-md">
                <p className="font-numbers text-3xl sm:text-4xl font-bold text-brand-bright">1.5 Lac</p>
                <p className="text-[11px] uppercase tracking-widest font-semibold text-white/70 mt-1">Sq Ft Plant</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-md">
                <p className="font-numbers text-3xl sm:text-4xl font-bold text-brand-bright">15,000 Kg</p>
                <p className="text-[11px] uppercase tracking-widest font-semibold text-white/70 mt-1">Daily Capacity</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-md">
                <p className="font-numbers text-3xl sm:text-4xl font-bold text-brand-bright">&lt; 0.8</p>
                <p className="text-[11px] uppercase tracking-widest font-semibold text-white/70 mt-1">Delta E Match</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-md">
                <p className="font-numbers text-3xl sm:text-4xl font-bold text-brand-bright">100%</p>
                <p className="text-[11px] uppercase tracking-widest font-semibold text-white/70 mt-1">In-House ETP</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3 Main Process Pillars Showcase */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8 space-y-20">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm block">Process Workflow</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-foreground">
              From Raw Yarn to Finished Fabric
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Click into each core stage to explore its specialized machinery, engineering parameters, and quality control protocols.
            </p>
          </div>

          <div className="space-y-16">
            {PROCESS_STAGES.map((stage, idx) => {
              const Icon = stage.icon;

              return (
                <FadeIn key={stage.id} direction="up" delay={idx * 0.1}>
                  <div className="bg-card border border-border/80 hover:border-primary/50 rounded-3xl p-6 sm:p-10 shadow-lg hover:shadow-[0_25px_60px_rgba(177,33,55,0.12)] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group">
                    {/* Top Radiant Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent group-hover:via-primary transition-all duration-500" />
                    
                    {/* Ambient Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 via-brand-bright/5 to-transparent rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

                    <div className="space-y-8 relative z-10">
                      {/* Top Header Row */}
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-border/70">
                        <div className="flex items-center gap-4 sm:gap-5">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary via-primary to-brand-bright flex items-center justify-center text-white shadow-[0_10px_25px_rgba(177,33,55,0.35)] group-hover:scale-105 group-hover:shadow-[0_15px_35px_rgba(177,33,55,0.5)] transition-all duration-300 shrink-0">
                            <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-primary px-2.5 py-0.5 rounded-md bg-primary/10">
                                STEP {stage.step}
                              </span>
                              <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/25">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                {stage.tag}
                              </span>
                            </div>
                            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                              {stage.title}
                            </h3>
                          </div>
                        </div>

                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground self-start lg:self-center">
                          {stage.subtitle}
                        </span>
                      </div>

                      {/* Middle Body: Image Placeholder Frame + Engineering Benchmarks */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                        {/* Left/Image Showcase (7 Cols) */}
                        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                          {/* Pure Clean Image Showcase */}
                          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border shadow-lg group/img">
                            <Image
                              src={stage.imageSpec.assetPath}
                              alt={stage.imageSpec.subject}
                              fill
                              unoptimized
                              className="object-cover object-center group-hover/img:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                            {/* Clean Title Overlay */}
                            <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                              <p className="font-heading text-base sm:text-lg font-bold uppercase tracking-wide text-white">
                                {stage.imageSpec.subject}
                              </p>
                            </div>
                          </div>

                          {/* Lead Description */}
                          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                            {stage.description}
                          </p>
                        </div>

                        {/* Right/Stats & Highlights Column (5 Cols) */}
                        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                          <div className="bg-muted/70 hover:bg-muted/90 border border-border rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm backdrop-blur-md h-full flex flex-col justify-between">
                            {/* Benchmarks Header */}
                            <div className="flex items-center justify-between border-b border-border/80 pb-3">
                              <span className="text-xs font-extrabold uppercase tracking-widest text-foreground flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                Engineering Benchmarks
                              </span>
                              <span className="font-numbers text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                                Stage {stage.step} Specs
                              </span>
                            </div>

                            {/* 3 Benchmarks Cards */}
                            <div className="grid grid-cols-1 gap-2.5">
                              {stage.stats.map((st) => (
                                <div
                                  key={st.label}
                                  className="p-3.5 rounded-xl bg-card border border-border/80 hover:border-primary/40 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group/stat"
                                >
                                  <div>
                                    <p className="font-numbers text-xl sm:text-2xl font-extrabold text-foreground group-hover/stat:text-primary transition-colors tracking-tight">
                                      {st.value}
                                    </p>
                                    <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                                      {st.label}
                                    </p>
                                  </div>
                                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover/stat:bg-primary group-hover/stat:text-white transition-colors duration-300">
                                    <Gauge className="w-3.5 h-3.5" />
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Mini Highlights */}
                            <div className="space-y-1.5 pt-1 border-t border-border/70">
                              {stage.highlights.slice(0, 2).map((h) => (
                                <div key={h} className="flex items-start gap-2 text-[11px] text-foreground/80 font-medium leading-tight">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                  <span className="line-clamp-1">{h}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action Row */}
                      <div className="pt-2 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <Link
                          href={stage.href}
                          className="w-full sm:w-auto bg-gradient-to-r from-primary to-brand-bright hover:from-primary/95 hover:to-brand-bright/95 text-white font-bold uppercase tracking-wider text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-[0_10px_25px_rgba(177,33,55,0.3)] hover:shadow-[0_15px_35px_rgba(177,33,55,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 group/btn"
                        >
                          <span>Explore Full {stage.title} Process</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>

                        <Link
                          href={stage.href}
                          className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-muted hover:bg-primary text-foreground hover:text-white border border-border hover:border-primary text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm group/subbtn"
                        >
                          <span>Inspect {stage.title} Machinery</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/subbtn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Control Banner */}
      <section className="py-16 md:py-20 bg-secondary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-bright bg-brand-bright/10 border border-brand-bright/30 px-4 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4" /> 3-Stage Inspection Standard
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Every Metre Tested for Exact Tolerance
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Our quality assurance is built into every step. From raw yarn arrival to circular knitting, softflow dye chemistry, compacting, and final dispatch — our in-house lab tests every batch for GSM consistency, shrinkage under 3%, and wash fastness.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/infrastructure"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "uppercase tracking-widest font-semibold text-white border border-white/40 bg-transparent hover:bg-white hover:text-black rounded-full transition-all",
                })}
              >
                View Infrastructure & Machines
              </Link>
              <Link
                href="/contact"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "uppercase tracking-widest font-semibold rounded-full bg-primary text-white hover:bg-[#8F1A2C] hover:text-white transition-all shadow-lg",
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
