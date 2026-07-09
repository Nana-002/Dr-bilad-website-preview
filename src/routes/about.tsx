import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import heroPortrait from "@/assets/hero-portrait.jpg";
import lagos from "@/assets/lagos.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dr. Bilad" },
      {
        name: "description",
        content:
          "The story of Adebisi-Lawal Oladimeji — from a remote childhood in Lagos to building Bilad Couture and leading healthcare operations for 20,000 patients.",
      },
      { property: "og:title", content: "About — Dr. Bilad" },
      {
        property: "og:description",
        content:
          "From a remote childhood in Lagos to building Bilad Couture and leading healthcare operations for 20,000 patients.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="My Story"
        title={
          <>
            Every place you enter should be{" "}
            <span className="italic text-gold">better</span> because you were
            there.
          </>
        }
        intro="Dr. Bilad is a doctor, entrepreneur, leader, and creator driven by a simple philosophy. This is the story of how the three identities — physician, founder, and mentor — came to exist under one mission."
      />

      <section className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 pb-16">
        <div className="lg:col-span-5">
          <img
            src={heroPortrait}
            alt="Dr. Bilad portrait"
            loading="lazy"
            width={1280}
            height={1600}
            className="w-full aspect-[4/5] object-cover grayscale-[15%]"
          />
          <div className="mt-6 border-t border-border pt-6 grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="eyebrow">Born</p>
              <p className="mt-2">Lagos, Nigeria</p>
            </div>
            <div>
              <p className="eyebrow">Based</p>
              <p className="mt-2">Lagos, Nigeria</p>
            </div>
            <div>
              <p className="eyebrow">Trained</p>
              <p className="mt-2">College of Medicine, UNILAG</p>
            </div>
            <div>
              <p className="eyebrow">Founded</p>
              <p className="mt-2">Bilad Couture · 2016</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8 text-lg leading-[1.75] text-foreground/85">
          <Chapter number="I" title="A remote beginning">
            <p>
              Born and raised in Lagos, Nigeria, he spent much of his childhood
              in a remote area where he learned the values of resilience,
              resourcefulness, and self-belief. From an early age, medicine was
              the obvious path. Known for being a bright and ambitious child, he
              was drawn to the profession by a desire to solve problems and
              improve lives.
            </p>
            <p>
              While he looked up to his father as a role model, he developed an
              early habit of setting personal standards — and challenging himself
              to become better every single day.
            </p>
          </Chapter>

          <Chapter number="II" title="Medicine, and a wider calling">
            <p>
              His medical journey took him to the College of Medicine, University
              of Lagos. While caring for individual patients was fulfilling, he
              became increasingly interested in the systems that determine
              whether healthcare reaches the people who need it most.
            </p>
            <p>
              Today, he serves in a leadership role within one of the largest
              healthcare operations in his organization, overseeing services that
              impact approximately 20,000 patients. His work sits at the
              intersection of healthcare delivery, leadership, and operational
              excellence.
            </p>
          </Chapter>

          <figure className="my-12">
            <img
              src={lagos}
              alt="Lagos at golden hour"
              loading="lazy"
              width={1600}
              height={900}
              className="w-full aspect-[16/9] object-cover grayscale-[10%]"
            />
            <figcaption className="mt-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">
              Lagos — the city that shaped the mission.
            </figcaption>
          </figure>

          <Chapter number="III" title="Bilad Couture — a hobby becomes a house">
            <p>
              In 2016, what began as a creative hobby evolved into Bilad
              Couture — a brand founded on the belief that people deserve to look
              their best without sacrificing quality or affordability. Named from
              a combination of his younger sister's name, <em>Bilkis</em>, and
              his family name, <em>Adebisi</em>, the brand became an outlet for
              his appreciation of colour, patterns, and craftsmanship.
            </p>
            <p>
              Over the years, Bilad Couture has served nearly 2,000 clients,
              styled more than 120 weddings, launched 10 collections, and
              maintained a customer satisfaction rate exceeding 95%.
            </p>
          </Chapter>

          <Chapter number="IV" title="Leadership as service">
            <p>
              Whether leading teams in the workplace, serving as the youngest
              leader within his operational environment, or being elected Social
              Secretary of the Nigerian Medical Association, Lagos State branch,
              he has come to believe that leadership is not about authority but
              responsibility — and that the best leaders remain humble enough to
              be excellent followers.
            </p>
          </Chapter>

          <Chapter number="V" title="Fitness, faith and Kaizen">
            <p>
              A lifelong student of growth, Dr. Bilad has trained for over a
              decade. Fitness reinforced a belief that continues to guide his
              decisions today: many of our perceived limitations exist only in
              the mind. Influenced by Kaizen — the philosophy of continuous
              improvement — he believes small, consistent actions compound into
              extraordinary results.
            </p>
          </Chapter>

          <Chapter number="VI" title="The mission">
            <p className="font-display text-2xl md:text-3xl leading-snug text-foreground">
              To build. To serve. To create impact. To leave every person, every
              team, every organization, and every community{" "}
              <span className="text-gold italic">better than he found it.</span>
            </p>
          </Chapter>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="hairline mb-12" />
        <div className="grid md:grid-cols-2 gap-8 items-end">
          <h2 className="display-lg max-w-md">
            Explore the three pillars.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/ceo" className="border border-border px-5 py-3 text-xs tracking-[0.25em] uppercase hover:border-gold hover:text-gold">The CEO →</Link>
            <Link to="/doctor" className="border border-border px-5 py-3 text-xs tracking-[0.25em] uppercase hover:border-gold hover:text-gold">The Doctor →</Link>
            <Link to="/creator" className="border border-border px-5 py-3 text-xs tracking-[0.25em] uppercase hover:border-gold hover:text-gold">The Creator →</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Chapter({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-border pt-8 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-display text-gold text-xl">{number}.</span>
        <h2 className="font-display text-2xl md:text-3xl text-foreground">
          {title}
        </h2>
      </div>
      <div className="space-y-5">{children}</div>
    </div>
  );
}
