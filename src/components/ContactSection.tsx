'use client';

import { Mail, Phone, Instagram } from 'lucide-react';
import { contact } from '@/content/data';

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 border-t border-border"
      aria-labelledby="kontakt-heading"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <h2
          id="kontakt-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Kontakt
        </h2>
        <p className="mt-2 text-muted-foreground text-sm sm:text-base">
          Skriv eller ring – jeg vender tilbage hurtigst muligt.
        </p>

        <form
          className="mt-10 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const fd = new FormData(form);
            const body = encodeURIComponent(
              `Navn: ${fd.get('name')}\nE-mail: ${fd.get('email')}\n\nBesked:\n${fd.get('message')}`
            );
            window.location.href = `mailto:${contact.email}?subject=Henvendelse&body=${body}`;
          }}
        >
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-1">
              Navn
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-1">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-1">
              Besked
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-ring resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-foreground py-2.5 text-sm font-medium text-background hover:opacity-90 transition-opacity"
          >
            Send besked
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-border space-y-3">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="h-4 w-4" />
            {contact.phone}
          </a>
          {contact.instagram && (
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
