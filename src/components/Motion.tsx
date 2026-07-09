import { motion, useReducedMotion, type MotionProps, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
  pageTransition,
} from "@/lib/motion";

/* ---------- <Reveal> — scroll-triggered reveal ----------
 * Wrap any block. Defaults to fadeUp. Pass `variants` to override.
 * Respects prefers-reduced-motion.
 */
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
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/* ---------- <Stagger> — parent that cascades children ---------- */
type StaggerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

export function Stagger({
  as = "div",
  children,
  className,
  stagger = 0.12,
  delay = 0,
}: StaggerProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion(as as ElementType);
  if (reduce) return <MotionTag className={className}>{children}</MotionTag>;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(stagger, delay)}
    >
      {children}
    </MotionTag>
  );
}

/* ---------- <FadeItem> — child of <Stagger> ---------- */
export function FadeItem({
  as = "div",
  children,
  className,
  variants = fadeUp,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  variants?: Variants;
}) {
  const MotionTag = motion(as as ElementType);
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}

/* ---------- <PageTransition> — wraps route content ---------- */
export function PageTransition({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={pageTransition}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
}
