import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import portrait from "@/assets/hero-portrait.jpg";
import { Download } from "lucide-react";

export const Route = createFileRoute("/media-kit")({
  head: () => ({
    meta: [
      { title: "Media Kit — Dr. Bilad" },
      {
        name: "description",
        content:
          "Speaker bio, areas of expertise, and press assets for Adebisi-Lawal Oladimeji (Dr. Bilad).",
      },
      { property: "og:title", content: "Media Kit — Dr. Bilad" },
      {
        property: "og:description",
        content: "Speaker bio, areas of expertise, and press assets.",
      },
    ],
  }),
  component: MediaKit,
});

function MediaKit() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Media Kit"
        title={<>For press, podcasts, and stages.</>}
        intro="Everything you need to introduce, feature, or invite Dr. Bilad — in one place."
      />

      <section className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 pb-20">
        <div className="lg:col-span-4">
          <img
            src={portrait}
            alt="Dr. Bilad press portrait"
            loading="lazy"
            width={1280}
            height={1600}
            className="w-full aspect-[4/5] object-cover"
          />
          <a
            href={portrait}
            download
            className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase border border-border px-4 py-3 hover:border-gold hover:text-gold w-full justify-center"
          >
            <Download size={14} /> Download portrait
          </a>
        </div>

        <div className="lg:col-span-8 space-y-12">
          <div>
            <p className="eyebrow">Speaker Bio</p>
            <p className="mt-6 text-lg leading-[1.75] text-foreground/90">
              Adebisi-Lawal Oladimeji, popularly known as <strong>Dr. Bilad</strong>,
              is a medical doctor, entrepreneur, and leader based in Lagos,
              Nigeria. He leads one of the largest operational commands within
              his organization, overseeing healthcare delivery for approximately
              20,000 patients, and is the founder of <em>Bilad Couture</em>, a
              decade-old fashion brand serving nearly 2,000 clients. Through his
              content and mentorship, he shares lessons on discipline,
              entrepreneurship, leadership, and self-development — helping people
              maximise their potential and live more intentional lives.
            </p>
          </div>

          <div>
            <p className="eyebrow">Areas of Expertise</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                "Healthcare Leadership",
                "Entrepreneurship",
                "Fashion Business",
                "Personal Development",
                "Leadership & Community",
                "Public Health in LMICs",
              ].map((s) => (
                <li key={s} className="border border-border px-4 py-3 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Quick facts</p>
            <dl className="mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-5 text-sm">
              {[
                ["Full name", "Adebisi-Lawal Oladimeji"],
                ["Known as", "Dr. Bilad"],
                ["Based in", "Lagos, Nigeria"],
                ["Current role", "Command Lead — Healthcare Operations"],
                ["Years in entrepreneurship", "10"],
                ["Years in leadership", "5"],
                ["Brand", "Bilad Couture (est. 2016)"],
                ["Patients served", "~20,000"],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-border pt-3">
                  <dt className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <p className="eyebrow">Speaking topics</p>
            <ul className="mt-6 space-y-3 text-base">
              {[
                "Building healthcare that works in low- and middle-income countries.",
                "From hobby to house: turning a passion into a decade-old brand.",
                "Leadership as service — lessons from being the youngest in the room.",
                "Kaizen for young men: the compounding life.",
              ].map((t) => (
                <li key={t} className="flex gap-3 border-b border-border pb-3">
                  <span className="text-gold">→</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-border p-6">
            <p className="eyebrow">For inquiries</p>
            <p className="mt-3 text-lg">
              <a href="mailto:hello@meetdrbilad.com" className="text-gold hover:underline">
                hello@meetdrbilad.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
