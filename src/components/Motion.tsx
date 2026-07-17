import { motion, useReducedMotion, type MotionProps, type Variants, useMotionValue, useSpring, useInView } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { useEffect, useState, useRef } from "react";
import {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleIn,
  rotateIn,
  slideInLeft,
  slideInRight,
  bounceIn,
  textReveal,
  staggerContainer,
  staggerItem,
  glowPulse,
  viewportOnce,
  pageTransition,
  hoverScale,
  hoverLift,
} from "@/lib/motion";

/* ---------- <Reveal> — scroll-triggered reveal ---------- */
type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
} & Omit<MotionProps, "variants" | "initial" | "whileInView" | "viewport">;

export function Reveal({
  as = "div",
  children,
  variants = fadeUp,
  delay = 0,
  className,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion(as as ElementType);
  if (reduce) return <MotionTag className={className}>{children}</MotionTag>;
  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/* ---------- <Stagger> — staggered children ---------- */
type StaggerProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
};

export function Stagger({ children, className, staggerDelay = 0.1, delayChildren = 0.1 }: StaggerProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: staggerDelay, delayChildren },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

/* ---------- <Parallax> — scroll-based parallax ---------- */
type ParallaxProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Parallax({ children, className, strength = 0.5 }: ParallaxProps) {
  return (
    <motion.div
      initial={{ y: strength * 50 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- <TextScramble> — text scramble effect ---------- */
type TextScrambleProps = {
  text: string;
  className?: string;
  trigger?: boolean;
  duration?: number;
};

export function TextScramble({ text, className, trigger = true, duration = 2000 }: TextScrambleProps) {
  const [display, setDisplay] = useState(text);
  const chars = "!<>-_\\\\/[]{}—=+*^?#________";
  const frameRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (!trigger) return;
    let iteration = 0;
    const totalFrames = 40;
    const interval = duration / totalFrames;
    
    const animate = () => {
      const result = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
      
      setDisplay(result);
      iteration += text.length / totalFrames;
      
      if (iteration < text.length) {
        frameRef.current = window.setTimeout(animate, interval);
      } else {
        setDisplay(text);
      }
    };
    
    animate();
    return () => { if (frameRef.current) clearTimeout(frameRef.current); };
  }, [text, trigger, duration]);
  
  return <span className={className}>{display}</span>;
}

/* ---------- <GlowOnHover> — navy glow effect ---------- */
type GlowOnHoverProps = {
  children: ReactNode;
  className?: string;
};

export function GlowOnHover({ children, className }: GlowOnHoverProps) {
  return (
    <motion.div
      whileHover={{ 
        boxShadow: "0 0 30px rgba(0, 102, 255, 0.3), 0 0 60px rgba(0, 212, 255, 0.1)",
        transition: { duration: 0.3 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- <Magnetic> — magnetic hover effect ---------- */
type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({ children, className, strength = 0.3 }: MagneticProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- <PageTransition> ---------- */
type PageTransitionProps = {
  children: ReactNode;
  className?: string;
};

export function PageTransition({ children, className }: PageTransitionProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- <Counter> — animated counter ---------- */
type CounterProps = {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export function Counter({ end, duration = 2000, prefix = "", suffix = "", className }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;
    
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);
  
  return <span ref={ref} className={className}>{prefix}{count.toLocaleString()}{suffix}</span>;
}
/* ---------- <FadeItem> — alias for StaggerItem (backward compatibility) ---------- */
export function FadeItem({ children, className }: { children: ReactNode; className?: string }) {
  return StaggerItem({ children, className });
}