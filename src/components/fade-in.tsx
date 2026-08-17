"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function FadeIn({ children, delay = 0, direction = "up", className = "" }: FadeInProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Premium fluid cubic-bezier curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25, scale: 0.97 },
        visible: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.21, 0.47, 0.32, 0.98],
          }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(() => {
    const numericMatch = value.match(/\d+/);
    if (!numericMatch) return value;
    const prefix = value.substring(0, numericMatch.index);
    const suffix = value.substring((numericMatch.index || 0) + numericMatch[0].length);
    return `${prefix}0${suffix}`;
  });

  useEffect(() => {
    if (!isInView) return;

    // Parse numeric parts if any
    const numericMatch = value.match(/\d+/);
    if (!numericMatch) {
      return;
    }

    const targetNum = parseInt(numericMatch[0], 10);
    const prefix = value.substring(0, numericMatch.index);
    const suffix = value.substring((numericMatch.index || 0) + numericMatch[0].length);

    let start = 0;
    const duration = 1500; // ms
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = targetNum / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNum) {
        setDisplayValue(`${prefix}${targetNum}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplayValue(`${prefix}${Math.floor(start)}${suffix}`);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}

export function FloatingElement({ children, className = "", duration = 4 }: { children: ReactNode; className?: string; duration?: number }) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
