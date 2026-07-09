import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, HeartPulse, Compass } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import coutureGroom from "@/assets/couture-groom.jpg";
import doctorClinic from "@/assets/doctor-clinic.jpg";
import creatorFitness from "@/assets/creator-fitness.jpg";
import { PageShell } from "@/components/PageShell";
import { NewsletterSignup } from "@/components/NewsletterSignup";


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
      <section className="relative overflow-hidden">
        <div className="container-x pt-12 md:pt-20 pb-20 md:pb-32 grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="eyebrow">Adebisi-Lawal Oladimeji · Lagos, Nigeria</p>
            <h1 className="display-xl mt-8">
              Build.
              <br />
              Serve.
              <br />
              <span className="italic text-gold">Impact.</span>
            </h1>
            <p className="mt-10 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Doctor. Entrepreneur. Leader. A life dedicated to creating value,
              strengthening systems, and helping people become better than they
              were yesterday.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-gold text-ink px-6 py-3.5 text-sm tracking-[0.2em] uppercase hover:bg-ivory transition-colors"
              >
                My Story <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/media-kit"
                className="inline-flex items-center gap-2 border border-navy-soft/60 bg-navy/20 px-6 py-3.5 text-sm tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors"
              >
                Media Kit
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div className="absolute -inset-4 border border-gold/30 translate-x-4 translate-y-4 pointer-events-none" />
            <img
              src={heroPortrait}
              alt="Portrait of Dr. Bilad"
              width={1280}
              height={1600}
              className="relative w-full aspect-[4/5] object-cover grayscale-[15%]"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-[10px] tracking-[0.3em] uppercase text-ivory/90">
              <span>MMXXVI</span>
              <span>Vol. 01</span>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-navy-soft/40 bg-navy/20 overflow-hidden">
          <div className="container-x py-5 flex items-center gap-6 md:justify-between md:gap-8 text-[10px] md:text-[11px] tracking-[0.28em] md:tracking-[0.32em] uppercase text-muted-foreground whitespace-nowrap overflow-x-auto">
            <span>Healthcare Leadership</span>
            <span className="text-gold">·</span>
            <span>Bilad Couture</span>
            <span className="text-gold">·</span>
            <span>NMA Lagos</span>
            <span className="text-gold">·</span>
            <span>Mentorship</span>
            <span className="text-gold">·</span>
            <span>Public Health</span>
          </div>
        </div>
      </section>

      {/* INTRO PARAGRAPH */}
      <section className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-10 border-l-2 border-navy-soft/40 pl-6 md:pl-10">
        <div className="md:col-span-4">
          <p className="eyebrow">A short introduction</p>
        </div>
        <div className="md:col-span-8">
          <p className="font-display text-2xl md:text-4xl leading-[1.2] text-foreground/95">
            Dr. Bilad is a doctor, entrepreneur, and leader with over a decade of
            entrepreneurial experience and a passion for creating meaningful
            impact — from leading healthcare operations serving thousands of
            patients to building <span className="text-gold italic">Bilad Couture</span>{" "}
            into a trusted fashion brand.
          </p>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="container-x py-12 md:py-20">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="eyebrow">Three pillars · one mission</p>
            <h2 className="display-lg mt-4 max-w-2xl">
              One man, three expressions of the same purpose.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-navy-soft/40">
          <PillarCard
            number="01"
            icon={<Sparkles size={18} />}
            label="The CEO"
            title="Building businesses that last."
            text="Founder of Bilad Couture. A decade in business, nearly 2,000 clients, 120+ weddings styled."
            href="/ceo"
            image={coutureGroom}
          />
          <PillarCard
            number="02"
            icon={<HeartPulse size={18} />}
            label="The Doctor"
            title="Serving through healthcare."
            text="Leading the largest operational command in his organization — care for ~20,000 patients."
            href="/doctor"
            image={doctorClinic}
          />
          <PillarCard
            number="03"
            icon={<Compass size={18} />}
            label="The Creator"
            title="Multiplying impact."
            text="Helping people build discipline, purpose, and excellence through content and mentorship."
            href="/creator"
            image={creatorFitness}
          />
        </div>
      </section>

      {/* STATS */}
      <section className="container-x py-24 md:py-32">
        <div className="hairline mb-16" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            ["10+", "Years in business"],
            ["20K", "Patients served"],
            ["2,000", "Couture clients"],
            ["120", "Weddings styled"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-5xl md:text-6xl text-gold">{n}</p>
              <p className="mt-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                {l}
              </p>
            </div>
          ))}
        </div>
        <div className="hairline mt-16" />
      </section>

      {/* QUOTE / CLOSER */}
      <section className="container-x py-24 md:py-32">
        <p className="eyebrow">The mission</p>
        <blockquote className="mt-8 font-display text-3xl md:text-5xl leading-[1.15] max-w-5xl">
          “To be remembered as the man who never left a place without creating a{" "}
          <span className="italic text-gold">palpable positive impact</span> on
          the people and systems around him.”
        </blockquote>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm tracking-[0.25em] uppercase border-b border-gold pb-1 text-gold hover:gap-3 transition-all"
          >
            Read the full story <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
      <NewsletterSignup />
    </PageShell>

  );
}

function PillarCard({
  number,
  icon,
  label,
  title,
  text,
  href,
  image,
}: {
  number: string;
  icon: React.ReactNode;
  label: string;
  title: string;
  text: string;
  href: "/ceo" | "/doctor" | "/creator";
  image: string;
}) {
  return (
    <Link
      to={href}
      className="group relative bg-background p-8 md:p-10 flex flex-col min-h-[520px] hover:bg-navy/25 transition-colors"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs tracking-[0.3em] text-muted-foreground">
          {number}
        </span>
        <span className="text-gold">{icon}</span>
      </div>
      <div className="my-6 aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={label}
          loading="lazy"
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
      </div>
      <p className="eyebrow">{label}</p>
      <h3 className="font-display text-2xl mt-3 leading-tight">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
      <div className="mt-auto pt-6 flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-gold">
        Explore <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </Link>
  );
}
