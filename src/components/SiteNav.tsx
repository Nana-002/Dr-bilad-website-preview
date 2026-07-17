import { Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? window.scrollY / docHeight : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        ref={progressRef}
        className="fixed top-0 left-0 h-[3px] z-[60] pointer-events-none"
        style={{
          width: `${scrollProgress * 100}%`,
          background: "linear-gradient(90deg, #0066ff, #00d4ff)",
          boxShadow: "0 0 10px rgba(0, 102, 255, 0.5)",
        }}
      />
      
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-background/90 backdrop-blur-xl border-b border-navy-soft/50"
            : "bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="group flex items-baseline gap-2">
            <span className="font-display text-xl tracking-tight group-hover:text-navy-vivid transition-colors">
              Dr. Bilad
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-navy-glow transition-colors">
              Build · Serve · Impact
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.slice(1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-muted-foreground hover:text-navy-vivid transition-colors relative group"
                activeProps={{ className: "text-navy-vivid" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-navy-vivid to-navy-glow group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center text-xs tracking-[0.25em] uppercase border border-navy-vivid/60 text-navy-vivid px-4 py-2.5 hover:bg-navy-vivid hover:text-ivory transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,102,255,0.3)]"
          >
            Work with me
          </Link>

          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2 -mr-2 hover:text-navy-vivid transition-colors"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: easing.smooth }}
            >
              <nav className="container-x py-6 flex flex-col gap-4">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="text-lg text-muted-foreground hover:text-navy-vivid transition-colors py-2"
                    onClick={() => setOpen(false)}
                    activeProps={{ className: "text-navy-vivid" }}
                    activeOptions={{ exact: true }}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center justify-center text-xs tracking-[0.25em] uppercase border border-navy-vivid text-navy-vivid px-4 py-3 hover:bg-navy-vivid hover:text-ivory transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Work with me
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}