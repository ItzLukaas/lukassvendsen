import Link from 'next/link';
import { siteConfig, contact } from '@/content/data';

export function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--accent))]/20 bg-white py-8 shadow-[0_-4px_20px_-4px_hsl(var(--accent)/0.08)]" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <nav className="flex gap-8" aria-label="Footer">
          <a
            href={`mailto:${contact.email}`}
            className="text-xs text-muted-foreground hover:text-[hsl(var(--accent))] transition-colors"
          >
            E-mail
          </a>
          <Link
            href="#kontakt"
            className="text-xs text-muted-foreground hover:text-[hsl(var(--accent))] transition-colors"
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </footer>
  );
}
