"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  Send,
  MessageSquare,
  FileText,
  Building2,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";

const YEARS = new Date().getFullYear() - 1998;

const milestones = [
  {
    year: "1994",
    title: "A Civil Engineer's Dream",
    description:
      "Harish Jindal completes his BTech in Civil Engineering, ready to build — though not yet in the way he imagined.",
  },
  {
    year: "1995",
    title: "Learning from the Best",
    description:
      "Works under Reliance Industries in Surat, absorbing large-scale industrial discipline, chemical processing, and business acumen.",
  },
  {
    year: "1996",
    title: "The Research Begins",
    description:
      "Returns to Ludhiana and dives deep into the fabric and processing market — studying every thread of the textile trade.",
  },
  {
    year: "1998",
    title: "Manufacturing Foundation",
    description:
      "Founds textile operations with just 1 employee and 500 sq ft of space. One machine. One vision.",
  },
];

export default function SRProcessorsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [waOpen, setWaOpen] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    requirement: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const waRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (waRef.current && !waRef.current.contains(e.target as Node)) {
        setWaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [waOpen]);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enquiryForm.name || !enquiryForm.phone) {
      setFormStatus("Please fill in your name and phone number.");
      return;
    }
    const text = encodeURIComponent(
      `Hello SR Processors,\nMy name is ${enquiryForm.name}.\nPhone: ${enquiryForm.phone}\nRequirement: ${enquiryForm.requirement || "General processing/dyeing enquiry"}`
    );
    window.open(`https://wa.me/919888777382?text=${text}`, "_blank");
    setFormStatus("Opening WhatsApp to connect with SR Processors...");
  };

  const [activeSection, setActiveSection] = useState("story");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["story", "growth", "strengths", "leadership", "infrastructure", "contact"];
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Story", href: "#story" },
    { name: "Strengths", href: "#strengths" },
    { name: "Leadership", href: "#leadership" },
    { name: "Infrastructure", href: "#infrastructure" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="flex flex-col w-full bg-background text-foreground font-sans">
      {/* Header - Matching SRF Styling */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md border-b border-border py-2"
            : "bg-white py-3 border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo & Brand Lockup */}
          <Link href="/sr-processors" className="flex items-center gap-3.5 shrink-0 group">
            <Image
              src="/srp.png"
              alt="SR Processors Logo"
              width={160}
              height={100}
              className="h-11 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="flex flex-col border-l border-border pl-3">
              <span className="font-heading text-lg md:text-xl font-black uppercase tracking-tight text-foreground leading-tight">
                SR PROCESSORS
              </span>
              <span className="text-[10px] text-muted-foreground font-semibold tracking-wider">
                A Unit of Siya Ram Fabrics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Capsule Pill Container Matching SRF */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <div className="flex items-center gap-1 lg:gap-2 bg-muted/60 px-4 py-1.5 rounded-full border border-border/80">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-xs font-bold transition-all uppercase tracking-wider px-3.5 py-1.5 rounded-full text-foreground/80 hover:text-primary hover:bg-background/80"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Actions Matching SRF: WhatsApp Chat Icon + Enquire Now Button */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919888777382"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="p-2.5 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className={buttonVariants({
                  size: "sm",
                  className:
                    "uppercase tracking-widest text-xs font-bold rounded-full px-5 py-2 shadow-sm hover:shadow-md transition-all",
                })}
              >
                Enquire Now
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/919888777382"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slideout Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border px-4 py-6 shadow-xl space-y-4 animate-in fade-in duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold uppercase tracking-wider text-foreground hover:text-primary py-2 px-3 rounded-lg hover:bg-muted/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-2 flex flex-col gap-2.5 border-t border-border/60">
              <a
                href="https://wa.me/919888777382"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-full border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 text-xs font-bold uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp (+91 98887 77382)
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className={buttonVariants({
                  className: "w-full uppercase tracking-widest text-xs font-bold rounded-full py-2.5 justify-center",
                })}
              >
                Enquire Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Hero Section */}
      <section className="relative min-h-[88vh] sm:min-h-[92vh] w-full flex items-center overflow-hidden py-16 sm:py-20 mt-14 sm:mt-16">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/hero-video-poster.jpg"
            className="w-full h-full object-cover object-center"
          >
            <source
              src="/srf%20cinematic_with%20white%20logo%20and%20black%20background.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 text-white">
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <span className="inline-flex items-center gap-2 border border-brand-bright/60 text-brand-bright text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase px-4 sm:px-5 py-2 mb-6 bg-black/50 rounded-full">
                SR PROCESSORS • FABRIC DYEING & PROCESSING
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <h1 className="font-heading text-3xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[0.95] mb-6">
                SR PROCESSORS
                <span className="block text-brand-bright mt-2">
                  Built for Precision & Scale.
                </span>
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-base sm:text-xl md:text-2xl font-light text-white/85 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
                Specialized textile dyeing and fabric processing unit. From 500 sq ft to a
                massive 1.5 Lac sq ft facility in Ludhiana — delivering high-precision softflow
                dyeing, stenter finishing, and uncompromised quality.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "uppercase tracking-widest font-bold w-full sm:w-auto rounded-full justify-center shadow-lg hover:shadow-primary/30",
                  })}
                >
                  Request an Enquiry
                </a>
                <a
                  href="#story"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className:
                      "uppercase tracking-widest font-bold w-full sm:w-auto text-white border-white hover:bg-white hover:text-black rounded-full justify-center",
                  })}
                >
                  Our Story
                </a>
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
                <div
                  key={stat.label}
                  className="bg-black/60 backdrop-blur-md p-4 sm:p-6 md:p-8 flex flex-col justify-center"
                >
                  <p className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-brand-bright mb-1 sm:mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-white/70 uppercase tracking-widest font-semibold">
                    {stat.label}
                  </p>
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
                  <span
                    key={city}
                    className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full border border-border bg-background text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-wider text-foreground/80 whitespace-nowrap shrink-0 hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(177,33,55,0.35)] hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Founder Journey Timeline */}
      <section id="story" className="py-16 sm:py-20 md:py-[120px] bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <FadeIn direction="right">
                <span className="text-primary font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
                  Our Founder
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
                  The Journey of
                  <br />
                  Harish Jindal
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-primary mb-8 rounded-full" />
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-xl border border-border group">
                  <Image
                    src="/images/Harish Jindal.png"
                    alt="Mr. Harish Jindal - Founder"
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
                  Every great enterprise starts with a single decision. For our textile operations,
                  that decision was made in 1998 by a young civil engineer who believed the fabric
                  and processing market of Ludhiana deserved better.
                </p>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
                  Starting with one employee and 500 sq ft of space, Mr. Harish Jindal turned
                  research, grit, and Reliance-bred discipline into one of the region&apos;s most
                  trusted manufacturing and processing houses.
                </p>
                <a
                  href="#contact"
                  className={buttonVariants({
                    variant: "link",
                    className:
                      "text-primary hover:text-primary/80 p-0 h-auto font-semibold uppercase tracking-wider text-sm flex items-center gap-2 rounded-full",
                  })}
                >
                  Contact Our Leadership Team <ArrowRight className="w-4 h-4" />
                </a>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <StaggerContainer className="relative pl-8 md:pl-12 border-l-2 border-border ml-2 sm:ml-4">
                {milestones.map((m) => (
                  <StaggerItem key={m.year} className="relative pb-8 sm:pb-10 last:pb-0">
                    <span className="absolute -left-[41px] md:-left-[57px] top-1 w-4 sm:w-5 h-4 sm:h-5 bg-primary rounded-full border-4 border-background" />
                    <span className="font-numbers text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1.5 block">
                      {m.year}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wider text-foreground mb-2">
                      {m.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {m.description}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Numbers */}
      <section id="growth" className="py-16 sm:py-20 md:py-[100px] bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 items-center">
            <FadeIn direction="right">
              <div>
                <span className="text-white/70 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
                  The Growth Story
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-4">
                  Small Beginnings.
                  <br />
                  Unlimited Ambition.
                </h2>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.15}>
              <div className="text-left bg-white/5 hover:bg-white/12 p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                <p className="font-numbers text-5xl sm:text-6xl md:text-7xl font-bold mb-2 text-white group-hover:text-brand-bright transition-colors duration-300">
                  500
                </p>
                <p className="uppercase tracking-widest text-xs sm:text-sm text-white/80 font-semibold mb-4">
                  Sq Ft — Where We Started
                </p>
                <div className="h-px bg-white/20 my-4 group-hover:bg-white/40 transition-colors" />
                <p className="font-numbers text-5xl sm:text-6xl md:text-7xl font-bold mb-2 text-white group-hover:text-brand-bright transition-colors duration-300">
                  1.5 Lac
                </p>
                <p className="uppercase tracking-widest text-xs sm:text-sm text-white/80 font-semibold">
                  Sq Ft — Where We Stand Today
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="text-left bg-white/5 hover:bg-white/12 p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-white/30 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                <p className="font-numbers text-5xl sm:text-6xl md:text-7xl font-bold mb-2 text-white group-hover:text-brand-bright transition-colors duration-300">
                  1
                </p>
                <p className="uppercase tracking-widest text-xs sm:text-sm text-white/80 font-semibold mb-4">
                  Employee at the Start
                </p>
                <div className="h-px bg-white/20 my-4 group-hover:bg-white/40 transition-colors" />
                <p className="font-numbers text-5xl sm:text-6xl md:text-7xl font-bold mb-2 text-white group-hover:text-brand-bright transition-colors duration-300">
                  300+
                </p>
                <p className="uppercase tracking-widest text-xs sm:text-sm text-white/80 font-semibold">
                  Skilled Team Members
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Manufacturing & Processing Capabilities */}
      <section id="strengths" className="py-16 sm:py-20 md:py-[120px] bg-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-brand-bright font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
                Our Strengths
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4 sm:mb-6">
                Modern Manufacturing & Processing
              </h2>
              <p className="text-base sm:text-lg font-light text-white/80">
                Our state-of-the-art facilities at Village Paharuwal are designed for scale,
                flexibility, and uncompromising quality control at every stage of dyeing and finishing.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <StaggerItem className="bg-white/5 p-6 sm:p-8 md:p-10 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-lg border border-white/10">
              <Factory className="w-10 sm:w-12 h-10 sm:h-12 text-brand-bright mb-5 sm:mb-6" />
              <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wider mb-3 sm:mb-4">
                Advanced Infrastructure
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Equipped with automated softflow dyeing vessels and high-speed circular machinery capable
                of producing complex structures and consistent quality across large volumes.
              </p>
            </StaggerItem>
            <StaggerItem className="bg-white/5 p-6 sm:p-8 md:p-10 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-lg border border-white/10">
              <ShieldCheck className="w-10 sm:w-12 h-10 sm:h-12 text-brand-bright mb-5 sm:mb-6" />
              <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wider mb-3 sm:mb-4">
                Stringent Quality Control
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Multi-stage inspection protocols from yarn sourcing to spectrophotometer shade matching,
                ensuring zero-defect fabrics for high-demand garment production lines.
              </p>
            </StaggerItem>
            <StaggerItem className="bg-white/5 p-6 sm:p-8 md:p-10 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-lg border border-white/10">
              <Users className="w-10 sm:w-12 h-10 sm:h-12 text-brand-bright mb-5 sm:mb-6" />
              <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wider mb-3 sm:mb-4">
                Experienced Workforce
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                A dedicated team of 300+ textile engineers, colorists, and technicians who understand the
                nuances of knitted fabrics and modern dyeing requirements.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Second Generation Leadership */}
      <section id="leadership" className="py-16 sm:py-20 md:py-[120px] bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-primary font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
                The Next Generation
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-4 sm:mb-6">
                Building on the Founder&apos;s Vision
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                The second generation of the Jindal family joined the business with fresh eyes and modern
                education — carrying the founder&apos;s values into a new era of textile processing and
                fabric manufacturing.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <FadeIn
              direction="right"
              className="bg-secondary text-white p-6 sm:p-10 md:p-14 rounded-3xl flex flex-col justify-between min-h-[300px] border border-white/10 shadow-xl relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(229,72,77,0.18)] hover:border-brand-bright/50 transition-all duration-500 cursor-pointer"
            >
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-brand-bright/10 rounded-full blur-3xl group-hover:bg-brand-bright/25 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
              <div className="absolute -left-12 -bottom-12 w-36 h-36 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-brand-bright/15 group-hover:bg-brand-bright flex items-center justify-center mb-6 sm:mb-8 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(229,72,77,0.45)] group-hover:rotate-3">
                  <Rocket className="w-6 sm:w-8 h-6 sm:h-8 text-brand-bright group-hover:text-white transition-all duration-300 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wider mb-3 sm:mb-4 group-hover:text-brand-bright transition-colors duration-300">
                  Fast Fashion & Quick-Turnaround Processing
                </h3>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base group-hover:text-white/90 transition-colors duration-300">
                  Recognising the rapid pace of domestic and international retail, the second generation
                  introduced trend-responsive processing lines — enabling quicker lot turnarounds without
                  ever sacrificing shade fastness or fabric handfeel.
                </p>
              </div>
              <div className="relative z-10 flex items-center gap-2 mt-6 sm:mt-8">
                <p className="text-brand-bright font-semibold uppercase tracking-widest text-xs sm:text-sm group-hover:tracking-[0.15em] transition-all duration-300">
                  A New Category. A New Edge.
                </p>
                <ArrowRight className="w-4 h-4 text-brand-bright opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </FadeIn>

            <FadeIn
              direction="left"
              className="bg-muted p-6 sm:p-10 md:p-14 rounded-3xl min-h-[300px] border border-border relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(177,33,55,0.12)] hover:border-primary/50 hover:bg-card transition-all duration-500 cursor-pointer"
            >
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
                  "Automated dyeing controllers and continuous finishing compactors",
                  "Streamlined batch chemistry for faster, more repeatable shade matching",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 sm:gap-3 group/item transition-all duration-300 hover:translate-x-1.5"
                  >
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
                      Graduated in 2017, joined the business during his studies — growing up on the factory
                      floor and driving production efficiency and client operations.
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
                      Completed his MBA in 2023, bringing modern business strategy, technology integration,
                      and strategic expansion vision to the processing operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Infrastructure Preview */}
      <section id="infrastructure" className="py-16 sm:py-20 md:py-[120px] bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn
              direction="right"
              className="relative h-[320px] sm:h-[420px] md:h-[550px] w-full order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <Image
                src="/images/SDW01497.JPG.jpeg"
                alt="State of the art processing equipment at SR Processors"
                fill
                unoptimized
                className="object-cover object-center"
              />
            </FadeIn>
            <FadeIn direction="left" className="order-1 lg:order-2">
              <span className="text-brand-bright font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
                Infrastructure
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
                Built for Scale.
                <br />
                Designed for Precision.
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-primary mb-8 rounded-full" />
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
                Operating across a combined 1.5 lac sq ft manufacturing footprint, our processing plant
                at Village Paharuwal represents the pinnacle of modern dyeing chemistry — continuously
                upgraded with new technology and sustainability systems.
              </p>

              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {[
                  "Computerized softflow dyeing with low-liquor ratio technology",
                  "High-precision stenter finishing & heat-setting ranges",
                  "In-house Effluent Treatment Plant (ETP) adhering to environmental norms",
                  "Fast fashion batch dyeing with rapid lab-dip shade matching",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-bright shrink-0 mt-0.5" />
                    <span className="text-white font-medium text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className:
                    "uppercase tracking-widest font-bold text-xs sm:text-sm text-white border-white hover:bg-white hover:text-black rounded-full w-full sm:w-auto justify-center",
                })}
              >
                Inquire With Our Technical Team
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* DEDICATED OFFICIAL DETAILS & CONTACT SECTION */}
      <section id="contact" className="py-16 sm:py-20 md:py-[120px] bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-primary font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
                Official Company Details & Enquiry
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-4">
                Connect With SR PROCESSORS
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Direct inquiry desk for processing, dyeing, and fabric orders. Visit our facility or contact
                our team directly.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Verified Details Card */}
            <FadeIn direction="right" className="lg:col-span-6 flex flex-col">
              <div className="bg-card border-2 border-primary/30 p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl flex-1 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-primary/10 rounded-bl-full pointer-events-none" />

                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                    <Building2 className="w-4 h-4" />
                    Official Registered Entity
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground mb-4">
                    SR PROCESSORS
                  </h3>

                  <div className="space-y-5 text-sm sm:text-base text-foreground/90 mt-6">
                    {/* Address */}
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/40 border border-border">
                      <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="text-xs uppercase font-bold tracking-wider text-muted-foreground mb-1">
                          Plant & Registered Address
                        </p>
                        <p className="font-medium leading-relaxed">
                          KHATA NO. 130/152, KHASRA NO. 20/8/2,<br />
                          VILLAGE PAHARUWAL, CHD. ROAD,<br />
                          LUDHIANA - 141114, PUNJAB
                        </p>
                      </div>
                    </div>

                    {/* GSTIN & State */}
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/40 border border-border">
                      <FileText className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="text-xs uppercase font-bold tracking-wider text-muted-foreground mb-1">
                          GSTIN / UIN
                        </p>
                        <p className="font-numbers text-lg sm:text-xl font-bold text-foreground">
                          03AEZFS2960Q1Z1
                        </p>
                        <p className="text-xs font-semibold text-muted-foreground mt-0.5">
                          State Name: Punjab • State Code: 03
                        </p>
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/40 border border-border">
                      <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="text-xs uppercase font-bold tracking-wider text-muted-foreground mb-1">
                          Direct Mobile Contact
                        </p>
                        <a
                          href="tel:+919888777382"
                          className="font-numbers text-xl sm:text-2xl font-bold text-primary hover:underline block"
                        >
                          +91 98887 77382
                        </a>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Available Monday – Saturday, 10:00 AM – 7:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border flex flex-wrap gap-3">
                  <a
                    href="tel:+919888777382"
                    className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-primary text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919888777382?text=Hello%20SR%20Processors%2C%20I%20would%20like%20to%20enquire%20about%20fabric%20processing%20and%20dyeing."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#20bd5a] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Quick Inquiry Form */}
            <FadeIn direction="left" className="lg:col-span-6 flex flex-col">
              <div className="bg-card border border-border p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-foreground mb-2">
                    Send a Quick Message
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Fill in your fabric requirement and our team will get back to you promptly.
                  </p>

                  <form onSubmit={handleEnquirySubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase font-bold tracking-wider text-foreground mb-1.5">
                        Your Name / Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={enquiryForm.name}
                        onChange={(e) =>
                          setEnquiryForm({ ...enquiryForm, name: e.target.value })
                        }
                        placeholder="e.g. Rahul Sharma / Apex Garments"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 focus:border-primary focus:bg-background focus:outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-bold tracking-wider text-foreground mb-1.5">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={enquiryForm.phone}
                        onChange={(e) =>
                          setEnquiryForm({ ...enquiryForm, phone: e.target.value })
                        }
                        placeholder="e.g. 9888777382"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 focus:border-primary focus:bg-background focus:outline-none text-sm transition-all font-numbers"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-bold tracking-wider text-foreground mb-1.5">
                        Fabric / Processing Requirement
                      </label>
                      <textarea
                        rows={4}
                        value={enquiryForm.requirement}
                        onChange={(e) =>
                          setEnquiryForm({ ...enquiryForm, requirement: e.target.value })
                        }
                        placeholder="Fabric types (Single Jersey, Fleece, Rib), quantity in kg, dyeing shade requirement, etc."
                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 focus:border-primary focus:bg-background focus:outline-none text-sm transition-all resize-none"
                      />
                    </div>

                    {formStatus && (
                      <p className="text-xs font-semibold text-primary">{formStatus}</p>
                    )}

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-primary text-white font-bold text-xs uppercase tracking-widest hover:bg-primary/90 shadow-lg hover:shadow-primary/30 transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Submit Enquiry via WhatsApp
                    </button>
                  </form>
                </div>

                <p className="text-[11px] text-muted-foreground mt-6 text-center">
                  Direct inquiries: <span className="font-bold text-foreground">9888777382</span> • Ludhiana, Punjab
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-[120px] bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center max-w-4xl">
          <FadeIn direction="up">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight mb-6 sm:mb-8">
              Two Generations.
              <br />
              One Promise.
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-light text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              From a single machine to 1.5 lac sq ft of manufacturing and processing excellence — partner
              with a family that has spent {YEARS}+ years perfecting every metre of fabric.
            </p>
            <a
              href="#contact"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "uppercase tracking-widest font-bold text-xs sm:text-sm text-white border-white hover:bg-white hover:text-primary rounded-full px-8 py-3",
              })}
            >
              Contact Our Team
            </a>
          </FadeIn>
        </div>
      </section>

      {/* DEDICATED FOOTER FOR SR PROCESSORS */}
      <footer className="bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-11 w-auto bg-white/10 rounded-xl p-1.5 border border-white/15 flex items-center justify-center">
                  <Image
                    src="/srp.png"
                    alt="SR Processors Logo"
                    width={80}
                    height={50}
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <span className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                  SR PROCESSORS
                </span>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Specialized textile dyeing and fabric processing unit of the Siya Ram Fabrics family. Built
                on 28+ years of industrial legacy and high-precision quality control.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-full">
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground">GST No.</span>
                <span className="font-numbers text-xs sm:text-sm font-semibold text-white">
                  03AEZFS2960Q1Z1
                </span>
              </div>
            </div>

            {/* In-Page Quick Navigation */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold uppercase tracking-wider text-sm text-white">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#story" className="hover:text-brand-bright transition-colors">
                    Our Story & Founder
                  </a>
                </li>
                <li>
                  <a href="#growth" className="hover:text-brand-bright transition-colors">
                    Growth Numbers
                  </a>
                </li>
                <li>
                  <a href="#strengths" className="hover:text-brand-bright transition-colors">
                    Processing Capabilities
                  </a>
                </li>
                <li>
                  <a href="#leadership" className="hover:text-brand-bright transition-colors">
                    Leadership Team
                  </a>
                </li>
                <li>
                  <a href="#infrastructure" className="hover:text-brand-bright transition-colors">
                    Plant Infrastructure
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-brand-bright transition-colors">
                    Official Contact & Location
                  </a>
                </li>
              </ul>
            </div>

            {/* Official Contact & Address */}
            <div className="space-y-4 lg:col-span-2">
              <h4 className="font-heading font-semibold uppercase tracking-wider text-sm text-white">
                Plant Address & Contact
              </h4>
              <ul className="space-y-3.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-bright shrink-0 mt-0.5" />
                  <span>
                    KHATA NO.130/152, KHASRA NO.20/8/2, VILLAGE PAHARUWAL, CHD. ROAD, LUDHIANA-141114,
                    PUNJAB (State Code: 03)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-bright shrink-0" />
                  <a
                    href="tel:+919888777382"
                    className="font-numbers hover:text-brand-bright transition-colors text-white font-semibold"
                  >
                    +91 98887 77382
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-brand-bright shrink-0" />
                  <span>
                    GSTIN/UIN: <strong className="text-white font-numbers">03AEZFS2960Q1Z1</strong>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-brand-bright shrink-0" />
                  <span>Monday – Saturday: 10:00 AM – 7:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} SR PROCESSORS. All rights reserved.</p>
            <p className="flex items-center gap-3">
              <span>Ludhiana, Punjab</span>
              <span>•</span>
              <a href="tel:+919888777382" className="hover:text-white transition-colors">
                +91 98887 77382
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* DEDICATED FLOATING WHATSAPP BUTTON FOR SR PROCESSORS (9888777382) */}
      <div ref={waRef} className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {waOpen && (
          <div className="w-[300px] sm:w-[340px] bg-white text-black rounded-2xl shadow-2xl overflow-hidden border border-black/10 animate-in fade-in slide-in-from-bottom-3 duration-200">
            {/* Header */}
            <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
              <div>
                <p className="font-heading font-bold uppercase tracking-wider text-sm">
                  SR PROCESSORS
                </p>
                <p className="text-white/80 text-xs">Direct WhatsApp Inquiry</p>
              </div>
              <button
                onClick={() => setWaOpen(false)}
                className="text-white/70 hover:text-white p-1 rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {/* Body */}
            <div className="p-4 bg-[#ECE5DD] space-y-3">
              <div className="bg-white p-3 rounded-lg shadow-sm text-xs text-gray-800">
                <p className="font-semibold mb-1">Hello! 👋</p>
                <p>
                  How can we assist you with fabric dyeing, processing, or finishing at SR Processors?
                </p>
              </div>
              <div className="space-y-2">
                {[
                  "I want a quote for fabric processing.",
                  "What are your dyeing batch capacities?",
                  "I want to visit the Paharuwal plant.",
                ].map((msg) => (
                  <button
                    key={msg}
                    onClick={() => {
                      window.open(
                        `https://wa.me/919888777382?text=${encodeURIComponent(msg)}`,
                        "_blank"
                      );
                      setWaOpen(false);
                    }}
                    className="w-full text-left text-xs bg-white/90 hover:bg-white p-2 rounded-md shadow-xs border border-gray-200 text-gray-700 hover:text-black transition-colors"
                  >
                    {msg}
                  </button>
                ))}
              </div>
            </div>
            {/* Footer */}
            <div className="p-3 bg-white border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] text-gray-500 font-numbers">+91 98887 77382</span>
              <a
                href="https://wa.me/919888777382?text=Hello%20SR%20Processors%2C%20I%20would%20like%20to%20enquire%20about%20fabric%20processing."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Chat Now
              </a>
            </div>
          </div>
        )}

        <button
          onClick={() => setWaOpen(!waOpen)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          aria-label="Open WhatsApp Chat with SR Processors"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
