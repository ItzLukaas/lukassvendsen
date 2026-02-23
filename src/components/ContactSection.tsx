'use client';

import { Mail, Phone, Instagram, MessageCircle } from 'lucide-react';
import { contact } from '@/content/data';

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-28 relative py-20 lg:py-28 overflow-hidden bg-white"
      aria-labelledby="kontakt-heading"
    >
      <div className="absolute inset-0 bg-themeB/[0.04]" aria-hidden />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold tracking-widest text-themeB uppercase">
              Kontakt
            </span>
            <h2
              id="kontakt-heading"
              className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl border-l-4 border-themeB pl-4"
            >
              Lad os skabe noget sammen
            </h2>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed">
              Fortæl mig om dit projekt – så vender jeg tilbage med forslag til næste skridt.
            </p>
            <p className="mt-3 text-sm text-themeB/90 font-medium">
              Jeg glæder mig til at høre fra dig.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-themeB transition-colors"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-themeB/10 text-themeB">
                  <Mail className="h-4 w-4" />
                </span>
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-themeB transition-colors"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-themeB/10 text-themeB">
                  <Phone className="h-4 w-4" />
                </span>
                {contact.phone}
              </a>
              {contact.instagram && (
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-themeB transition-colors"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-themeB/10 text-themeB">
                    <Instagram className="h-4 w-4" />
                  </span>
                  Instagram
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-themeB/10 text-themeB">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">Skriv en besked</p>
                  <p className="text-xs text-muted-foreground">Jeg svarer typisk inden for 1–2 dage</p>
                </div>
              </div>
              <form
                className="space-y-5"
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Navn
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Dit navn"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-sm text-foreground placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-themeB/20 focus:border-themeB focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="din@email.dk"
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-sm text-foreground placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-themeB/20 focus:border-themeB focus:bg-white transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Besked
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Fortæl kort om dit projekt eller spørgsmål..."
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-sm text-foreground placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-themeB/20 focus:border-themeB focus:bg-white resize-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-themeB py-4 text-sm font-semibold text-white hover:bg-themeB/90 shadow-lg shadow-themeB/25 hover:shadow-themeB/30 active:scale-[0.99] transition-all duration-200"
                >
                  Send besked
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
