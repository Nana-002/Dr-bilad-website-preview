import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { PageTransition, Reveal } from "./Motion";
import { motion } from "framer-motion";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <PageTransition>
        <main className="pt-16 md:pt-20">{children}</main>
      </PageTransition>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="container-x pt-20 md:pt-28 pb-16 md:pb-24 border-l-2 border-navy-soft/50 pl-6 md:pl-10">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        className="display-lg mt-6 max-w-4xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        {title}
      </motion.h1>
      {intro && (
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {intro}
          </p>
        </Reveal>
      )}
    </section>
  );
}
