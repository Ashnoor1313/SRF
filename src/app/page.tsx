import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, Rocket, ShieldCheck, Sparkles, Users } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";

const YEARS = new Date().getFullYear() - 1998;

const milestones = [
  {
    year: "1994",
    title: "A Civil Engineer's Dream",
    description: "Harish Jindal completes his BTech in Civil Engineering, ready to build — though not yet in the way he imagined.",
  },
  {
    year: "1995",
    title: "Learning from the Best",
    description: "Works under Reliance Industries in Surat, absorbing large-scale industrial discipline and business acumen.",
  },
  {
    year: "1996",
    title: "The Research Begins",
    description: "Returns to Ludhiana and dives deep into the fabric market — studying every thread of the textile trade.",
  },
  {
    year: "1998",
    title: "Siya Ram Fabrics is Born",
    description: "Founds Siya Ram Fabrics with just 1 employee and 500 sq ft of space. One machine. One vision.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/factory_floor.png"
            alt="Modern textile manufacturing at Siya Ram Fabrics"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-white">
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <span className="inline-flex items-center gap-2 border border-brand-bright/60 text-brand-bright text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2 mb-6 bg-black/40 rounded-full">
                Family Textile Business Since 1998
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[0.95] mb-6">
                From 500 sq ft to{" "}
                <span className="text-brand-bright">1.5 Lac sq ft</span> — Built on Vision.
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg md:text-2xl font-light text-white/85 mb-10 max-w-2xl leading-relaxed">
                What began with a single employee in 1998 is today a thriving textile house
                of 300+ people. Two generations, one unbroken commitment to quality knitted fabrics.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="/contact" className={buttonVariants({ size: "lg", className: "uppercase tracking-widest font-semibold w-full sm:w-auto rounded-full" })}>
                  Request an Enquiry
                </Link>
                <Link href="/about" className={buttonVariants({ variant: "outline", size: "lg", className: "uppercase tracking-widest font-semibold w-full sm:w-auto text-white border-white hover:bg-white hover:text-foreground rounded-full" })}>
                  Our Story
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.5}>
            <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/15 border border-white/15 max-w-4xl rounded-2xl overflow-hidden">
              {[
                { value: `${YEARS}+`, label: "Years of Legacy" },
                { value: "1.5 Lac", label: "Sq Ft Facility" },
                { value: "300+", label: "Employees" },
                { value: "1", label: "Machine to Start With" },
              ].map((stat) => (
                <div key={stat.label} className="bg-black/50 backdrop-blur-sm p-6 md:p-8">
                  <p className="font-heading text-3xl md:text-5xl font-bold text-brand-bright mb-2">{stat.value}</p>
                  <p className="text-xs md:text-sm text-white/60 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Markets Served */}
      <section className="py-10 md:py-14 bg-muted border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn direction="up">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold text-center lg:text-left">
                Trusted by garment manufacturers across India
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
                {[
                  "Ludhiana",
                  "Delhi NCR",
                  "Surat",
                  "Tirupur",
                  "Mumbai",
                  "Kolkata",
                  "Jaipur",
                  "Ahmedabad",
                ].map((city) => (
                  <span key={city} className="inline-flex items-center px-4 py-1.5 rounded-full border border-border bg-background text-xs md:text-sm font-heading font-semibold uppercase tracking-wider text-foreground/70">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Founder Journey Timeline */}
      <section className="py-20 md:py-[120px] bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <FadeIn direction="right">
                <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Our Founder</span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
                  The Journey of<br />Harish Jindal
                </h2>
                <div className="w-20 h-1 bg-primary mb-8" />
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Every great enterprise starts with a single decision. For Siya Ram Fabrics,
                  that decision was made in 1998 by a young civil engineer who believed the
                  fabric market of Ludhiana deserved better.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Starting with one employee and 500 sq ft of space, Mr. Harish Jindal turned
                  research, grit, and Reliance-bred discipline into one of the region&apos;s most
                  trusted textile manufacturers.
                </p>
                <Link href="/about" className={buttonVariants({ variant: "link", className: "text-primary hover:text-primary/80 p-0 h-auto font-semibold uppercase tracking-wider text-sm flex items-center gap-2 rounded-full" })}>
                  Read the Full Story <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <StaggerContainer className="relative pl-8 md:pl-12 border-l-2 border-border">
                {milestones.map((m) => (
                  <StaggerItem key={m.year} className="relative pb-10 last:pb-0">
                    <span className="absolute -left-[43px] md:-left-[59px] top-1 w-5 h-5 bg-primary rounded-full border-4 border-background" />
                    <span className="font-numbers text-2xl md:text-3xl font-bold text-primary mb-2 block">{m.year}</span>
                    <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground mb-2">{m.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{m.description}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Numbers */}
      <section className="py-20 md:py-[100px] bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <FadeIn direction="right">
              <div>
                <span className="text-white/70 font-semibold tracking-widest uppercase text-sm mb-4 block">The Growth Story</span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-4">
                  Small Beginnings.<br />Unlimited Ambition.
                </h2>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.15}>
              <div className="text-center md:text-left">
                <p className="font-numbers text-6xl md:text-7xl font-bold mb-2">500</p>
                <p className="uppercase tracking-widest text-sm text-white/80 font-semibold mb-2">Sq Ft — Where We Started</p>
                <div className="h-px bg-white/30 my-6" />
                <p className="font-numbers text-6xl md:text-7xl font-bold mb-2">1.5 Lac</p>
                <p className="uppercase tracking-widest text-sm text-white/80 font-semibold">Sq Ft — Where We Stand Today</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="text-center md:text-left">
                <p className="font-numbers text-6xl md:text-7xl font-bold mb-2">1</p>
                <p className="uppercase tracking-widest text-sm text-white/80 font-semibold mb-2">Employee at the Start</p>
                <div className="h-px bg-white/30 my-6" />
                <p className="font-numbers text-6xl md:text-7xl font-bold mb-2">300+</p>
                <p className="uppercase tracking-widest text-sm text-white/80 font-semibold">Skilled Team Members</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-20 md:py-[120px] bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-bright font-semibold tracking-widest uppercase text-sm mb-4 block">Our Strengths</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                Modern Manufacturing
              </h2>
              <p className="text-lg font-light text-white/80">
                Our state-of-the-art facilities are designed for scale, flexibility, and uncompromising quality control at every stage of production.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem className="bg-white/5 p-10 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <Factory className="w-12 h-12 text-brand-bright mb-6" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-4">Advanced Infrastructure</h3>
              <p className="text-white/70 leading-relaxed">
                Equipped with the latest circular knitting machines capable of producing complex structures and consistent quality across large volumes.
              </p>
            </StaggerItem>
            <StaggerItem className="bg-white/5 p-10 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <ShieldCheck className="w-12 h-12 text-brand-bright mb-6" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-4">Stringent Quality Control</h3>
              <p className="text-white/70 leading-relaxed">
                Multi-stage inspection protocols from yarn sourcing to final dispatch, ensuring zero-defect fabrics for your production lines.
              </p>
            </StaggerItem>
            <StaggerItem className="bg-white/5 p-10 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <Users className="w-12 h-12 text-brand-bright mb-6" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-4">Experienced Workforce</h3>
              <p className="text-white/70 leading-relaxed">
                A dedicated team of 300+ textile engineers and technicians who understand the nuances of knitted fabrics and garment manufacturing.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Second Generation */}
      <section className="py-20 md:py-[120px] bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl mb-16">
              <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">The Next Generation</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
                Building on the Founder&apos;s Vision
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The second generation of the Jindal family joined the business with fresh eyes
                and modern education — carrying the founder&apos;s values into a new era of textile manufacturing.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <FadeIn direction="right" className="bg-secondary text-white p-10 md:p-14 rounded-2xl flex flex-col justify-between min-h-[320px] hover:bg-secondary/95 transition-colors">
              <div>
                <div className="w-16 h-16 rounded-full bg-brand-bright/15 flex items-center justify-center mb-8">
                  <Rocket className="w-8 h-8 text-brand-bright" />
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wider mb-4">Fast Fashion Fabrics</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  Recognising the shift in global retail, the second generation introduced
                  fast fashion fabrics — enabling quicker turnarounds and trend-responsive
                  production without ever compromising on quality.
                </p>
              </div>
              <p className="text-brand-bright font-semibold uppercase tracking-widest text-sm mt-8">A New Category. A New Edge.</p>
            </FadeIn>

            <FadeIn direction="left" className="bg-muted p-10 md:p-14 rounded-2xl min-h-[320px]">
              <div className="flex items-center gap-8 mb-10">
                <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-1">Technology & Automation</p>
                  <p className="text-muted-foreground">Implemented across the plant</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "Strong execution of the founder's vision — at micro and macro levels",
                  "New technology and automation across knitting, dyeing, and finishing",
                  "Streamlined processes for faster, more consistent production",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn direction="up">
            <div className="border-t border-border pt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-full bg-primary text-white font-heading font-bold text-xl flex items-center justify-center shrink-0">SJ</div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">2nd Generation</p>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-1">Saransh Jindal</h3>
                    <p className="text-muted-foreground">Graduated in 2017, joined the family business during his studies — growing up on the factory floor.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-full bg-primary text-white font-heading font-bold text-xl flex items-center justify-center shrink-0">YJ</div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">2nd Generation</p>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-1">Yuvraj Jindal</h3>
                    <p className="text-muted-foreground">Completed his MBA in 2023, bringing modern business strategy to a time-tested manufacturing operation.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Infrastructure Preview */}
      <section className="py-20 md:py-[120px] bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="relative h-[400px] md:h-[600px] w-full order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/knitting_machine.png"
                alt="Modern circular knitting machine"
                fill
                className="object-cover"
              />
            </FadeIn>
            <FadeIn direction="left" className="order-1 lg:order-2">
              <span className="text-brand-bright font-semibold tracking-widest uppercase text-sm mb-4 block">Infrastructure</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
                Built for Scale.<br />Designed for Precision.
              </h2>
              <div className="w-20 h-1 bg-primary mb-8" />
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Spread over 1.5 lac sq ft, our manufacturing facility represents the pinnacle
                of modern textile engineering — continuously upgraded with new technology and automation.
              </p>

              <ul className="space-y-4 mb-10">
                {["High-speed circular knitting machines", "Automated quality inspection systems", "Climate-controlled production environment", "Fast fashion & trend-responsive production"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-bright shrink-0" />
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/infrastructure" className={buttonVariants({ size: "lg", variant: "outline", className: "uppercase tracking-widest font-semibold mt-4 text-white border-white hover:bg-white hover:text-foreground rounded-full" })}>
                View Infrastructure
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-[120px] bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <FadeIn direction="up">
            <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight mb-8">
              Two Generations.<br />One Promise.
            </h2>
            <p className="text-lg md:text-xl font-light text-white/90 mb-10 max-w-2xl mx-auto">
              From a single machine to 1.5 lac sq ft of manufacturing excellence — partner with
              a family that has spent {YEARS}+ years perfecting every metre of fabric.
            </p>
            <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg", className: "uppercase tracking-widest font-semibold text-white border-white hover:bg-white hover:text-primary rounded-full" })}>
              Contact Our Team
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
