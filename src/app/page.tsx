import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Users } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";
export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-placeholder.svg"
            alt="Modern textile manufacturing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center text-white max-w-4xl">
          <FadeIn direction="up">
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6">
              Manufacturing Quality You Can Rely On.
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg md:text-2xl font-light text-white/90 mb-10 max-w-2xl mx-auto">
              Your trusted textile manufacturing partner since 1998. We deliver consistent quality and dependable service for garment manufacturers across India.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className={buttonVariants({ size: "lg", className: "uppercase tracking-widest font-semibold w-full sm:w-auto" })}>
                Request an Enquiry
              </Link>
              <Link href="/manufacturing" className={buttonVariants({ variant: "outline", size: "lg", className: "uppercase tracking-widest font-semibold w-full sm:w-auto text-white border-white hover:bg-white hover:text-foreground" })}>
                Explore Manufacturing
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 md:py-[120px] bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">About Siya Ram Fabrics</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
                Built on Quality.<br />Driven by Service.
              </h2>
              <div className="w-20 h-1 bg-primary mb-8" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With over two decades of experience, Siya Ram Fabrics has evolved from a fabric supplier into a comprehensive manufacturing partner. We combine modern infrastructure with deep textile expertise to serve garment manufacturers who demand consistency and reliability.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our philosophy is simple: to manufacture high-quality knitted fabrics while building lasting relationships through operational excellence.
              </p>
              <Link href="/about" className={buttonVariants({ variant: "link", className: "text-primary hover:text-primary/80 p-0 h-auto font-semibold uppercase tracking-wider text-sm flex items-center gap-2" })}>
                Discover Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
            <FadeIn direction="left">
              <div className="relative h-[500px] w-full">
                <Image
                  src="/images/fabric_rolls.png"
                  alt="Premium knitted fabric rolls"
                  fill
                  className="object-cover"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl hidden md:block rounded-tr-[20px]">
                  <p className="text-5xl font-numbers font-bold text-primary mb-2">25+</p>
                  <p className="uppercase tracking-widest text-sm font-semibold text-foreground">Years of Excellence</p>
                </div>
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
              <span className="text-primary-foreground/70 font-semibold tracking-widest uppercase text-sm mb-4 block">Our Strengths</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                Modern Manufacturing
              </h2>
              <p className="text-lg font-light text-white/80">
                Our state-of-the-art facilities are designed for scale, flexibility, and uncompromising quality control at every stage of production.
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem className="bg-white/5 p-10 rounded-[20px] border border-transparent hover:bg-white/10 transition-colors shadow-sm">
              <Factory className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-4">Advanced Infrastructure</h3>
              <p className="text-white/70 leading-relaxed">
                Equipped with the latest circular knitting machines capable of producing complex structures and consistent quality across large volumes.
              </p>
            </StaggerItem>
            <StaggerItem className="bg-white/5 p-10 rounded-[20px] border border-transparent hover:bg-white/10 transition-colors shadow-sm">
              <ShieldCheck className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-4">Stringent Quality Control</h3>
              <p className="text-white/70 leading-relaxed">
                Multi-stage inspection protocols from yarn sourcing to final dispatch, ensuring zero-defect fabrics for your production lines.
              </p>
            </StaggerItem>
            <StaggerItem className="bg-white/5 p-10 rounded-[20px] border border-transparent hover:bg-white/10 transition-colors shadow-sm">
              <Users className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-4">Experienced Workforce</h3>
              <p className="text-white/70 leading-relaxed">
                A dedicated team of textile engineers and technicians who understand the nuances of knitted fabrics and garment manufacturing.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Infrastructure Preview */}
      <section className="py-20 md:py-[120px] bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="relative h-[600px] w-full order-2 lg:order-1">
              <Image
                src="/images/factory_floor.png"
                alt="Modern factory floor"
                fill
                className="object-cover"
              />
            </FadeIn>
            <FadeIn direction="left" className="order-1 lg:order-2">
              <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Infrastructure</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
                Built for Scale.<br />Designed for Precision.
              </h2>
              <div className="w-20 h-1 bg-primary mb-8" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our manufacturing facility represents the pinnacle of modern textile engineering. We continuously invest in technology to improve efficiency, reduce turnaround times, and expand our capabilities.
              </p>
              
              <ul className="space-y-4 mb-10">
                {["High-speed circular knitting machines", "Automated quality inspection systems", "Climate-controlled production environment", "Sustainable processing partnerships"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/infrastructure" className={buttonVariants({ size: "lg", variant: "secondary", className: "uppercase tracking-widest font-semibold mt-4" })}>
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
              Let&apos;s Build Better Fabrics Together.
            </h2>
            <p className="text-lg md:text-xl font-light text-white/90 mb-10 max-w-2xl mx-auto">
              Partner with a manufacturer that understands your business needs. Quality, consistency, and timely delivery guaranteed.
            </p>
            <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg", className: "uppercase tracking-widest font-semibold text-white border-white hover:bg-white hover:text-primary" })}>
              Contact Our Team
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
