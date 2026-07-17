/**
 * Central animation config — enhanced with vivid navy and more effects
 */
import type { Variants, Transition } from "framer-motion";

/* ---------- Easing & durations ---------- */
export const easing = {
  smooth: [0.22, 1, 0.36, 1] as const,
  entrance: [0.16, 1, 0.3, 1] as const,
  bounce: [0.34, 1.56, 0.64, 1] as const,
  expo: [0.19, 1, 0.22, 1] as const,
  elastic: [0.68, -0.55, 0.265, 1.55] as const,
};

export const durations = {
  fast: 0.35,
  base: 0.6,
  slow: 0.9,
  slower: 1.2,
};

/* ---------- Variants ---------- */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.base, ease: easing.smooth },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.base, ease: easing.smooth },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.base, ease: easing.smooth },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.base, ease: easing.smooth },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: durations.slow, ease: easing.entrance },
  },
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -5, scale: 0.95 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: durations.slow, ease: easing.smooth },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.slower, ease: easing.expo },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.slower, ease: easing.expo },
  },
};

export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: durations.slow, ease: easing.bounce },
  },
};

export const textReveal: Variants = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: durations.slower, ease: easing.expo },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.base, ease: easing.smooth },
  },
};

export const glowPulse: Variants = {
  hidden: { opacity: 0, boxShadow: "0 0 0 rgba(0,102,255,0)" },
  visible: {
    opacity: 1,
    boxShadow: "0 0 30px rgba(0,102,255,0.3)",
    transition: { duration: durations.slow, ease: easing.smooth },
  },
};

/* ---------- Viewport ---------- */
export const viewportOnce = { once: true, margin: "-80px" as const };
export const viewportAlways = { margin: "-50px" as const };

/* ---------- Page transition ---------- */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easing.smooth } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

/* ---------- Scroll-based parallax ---------- */
export const parallaxY = (strength: number = 0.5) => ({
  hidden: { y: strength * 100 },
  visible: { y: 0 },
});

/* ---------- Hover scale ---------- */
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3, ease: easing.smooth },
};

export const hoverLift = {
  y: -8,
  transition: { duration: 0.3, ease: easing.smooth },
};

/* ---------- Text scramble helper ---------- */
export const textScramble = (text: string, chars: string = "!<>-_\\\\/[]{}—=+*^?#________") => {
  let iteration = 0;
  const original = text;
  
  return {
    scramble: () => {
      const result = original
        .split("")
        .map((char, index) => {
          if (index < iteration) return original[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
      iteration += 1 / 3;
      return result;
    },
    reset: () => { iteration = 0; },
    done: () => iteration >= original.length,
  };
};