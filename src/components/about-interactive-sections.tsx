"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronRight,
  Factory,
  GraduationCap,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  User,
  Users,
  Zap,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export interface Leader {
  id: string;
  name: string;
  role: string;
  generation: string;
  badgeClass: string;
  image: "/images/Harish Jindal.png" | "/images/Saransh Jindal.png" | "/images/Yuvraj Jindal.png";
  education: string;
  focusArea: string;
  joinedYear: string;
  bio: string;
  quote: string;
  keyAchievements: string[];
}

export const LEADERS: Leader[] = [
  {
    id: "harish",
    name: "Mr. Harish Jindal",
    role: "Founder & Managing Director",
    generation: "1st Generation Founder",
    badgeClass: "bg-primary text-white shadow-md",
    image: "/images/Harish Jindal.png",
    education: "BTech in Civil Engineering (1994)",
    focusArea: "Reliance Industries Alum (1994-96)",
    joinedYear: "Founded 1998",
    bio: "Harish Jindal graduated with a BTech in Civil Engineering in 1994. After gaining foundational industrial experience at Reliance Industries in Surat, he returned to Ludhiana to study the fabric market. In 1998, he founded Siya Ram Fabrics in a 500 sq ft space with one employee. Over nearly three decades, his vision and engineering discipline built the business into a 1.5 lac sq ft manufacturing empire.",
    quote: "Precision isn't just an option in textiles — it is the cornerstone of every single metre we produce.",
    keyAchievements: [
      "Built SRF from a 500 sq ft setup to 1.5 lac sq ft",
      "Grew team from 1 employee to 300+ professionals",
      "Pioneered complete in-house knitting, dyeing & finishing integration",
    ],
  },
  {
    id: "saransh",
    name: "Saransh Jindal",
    role: "Operations & Sales Director",
    generation: "2nd Generation Director",
    badgeClass: "bg-brand-bright text-black font-bold shadow-md",
    image: "/images/Saransh Jindal.png",
    education: "Bachelor's Degree (Graduated 2017)",
    focusArea: "Floor Operations & Pan-India Sales",
    joinedYear: "Joined 2017",
    bio: "Saransh Jindal joined the business while completing his university studies. Gaining hands-on expertise directly on the factory floor, Saransh manages day-to-day plant operations, yarn procurement, sales expansion, and client relationships across major textile hubs in India.",
    quote: "True scale comes when operational discipline on the floor matches the speed of client demand.",
    keyAchievements: [
      "Expanded domestic sales network across 8+ major garment hubs",
      "Optimized plant workflow and floor throughput efficiency",
      "Strengthened B2B client retention and long-term partnerships",
    ],
  },
  {
    id: "yuvraj",
    name: "Yuvraj Jindal",
    role: "Strategy & Innovation Director",
    generation: "2nd Generation Director",
    badgeClass: "bg-brand-bright text-black font-bold shadow-md",
    image: "/images/Yuvraj Jindal.png",
    education: "MBA (Graduated 2023)",
    focusArea: "Fast Fashion & Digital Automation",
    joinedYear: "Joined 2023",
    bio: "Yuvraj Jindal holds an MBA degree (2023) and brings modern management strategy to Siya Ram Fabrics. He introduced the Fast Fashion Fabrics division to cater to rapid retail trends and spearheaded digital automation across production tracking and quality inspection.",
    quote: "Modern fashion moves at lightning speed. We engineered our facility to deliver trend-responsive fabrics without sacrificing quality.",
    keyAchievements: [
      "Launched the Fast Fashion Fabrics product division",
      "Implemented technological automation and digital traceability",
      "Drove strategic brand positioning and modern market expansion",
    ],
  },
];

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    subtitle: "Every Roll Inspected Thrice",
    description:
      "From raw yarn arrival to final dispatch, our 3-stage inspection system guarantees exact GSM, color fastness, and dimensional stability.",
    color: "from-red-500/20 to-primary/10",
  },
  {
    icon: Target,
    title: "Precision Engineering",
    subtitle: "Civil Engineering Discipline",
    description:
      "Rooted in founder Harish Jindal's civil engineering background, we treat fabric production with mathematical precision and structural accuracy.",
    color: "from-brand-bright/20 to-red-500/10",
  },
  {
    icon: Zap,
    title: "Fast Fashion Agility",
    subtitle: "2nd Gen Innovation",
    description:
      "Introduced by the second generation, our rapid sampling and agile dyeing schedules cater seamlessly to fast fashion retail demands.",
    color: "from-amber-500/20 to-orange-500/10",
  },
  {
    icon: Users,
    title: "Relationships First",
    subtitle: "300+ Dedicated People",
    description:
      "We believe long-term business is built on trust, clear communication, and empowering our 300+ skilled textile specialists.",
    color: "from-blue-500/20 to-indigo-500/10",
  },
];

export function OwnersShowcaseGrid() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  return (
    <div className="w-full space-y-10">
      {/* 3 Owners Portrait Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {LEADERS.map((leader, index) => (
          <motion.div
            key={leader.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            onClick={() => setSelectedLeader(leader)}
            className="group relative bg-card border border-border rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Top Image Container */}
            <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-muted">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${leader.badgeClass}`}>
                  {leader.generation}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 text-white/90 border border-white/20 backdrop-blur-md">
                  {leader.joinedYear}
                </span>
              </div>

              {/* Bottom Card Identity Info */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-white mb-0.5 group-hover:text-brand-bright transition-colors">
                  {leader.name}
                </h3>
                <p className="text-xs uppercase tracking-widest font-semibold text-white/80">
                  {leader.role}
                </p>
              </div>
            </div>

            {/* Bottom Card Summary */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="truncate">{leader.education}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Award className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="truncate">{leader.focusArea}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-border flex items-center justify-between text-xs font-bold uppercase tracking-widest text-primary group-hover:translate-x-1 transition-transform">
                <span>View Full Profile</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Profile View */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLeader(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-muted text-foreground hover:bg-primary hover:text-white transition-colors"
              >
                Close &times;
              </button>

              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-border">
                  <Image src={selectedLeader.image} alt={selectedLeader.name} fill className="object-cover object-top" />
                </div>
                <div>
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${selectedLeader.badgeClass}`}>
                    {selectedLeader.generation}
                  </span>
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-foreground mt-1">
                    {selectedLeader.name}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                    {selectedLeader.role}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 italic text-sm text-foreground/90 leading-relaxed">
                &ldquo;{selectedLeader.quote}&rdquo;
              </div>

              <div className="space-y-2">
                <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-primary">Biographical Journey</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{selectedLeader.bio}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-primary">Key Contributions</h4>
                <div className="space-y-1.5">
                  {selectedLeader.keyAchievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function InteractiveLeadershipSection() {
  const [activeLeader, setActiveLeader] = useState<string>("harish");
  const leader = LEADERS.find((l) => l.id === activeLeader) || LEADERS[0];

  return (
    <div className="w-full space-y-8">
      {/* Navigation Pills */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {LEADERS.map((l) => (
          <button
            key={l.id}
            onClick={() => setActiveLeader(l.id)}
            className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              activeLeader === l.id
                ? "bg-primary text-white shadow-lg scale-105"
                : "bg-card border border-border text-foreground/80 hover:border-primary/50 hover:bg-muted"
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>{l.name}</span>
          </button>
        ))}
      </div>

      {/* Profile Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={leader.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="bg-card border border-border rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Portrait Side */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-[500px] bg-muted">
            <Image src={leader.image} alt={leader.name} fill className="object-cover object-top" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${leader.badgeClass}`}>
                {leader.generation}
              </span>
              <h3 className="font-heading text-3xl font-bold uppercase tracking-tight text-white mt-2">{leader.name}</h3>
              <p className="text-xs uppercase tracking-widest text-white/80 font-semibold">{leader.role}</p>
            </div>
          </div>

          {/* Details Side */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 flex flex-col justify-between space-y-6 sm:space-y-8 bg-card">
            <div className="space-y-5 sm:space-y-6">
              <div className="relative pl-5 sm:pl-6 border-l-4 border-primary italic text-foreground/90 font-medium text-sm sm:text-base md:text-lg leading-relaxed bg-primary/5 py-3.5 sm:py-4 pr-3 sm:pr-4 rounded-r-2xl">
                <Quote className="w-5 h-5 text-primary/40 absolute -top-2 left-2" />
                &ldquo;{leader.quote}&rdquo;
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 bg-muted p-3 sm:p-3.5 rounded-xl">
                  <GraduationCap className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block">Education</span>
                    <span className="text-xs font-bold text-foreground">{leader.education}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-muted p-3 sm:p-3.5 rounded-xl">
                  <Award className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block">Focus Area</span>
                    <span className="text-xs font-bold text-foreground">{leader.focusArea}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{leader.bio}</p>

              <div className="space-y-3 pt-1">
                <h4 className="font-heading text-xs uppercase tracking-widest text-primary font-bold">Key Milestones & Contributions</h4>
                <div className="space-y-2">
                  {leader.keyAchievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Siya Ram Fabrics Leadership</span>
              <Link
                href="/contact"
                className={buttonVariants({
                  size: "sm",
                  className: "uppercase tracking-widest text-xs font-bold rounded-full w-full sm:w-auto justify-center",
                })}
              >
                Connect with Team <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function CoreValuesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {CORE_VALUES.map((val, idx) => {
        const Icon = val.icon;
        return (
          <motion.div
            key={val.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group relative bg-card border border-border p-6 sm:p-8 rounded-3xl overflow-hidden hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div className={`absolute top-0 right-0 w-28 sm:w-32 h-28 sm:h-32 bg-gradient-to-bl ${val.color} rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125`} />
            <div>
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Icon className="w-6 sm:w-7 h-6 sm:h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 block">{val.subtitle}</span>
              <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wide text-foreground mb-2 sm:mb-3">{val.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{val.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function GrowthTransformationRibbon() {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        {/* 1998: Started */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="group relative overflow-hidden w-full lg:flex-1 bg-black/15 border border-white/20 hover:border-white/40 hover:bg-black/25 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] rounded-3xl p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 cursor-default"
        >
          {/* Hover Shimmer Light */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/15 relative z-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 group-hover:text-white transition-colors">
              Where We Started
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/15 group-hover:bg-white/25 text-white transition-colors">
              1998
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 relative z-10">
            <div>
              <p className="font-numbers text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                500
              </p>
              <p className="text-xs uppercase tracking-widest font-semibold text-white/80 group-hover:text-white transition-colors">
                Sq Ft at Start
              </p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <p className="font-numbers text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                1
              </p>
              <p className="text-xs uppercase tracking-widest font-semibold text-white/80 group-hover:text-white transition-colors">
                Employee at Start
              </p>
            </div>
          </div>
        </motion.div>

        {/* Animated Arrow Connector */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="group flex flex-col items-center justify-center shrink-0 hover:scale-125 transition-transform duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-white/20 group-hover:bg-white border border-white/30 group-hover:border-white flex items-center justify-center shadow-lg group-hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] backdrop-blur-sm transition-all duration-300">
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
              className="hidden lg:block"
            >
              <ArrowRight className="w-6 h-6 text-white group-hover:text-primary transition-colors duration-300" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
              className="lg:hidden"
            >
              <ArrowRight className="w-6 h-6 text-white group-hover:text-primary transition-colors duration-300 rotate-90" />
            </motion.div>
          </div>
        </motion.div>

        {/* Today */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="group relative overflow-hidden w-full lg:flex-1 bg-white/15 border border-white/30 hover:border-white/60 hover:bg-white/25 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.3)] rounded-3xl p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 cursor-default"
        >
          {/* Hover Shimmer Light */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/20 relative z-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-bright animate-ping" />
              Where We Stand Today
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/25 group-hover:bg-white group-hover:text-primary text-white transition-colors duration-300">
              Full Scale
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 relative z-10">
            <div>
              <p className="font-numbers text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                1.5 Lac
              </p>
              <p className="text-xs uppercase tracking-widest font-semibold text-white/90 group-hover:text-white transition-colors">
                Sq Ft Facility
              </p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <p className="font-numbers text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                300+
              </p>
              <p className="text-xs uppercase tracking-widest font-semibold text-white/90 group-hover:text-white transition-colors">
                Specialists Today
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const ALL_MILESTONES = [
  {
    id: "1994",
    year: "1994",
    shortLabel: "Civil Engineering",
    phase: "Phase 01 • The Foundation",
    title: "BTech in Civil Engineering",
    description:
      "Harish Jindal completes his BTech in Civil Engineering. This engineering training instilled a culture of mathematical precision, load calculations, and structural discipline that became the bedrock of Siya Ram Fabrics' quality standards.",
    metric: "Civil Engineering Discipline",
    icon: GraduationCap,
    position: "top" as const,
  },
  {
    id: "1994-96",
    year: "1994–96",
    shortLabel: "Reliance Surat",
    phase: "Phase 02 • Industrial Training",
    title: "Reliance Industries, Surat",
    description:
      "Gained hands-on floor experience at Reliance Industries in Surat, absorbing large-scale industrial operations, synthetic yarn properties, quality control protocols, and corporate plant discipline.",
    metric: "Surat Industrial Experience",
    icon: Factory,
    position: "bottom" as const,
  },
  {
    id: "1996",
    year: "1996",
    shortLabel: "Market Research",
    phase: "Phase 03 • The Vision",
    title: "Market Research in Ludhiana",
    description:
      "Returned to Ludhiana and conducted two years of rigorous ground research into North India's fabric demand, identifying critical market gaps in knitted fabric consistency, GSM stability, and timely delivery.",
    metric: "2 Years Deep Research",
    icon: Target,
    position: "top" as const,
  },
  {
    id: "1998",
    year: "1998",
    shortLabel: "SRF Founded",
    phase: "Phase 04 • The Genesis",
    title: "Siya Ram Fabrics Founded",
    description:
      "Founded Siya Ram Fabrics in a 500 sq ft rented space with just 1 employee and a single circular knitting machine. Guided by the founder's promise: deliver flawless, uncompromised quality on every single metre.",
    metric: "Started: 500 Sq Ft • 1 Employee",
    icon: Building2,
    position: "bottom" as const,
  },
  {
    id: "2017",
    year: "2017",
    shortLabel: "2nd Gen Enters",
    phase: "Phase 05 • Domestic Scale",
    title: "2nd Gen Joins (Saransh Jindal)",
    description:
      "Saransh Jindal joined the business during his university studies. Immersing himself on the factory floor, he expanded wholesale supply across key apparel manufacturing hubs including Delhi, Surat, Tirupur, and Mumbai.",
    metric: "Pan-India Sales Expansion",
    icon: TrendingUp,
    position: "top" as const,
  },
  {
    id: "2023",
    year: "2023",
    shortLabel: "MBA & Innovation",
    phase: "Phase 06 • Digital Agility",
    title: "2nd Gen MBA (Yuvraj Jindal)",
    description:
      "Yuvraj Jindal joined post-MBA (2023), launching the Fast Fashion Fabrics division, automated 48-hour lab dip sampling, and digital QR-barcode traceability across all plant machinery.",
    metric: "Fast Fashion & Digital QA",
    icon: Zap,
    position: "bottom" as const,
  },
  {
    id: "today",
    year: "Today",
    shortLabel: "1.5 Lac Sq Ft",
    phase: "Phase 07 • Full Scale",
    title: "1.5 Lac Sq Ft & 300+ People",
    description:
      "A vertically integrated manufacturing empire housing high-speed circular knitting, computerized softflow dyeing, felt compacting, and 4-point inspection under one roof with 300+ dedicated textile specialists.",
    metric: "1.5 Lac Sq Ft • 300+ Specialists",
    icon: Award,
    position: "top" as const,
  },
];

export function DotTimelineSequence() {
  const [selectedIdx, setSelectedIdx] = useState<number>(3); // Defaults to 1998 (Founding Year)
  const currentMilestone = ALL_MILESTONES[selectedIdx];
  const Icon = currentMilestone.icon;

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev > 0 ? prev - 1 : ALL_MILESTONES.length - 1));
  };

  const handleNext = () => {
    setSelectedIdx((prev) => (prev < ALL_MILESTONES.length - 1 ? prev + 1 : 0));
  };

  // 7 Points mathematically spaced on 1000x220 compact canvas (Space-saving)
  const POINTS = [
    { x: 75, y: 65, isTop: true },    // 1994
    { x: 215, y: 155, isTop: false }, // 1994-96
    { x: 355, y: 65, isTop: true },    // 1996
    { x: 495, y: 155, isTop: false }, // 1998
    { x: 635, y: 65, isTop: true },    // 2017
    { x: 775, y: 155, isTop: false }, // 2023
    { x: 915, y: 65, isTop: true },    // Today
  ];

  const wavePathD = "M 75 65 L 215 155 L 355 65 L 495 155 L 635 65 L 775 155 L 915 65";

  return (
    <div className="w-full space-y-5">
      {/* Top Helper Header & Progress Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-bright animate-ping" />
          <span className="text-xs uppercase tracking-widest font-bold text-brand-bright">
            Milestone {selectedIdx + 1} of {ALL_MILESTONES.length}
          </span>
        </div>

        {/* 7 Progress Indicator Pips */}
        <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
          {ALL_MILESTONES.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => setSelectedIdx(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                selectedIdx === idx ? "w-6 bg-brand-bright" : "w-1.5 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Jump to ${m.year}`}
            />
          ))}
        </div>
      </div>

      {/* ================= COMPACT DESKTOP SVG LINE PLOT ================= */}
      <div className="hidden md:block relative bg-[#131316] border border-white/15 rounded-2xl p-4 shadow-xl overflow-hidden">
        <svg
          viewBox="0 0 1000 220"
          className="w-full h-auto select-none"
        >
          <defs>
            {/* Glowing Red Drop Shadow */}
            <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Radiant Red Gradient */}
            <linearGradient id="laserGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B12137" />
              <stop offset="25%" stopColor="#E5484D" />
              <stop offset="50%" stopColor="#FF6B6B" />
              <stop offset="75%" stopColor="#E5484D" />
              <stop offset="100%" stopColor="#B12137" />
            </linearGradient>
          </defs>

          {/* Reference Gridlines */}
          <line x1="30" y1="65" x2="970" y2="65" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" strokeWidth="1" />
          <line x1="30" y1="155" x2="970" y2="155" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" strokeWidth="1" />

          {/* Neon Glow Trail */}
          <path
            d={wavePathD}
            fill="none"
            stroke="#E5484D"
            strokeWidth="8"
            opacity="0.25"
            filter="url(#laserGlow)"
          />

          {/* Core Solid Line Plot Path */}
          <path
            d={wavePathD}
            fill="none"
            stroke="url(#laserGradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* 7 Mathematical Milestone Vertices & Badges */}
          {ALL_MILESTONES.map((m, idx) => {
            const pt = POINTS[idx];
            const isSelected = selectedIdx === idx;
            const isTop = pt.isTop;

            const labelBoxY = isTop ? 10 : 172;
            const stemStartY = isTop ? 65 : 155;
            const stemEndY = isTop ? 44 : 172;

            return (
              <g
                key={m.id}
                onClick={() => setSelectedIdx(idx)}
                className="cursor-pointer group"
              >
                {/* Connecting Vertical Stem */}
                <line
                  x1={pt.x}
                  y1={stemStartY}
                  x2={pt.x}
                  y2={stemEndY}
                  stroke={isSelected ? "#E5484D" : "rgba(255,255,255,0.2)"}
                  strokeWidth={isSelected ? "2" : "1"}
                  strokeDasharray={isSelected ? "none" : "2 2"}
                />

                {/* Compact Year Badge Card */}
                <g className="transition-transform duration-200">
                  <rect
                    x={pt.x - 52}
                    y={labelBoxY}
                    width="104"
                    height="32"
                    rx="8"
                    fill={isSelected ? "#B12137" : "#1A1A1E"}
                    stroke={isSelected ? "#E5484D" : "rgba(255,255,255,0.2)"}
                    strokeWidth={isSelected ? "1.5" : "0.75"}
                    className="transition-colors duration-200 shadow-sm"
                  />

                  {/* Year Text */}
                  <text
                    x={pt.x}
                    y={labelBoxY + 14}
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="11.5"
                    fontWeight="800"
                    className="font-numbers select-none"
                  >
                    {m.year}
                  </text>

                  {/* Subtitle */}
                  <text
                    x={pt.x}
                    y={labelBoxY + 25}
                    textAnchor="middle"
                    fill={isSelected ? "#FFE3E3" : "#A1A1AA"}
                    fontSize="7.5"
                    fontWeight="700"
                    letterSpacing="0.06em"
                    className="select-none uppercase"
                  >
                    {m.shortLabel}
                  </text>
                </g>

                {/* THE INTERACTIVE DOT NODE */}
                <g transform={`translate(${pt.x}, ${pt.y})`}>
                  {/* Generous Click Hit Area */}
                  <circle r="22" fill="transparent" />

                  {/* Pulsing Active Ring */}
                  {isSelected && (
                    <circle
                      r="18"
                      fill="#E5484D"
                      opacity="0.35"
                      className="animate-ping"
                    />
                  )}

                  {/* Node Ring */}
                  <circle
                    r={isSelected ? "14" : "9"}
                    fill={isSelected ? "#B12137" : "#111111"}
                    stroke={isSelected ? "#E5484D" : "#FFFFFF"}
                    strokeWidth={isSelected ? "3" : "1.75"}
                    className="transition-all duration-200"
                  />

                  {/* Inner White Dot Core */}
                  <circle
                    r={isSelected ? "5" : "3"}
                    fill="#FFFFFF"
                    className="transition-all duration-200"
                  />
                </g>
              </g>
            );
          })}
        </svg>
      </div>

      {/* ================= MOBILE SCROLLER ================= */}
      <div className="md:hidden bg-[#131316] border border-white/15 rounded-2xl p-3 shadow-lg">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {ALL_MILESTONES.map((m, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={m.id}
                onClick={() => setSelectedIdx(idx)}
                className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl shrink-0 transition-all ${
                  isSelected
                    ? "bg-primary text-white shadow-md border border-brand-bright scale-105"
                    : "bg-white/5 text-white/80 hover:bg-white/10 border border-white/10"
                }`}
              >
                <span className="font-numbers text-xs font-bold">{m.year}</span>
                <span className="text-[8px] uppercase font-semibold text-white/70">{m.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= COMPACT & INTEGRATED STORY DETAIL CARD ================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMilestone.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="bg-[#17171a] border border-primary/40 text-white rounded-2xl p-5 sm:p-7 shadow-xl relative overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/15 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left Col: Icon + Identity */}
            <div className="flex items-start gap-4 shrink-0">
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-brand-bright/30 flex items-center justify-center text-brand-bright shrink-0 shadow-md">
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-bright bg-primary/20 border border-brand-bright/30 px-2.5 py-0.5 rounded-full">
                    {currentMilestone.phase}
                  </span>
                  <span className="font-numbers text-xl font-extrabold text-white">
                    {currentMilestone.year}
                  </span>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wide text-white">
                  {currentMilestone.title}
                </h3>
                <p className="text-xs font-bold text-brand-bright uppercase tracking-wider">
                  {currentMilestone.metric}
                </p>
              </div>
            </div>

            {/* Middle Col: Description */}
            <div className="flex-1 lg:px-4 lg:border-l lg:border-white/10">
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                {currentMilestone.description}
              </p>
            </div>

            {/* Right Col: Navigation Buttons */}
            <div className="flex items-center gap-2 shrink-0 self-end lg:self-center">
              <button
                type="button"
                onClick={handlePrev}
                className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-primary text-white border border-white/20 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1"
              >
                &larr; Prev
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-primary text-white border border-white/20 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
