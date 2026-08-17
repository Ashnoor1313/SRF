import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, History, Rocket, Sparkles, TrendingUp } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";
import { InteractiveLeadershipSection, OwnersShowcaseGrid, CoreValuesGrid, GrowthTransformationRibbon, DotTimelineSequence } from "@/components/about-interactive-sections";

const YEARS = new Date().getFullYear() - 1998;

export const metadata: Metadata = {
  title: "About Us | Siya Ram Fabrics - Two Generations of Textile Excellence",
  description:
    "From 500 sq ft and one employee in 1998 to a 1.5 lac sq ft facility with 300+ people — discover the two-generation journey of Siya Ram Fabrics.",
};


export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Dark Glass & Ambient Glow */}
      <section className="relative py-24 md:py-[150px] bg-secondary text-white overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-brand-bright/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <FadeIn direction="up">
              <span className="inline-flex items-center gap-2 border border-brand-bright/50 bg-brand-bright/10 text-brand-bright text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2 mb-6 rounded-full">
                <History className="w-3.5 h-3.5" /> About Siya Ram Fabrics
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[0.92] mb-8">
                A Legacy of<br />
                <span className="text-brand-bright">Two Generations.</span><br />
                Unbroken Precision.
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl">
                Founded in 1998 by Mr. Harish Jindal with 1 employee and 500 sq ft of space,
                Siya Ram Fabrics has grown into a 1.5 lac sq ft complete in-house manufacturing
                powerhouse employing over 300 professionals.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Founder Growth Stats Ribbon */}
      <section className="py-16 md:py-20 bg-primary text-white shadow-xl relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          <GrowthTransformationRibbon />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-[120px] bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Our Philosophy</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-4">
                Built on Engineering & Integrity
              </h2>
              <p className="text-muted-foreground text-lg">
                For over {YEARS} years, our values have driven every metre of knitted fabric that leaves our Ludhiana facility.
              </p>
            </div>
          </FadeIn>
          <CoreValuesGrid />
        </div>
      </section>

      {/* Company Overview & Legal Identity */}
      <section className="py-20 md:py-[120px] bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Company Overview</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
                Complete In-House<br />Textile Infrastructure
              </h2>
              <div className="w-20 h-1.5 bg-primary mb-8 rounded-full" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Siya Ram Fabrics was established in 1998 by Mr. Harish Jindal.
                With over {YEARS} years of operational excellence, we have transformed from a regional fabric supplier
                into a comprehensive, vertically integrated manufacturing plant.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our plant houses knitting, dyeing, and finishing operations under one roof. This allows us to exercise
                end-to-end quality control — ensuring consistent GSM, color accuracy, and zero defects.
              </p>
              <div className="pt-4">
                <Link href="/process" className={buttonVariants({ size: "lg", className: "uppercase tracking-widest font-semibold rounded-full gap-2" })}>
                  Explore Manufacturing Workflow <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="bg-card border border-border p-8 md:p-12 space-y-6 rounded-3xl shadow-xl">
              <div className="flex items-center gap-4 pb-6 border-b border-border">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Company</p>
                  <p className="font-heading text-2xl font-bold text-foreground">Siya Ram Fabrics</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-muted/50 p-4 rounded-xl">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold mb-1">Founder</p>
                  <p className="font-heading text-base font-bold text-foreground">Mr. Harish Jindal</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-xl">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold mb-1">Established</p>
                  <p className="font-heading text-base font-bold text-foreground">1998 (28+ Years)</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-xl">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold mb-1">Plant Area</p>
                  <p className="font-heading text-base font-bold text-foreground">1.5 Lac Sq Ft</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-xl">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold mb-1">Workforce</p>
                  <p className="font-heading text-base font-bold text-foreground">300+ Skilled Staff</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-xl sm:col-span-2">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold mb-1">GSTIN</p>
                  <p className="font-numbers text-base font-bold text-primary">03ABEPJ2089F2ZY</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-xl sm:col-span-2">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold mb-1">In-House Capabilities</p>
                  <p className="text-foreground text-xs leading-relaxed font-medium">High-Speed Knitting, Dyeing, Compacting, Raising, Stentering & Quality Inspection</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Interactive Leadership Showcase Section */}
      <section className="py-20 md:py-[120px] bg-background">
        <div className="container mx-auto px-4 md:px-8 space-y-16">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Leadership & Legacy</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-4">
                The Visionaries Behind SRF
              </h2>
              <p className="text-muted-foreground text-lg">
                Meet the leaders driving Siya Ram Fabrics across two generations of manufacturing excellence, innovation, and trust.
              </p>
            </div>
          </FadeIn>

          {/* 3-Card Owner Portrait Grid Showcase */}
          <OwnersShowcaseGrid />

          {/* Deep Spotlight Selector */}
          <div className="pt-12 border-t border-border">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-foreground mb-2">
                Detailed Spotlight
              </h3>
              <p className="text-muted-foreground text-sm">
                Select a leader below to inspect their full biographical journey, qualifications, and core achievements.
              </p>
            </div>
            <InteractiveLeadershipSection />
          </div>
        </div>
      </section>

      {/* Comprehensive Founder & 2nd Gen Timeline */}
      <section className="py-20 md:py-[120px] bg-secondary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <FadeIn direction="up">
            <div className="max-w-3xl mb-16 md:mb-20">
              <span className="text-brand-bright font-semibold tracking-widest uppercase text-sm mb-4 block">Milestone History</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                Key Milestones & Growth
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                From civil engineering studies to a 1.5 lac sq ft manufacturing landmark.
              </p>
            </div>
          </FadeIn>

          {/* Interactive Dot-Wise Line Plot Milestone Timeline */}
          <div className="mb-16">
            <DotTimelineSequence />
          </div>

          <FadeIn direction="up">
            <div className="bg-primary/20 border border-primary/40 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8 justify-between rounded-3xl">
              <div className="flex items-center gap-6">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-brand-bright shadow-xl">
                  <Image
                    src="/images/Harish Jindal.png"
                    alt="Mr. Harish Jindal"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-bright font-semibold mb-1">Founder&apos;s Motto</p>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">Mr. Harish Jindal</h3>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed max-w-2xl text-sm md:text-base italic">
                &ldquo;We didn&apos;t just build a factory; we built a culture where quality is never compromised and commitments are honored without exception.&rdquo;
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Second Generation Feature Cards */}
      <section className="py-20 md:py-[120px] bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl mb-16 md:mb-20">
              <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">2nd Generation Impact</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
                Innovating for the Future
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Combining 30 years of manufacturing wisdom with modern business education and digital tech.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem className="bg-card border border-border p-8 rounded-3xl hover:shadow-xl transition-all duration-300">
              <Rocket className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-3 text-foreground">Fast Fashion Division</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Launched by Yuvraj Jindal (MBA 2023) to address fast-cycling fashion trends, rapid sampling, and short lead times.
              </p>
            </StaggerItem>
            <StaggerItem className="bg-card border border-border p-8 rounded-3xl hover:shadow-xl transition-all duration-300">
              <TrendingUp className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-3 text-foreground">Pan-India Expansion</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Driven by Saransh Jindal (Graduated 2017) to expand distribution across major garment hubs including Delhi, Surat, Tirupur, and Mumbai.
              </p>
            </StaggerItem>
            <StaggerItem className="bg-card border border-border p-8 rounded-3xl hover:shadow-xl transition-all duration-300">
              <Sparkles className="w-10 h-10 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-3 text-foreground">Plant Automation</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Upgraded circular knitting tension controls, digital fabric inspection, and automated shade matching systems.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Location & Interactive Directions */}
      <section className="py-20 md:py-[100px] bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <span className="text-brand-bright font-semibold tracking-widest uppercase text-sm mb-4 block">Plant Location</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">
                Located in Ludhiana,<br />Serving All of India
              </h2>
              <div className="w-20 h-1.5 bg-brand-bright mb-8 rounded-full" />
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Operating out of Hampton Court Business Park in Ludhiana, Punjab — India&apos;s premier textile hub.
              </p>
              <address className="not-italic text-white/90 text-lg leading-relaxed mb-10 bg-white/5 p-6 rounded-2xl border border-white/10">
                A4–A7, Hampton Court Business Park,<br />
                Chandigarh Road, Ludhiana – 141008,<br />
                Punjab, India
              </address>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className={buttonVariants({ variant: "white", size: "lg", className: "uppercase tracking-widest font-semibold bg-brand-bright text-black hover:bg-white rounded-full" })}>
                  Get in Touch
                </Link>
                <a
                  href="https://maps.app.goo.gl/su8KN3AsiPXTbz9Q8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline", size: "lg", className: "uppercase tracking-widest font-semibold text-white border-white/40 hover:bg-white hover:text-black rounded-full" })}
                >
                  Open in Google Maps
                </a>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <iframe
                title="Siya Ram Fabrics Location Map"
                src="https://maps.google.com/maps?q=Siya+Ram+Fabrics,+Ludhiana&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
