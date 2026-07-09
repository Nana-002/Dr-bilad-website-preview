import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import doctorImg from "@/assets/doctor-clinic.jpg";

export const Route = createFileRoute("/doctor")({
  head: () => ({
    meta: [
      { title: "The Doctor — Healthcare & Leadership | Dr. Bilad" },
      {
        name: "description",
        content:
          "Leading the largest operational command in his organization — overseeing healthcare delivery for approximately 20,000 patients in a resource-constrained setting.",
      },
      { property: "og:title", content: "The Doctor — Dr. Bilad" },
      {
        property: "og:description",
        content:
          "Healthcare operations, public health, and systems leadership in a low- and middle-income country setting.",
      },
    ],
  }),
  component: DoctorPage,
});

function DoctorPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="The Doctor"
        title={
          <>
            Improving lives through healthcare, leadership, and{" "}
            <span className="italic text-gold">stronger systems.</span>
          </>
        }
        intro="A physician trained at the College of Medicine, UNILAG — now leading operations that deliver care to thousands every month."
      />

      <section className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 pb-20">
        <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            Growing up between Lagos and a remote childhood community, Dr. Bilad
            saw early what it means when quality care isn't within reach. That
            distance — between people who need help and the systems meant to
            serve them — has shaped every decision since.
          </p>
          <p>
            He chose medicine because problem-solving was in his nature. He
            stayed in healthcare because, beyond the hospital walls, he
            discovered something larger: the system itself can be designed to
            heal at scale.
          </p>
        </div>
        <div className="lg:col-span-5">
          <img
            src={doctorImg}
            alt="Doctor in consultation"
            loading="lazy"
            width={1408}
            height={1008}
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="container-x py-16">
        <p className="eyebrow">The journey</p>
        <h2 className="display-lg mt-4">From bedside to systems.</h2>
        <ol className="mt-12 relative border-l border-border ml-2 space-y-12">
          {[
            ["College of Medicine, UNILAG", "MBBS — trained as a physician in one of West Africa's most respected medical schools."],
            ["Clinical practice", "Years of patient-facing work that built the foundation for everything since."],
            ["NGO & public health", "Moved into the NGO/public-health space to widen the surface area of impact."],
            ["Command Lead, Mushin-Isolo", "Currently leads the largest command in his organization — delivering care for ~20,000 patients."],
            ["Social Secretary, NMA Lagos", "Elected leadership role within the Nigerian Medical Association, Lagos State branch."],
          ].map(([t, d], i) => (
            <li key={t} className="pl-8 relative">
              <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-gold ring-4 ring-background" />
              <p className="text-xs tracking-[0.3em] text-gold uppercase">
                Chapter 0{i + 1}
              </p>
              <p className="font-display text-2xl mt-2">{t}</p>
              <p className="mt-2 text-muted-foreground max-w-2xl">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* What I do */}
      <section className="bg-surface/60 border-y border-border">
        <div className="container-x py-20 grid md:grid-cols-3 gap-px bg-border">
          {[
            ["Healthcare Operations", "Leading services that impact approximately 20,000 patients monthly across one of the largest commands in the organization."],
            ["Public Health", "Expanding affordable healthcare access in underserved Nigerian communities — work tuned for an LMIC reality."],
            ["Systems Strengthening", "Designing and refining structures that make better outcomes repeatable, not accidental."],
          ].map(([t, d]) => (
            <div key={t} className="bg-background p-8">
              <p className="font-display text-xl">{t}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <section className="container-x py-20">
        <p className="eyebrow">Credentials</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["MBBS", "MPH", "Certificate of Ethics", "GMC Licence"].map((c) => (
            <div key={c} className="border border-border p-6">
              <p className="font-display text-2xl text-gold">{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="container-x py-20">
        <blockquote className="font-display text-3xl md:text-5xl leading-[1.15] max-w-4xl">
          “Healthcare should not be a privilege. Every person deserves access to
          quality and affordable care{" "}
          <span className="italic text-gold">regardless of circumstance.</span>”
        </blockquote>
      </section>

      <section className="container-x py-16">
        <div className="hairline mb-10" />
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="display-lg max-w-xl">Invite Dr. Bilad to speak.</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/media-kit" className="bg-gold text-ink px-6 py-3.5 text-xs tracking-[0.25em] uppercase hover:bg-ivory">Media Kit</Link>
            <Link to="/contact" className="border border-border px-6 py-3.5 text-xs tracking-[0.25em] uppercase hover:border-gold hover:text-gold">Get in touch</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
