import { Mail, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contact } from '@/content/data';

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-20 bg-muted/30 py-20 sm:py-28"
      aria-labelledby="kontakt-heading"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="kontakt-heading"
          className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-foreground"
        >
          Kontakt
        </h2>
        <p className="mt-3 text-muted-foreground">
          Skriv eller ring – jeg vender tilbage hurtigst muligt.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href={`mailto:${contact.email}`}>
              <Mail className="mr-2 h-5 w-5" />
              {contact.email}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>
              <Phone className="mr-2 h-5 w-5" />
              {contact.phone}
            </a>
          </Button>
        </div>

        {contact.instagram && (
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span>Instagram</span>
          </a>
        )}
      </div>
    </section>
  );
}
