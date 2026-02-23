'use client';

import { Mail, Phone, Instagram } from 'lucide-react';
import { contact } from '@/content/data';

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-20 relative py-20 lg:py-28 overflow-hidden bg-white"
      aria-labelledby="kontakt-heading"
    >
      <div className="absolute inset-0 bg-zinc-50/30" aria-hidden />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold tracking-widest text-[hsl(var(--accent))] uppercase">
              Kontakt
            </span>
            <h2
              id="kontakt-heading"
              className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Lad os skabe noget sammen
            </h2>
            <p className="mt-4 text-muted-foreground text-base">
              Fortæl mig om dit projekt – så vender jeg tilbage med forslag til næste skridt.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
                {contact.phone}
              </a>
              {contact.instagram && (
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
                  Instagram
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg border border-zinc-200/80"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-foreground mb-1.5">
                    Navn
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-foreground placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]/20 focus:border-[hsl(var(--accent))]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1.5">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-foreground placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]/20 focus:border-[hsl(var(--accent))]"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1.5">
                  Besked
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-foreground placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]/20 focus:border-[hsl(var(--accent))] resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-[hsl(var(--accent))] py-3.5 text-sm font-semibold text-white hover:opacity-95 transition-opacity"
              >
                Send besked
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
