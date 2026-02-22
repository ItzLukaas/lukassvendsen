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
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="kontakt-heading"
          className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-foreground"
        >
          Kontakt
        </h2>
        <p className="mt-3 text-muted-foreground text-base sm:text-lg">
          Skriv eller ring – jeg vender tilbage hurtigst muligt.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <Button asChild size="lg" className="min-h-12 rounded-xl w-full sm:w-auto">
            <a href={`mailto:${contact.email}`} className="inline-flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5 shrink-0" aria-hidden />
              <span>{contact.email}</span>
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-h-12 rounded-xl w-full sm:w-auto">
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5 shrink-0" aria-hidden />
              <span>{contact.phone}</span>
            </a>
          </Button>
        </div>

        {contact.instagram && (
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-muted/80 min-h-[44px] min-w-[44px] justify-center"
          >
            <Instagram className="h-5 w-5" aria-hidden />
            <span>Instagram</span>
          </a>
        )}
      </div>
    </section>
  );
}
