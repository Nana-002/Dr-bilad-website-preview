import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import fitness from "@/assets/social.jpg";
import { Dumbbell, Briefcase, Stethoscope, Brain } from "lucide-react";

export const Route = createFileRoute("/creator")({
  head: () => ({
    meta: [
      { title: "The Creator — Discipline, Purpose, Excellence | Dr. Bilad" },
      {
        name: "description",
        content:
          "Helping people build discipline, purpose, and excellence through content focused on fitness, entrepreneurship, leadership, and personal development.",
      },
      { property: "og:title", content: "The Creator — Dr. Bilad" },
      {
        property: "og:description",
        content:
          "Helping people build discipline, purpose, and excellence — one Kaizen step at a time.",
      },
    ],
  }),
  component: CreatorPage,
});

function CreatorPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="The Creator"
        title={
          <>
            Helping people build discipline, purpose, and{" "}
            <span className="italic text-gold">excellence.</span>
          </>
        }
        intro="Lessons from a decade of training, a decade of building, and a lifetime of refusing to settle — distilled into content for those who want to become better."
      />

      <section className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 items-center pb-20">
        <div className="lg:col-span-5">
          <img
            src={fitness}
            alt="The creator — fitness journey"
            loading="lazy"
            width={1200}
            height={1504}
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
        <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85">
          <p className="eyebrow">Why I create</p>
          <h2 className="display-lg">
            Limitations are <span className="italic text-gold">of the mind.</span>
          </h2>
          <p>
            Fitness taught me that I'm stronger than I imagine. Entrepreneurship
            taught me that systems beat motivation. Leadership taught me that
            humility is the price of trust.
          </p>
          <p>
            Too many young people spend their best years on frivolities and wake
            up one morning to realise time has gone — I include myself in that
            cohort. The work now is to invest in yourself, get better every day,
            and trust that <em>ikigai</em> will find you on the way.
          </p>
        </div>
      </section>

      {/* What I believe */}
      <section className="bg-surface/60 border-y border-border">
        <div className="container-x py-20">
          <p className="eyebrow">What I believe</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              ["Build", "Build yourself before you build anything else."],
              ["Serve", "Success means little if it doesn't improve the lives of others."],
              ["Impact", "Leave people and places better than you met them."],
            ].map(([t, d]) => (
              <div key={t} className="border border-border p-8">
                <p className="font-display text-5xl text-gold">{t}.</p>
                <p className="mt-6 text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="container-x py-20">
        <p className="eyebrow">Content pillars</p>
        <h2 className="display-lg mt-4">Four streams. One mission.</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {[
            { icon: <Dumbbell size={18} />, t: "Fitness", d: "Training, recovery, and the consistency that turns a body into evidence." },
            { icon: <Briefcase size={18} />, t: "Entrepreneurship", d: "Lessons from a decade of building Bilad Couture from hobby to house." },
            { icon: <Stethoscope size={18} />, t: "Career & Medicine", d: "Life as a doctor, the NGO world, and the long road of professional growth." },
            { icon: <Brain size={18} />, t: "Personal Development", d: "Discipline, Kaizen, purpose, and the systems that compound into a life." },
          ].map((p) => (
            <div key={p.t} className="bg-background p-8">
              <span className="text-gold">{p.icon}</span>
              <p className="mt-4 font-display text-2xl">{p.t}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured content placeholders */}
      <section className="container-x py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="eyebrow">Featured content</p>
            <h2 className="display-lg mt-4">Recent reflections.</h2>
          </div>
          <a href="https://instagram.com/meetdrbilad" className="text-xs tracking-[0.25em] uppercase border-b border-gold pb-1 text-gold">
            Follow on Instagram →
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ["On Kaizen", "Why one percent a day beats a hundred percent on Monday."],
            ["The young man's trap", "What I wish I understood at 22 about time, money, and identity."],
            ["Founders & physicians", "The unexpected overlap between building a clinic and building a brand."],
            ["Discipline > motivation", "How to design a life that doesn't depend on how you feel today."],
            ["Style as self-respect", "What ten years in fashion taught me about how men should dress."],
            ["Leading the youngest", "Lessons from being the youngest in the room — and the one in charge."],
          ].map(([t, d]) => (
            <article key={t} className="border border-border p-6 hover:border-gold transition-colors">
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Essay</p>
              <p className="mt-3 font-display text-xl leading-snug">{t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Mission close */}
      <section className="container-x py-20">
        <div className="hairline mb-10" />
        <p className="eyebrow">The mission</p>
        <blockquote className="mt-6 font-display text-3xl md:text-5xl leading-[1.15] max-w-4xl">
          “I want every person who encounters my content to leave{" "}
          <span className="italic text-gold">better</span> than they met me.”
        </blockquote>
        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center bg-gold text-ink px-6 py-3.5 text-xs tracking-[0.25em] uppercase hover:bg-ivory"
          >
            Work with me
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
