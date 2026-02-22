import Link from 'next/link';
import { siteConfig, contact } from '@/content/data';

export function Footer() {
  return (
    <footer
      className="border-t border-border/60 bg-muted/30 py-8 sm:py-10"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} {siteConfig.name}. Alle rettigheder forbeholdes.
          </p>
          <nav className="flex gap-6" aria-label="Footer links">
            <a
              href={`mailto:${contact.email}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 min-h-[44px] inline-flex items-center"
            >
              E-mail
            </a>
            <Link
              href="#kontakt"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 min-h-[44px] inline-flex items-center"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
