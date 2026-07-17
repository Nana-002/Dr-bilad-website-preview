import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { PageTransition, Reveal } from "./Motion";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function PageShell({ children }: { children: ReactNode }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <PageTransition>
        <main className="pt-16 md:pt-20">{children}</main>
      </PageTransition>
      <SiteFooter />
      
      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-navy-vivid to-navy-glow text-white flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(0,102,255,0.4)] transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <header className="container-x pt-24 md:pt-32 pb-12 md:pb-20">
      {eyebrow && (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h1 className="display-lg mt-6 max-w-4xl">{title}</h1>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </header>
  );
}