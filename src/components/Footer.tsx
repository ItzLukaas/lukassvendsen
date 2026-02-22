import Link from 'next/link';
import { siteConfig, contact } from '@/content/data';

export function Footer() {
  return (
    <footer
      className="border-t border-border bg-muted/30"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. Alle rettigheder forbeholdes.
          </p>
          <div className="flex gap-6">
            <a
              href={`mailto:${contact.email}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              E-mail
            </a>
            <Link
              href="#kontakt"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
