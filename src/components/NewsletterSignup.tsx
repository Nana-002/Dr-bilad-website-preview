import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Motion";


export function NewsletterSignup({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!ok) {
      setStatus("error");
      return;
    }
    setStatus("sent");
    setEmail("");
  }

  if (variant === "compact") {
    return (
      <form onSubmit={onSubmit} className="w-full">
        <div className="flex items-center border-b border-border focus-within:border-gold">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="your@email.com"
            className="flex-1 bg-transparent py-3 text-sm focus:outline-none placeholder:text-muted-foreground/70"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="p-2 text-gold hover:text-ivory transition-colors"
          >
            {status === "sent" ? <Check size={16} /> : <ArrowRight size={16} />}
          </button>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          {status === "sent"
            ? "You're in. Watch your inbox."
            : status === "error"
              ? "Please enter a valid email."
              : "Monthly letter. No spam. Unsubscribe anytime."}
        </p>
      </form>
    );
  }

  return (
    <section className="container-x py-24 md:py-32">
      <Reveal className="border border-border/70 bg-card/40 backdrop-blur px-8 md:px-16 py-16 md:py-20 grid lg:grid-cols-12 gap-10 items-center">

        <div className="lg:col-span-6">
          <p className="eyebrow">The Letter</p>
          <h2 className="display-lg mt-6">
            Notes on building, serving,
            <br />
            <span className="italic text-gold">and impact.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            One monthly dispatch. Lessons from the operating table, the atelier,
            and the arena of self-mastery — sent straight to your inbox.
          </p>
        </div>
        <form onSubmit={onSubmit} className="lg:col-span-6 space-y-4">
          <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Email address
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              placeholder="you@domain.com"
              className="flex-1 bg-transparent border-b border-border py-3 focus:outline-none focus:border-gold"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-ivory transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                {status === "sent" ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="inline-flex items-center gap-2"
                  >
                    <Check size={14} /> Subscribed
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="inline-flex items-center gap-2"
                  >
                    Subscribe <ArrowRight size={14} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

          </div>
          <p className="text-xs text-muted-foreground">
            {status === "error"
              ? "Please enter a valid email."
              : "By subscribing, you agree to receive occasional emails from Dr. Bilad."}
          </p>
        </form>
      </Reveal>
    </section>

  );
}
