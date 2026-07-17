import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Reveal, Stagger, StaggerItem, GlowOnHover } from "@/components/Motion";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Check, Clock, Video, MapPin, Sparkles, HeartPulse, Compass } from "lucide-react";


export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Dr. Bilad" },
      {
        name: "description",
        content:
          "Book a private consultation with Dr. Bilad — for Bilad Couture bespoke fittings, healthcare leadership advisory, or personal mentorship.",
      },
      { property: "og:title", content: "Book a Consultation — Dr. Bilad" },
      {
        property: "og:description",
        content:
          "Private consultations for bespoke tailoring, healthcare advisory, and personal mentorship.",
      },
    ],
  }),
  component: BookPage,
});

const services = [
  {
    id: "couture",
    icon: Sparkles,
    name: "Bilad Couture Consultation",
    duration: "60 min",
    format: "In-person · Lagos atelier",
    price: "By invitation",
    blurb:
      "A private fitting and design session for bespoke agbada, suiting, and occasion wear.",
  },
  {
    id: "advisory",
    icon: HeartPulse,
    name: "Healthcare Advisory",
    duration: "45 min",
    format: "Virtual · Zoom",
    price: "On request",
    blurb:
      "Strategic advisory for clinics, hospital groups, and healthtech founders navigating operations and growth.",
  },
  {
    id: "mentorship",
    icon: Compass,
    name: "1:1 Mentorship Session",
    duration: "45 min",
    format: "Virtual · Zoom",
    price: "Limited availability",
    blurb:
      "For young men building a life of discipline, purpose, and impact. Structured, direct, private.",
  },
] as const;

const times = ["09:00", "11:00", "14:00", "16:00", "18:00"];

function nextDates(count = 8) {
  const arr: Date[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (arr.length < count) {
    if (d.getDay() !== 0) arr.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return arr;
}

function BookPage() {
  const [service, setService] = useState<string>(services[0].id);
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [confirmed, setConfirmed] = useState(false);
  const dates = nextDates();

  const selected = services.find((s) => s.id === service)!;

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!date || !time) return;
    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <PageShell>
        <section className="container-x py-32 md:py-40 max-w-2xl">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex items-center gap-3 text-navy-vivid"
          >
            <Check size={20} />
            <p className="eyebrow">Request received</p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="display-lg mt-8"
          >
            Thank you. Your request is <span className="italic text-navy-vivid">in review.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-muted-foreground text-lg leading-relaxed"
          >
            You've requested a <strong className="text-foreground">{selected.name}</strong> on{" "}
            <strong className="text-foreground">
              {new Date(date).toLocaleDateString(undefined, {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </strong>{" "}
            at <strong className="text-foreground">{time}</strong>. My team will confirm your slot
            within 24 hours via email.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              setConfirmed(false);
              setDate("");
              setTime("");
            }}
            className="mt-10 text-xs tracking-[0.3em] uppercase border border-navy-vivid/60 text-navy-vivid px-6 py-3 hover:bg-navy-vivid hover:text-ivory transition-colors"
          >
            Book another
          </motion.button>
        </section>
      </PageShell>
    );
  }


  return (
    <PageShell>
      <PageHeader
        eyebrow="Consultations"
        title={
          <>
            Book a <span className="italic text-navy-vivid">private session.</span>
          </>
        }
        intro="Three ways to work with me directly. Choose the format that fits, propose a time, and my team will confirm within 24 hours."
      />

      <section className="container-x pb-24 space-y-12">
        {/* Service selector */}
        <Reveal>
          <p className="eyebrow mb-6">01 · Choose a service</p>
          <Stagger className="grid md:grid-cols-3 gap-4" stagger={0.1}>
            {services.map((s) => {
              const Icon = s.icon;
              const active = service === s.id;
              return (
                <StaggerItem key={s.id}>
                  <motion.button
                    type="button"
                    onClick={() => setService(s.id)}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-full h-full text-left border p-6 transition-all duration-500 ${
                      active
                        ? "border-navy-vivid bg-navy-vivid/10 shadow-[0_0_20px_rgba(0,102,255,0.15)]"
                        : "border-border hover:border-navy-vivid/40"
                    }`}
                  >
                    <Icon size={20} className={active ? "text-navy-vivid" : "text-muted-foreground"} />
                    <p className="font-display text-xl mt-4">{s.name}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.blurb}</p>
                    <dl className="mt-5 space-y-1.5 text-xs">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock size={12} /> {s.duration}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        {s.format.startsWith("Virtual") ? <Video size={12} /> : <MapPin size={12} />}
                        {s.format}
                      </div>
                      <div className="text-navy-glow pt-1">{s.price}</div>
                    </dl>
                  </motion.button>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Reveal>


        <form onSubmit={onSubmit} className="space-y-12">
          {/* Date & Time */}
          <div>
            <p className="eyebrow mb-6">02 · Propose a date & time</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  Preferred date
                </label>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {dates.map((d) => {
                    const iso = d.toISOString().slice(0, 10);
                    const active = date === iso;
                    return (
                      <button
                        key={iso}
                        type="button"
                        onClick={() => setDate(iso)}
                        className={`p-3 text-center border transition-colors ${
                          active
                            ? "border-navy-vivid bg-navy-vivid/10 text-navy-vivid"
                            : "border-border hover:border-navy-vivid/40"
                        }`}
                      >
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          {d.toLocaleDateString(undefined, { weekday: "short" })}
                        </p>
                        <p className="font-display text-lg mt-1">{d.getDate()}</p>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          {d.toLocaleDateString(undefined, { month: "short" })}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  Preferred time (WAT)
                </label>
                <div className="mt-3 grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {times.map((t) => {
                    const active = time === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTime(t)}
                        className={`py-3 text-sm border transition-colors ${
                          active
                            ? "border-navy-vivid bg-navy-vivid/10 text-navy-vivid"
                            : "border-border hover:border-navy-vivid/40"
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div>
            <p className="eyebrow mb-6">03 · Your details</p>
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone / WhatsApp" name="phone" />
              <Field label="Company or role (optional)" name="org" />
            </div>
            <div className="mt-6">
              <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                What would you like to discuss?
              </label>
              <textarea
                rows={5}
                required
                className="mt-2 w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-navy-vivid resize-none"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-border pt-8">
            <p className="text-sm text-muted-foreground max-w-md">
              Submitting a request does not confirm your booking. My team reviews every inquiry
              and responds within 24 hours.
            </p>
            <button
              type="submit"
              disabled={!date || !time}
              className="inline-flex items-center bg-navy-vivid text-ivory px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-navy-glow transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,102,255,0.4)] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Request booking
            </button>
          </div>
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
      <label htmlFor={name} className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-navy-vivid"
      />
    </div>
  );
}