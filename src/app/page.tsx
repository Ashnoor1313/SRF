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
      {/* Hero Section with Cinematic Background Video */}
      <section className="relative min-h-[88vh] sm:min-h-[92vh] w-full flex items-center overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/factory_floor.png"
            className="w-full h-full object-cover object-center"
          >
            <source
              src="/srf%20cinematic_with%20white%20logo%20and%20black%20background.mp4"
              type="video/mp4"
            />
            {/* Fallback Image */}
            <Image
              src="/images/factory_floor.png"
              alt="Modern textile manufacturing at Siya Ram Fabrics"
              fill
              className="object-cover object-center"
              priority
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/55" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 text-white">
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <span className="inline-flex items-center gap-2 border border-brand-bright/60 text-brand-bright text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase px-4 sm:px-5 py-2 mb-6 bg-black/40 rounded-full">
                Family Textile Business Since 1998
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h1 className="font-heading text-3xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[0.95] mb-6">
                From 500 sq ft to{" "}
                <span className="text-brand-bright">1.5 Lac sq ft</span> — Built on Vision.
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-base sm:text-xl md:text-2xl font-light text-white/85 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
                What began with a single employee in 1998 is today a thriving textile house
                of 300+ people. Two generations, one unbroken commitment to quality knitted fabrics.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link href="/contact" className={buttonVariants({ size: "lg", className: "uppercase tracking-widest font-bold w-full sm:w-auto rounded-full justify-center" })}>
                  Request an Enquiry
                </Link>
                <Link href="/about" className={buttonVariants({ variant: "outline", size: "lg", className: "uppercase tracking-widest font-bold w-full sm:w-auto text-white border-white hover:bg-white hover:text-black rounded-full justify-center" })}>
                  Our Story
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.5}>
            <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/15 border border-white/15 max-w-4xl rounded-2xl overflow-hidden shadow-2xl">
              {[
                { value: `${YEARS}+`, label: "Years of Legacy" },
                { value: "1.5 Lac", label: "Sq Ft Facility" },
                { value: "300+", label: "Employees" },
                { value: "1", label: "Machine to Start With" },
              ].map((stat) => (
                <div key={stat.label} className="bg-black/60 backdrop-blur-md p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                  <p className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-brand-bright mb-1 sm:mb-2">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-white/70 uppercase tracking-widest font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Markets Served */}
      <section className="py-8 sm:py-10 md:py-14 bg-muted border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <FadeIn direction="up">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold text-center lg:text-left shrink-0">
                Trusted by garment manufacturers across India
              </p>
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-end gap-1.5 sm:gap-2 max-w-full p-2 overflow-visible">
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
                  <span key={city} className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full border border-border bg-background text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-wider text-foreground/80 whitespace-nowrap shrink-0 hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(177,33,55,0.35)] hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 cursor-pointer">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Founder Journey Timeline */}
      <section className="py-16 sm:py-20 md:py-[120px] bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <FadeIn direction="right">
                <span className="text-primary font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">Our Founder</span>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
                  The Journey of<br />Harish Jindal
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-primary mb-8 rounded-full" />
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-xl border border-border group">
                  <Image
                    src="/images/Harish Jindal.png"
                    alt="Mr. Harish Jindal - Founder of Siya Ram Fabrics"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-6">
                    <div>
                      <p className="text-white font-heading text-xl font-bold">Mr. Harish Jindal</p>
                      <p className="text-white/80 text-sm font-medium">Founder & Managing Director</p>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                  Every great enterprise starts with a single decision. For Siya Ram Fabrics,
                  that decision was made in 1998 by a young civil engineer who believed the
                  fabric market of Ludhiana deserved better.
                </p>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
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
              <StaggerContainer className="relative pl-8 md:pl-12 border-l-2 border-border ml-2 sm:ml-4">
                {milestones.map((m) => (
                  <StaggerItem key={m.year} className="relative pb-8 sm:pb-10 last:pb-0">
                    <span className="absolute -left-[41px] md:-left-[57px] top-1 w-4 sm:w-5 h-4 sm:h-5 bg-primary rounded-full border-4 border-background" />
                    <span className="font-numbers text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1.5 block">{m.year}</span>
                    <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wider text-foreground mb-2">{m.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{m.description}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Numbers */}
      <section className="py-16 sm:py-20 md:py-[100px] bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 items-center">
            <FadeIn direction="right">
              <div>
                <span className="text-white/70 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">The Growth Story</span>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-4">
                  Small Beginnings.<br />Unlimited Ambition.
                </h2>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.15}>
              <div className="text-left bg-white/5 hover:bg-white/12 p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                <p className="font-numbers text-5xl sm:text-6xl md:text-7xl font-bold mb-2 text-white group-hover:text-brand-bright transition-colors duration-300">500</p>
                <p className="uppercase tracking-widest text-xs sm:text-sm text-white/80 font-semibold mb-4">Sq Ft — Where We Started</p>
                <div className="h-px bg-white/20 my-4 group-hover:bg-white/40 transition-colors" />
                <p className="font-numbers text-5xl sm:text-6xl md:text-7xl font-bold mb-2 text-white group-hover:text-brand-bright transition-colors duration-300">1.5 Lac</p>
                <p className="uppercase tracking-widest text-xs sm:text-sm text-white/80 font-semibold">Sq Ft — Where We Stand Today</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="text-left bg-white/5 hover:bg-white/12 p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                <p className="font-numbers text-5xl sm:text-6xl md:text-7xl font-bold mb-2 text-white group-hover:text-brand-bright transition-colors duration-300">1</p>
                <p className="uppercase tracking-widest text-xs sm:text-sm text-white/80 font-semibold mb-4">Employee at the Start</p>
                <div className="h-px bg-white/20 my-4 group-hover:bg-white/40 transition-colors" />
                <p className="font-numbers text-5xl sm:text-6xl md:text-7xl font-bold mb-2 text-white group-hover:text-brand-bright transition-colors duration-300">300+</p>
                <p className="uppercase tracking-widest text-xs sm:text-sm text-white/80 font-semibold">Skilled Team Members</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-16 sm:py-20 md:py-[120px] bg-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-brand-bright font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">Our Strengths</span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4 sm:mb-6">
                Modern Manufacturing
              </h2>
              <p className="text-base sm:text-lg font-light text-white/80">
                Our state-of-the-art facilities are designed for scale, flexibility, and uncompromising quality control at every stage of production.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <StaggerItem className="bg-white/5 p-6 sm:p-8 md:p-10 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-lg border border-white/10">
              <Factory className="w-10 sm:w-12 h-10 sm:h-12 text-brand-bright mb-5 sm:mb-6" />
              <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wider mb-3 sm:mb-4">Advanced Infrastructure</h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Equipped with the latest circular knitting machines capable of producing complex structures and consistent quality across large volumes.
              </p>
            </StaggerItem>
            <StaggerItem className="bg-white/5 p-6 sm:p-8 md:p-10 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-lg border border-white/10">
              <ShieldCheck className="w-10 sm:w-12 h-10 sm:h-12 text-brand-bright mb-5 sm:mb-6" />
              <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wider mb-3 sm:mb-4">Stringent Quality Control</h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Multi-stage inspection protocols from yarn sourcing to final dispatch, ensuring zero-defect fabrics for your production lines.
              </p>
            </StaggerItem>
            <StaggerItem className="bg-white/5 p-6 sm:p-8 md:p-10 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-lg border border-white/10">
              <Users className="w-10 sm:w-12 h-10 sm:h-12 text-brand-bright mb-5 sm:mb-6" />
              <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wider mb-3 sm:mb-4">Experienced Workforce</h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                A dedicated team of 300+ textile engineers and technicians who understand the nuances of knitted fabrics and garment manufacturing.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Second Generation */}
      <section className="py-16 sm:py-20 md:py-[120px] bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-primary font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">The Next Generation</span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-4 sm:mb-6">
                Building on the Founder&apos;s Vision
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                The second generation of the Jindal family joined the business with fresh eyes
                and modern education — carrying the founder&apos;s values into a new era of textile manufacturing.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <FadeIn direction="right" className="bg-secondary text-white p-6 sm:p-10 md:p-14 rounded-3xl flex flex-col justify-between min-h-[300px] border border-white/10 shadow-xl relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(229,72,77,0.18)] hover:border-brand-bright/50 transition-all duration-500 cursor-pointer">
              {/* Ambient Glows */}
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-brand-bright/10 rounded-full blur-3xl group-hover:bg-brand-bright/25 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
              <div className="absolute -left-12 -bottom-12 w-36 h-36 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-brand-bright/15 group-hover:bg-brand-bright flex items-center justify-center mb-6 sm:mb-8 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(229,72,77,0.45)] group-hover:rotate-3">
                  <Rocket className="w-6 sm:w-8 h-6 sm:h-8 text-brand-bright group-hover:text-white transition-all duration-300 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wider mb-3 sm:mb-4 group-hover:text-brand-bright transition-colors duration-300">
                  Fast Fashion Fabrics
                </h3>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base group-hover:text-white/90 transition-colors duration-300">
                  Recognising the shift in global retail, the second generation introduced
                  fast fashion fabrics — enabling quicker turnarounds and trend-responsive
                  production without ever compromising on quality.
                </p>
              </div>
              <div className="relative z-10 flex items-center gap-2 mt-6 sm:mt-8">
                <p className="text-brand-bright font-semibold uppercase tracking-widest text-xs sm:text-sm group-hover:tracking-[0.15em] transition-all duration-300">
                  A New Category. A New Edge.
                </p>
                <ArrowRight className="w-4 h-4 text-brand-bright opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </FadeIn>

            <FadeIn direction="left" className="bg-muted p-6 sm:p-10 md:p-14 rounded-3xl min-h-[300px] border border-border relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(177,33,55,0.12)] hover:border-primary/50 hover:bg-card transition-all duration-500 cursor-pointer">
              {/* Ambient Glow */}
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 group-hover:scale-150 transition-all duration-700 pointer-events-none" />

              <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-10 relative z-10">
                <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-primary/15 group-hover:bg-primary flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(177,33,55,0.35)] group-hover:-rotate-3">
                  <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-primary group-hover:text-white transition-all duration-300 group-hover:scale-105" />
                </div>
                <div>
                  <p className="font-heading text-lg sm:text-2xl font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                    Infrastructure & Technology
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Implemented across the plant</p>
                </div>
              </div>
              <ul className="space-y-3 sm:space-y-4 relative z-10">
                {[
                  "Strong execution of the founder's vision — at micro and macro levels",
                  "New technology and automation across knitting, dyeing, and finishing",
                  "Streamlined processes for faster, more consistent production",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 sm:gap-3 group/item transition-all duration-300 hover:translate-x-1.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-125" />
                    <span className="text-foreground font-medium text-xs sm:text-sm leading-relaxed transition-colors duration-300 group-hover/item:text-primary">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn direction="up">
            <div className="border-t border-border pt-10 sm:pt-12">
              <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-foreground mb-6 sm:mb-8">
                Leadership Team
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start bg-card border border-border p-6 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border-2 border-primary/20 group-hover:border-primary/60 shadow-md transition-colors duration-300">
                    <Image
                      src="/images/Saransh Jindal.png"
                      alt="Saransh Jindal"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-widest text-primary font-bold px-2.5 py-0.5 rounded-full bg-primary/10 mb-2 group-hover:bg-primary/20 transition-colors">
                      2nd Generation
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                      Saransh Jindal
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      Graduated in 2017, joined the family business during his studies — growing up on the factory floor and driving sales & operations.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start bg-card border border-border p-6 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border-2 border-primary/20 group-hover:border-primary/60 shadow-md transition-colors duration-300">
                    <Image
                      src="/images/Yuvraj Jindal.png"
                      alt="Yuvraj Jindal"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-widest text-primary font-bold px-2.5 py-0.5 rounded-full bg-primary/10 mb-2 group-hover:bg-primary/20 transition-colors">
                      2nd Generation
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                      Yuvraj Jindal
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      Completed his MBA in 2023, bringing modern business strategy, technology integration, and expansion vision to the operation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Infrastructure Preview */}
      <section className="py-16 sm:py-20 md:py-[120px] bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="right" className="relative h-[320px] sm:h-[420px] md:h-[550px] w-full order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/images/SDW01497.JPG.jpeg"
                alt="High-speed circular knitting machine at Siya Ram Fabrics"
                fill
                unoptimized
                className="object-cover object-center"
              />
            </FadeIn>
            <FadeIn direction="left" className="order-1 lg:order-2">
              <span className="text-brand-bright font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">Infrastructure</span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
                Built for Scale.<br />Designed for Precision.
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-primary mb-8 rounded-full" />
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
                Spread over 1.5 lac sq ft, our manufacturing facility represents the pinnacle
                of modern textile engineering — continuously upgraded with new technology and automation.
              </p>

              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {["High-speed circular knitting machines", "Thorough quality inspection systems", "In-house ETP control & sustainability", "Fast fashion & trend-responsive production"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-bright shrink-0 mt-0.5" />
                    <span className="text-white font-medium text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/infrastructure" className={buttonVariants({ size: "lg", variant: "outline", className: "uppercase tracking-widest font-bold text-xs sm:text-sm text-white border-white hover:bg-white hover:text-black rounded-full w-full sm:w-auto justify-center" })}>
                View Infrastructure
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-[120px] bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center max-w-4xl">
          <FadeIn direction="up">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight mb-6 sm:mb-8">
              Two Generations.<br />One Promise.
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-light text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              From a single machine to 1.5 lac sq ft of manufacturing excellence — partner with
              a family that has spent {YEARS}+ years perfecting every metre of fabric.
            </p>
            <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg", className: "uppercase tracking-widest font-bold text-xs sm:text-sm text-white border-white hover:bg-white hover:text-primary rounded-full px-8 py-3" })}>
              Contact Our Team
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
