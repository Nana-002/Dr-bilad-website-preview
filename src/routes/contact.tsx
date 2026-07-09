import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dr. Bilad" },
      {
        name: "description",
        content:
          "Get in touch with Dr. Bilad for speaking engagements, interviews, collaborations, and Bilad Couture consultations.",
      },
      { property: "og:title", content: "Contact — Dr. Bilad" },
      {
        property: "og:description",
        content:
          "For speaking, interviews, collaborations, and Bilad Couture consultations.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's build something <span className="italic text-gold">together.</span></>}
        intro="For speaking engagements, interviews, collaborations, or Bilad Couture consultations — leave a note below."
      />

      <section className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16 pb-24">
        <div className="lg:col-span-5 space-y-10">
          <div>
            <p className="eyebrow">Direct</p>
            <ul className="mt-4 space-y-3 text-base">
              <li>
                <a href="mailto:hello@meetdrbilad.com" className="hover:text-gold">hello@meetdrbilad.com</a>
              </li>
              <li>
                <a href="https://instagram.com/meetdrbilad" className="hover:text-gold">@meetdrbilad</a>
              </li>
              <li>
                <a href="https://instagram.com/biladcouture" className="hover:text-gold">@biladcouture</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Based in</p>
            <p className="mt-4 font-display text-3xl">Lagos, Nigeria</p>
            <p className="mt-2 text-muted-foreground">Available globally — virtual and in-person.</p>
          </div>
          <div className="border-t border-border pt-6">
            <p className="eyebrow">Response time</p>
            <p className="mt-3 text-muted-foreground">Most inquiries are answered within 48 hours.</p>
          </div>
        </div>

        <form
          className="lg:col-span-7 space-y-6 rounded-lg bg-navy/25 border border-navy-soft/40 p-6 sm:p-8 shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Organization" name="org" />
          <div>
            <label className="text-xs tracking-[0.25em] uppercase text-ivory font-medium">Inquiry type</label>
            <select className="mt-2 w-full bg-transparent text-ivory border-b border-ivory/40 py-3 focus:outline-none focus:border-gold">
              {["Speaking", "Interview / Podcast", "Collaboration", "Bilad Couture consultation", "Other"].map((o) => (
                <option key={o} className="bg-ink text-ivory">{o}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs tracking-[0.25em] uppercase text-ivory font-medium">Message</label>
            <textarea
              rows={6}
              required
              className="mt-2 w-full bg-transparent text-ivory placeholder:text-ivory/50 border-b border-ivory/40 py-3 focus:outline-none focus:border-gold resize-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center bg-gold text-ink px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-ivory transition-colors"
          >
            {sent ? "Thank you — I'll be in touch." : "Send message"}
          </button>
        </form>

      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs tracking-[0.25em] uppercase text-ivory font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-transparent text-ivory placeholder:text-ivory/50 border-b border-ivory/40 py-3 focus:outline-none focus:border-gold"
      />

    </div>
  );
}
