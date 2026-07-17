import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, HeartPulse, Compass, ChevronDown } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import coutureGroom from "@/assets/couture-groom.jpg";
import doctorClinic from "@/assets/doctor-clinic.jpg";
import creatorFitness from "@/assets/creator-fitness.jpg";
import { PageShell } from "@/components/PageShell";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Reveal, Stagger, StaggerItem, Parallax, TextScramble, GlowOnHover } from "@/components/Motion";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Bilad — Build. Serve. Impact." },
      {
        name: "description",
        content:
          "Doctor. Entrepreneur. Leader. A decade of building businesses, strengthening healthcare systems, and helping people become better.",
      },
      { property: "og:title", content: "Dr. Bilad — Build. Serve. Impact." },
      {
        property: "og:description",
        content:
          "Doctor. Entrepreneur. Leader. A decade of building businesses, strengthening healthcare systems, and helping people become better.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy-vivid/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-glow/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container-x pt-12 md:pt-20 pb-20 md:pb-32 grid lg:grid-cols-12 gap-10 lg:gap-16 items-end relative">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              <p className="eyebrow flex items-center gap-2">
                <span className="w-2 h-2 bg-navy-vivid rounded-full animate-pulse" />
                Adebisi-Lawal Oladimeji · Lagos, Nigeria
              </p>
            </Reveal>
            
            <Reveal delay={0.2} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}>
              <h1 className="display-xl mt-8">
                Build.
                <br />
                Serve.
                <br />
                <span className="italic text-navy-vivid text-glow">Impact.</span>
              </h1>
            </Reveal>
            
            <Reveal delay={0.4}>
              <p className="mt-10 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
                Doctor. Entrepreneur. Leader. A life dedicated to creating value,
                strengthening systems, and helping people become better than they
                were yesterday.
              </p>
            </Reveal>
            
            <Reveal delay={0.5}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-navy-vivid text-ivory px-6 py-3.5 text-sm tracking-[0.2em] uppercase hover:bg-navy-glow transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,102,255,0.4)]"
                >
                  My Story <ArrowUpRight size={16} />
                </Link>
                <Link
                  to="/media-kit"
                  className="inline-flex items-center gap-2 border border-navy-vivid/40 bg-navy-vivid/10 px-6 py-3.5 text-sm tracking-[0.2em] uppercase hover:border-navy-vivid hover:text-navy-vivid transition-all duration-300"
                >
                  Media Kit
                </Link>
              </div>
            </Reveal>
          </div>

          <Parallax strength={0.3} className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="absolute -inset-4 border border-navy-vivid/30 translate-x-4 translate-y-4 pointer-events-none" />
            <div className="absolute -inset-4 border border-gold/20 -translate-x-2 -translate-y-2 pointer-events-none" />
            <img
              src={heroPortrait}
              alt="Dr. Bilad portrait"
              className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              loading="eager"
            />
          </Parallax>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} className="text-navy-vivid" />
        </motion.div>
      </section>

      {/* PATHS */}
      <section className="container-x py-20 md:py-32">
        <Stagger className="grid gap-8 md:grid-cols-3">
          <StaggerItem>
            <GlowOnHover>
              <Link
                to="/ceo"
                className="group block border border-border p-8 md:p-10 hover:border-navy-vivid/50 transition-all duration-500 bg-surface/50"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-navy-vivid">01</span>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground group-hover:text-navy-vivid group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <h3 className="font-display text-2xl md:text-3xl mt-6 group-hover:text-navy-vivid transition-colors">
                  The CEO
                </h3>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  Founder of Bilad Couture. Building a menswear brand that
                  represents confidence, discipline, and craftsmanship.
                </p>
              </Link>
            </GlowOnHover>
          </StaggerItem>

          <StaggerItem>
            <GlowOnHover>
              <Link
                to="/doctor"
                className="group block border border-border p-8 md:p-10 hover:border-navy-vivid/50 transition-all duration-500 bg-surface/50"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-navy-vivid">02</span>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground group-hover:text-navy-vivid group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <h3 className="font-display text-2xl md:text-3xl mt-6 group-hover:text-navy-vivid transition-colors">
                  The Doctor
                </h3>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  Medical professional committed to strengthening healthcare
                  systems and serving communities with excellence.
                </p>
              </Link>
            </GlowOnHover>
          </StaggerItem>

          <StaggerItem>
            <GlowOnHover>
              <Link
                to="/creator"
                className="group block border border-border p-8 md:p-10 hover:border-navy-vivid/50 transition-all duration-500 bg-surface/50"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-navy-vivid">03</span>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground group-hover:text-navy-vivid group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <h3 className="font-display text-2xl md:text-3xl mt-6 group-hover:text-navy-vivid transition-colors">
                  The Creator
                </h3>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  Sharing insights on health, business, and personal growth.
                  Helping people build better versions of themselves.
                </p>
              </Link>
            </GlowOnHover>
          </StaggerItem>
        </Stagger>
      </section>

      {/* QUOTE */}
      <section className="container-x py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <Sparkles size={32} className="mx-auto text-navy-vivid mb-8" />
          </Reveal>
          <Reveal delay={0.2}>
            <blockquote className="font-display text-2xl md:text-4xl leading-snug">
              "The goal is not to be perfect. The goal is to be{" "}
              <span className="italic text-navy-vivid">better</span> than you were
              yesterday — in your craft, your character, and your contribution."
            </blockquote>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-8 text-muted-foreground text-sm tracking-widest uppercase">
              — Dr. Bilad
            </p>
          </Reveal>
        </div>
      </section>

      {/* PREVIEW GRID */}
      <section className="container-x py-20 md:py-32">
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <StaggerItem className="md:col-span-2 lg:col-span-2">
            <Parallax strength={0.2}>
              <Link to="/ceo" className="group block relative overflow-hidden">
                <img
                  src={coutureGroom}
                  alt="Bilad Couture"
                  className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-10">
                  <p className="eyebrow text-navy-glow">Bilad Couture</p>
                  <h3 className="font-display text-2xl md:text-3xl mt-2 text-ivory">
                    Tailored for the modern gentleman
                  </h3>
                </div>
              </Link>
            </Parallax>
          </StaggerItem>

          <StaggerItem>
            <Parallax strength={0.3}>
              <Link to="/doctor" className="group block relative overflow-hidden">
                <img
                  src={doctorClinic}
                  alt="Medical practice"
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <p className="eyebrow text-navy-glow">Healthcare</p>
                  <h3 className="font-display text-xl md:text-2xl mt-2 text-ivory">
                    Serving with excellence
                  </h3>
                </div>
              </Link>
            </Parallax>
          </StaggerItem>

          <StaggerItem>
            <Parallax strength={0.3}>
              <Link to="/creator" className="group block relative overflow-hidden">
                <img
                  src={creatorFitness}
                  alt="Creator content"
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <p className="eyebrow text-navy-glow">Content</p>
                  <h3 className="font-display text-xl md:text-2xl mt-2 text-ivory">
                    Building in public
                  </h3>
                </div>
              </Link>
            </Parallax>
          </StaggerItem>

          <StaggerItem className="md:col-span-2 lg:col-span-2">
            <Link
              to="/about"
              className="group flex items-center justify-between border border-border p-8 md:p-10 hover:border-navy-vivid/50 transition-all duration-500 bg-surface/50"
            >
              <div>
                <p className="eyebrow text-navy-vivid">The Story</p>
                <h3 className="font-display text-2xl md:text-3xl mt-2 group-hover:text-navy-vivid transition-colors">
                  From Lagos to the world
                </h3>
              </div>
              <ArrowUpRight
                size={28}
                className="text-muted-foreground group-hover:text-navy-vivid group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              />
            </Link>
          </StaggerItem>
        </Stagger>
      </section>

      {/* NEWSLETTER */}
      <section className="container-x py-20 md:py-32">
        <Reveal>
          <div className="border border-navy-vivid/20 bg-navy-vivid/5 p-8 md:p-12 text-center">
            <HeartPulse size={32} className="mx-auto text-navy-vivid mb-6" />
            <h2 className="font-display text-2xl md:text-3xl">
              Join the journey
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto">
              Weekly insights on health, business, and becoming better. No noise.
              Just value.
            </p>
            <div className="mt-8 max-w-md mx-auto">
              <NewsletterSignup variant="compact" />
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}