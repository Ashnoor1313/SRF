import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Zap,
  FlaskConical,
  RotateCw,
  Sparkles,
  Leaf,
  Activity,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Dyeing & Color Chemistry | Computerized Softflow Dyeing | Siya Ram Fabrics",
  description:
    "Discover our precision dyeing process: spectrophotometer recipe matching, low-liquor softflow vessels, OEKO-TEX reactive dyes, and 100% in-house ETP in Ludhiana.",
};

const DYEING_STEPS = [
  {
    step: "01",
    title: "Enzymatic Scouring & Bio-Polishing",
    description:
      "Greige fabrics undergo eco-friendly cellulase enzyme bio-polishing to remove protruding surface microfibers, eliminating pilling and enhancing fabric smoothness before dye uptake.",
    metric: "Anti-Pilling Level 4.5+",
  },
  {
    step: "02",
    title: "Computerized Spectrophotometer Recipe Matching",
    description:
      "Our in-house color laboratory uses digital reflectance spectrophotometers to formulate exact dye recipes. Lab dips are generated within 48–72 hours with strict Delta E < 0.8 matching.",
    metric: "Delta E < 0.8 Tolerance",
  },
  {
    step: "03",
    title: "Low-Liquor Eco Softflow Dyeing",
    description:
      "Automated softflow dyeing vessels operate at low 1:5 liquor ratios. Controlled heating curves and microprocessor chemical dosing ensure uniform dye migration without rope marks.",
    metric: "1:5 Liquor Ratio",
  },
  {
    step: "04",
    title: "Multi-Stage Washing & Neutralization",
    description:
      "Unfixed reactive dyes are removed through progressive hot-water rinses, soaping, and core neutralization to guarantee superior wet/dry rubbing and wash fastness ratings.",
    metric: "Grade 4-5 Color Fastness",
  },
  {
    step: "05",
    title: "Hydro-Extraction & Dewatering",
    description:
      "Centrifugal and continuous rope hydro-extractors remove 60%+ residual moisture gently without distorting the knitted loop geometry, preparing rolls for drying and compacting.",
    metric: "Zero Stretch Distortion",
  },
];

const LAB_CAPABILITIES = [
  {
    title: "DataColor Spectrophotometer",
    subtitle: "Digital Color Formulation",
    description: "Measures spectral reflectance curves under multiple light sources (D65 daylight, TL84 store lighting, CWF) to prevent metamerism.",
  },
  {
    title: "12-Beaker Auto Lab Dips",
    subtitle: "Rapid 48h Shade Delivery",
    description: "Automated dosing robots simulate exact plant dye curves on 5-gram swatches, ensuring lab-to-bulk reproducibility on the first production run.",
  },
  {
    title: "Fastness Testing Suite",
    subtitle: "ISO & AATCC Compliant",
    description: "Equipped with crockmeters, launderometers, and perspiration testers ensuring zero color bleeding, fading, or staining under repeated washes.",
  },
];

export default function DyeingProcessPage() {
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
            <span className="text-brand-bright">Dyeing & Color Chemistry</span>
          </div>

          <FadeIn direction="up">
            <div className="max-w-4xl space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-bright bg-brand-bright/10 border border-brand-bright/30 px-4 py-1.5 rounded-full">
                <Droplets className="w-3.5 h-3.5" /> Stage 02 • Precision Color Matching
              </span>
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white leading-tight">
                Computerized <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-bright to-white">
                  Dyeing & Color Chemistry
                </span>
              </h1>
              <p className="text-white/80 text-base sm:text-xl leading-relaxed max-w-2xl">
                Exact shade repeatability meets eco-conscious processing. Our computerized softflow dyeing plant delivers vibrant, deep, and wash-fast shades with strict Delta E &lt; 0.8 color tolerances.
              </p>
            </div>
          </FadeIn>

          {/* Plant Visual Hero */}
          <FadeIn direction="up" delay={0.2}>
            <div className="mt-12 relative w-full h-72 sm:h-96 md:h-[450px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src="/images/process-dyeing.jpg"
                alt="Softflow Dyeing Vessels and Plant Floor"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-heading text-lg sm:text-2xl font-bold uppercase tracking-wide text-white">
                  Computerized Low Liquor Ratio (1:5) Softflow Vessels
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Step-by-Step Dyeing Process */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm block">Dyeing Protocol</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-foreground">
              5-Step Wet Processing Sequence
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Every lot follows a rigorous computerized temperature curve, chemical dosing protocol, and optical spectrophotometer confirmation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DYEING_STEPS.map((st, idx) => (
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

      {/* Color Lab & Sustainability Highlights */}
      <section className="py-20 md:py-24 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 md:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-primary font-semibold tracking-widest uppercase text-sm block">Quality Control</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-foreground">
                In-House Colorimetry & Fastness Testing
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                We eliminate guesswork in color formulation. Our dedicated lab tests every dye recipe across daylight (D65), retail store light (TL84), and incandescent illumination to ensure absolute shade harmony.
              </p>
              <div className="space-y-4">
                {LAB_CAPABILITIES.map((lab) => (
                  <div key={lab.title} className="bg-card p-5 rounded-2xl border border-border">
                    <h4 className="font-heading text-base font-bold uppercase text-foreground">{lab.title}</h4>
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">{lab.subtitle}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{lab.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Environmental & ETP Card */}
            <div className="lg:col-span-6">
              <div className="bg-secondary border border-white/10 rounded-3xl p-8 sm:p-10 text-white space-y-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-brand-bright">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-bright">Eco Responsibility</span>
                    <h3 className="font-heading text-2xl font-bold uppercase text-white">In-House ETP & Zero Toxic Discharge</h3>
                  </div>
                </div>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  We operate a state-of-the-art biological Effluent Treatment Plant (ETP) capable of processing 100% of our daily water discharge. We use only OEKO-TEX Standard compliant, AZO-free reactive dyes and heavy-metal-free auxiliaries.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <p className="font-numbers text-2xl font-bold text-brand-bright">100%</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/70 mt-0.5">Effluent Treated</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <p className="font-numbers text-2xl font-bold text-brand-bright">0%</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/70 mt-0.5">Harmful AZO Dyes</p>
                  </div>
                </div>
              </div>
            </div>
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
                Stage 03: Advanced Fabric Finishing
              </h3>
              <p className="text-white/70 text-sm mt-1 max-w-xl">
                See how dyed rolls are compacted, stentered, raised, and brushed for exact dimensional stability and handfeel.
              </p>
            </div>
            <Link
              href="/process/finishing"
              className={buttonVariants({
                size: "lg",
                className: "uppercase tracking-widest font-semibold rounded-full bg-brand-bright text-black hover:bg-white gap-2 shrink-0",
              })}
            >
              <span>Explore Finishing Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
