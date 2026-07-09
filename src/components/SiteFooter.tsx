import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { NewsletterSignup } from "./NewsletterSignup";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t-2 border-navy-soft/50">
      <div className="container-x py-16 grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="eyebrow">The Letter</p>
          <p className="mt-4 font-display text-2xl leading-tight max-w-md">
            Build. Serve. <span className="text-gold italic">Impact.</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            A monthly dispatch on medicine, business, and becoming.
          </p>
          <div className="mt-6 max-w-sm">
            <NewsletterSignup variant="compact" />
          </div>
        </div>


        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/ceo" className="hover:text-gold">The CEO</Link></li>
            <li><Link to="/doctor" className="hover:text-gold">The Doctor</Link></li>
            <li><Link to="/creator" className="hover:text-gold">The Creator</Link></li>
            <li><Link to="/book" className="hover:text-gold">Book a Session</Link></li>
            <li><Link to="/media-kit" className="hover:text-gold">Media Kit</Link></li>
          </ul>
        </div>


        <div>
          <p className="eyebrow">Connect</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="mailto:hello@meetdrbilad.com" className="inline-flex items-center gap-2 hover:text-gold">
                <Mail size={14} /> hello@meetdrbilad.com
              </a>
            </li>
            <li>
              <a href="https://instagram.com/" className="inline-flex items-center gap-2 hover:text-gold">
                <Instagram size={14} /> @meetdrbilad
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/" className="inline-flex items-center gap-2 hover:text-gold">
                <Linkedin size={14} /> Adebisi-Lawal Oladimeji
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Adebisi-Lawal Oladimeji. All rights reserved.</p>
          <p className="tracking-[0.3em] uppercase">Lagos · Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
