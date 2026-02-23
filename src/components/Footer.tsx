import Link from 'next/link';
import { Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { siteConfig, contact } from '@/content/data';

const NAV_LINKS = [
  { href: '#galleri', label: 'Portfolio' },
  { href: '#om-mig', label: 'Om mig' },
  { href: '#kontakt', label: 'Kontakt' },
];

export function Footer() {
  return (
    <footer
      className="border-t border-zinc-200 bg-zinc-50 py-10 sm:py-12"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-10 sm:gap-16">
          {/* Kontaktoplysninger */}
          <div>
            <h3 className="text-xs font-medium tracking-wide text-zinc-500 mb-3">
              Kontaktoplysninger
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-700">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-zinc-900 transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
                  {contact.email}
                </a>
              </li>
              {contact.address && (
                <li className="inline-flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5 text-zinc-400" />
                  <span>{contact.address}</span>
                </li>
              )}
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="hover:text-zinc-900 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
                  {contact.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-medium tracking-wide text-zinc-500 mb-3">
              Navigation
            </h3>
            <nav aria-label="Footer">
              <ul className="space-y-2">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} {siteConfig.brandName ?? siteConfig.name}
            </p>
            <Link
              href="/cookies"
              className="text-xs text-zinc-500 hover:text-zinc-700 transition-colors"
            >
              Cookiepolitik
            </Link>
          </div>
          {contact.instagram && (
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-700 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-3.5 w-3.5" />
              Instagram
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
