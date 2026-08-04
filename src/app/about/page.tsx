import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Rocket, Sparkles, TrendingUp } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";

const YEARS = new Date().getFullYear() - 1998;

export const metadata: Metadata = {
  title: "About Us | Siya Ram Fabrics",
  description:
    "From 500 sq ft and one employee in 1998 to a 1.5 lac sq ft facility with 300+ people — discover the two-generation journey of Siya Ram Fabrics.",
};

const founderMilestones = [
  { year: "1994", title: "BTech in Civil Engineering", description: "Harish Jindal completes his bachelor's degree in civil engineering — a foundation of precision and structured thinking." },
  { year: "1994–96", title: "Reliance Industries, Surat", description: "Gains firsthand experience in large-scale industry while working under Reliance Industries in Surat, learning discipline and scale." },
  { year: "1996", title: "Back to Ludhiana", description: "Returns to his hometown and begins deep research into the fabric market — studying demand, quality gaps, and opportunity." },
  { year: "1998", title: "Siya Ram Fabrics Founded", description: "Founds Siya Ram Fabrics with a single employee and just 500 sq ft of space. One loom, one vision: quality fabrics." },
  { year: "Today", title: "1.5 Lac Sq Ft & 300+ People", description: "The company now spans 1.5 lac sq ft with over 300 employees — a testament to three decades of relentless growth." },
];

const founderStats = [
  { value: "500", label: "Sq Ft at Start" },
  { value: "1", label: "Employee at Start" },
  { value: "1.5 Lac", label: "Sq Ft Today" },
  { value: "300+", label: "Employees Today" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-24 md:py-[140px] bg-secondary text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <FadeIn direction="up">
              <span className="inline-flex items-center gap-2 border border-brand-bright/60 text-brand-bright text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2 mb-6 rounded-full">
                About Siya Ram Fabrics
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[0.95] mb-8">
                A Story of Two<br />
                <span className="text-brand-bright">Generations.</span><br />
                One Legacy.
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                Founded in 1998 by Mr. Harish Jindal with one employee and 500 sq ft of space,
                Siya Ram Fabrics has grown into a complete in-house textile manufacturing
                facility spanning 1.5 lac sq ft and employing over 300 people.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Founder Stats */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {founderStats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <p className="font-numbers text-5xl md:text-6xl font-bold mb-2">{stat.value}</p>
                <p className="text-xs md:text-sm text-white/70 uppercase tracking-widest">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 md:py-[120px] bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="right">
              <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Company Overview</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
                Complete In-House<br />Manufacturing
              </h2>
              <div className="w-20 h-1 bg-primary mb-8" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Siya Ram Fabrics is a proprietorship firm established in 1998 by Mr. Harish Jindal.
                With over {YEARS} years of experience, we have evolved from a fabric supplier into a
                comprehensive in-house manufacturing facility.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We are a complete in-house facility covering knitting, dyeing, and finishing of
                high-quality knitted fabrics. Our integrated operations allow us to maintain
                strict quality control at every stage of production.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our philosophy is simple: manufacture high-quality knitted fabrics while building
                lasting relationships through operational excellence.
              </p>
              <Link href="/manufacturing" className={buttonVariants({ variant: "link", className: "text-primary hover:text-primary/80 p-0 h-auto font-semibold uppercase tracking-wider text-sm flex items-center gap-2 rounded-full" })}>
                See How We Manufacture <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            <FadeIn direction="left" className="bg-card border border-border p-8 md:p-12 space-y-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 pb-6 border-b border-border">
                <Building2 className="w-10 h-10 text-primary shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Business Type</p>
                  <p className="font-heading text-lg font-bold text-foreground">Proprietorship Firm</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Founder</p>
                  <p className="font-heading text-lg font-bold text-foreground">Mr. Harish Jindal</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Year of Establishment</p>
                  <p className="font-heading text-lg font-bold text-foreground">1998</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Facility</p>
                  <p className="font-heading text-lg font-bold text-foreground">1.5 Lac Sq Ft</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Team Size</p>
                  <p className="font-heading text-lg font-bold text-foreground">300+ Employees</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">GST Number</p>
                  <p className="font-heading text-lg font-bold text-foreground">03ABEPJ2089F2ZY</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Facility</p>
                  <p className="text-foreground leading-relaxed text-sm">Knitting, dyeing & finishing — all under one roof</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Founder Timeline */}
      <section className="py-20 md:py-[120px] bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl mb-16 md:mb-20">
              <span className="text-brand-bright font-semibold tracking-widest uppercase text-sm mb-4 block">1st Generation</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                The Founder&apos;s Journey
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                From a civil engineering degree to the fabric market of Ludhiana — the milestones
                that shaped Siya Ram Fabrics.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 mb-16 rounded-2xl overflow-hidden">
            {founderMilestones.map((m, i) => (
              <FadeIn key={m.year} direction="up" delay={i * 0.1} className="bg-secondary p-8 md:p-10 relative">
                <span className="font-numbers text-4xl md:text-5xl font-bold text-brand-bright/90 leading-none block mb-6">
                  {m.year}
                </span>
                <h3 className="font-heading text-lg font-bold text-white mb-3 uppercase tracking-wide">
                  {m.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{m.description}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up">
            <div className="bg-primary/10 border border-primary/30 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8 justify-between rounded-2xl">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary text-white font-heading font-bold text-2xl flex items-center justify-center shrink-0">
                  HJ
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/60 font-semibold mb-1">Founder & Visionary</p>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">Mr. Harish Jindal</h3>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed max-w-xl text-sm md:text-base">
                Studied BTech Civil in 1994, worked under Reliance Industries in Surat, returned to
                Ludhiana in 1996, researched the fabric market, and founded Siya Ram Fabrics in 1998 —
                with just 1 employee and 500 sq ft of space.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Second Generation */}
      <section className="py-20 md:py-[120px] bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl mb-16 md:mb-20">
              <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">2nd Generation</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
                The Next Generation of Leadership
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Carrying the founder&apos;s legacy forward with modern education, new technology,
                and a strong execution of the founder&apos;s vision — at micro and macro levels.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <FadeIn direction="right" className="bg-muted p-10 md:p-12 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 rounded-full bg-primary text-white font-heading font-bold text-2xl flex items-center justify-center">SJ</div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">2nd Generation</p>
                  <h3 className="font-heading text-2xl font-bold text-foreground">Saransh Jindal</h3>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">Completed graduation in 2017</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">Joined the business during his studies</span>
                </li>
              </ul>
            </FadeIn>

            <FadeIn direction="left" className="bg-muted p-10 md:p-12 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 rounded-full bg-primary text-white font-heading font-bold text-2xl flex items-center justify-center">YJ</div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">2nd Generation</p>
                  <h3 className="font-heading text-2xl font-bold text-foreground">Yuvraj Jindal</h3>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">Completed his MBA in 2023</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">Brings modern business strategy to the operation</span>
                </li>
              </ul>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem className="bg-secondary text-white p-10 rounded-2xl hover:bg-secondary/95 transition-colors">
              <Rocket className="w-10 h-10 text-brand-bright mb-6" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-3">Fast Fashion Fabrics</h3>
              <p className="text-white/65 leading-relaxed">
                Introduced fast fashion fabrics — a new product category built for speed,
                trend responsiveness, and the demands of modern retail.
              </p>
            </StaggerItem>
            <StaggerItem className="bg-secondary text-white p-10 rounded-2xl hover:bg-secondary/95 transition-colors">
              <TrendingUp className="w-10 h-10 text-brand-bright mb-6" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-3">Execution of Vision</h3>
              <p className="text-white/65 leading-relaxed">
                Strong execution of the founder&apos;s vision at both micro and macro levels —
                from daily floor operations to long-term strategic direction.
              </p>
            </StaggerItem>
            <StaggerItem className="bg-secondary text-white p-10 rounded-2xl hover:bg-secondary/95 transition-colors">
              <Sparkles className="w-10 h-10 text-brand-bright mb-6" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-3">Technology & Automation</h3>
              <p className="text-white/65 leading-relaxed">
                Implemented new technology and automation across the plant to improve
                efficiency, consistency, and turnaround times.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 md:py-[100px] bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <span className="text-brand-bright font-semibold tracking-widest uppercase text-sm mb-4 block">Our Location</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">
                Proudly Rooted in<br />Ludhiana
              </h2>
              <div className="w-20 h-1 bg-brand-bright mb-8" />
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                From the heart of Punjab&apos;s textile capital, we serve garment manufacturers
                across India — carrying the same commitment Mr. Jindal brought home in 1996.
              </p>
              <address className="not-italic text-white/80 text-lg leading-relaxed mb-10">
                A4–A7, Hampton Court Business Park,<br />
                Chandigarh Road, Ludhiana – 141008,<br />
                Punjab, India
              </address>
              <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg", className: "uppercase tracking-widest font-semibold text-white border-white hover:bg-white hover:text-foreground rounded-full" })}>
                Get in Touch
              </Link>
            </FadeIn>
            <FadeIn direction="left" className="relative h-[450px] w-full order-first lg:order-last rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                title="Siya Ram Fabrics location"
                src="https://www.google.com/maps?q=Hampton+Court+Business+Park,+Chandigarh+Road,+Ludhiana&output=embed"
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
