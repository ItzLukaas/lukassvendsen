import Link from 'next/link';
import { Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { siteConfig, contact } from '@/content/data';

const NAV_LINKS = [
  { href: '#', label: 'Hjem' },
  { href: '#galleri', label: 'Portfolio' },
  { href: '#om-mig', label: 'Om mig' },
  { href: '#kontakt', label: 'Kontakt' },
];

export function Footer() {
  return (
    <footer
      className="border-t border-zinc-200 bg-white py-10 sm:py-12"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Kontaktoplysninger */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">
              Kontaktoplysninger
            </h3>
            <ul className="space-y-3 text-sm text-zinc-700">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-themeB transition-colors inline-flex items-center gap-2"
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
                  className="hover:text-themeB transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
                  {contact.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">
              Navigation
            </h3>
            <nav aria-label="Footer">
              <ul className="space-y-2">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-zinc-700 hover:text-themeB transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">
              Sociale medier
            </h3>
            <div className="flex gap-3">
              {contact.instagram && (
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 hover:border-themeB hover:text-themeB transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-zinc-100 text-center">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
