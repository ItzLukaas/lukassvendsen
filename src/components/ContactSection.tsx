'use client';

import { Mail, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contact } from '@/content/data';

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-24 py-16 sm:py-24 lg:py-28"
      aria-labelledby="kontakt-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10 sm:mb-12">
          <h2
            id="kontakt-heading"
            className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-foreground"
          >
            Kontakt
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            Fortæl mig kort om dit projekt – så vender jeg tilbage med forslag til
            næste skridt.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] gap-10 items-start">
          <form
            className="space-y-4 rounded-2xl border border-border/80 bg-card/80 p-5 sm:p-6 lg:p-7 shadow-sm"
            onSubmit={(event) => {
              event.preventDefault();
              if (typeof window === 'undefined') return;
              const form = event.currentTarget as HTMLFormElement;
              const formData = new FormData(form);
              const name = formData.get('name') ?? '';
              const email = formData.get('email') ?? '';
              const message = formData.get('message') ?? '';
              const subject = encodeURIComponent('Henvendelse via lukassvendsen.dk');
              const body = encodeURIComponent(
                `Navn: ${name}\nE-mail: ${email}\n\nBesked:\n${message}`
              );
              window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
            }}
          >
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground text-left"
              >
                Navn
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="block w-full rounded-xl border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground text-left"
              >
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-xl border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground text-left"
              >
                Besked
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="block w-full rounded-xl border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="min-h-12 rounded-xl w-full">
              Send besked
            </Button>
          </form>

          <aside className="space-y-6 text-sm text-muted-foreground">
            <div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Direkte kontakt
              </h3>
              <div className="flex flex-col gap-2">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="justify-start rounded-xl w-full"
                >
                  <a href={`mailto:${contact.email}`}>
                    <Mail className="mr-2 h-5 w-5 shrink-0" aria-hidden />
                    <span>{contact.email}</span>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="justify-start rounded-xl w-full"
                >
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>
                    <Phone className="mr-2 h-5 w-5 shrink-0" aria-hidden />
                    <span>{contact.phone}</span>
                  </a>
                </Button>
              </div>
            </div>

            {contact.instagram && (
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Sociale medier
                </h3>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted/80 min-h-[44px] min-w-[44px]"
                >
                  <Instagram className="h-5 w-5" aria-hidden />
                  <span>Instagram</span>
                </a>
              </div>
            )}

            <p className="text-xs sm:text-sm text-muted-foreground/80">
              Jeg vender typisk tilbage inden for 1–2 hverdage. Ved hasteopgaver
              er du velkommen til både at ringe og sende en kort besked.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
