import Link from 'next/link';
import { siteConfig, contact } from '@/content/data';

export function Footer() {
  return (
    <footer className="border-t border-border py-8" role="contentinfo">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <nav className="flex gap-6" aria-label="Footer">
          <a href={`mailto:${contact.email}`} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            E-mail
          </a>
          <Link href="#kontakt" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Kontakt
          </Link>
        </nav>
      </div>
    </footer>
  );
}
