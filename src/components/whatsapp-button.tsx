"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WHATSAPP_NUMBER = "919888778082";

const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Siya Ram Fabrics, I would like to discuss a fabric requirement."
)}`;

const QUICK_MESSAGES = [
  "I'd like a quote for single jersey fabric.",
  "Please share your product catalogue.",
  "I want to visit your Ludhiana facility.",
];

function WhatsAppIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  if (pathname === "/coming-soon") return null;

  return (
    <div ref={wrapRef} className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-[300px] sm:w-[340px] bg-white rounded-xl shadow-2xl overflow-hidden border border-black/5"
          >
            {/* Header */}
            <div className="bg-[#075E54] text-white p-5">
              <p className="font-heading font-bold uppercase tracking-wider text-sm mb-1">Siya Ram Fabrics</p>
              <p className="text-white/80 text-sm">Typically replies within a few hours</p>
            </div>

            {/* Quick messages */}
            <div className="p-4 space-y-2.5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
                Quick Questions
              </p>
              {QUICK_MESSAGES.map((msg) => (
                <a
                  key={msg}
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-foreground bg-muted hover:bg-[#25D366]/10 border border-border hover:border-[#25D366] transition-colors p-3.5 rounded-lg"
                >
                  {msg}
                </a>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="p-4 pt-0">
              <Link
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1EBE5A] text-white font-semibold uppercase tracking-widest text-sm py-3.5 rounded-lg transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Start Chatting
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close WhatsApp chat" : "Chat with Siya Ram Fabrics on WhatsApp"}
        className="relative flex items-center bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1EBE5A] transition-colors duration-300"
        animate={{ width: open ? "auto" : 56, height: 56 }}
        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <AnimatePresence initial={false}>
          {!open && (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <WhatsAppIcon className="w-7 h-7" />
            </motion.span>
          )}
          {open && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.span>
          )}
        </AnimatePresence>
        <span className="sr-only">{open ? "Close WhatsApp chat" : "Chat with Siya Ram Fabrics on WhatsApp"}</span>
      </motion.button>
    </div>
  );
}