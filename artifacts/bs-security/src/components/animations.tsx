import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ─────────────────────────────────────────────
   FadeIn  — improved with scale support
───────────────────────────────────────────── */
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  scale?: boolean;
  className?: string;
  duration?: number;
  distance?: number;
}
export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  scale = false,
  className,
  duration = 0.7,
  distance = 40,
}: FadeInProps) {
  const dirs: Record<string, { x: number; y: number }> = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...dirs[direction], scale: scale ? 0.92 : 1 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   StaggerContainer + StaggerItem
───────────────────────────────────────────── */
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  containerDelay?: number;
}
export function StaggerContainer({ children, className, staggerDelay = 0.1, containerDelay = 0 }: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { delayChildren: containerDelay, staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
}
export function StaggerItem({ children, className, direction = "up" }: StaggerItemProps) {
  const variants: Record<string, { hidden: object; visible: object }> = {
    up: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    },
    left: {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    },
    right: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.85 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    },
  };
  return (
    <motion.div className={className} variants={variants[direction]}>
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   CountUp — animates a number on scroll entry
───────────────────────────────────────────── */
interface CountUpProps {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}
export function CountUp({ to, suffix = "", prefix = "", duration = 1.8, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) motionVal.set(to);
  }, [isInView, to, motionVal]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   FloatingElement — gentle bob up/down
───────────────────────────────────────────── */
interface FloatingElementProps {
  children: React.ReactNode;
  amplitude?: number;
  duration?: number;
  delay?: number;
  className?: string;
}
export function FloatingElement({ children, amplitude = 12, duration = 4, delay = 0, className }: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [-amplitude / 2, amplitude / 2, -amplitude / 2] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   PulseGlow — repeating scale pulse
───────────────────────────────────────────── */
export function PulseGlow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   AnimatedCard — hover lift + border glow
───────────────────────────────────────────── */
export function AnimatedCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`${className} cursor-default`}
      whileHover={{ y: -8, boxShadow: "0 20px 60px -10px rgba(37,99,235,0.15)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   AnimatedIcon — icon bounce on parent hover
───────────────────────────────────────────── */
export function AnimatedIcon({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      whileHover={{ rotate: [0, -10, 10, -6, 6, 0], scale: 1.15 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SlideReveal — text slide up reveal
───────────────────────────────────────────── */
export function SlideReveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ProgressBar — animated width bar
───────────────────────────────────────────── */
interface ProgressBarProps {
  percent: number;
  delay?: number;
  label?: string;
  className?: string;
}
export function ProgressBar({ percent, delay = 0, label, className }: ProgressBarProps) {
  return (
    <div className={className}>
      {label && <div className="flex justify-between text-sm mb-1.5"><span className="text-foreground/70">{label}</span><span className="font-bold text-primary">{percent}%</span></div>}
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   RevealLine — horizontal line draw animation
───────────────────────────────────────────── */
export function RevealLine({ delay = 0, className }: { delay?: number; className?: string }) {
  return (
    <motion.div
      className={`h-px bg-primary ${className}`}
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

/* ─────────────────────────────────────────────
   RotatingBadge — slow spin decorator
───────────────────────────────────────────── */
export function RotatingBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   PageTransition — wraps each page
───────────────────────────────────────────── */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   ScaleOnHover — simple scale on hover
───────────────────────────────────────────── */
export function ScaleOnHover({ children, scale = 1.05, className }: { children: React.ReactNode; scale?: number; className?: string }) {
  return (
    <motion.div className={className} whileHover={{ scale }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   BlobBackground — decorative animated blob
───────────────────────────────────────────── */
export function BlobBackground({ className }: { className?: string }) {
  return (
    <motion.div
      className={`rounded-full blur-3xl opacity-20 ${className}`}
      animate={{
        scale: [1, 1.2, 0.9, 1.1, 1],
        x: [0, 30, -20, 10, 0],
        y: [0, -20, 30, -10, 0],
      }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ─────────────────────────────────────────────
   TypeWriter — character-by-character reveal
───────────────────────────────────────────── */
export function TypeWriter({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const chars = text.split("");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { delayChildren: delay, staggerChildren: 0.035 } } }}
    >
      {chars.map((char, i) => (
        <motion.span key={i} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
