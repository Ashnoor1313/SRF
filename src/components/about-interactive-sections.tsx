"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.12 }}
            className="group relative bg-card border border-border rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
          >
            {/* Owner Image Container with Gradient Overlay */}
            <div className="relative h-[340px] sm:h-[380px] w-full bg-secondary/40 overflow-hidden">
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />
              
              {/* Badge & Year */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold ${leader.badgeClass}`}>
                  {leader.generation}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white/90 px-2.5 py-1 rounded-full border border-white/20">
                  {leader.joinedYear}
                </span>
              </div>

              {/* Name & Role Overlay */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-1 drop-shadow-md">
                  {leader.name}
                </h3>
                <p className="text-brand-bright font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
                  {leader.role}
                </p>
                <div className="flex items-center gap-2 text-white/70 text-xs font-medium">
                  <GraduationCap className="w-3.5 h-3.5 text-brand-bright shrink-0" />
                  <span className="truncate">{leader.education}</span>
                </div>
              </div>
            </div>

            {/* Card Content & Quote */}
            <div className="p-6 flex flex-col justify-between flex-grow space-y-5 bg-card">
              <div className="space-y-4">
                <div className="relative pl-4 border-l-2 border-primary italic text-muted-foreground text-xs sm:text-sm leading-relaxed bg-primary/5 py-2.5 pr-2 rounded-r-xl">
                  &ldquo;{leader.quote}&rdquo;
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary block">
                    Core Focus & Achievements
                  </span>
                  {leader.keyAchievements.slice(0, 2).map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-foreground/80 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedLeader(leader)}
                className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-muted hover:bg-primary hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-wider text-foreground group/btn"
              >
                <span>Full Leadership Profile</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Leader Profile Modal Dialog */}
      <AnimatePresence>
        {selectedLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-card border border-border rounded-3xl overflow-hidden shadow-2xl overflow-y-auto no-scrollbar"
            >
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-primary transition-colors text-lg font-bold"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-5 relative min-h-[300px] md:min-h-[450px] bg-secondary/30">
                  <Image
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className={`inline-block text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold ${selectedLeader.badgeClass}`}>
                      {selectedLeader.generation}
                    </span>
                    <h3 className="font-heading text-2xl font-bold">{selectedLeader.name}</h3>
                    <p className="text-white/80 text-xs font-medium">{selectedLeader.role}</p>
                  </div>
                </div>

                <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
                  <div className="relative pl-4 border-l-4 border-primary italic text-foreground font-medium text-sm sm:text-base leading-relaxed bg-primary/5 py-3 pr-3 rounded-r-xl">
                    <Quote className="w-4 h-4 text-primary/40 absolute -top-2 left-1" />
                    &ldquo;{selectedLeader.quote}&rdquo;
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-muted p-3 rounded-xl flex items-center gap-3">
                      <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold block">Education</span>
                        <span className="text-xs font-bold text-foreground">{selectedLeader.education}</span>
                      </div>
                    </div>
                    <div className="bg-muted p-3 rounded-xl flex items-center gap-3">
                      <Award className="w-4 h-4 text-primary shrink-0" />
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold block">Focus Area</span>
                        <span className="text-xs font-bold text-foreground">{selectedLeader.focusArea}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{selectedLeader.bio}</p>

                  <div className="space-y-2 pt-2 border-t border-border">
                    <h4 className="font-heading text-xs uppercase tracking-widest text-primary font-bold">Key Milestones & Leadership</h4>
                    <div className="space-y-2">
                      {selectedLeader.keyAchievements.map((ach, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-foreground/80 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex justify-end">
                    <Link
                      href="/contact"
                      onClick={() => setSelectedLeader(null)}
                      className={buttonVariants({
                        size: "sm",
                        className: "uppercase tracking-widest text-xs font-bold rounded-full w-full sm:w-auto justify-center",
                      })}
                    >
                      Connect with Leadership <Sparkles className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function InteractiveLeadershipSection() {
  const [activeLeader, setActiveLeader] = useState<string>("harish");
  const leader = LEADERS.find((l) => l.id === activeLeader) || LEADERS[0];

  return (
    <div className="w-full space-y-8 md:space-y-12">
      {/* Mobile-Friendly Tab Switcher */}
      <div className="w-full overflow-x-auto no-scrollbar py-1">
        <div className="flex items-center gap-2 md:gap-3 bg-muted p-1.5 sm:p-2 rounded-2xl border border-border w-max mx-auto max-w-full">
          {LEADERS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveLeader(item.id)}
              className={`flex items-center gap-2 sm:gap-3 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl font-heading text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shrink-0 ${
                activeLeader === item.id
                  ? "bg-primary text-white shadow-md scale-102"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/80"
              }`}
            >
              <span className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden shrink-0 border border-white/30">
                <Image src={item.image} alt={item.name} fill className="object-cover object-top" />
              </span>
              <span className="whitespace-nowrap">{item.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Spotlight Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={leader.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Image Side */}
          <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] bg-secondary/30">
            <Image
              src={leader.image}
              alt={leader.name}
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
              <span className={`inline-block text-[10px] sm:text-[11px] uppercase tracking-widest px-3 py-1 rounded-full font-bold ${leader.badgeClass}`}>
                {leader.generation}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold">{leader.name}</h3>
              <p className="text-white/80 text-xs sm:text-sm font-medium">{leader.role}</p>
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
            className="group relative bg-card border border-border p-6 sm:p-8 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div className={`absolute top-0 right-0 w-28 sm:w-32 h-28 sm:h-32 bg-gradient-to-bl ${val.color} rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125`} />
            <div>
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Icon className="w-6 sm:w-7 h-6 sm:h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 block">{val.subtitle}</span>
              <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wide text-foreground mb-2 sm:mb-3">{val.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">{val.description}</p>
            </div>
            <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
              <span>Learn More</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
