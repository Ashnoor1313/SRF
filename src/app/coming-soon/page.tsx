import type { Metadata } from "next";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Coming Soon | Siya Ram Fabrics",
  description: "Siya Ram Fabrics - Website Launching Soon.",
};

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen w-full bg-[#111111] text-white flex items-center justify-center p-4 sm:p-6 relative overflow-hidden -mt-16 md:-mt-20 selection:bg-brand-bright selection:text-white">
      {/* Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-brand-bright/10 rounded-full blur-[120px] pointer-events-none" />


      {/* Standalone Minimalist Card */}
      <div className="group relative z-10 max-w-lg w-full text-center space-y-6 bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-brand-bright/40 p-8 sm:p-12 rounded-3xl backdrop-blur-xl shadow-2xl hover:shadow-[0_25px_60px_rgba(229,72,77,0.2)] hover:-translate-y-1.5 transition-all duration-500 cursor-default">
        {/* Subtle Ambient Inner Glow */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-brand-bright/10 rounded-full blur-2xl group-hover:bg-brand-bright/25 group-hover:scale-150 transition-all duration-700 pointer-events-none" />

        {/* Logo */}
        <div className="flex justify-center mb-4 relative z-10">
          <Image
            src="/logo.png"
            alt="Siya Ram Fabrics Logo"
            width={180}
            height={140}
            className="h-16 sm:h-20 w-auto object-contain brightness-0 invert group-hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* Launching Soon Pill */}
        <div className="relative z-10 inline-flex items-center gap-2 border border-brand-bright/60 bg-brand-bright/10 text-brand-bright text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full shadow-[0_0_15px_rgba(229,72,77,0.2)] group-hover:shadow-[0_0_25px_rgba(229,72,77,0.45)] group-hover:scale-105 transition-all duration-300">
          <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
          Website Launching Soon
        </div>

        {/* Title & 1-2 Lines Text */}
        <div className="space-y-3 pt-2 relative z-10">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white leading-tight">
            Something Great Is <span className="text-brand-bright">Coming Soon</span>
          </h1>
          <p className="text-sm sm:text-base text-white/80 group-hover:text-white/95 leading-relaxed font-light transition-colors duration-300">
            Siya Ram Fabrics is crafting a new digital experience. Our new website will be live shortly.
          </p>
        </div>
      </div>
    </div>
  );
}
