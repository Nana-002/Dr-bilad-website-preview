import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import couture from "@/assets/bilad.jpg";
import craft from "@/assets/couture-craft.jpg";
import { ArrowUpRight } from "lucide-react";
import yorubaGroom from "@/assets/couture-style.jpeg";
import igboGroom from "@/assets/sitting-down.jpg";
import hausaGroom from "@/assets/couture-groom.jpg";
import contemporaryGroom from "@/assets/social_style.jpg";

export const Route = createFileRoute("/ceo")({
  head: () => ({
    meta: [
      { title: "The CEO — Bilad Couture | Dr. Bilad" },
      {
        name: "description",
        content:
          "Founder of Bilad Couture. A decade in business, nearly 2,000 clients, 120+ weddings styled — building a fashion house that helps people look their best without breaking the bank.",
      },
      { property: "og:title", content: "The CEO — Bilad Couture" },
      {
        property: "og:description",
        content:
          "A decade in business, nearly 2,000 clients, 120+ weddings styled.",
      },
      { property: "og:image", content: "/og-ceo.jpg" },
    ],
  }),
  component: CeoPage,
});

function CeoPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="The CEO · Bilad Couture"
        title={
          <>
            Building businesses that create value and{" "}
            <span className="italic text-gold">stand the test of time.</span>
          </>
        }
        intro="What began as a hobby in 2016 became a fashion house known for craftsmanship, colour, and clients who keep returning."
      />

      <section className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 pb-20 items-center">
        <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85">
          <p className="eyebrow">The origin</p>
          <h2 className="display-lg">A name made of family.</h2>
          <p>
            <strong className="text-gold">BIL-AD</strong> is drawn from{" "}
            <em>Bilkis</em>, his younger sister's name, and <em>Adebisi</em>, the
            family name. It was never meant to be a company. It started as a
            hobby — a way to help people look their best in the outfits they
            put on without breaking the bank.
          </p>
          <p>
            Fashion gave Dr. Bilad an avenue to explore his love for colour,
            pattern and composition, while still keeping a smile on people's
            faces. The hard part wasn't taste. It was structure — turning a
            passion project into a company that could outlive a busy founder's
            calendar.
          </p>
        </div>
        <div className="lg:col-span-5">
          <img
            src={couture}
            alt="Nigerian groom styled by Bilad Couture"
            loading="lazy"
            width={1200}
            height={1504}
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-surface/60 border-y border-border">
        <div className="container-x py-20">
          <p className="eyebrow">Milestones</p>
          <h2 className="display-lg mt-4 max-w-2xl">A decade of receipts.</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              ["10+", "Years in business"],
              ["2,000", "Clients served"],
              ["120", "Weddings styled"],
              ["10", "Collections launched"],
              ["95%", "Customer satisfaction"],
            ].map(([n, l]) => (
              <div key={l} className="border-l border-gold/40 pl-4 py-2">
                <p className="font-display text-4xl md:text-5xl">{n}</p>
                <p className="mt-2 text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container-x py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="eyebrow">Featured Projects</p>
            <h2 className="display-lg mt-4">The Nigerian Groom.</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            A signature series styling grooms across Nigeria's most storied
            traditions — and the modern man who blurs them.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
  {[
    { t: "Yoruba Groom", n: "01", img: yorubaGroom },
    { t: "Igbo Groom", n: "02", img: igboGroom },
    { t: "Hausa Groom", n: "03", img: hausaGroom },
    { t: "Contemporary", n: "04", img: contemporaryGroom },
  ].map((g) => (
    <div
      key={g.t}
      className="bg-background aspect-[3/4] relative overflow-hidden group"
    >
      <img
        src={g.img}   // ← Now each one uses its own image!
        alt={g.t}
        loading="lazy"
        className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
      <div className="absolute inset-0 p-5 flex flex-col justify-between">
        <span className="text-[10px] tracking-[0.3em] text-gold">
          {g.n}
        </span>
        <p className="font-display text-xl">{g.t}</p>
      </div>
    </div>
  ))}
</div>
      </section>

      {/* Lessons */}
      <section className="container-x py-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <img
            src={craft}
            alt="Craftsmanship at Bilad Couture"
            loading="lazy"
            width={1400}
            height={900}
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
        <div className="lg:col-span-7 space-y-8">
          <p className="eyebrow">Lessons from building a brand</p>
          <h2 className="display-lg">What a decade taught me.</h2>
          <ul className="space-y-6">
            {[
              [
                "Structure beats talent.",
                "Hobbies stay hobbies until you build the systems — receipts, fittings, fabrics, follow-ups — that make excellence repeatable.",
              ],
              [
                "Clients buy trust, not clothes.",
                "Sustaining a brand for a decade comes down to delivering what you promised, on the date you promised it.",
              ],
              [
                "Affordability is not the enemy of quality.",
                "Looking your best should never require breaking the bank. That belief is the brand.",
              ],
            ].map(([t, d]) => (
              <li key={t} className="border-t border-border pt-5">
                <p className="font-display text-2xl">{t}</p>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24">
        <div className="hairline mb-12" />
        <div className="flex flex-wrap items-end justify-between gap-8">
          <h2 className="display-lg max-w-xl">
            Ready to be styled by Bilad?
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://instagram.com/biladcouture"
              className="inline-flex items-center gap-2 bg-gold text-ink px-6 py-3.5 text-xs tracking-[0.25em] uppercase hover:bg-ivory"
            >
              Visit Bilad Couture <ArrowUpRight size={14} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-xs tracking-[0.25em] uppercase hover:border-gold hover:text-gold"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
