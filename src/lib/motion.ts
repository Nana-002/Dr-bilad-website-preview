/**
 * Central animation config — edit these values to tune motion across the site.
 * All page sections and interactive elements read from here.
 */
import type { Variants, Transition } from "framer-motion";

/* ---------- Easing & durations ---------- */
export const easing = {
  smooth: [0.22, 1, 0.36, 1] as const, // easeOutExpo-like
  entrance: [0.16, 1, 0.3, 1] as const,
  bounce: [0.34, 1.56, 0.64, 1] as const,
};

export const durations = {
  fast: 0.35,
  base: 0.6,
  slow: 0.9,
};

/* ---------- Reusable transitions ---------- */
export const baseTransition: Transition = {
  duration: durations.base,
  ease: easing.smooth,
};

/* ---------- Reusable variants ---------- */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: baseTransition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: baseTransition,
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: baseTransition },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: baseTransition },
};

/* Stagger container — put on parent, children auto-cascade */
export const staggerContainer = (stagger = 0.12, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

/* Viewport hook config for scroll-reveal */
export const viewportOnce = { once: true, amount: 0.25 } as const;

/* Hover interactions */
export const hoverLift = {
  whileHover: { y: -4, transition: { duration: 0.3, ease: easing.smooth } },
  whileTap: { scale: 0.98 },
};

export const hoverGlow = {
  whileHover: { scale: 1.02, transition: { duration: 0.3, ease: easing.smooth } },
  whileTap: { scale: 0.98 },
};

/* Page transition */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easing.entrance },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.3, ease: easing.smooth },
  },
};
