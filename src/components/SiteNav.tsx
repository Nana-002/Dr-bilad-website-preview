import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { easing } from "@/lib/motion";


const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/ceo", label: "The CEO" },
  { to: "/doctor", label: "The Doctor" },
  { to: "/creator", label: "The Creator" },
  { to: "/book", label: "Book" },
  { to: "/media-kit", label: "Media Kit" },
  { to: "/contact", label: "Contact" },
] as const;


export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-xl border-b border-navy-soft/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight">Dr. Bilad</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-gold transition-colors">
            Build · Serve · Impact
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center text-xs tracking-[0.25em] uppercase border border-gold/60 text-gold px-4 py-2.5 hover:bg-gold hover:text-ink transition-colors"
        >
          Work with me
        </Link>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="lg:hidden border-t border-border bg-background overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easing.smooth }}
          >
            <motion.nav
              className="container-x py-6 flex flex-col gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {links.map((l) => (
                <motion.div
                  key={l.to}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="text-base text-foreground/90 hover:text-gold"
                    activeProps={{ className: "text-gold" }}
                    activeOptions={{ exact: true }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

