import Link from 'next/link';
import { Mail, MapPin, Music } from 'lucide-react';
import { siteConfig } from '@/content/data';

const NAV_LINKS = [
  { href: '/', label: 'Forside' },
  { href: '/#arrangementer', label: 'Arrangementer' },
];

export function Footer() {
  return (
    <footer
      className="border-t border-white/20 bg-background/50 backdrop-blur-sm py-10 sm:py-12"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-10 sm:gap-16">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Music className="h-5 w-5 text-accent-yellow" />
              <h3 className="font-condensed font-bold text-xl text-white uppercase tracking-tight">
                {siteConfig.brandName ?? siteConfig.name}
              </h3>
            </div>
            <p className="text-sm text-white/70 max-w-xs">
              Gratis koncerter ved Grindsted Vandtårn gennem sommeren 2026
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-condensed font-semibold tracking-wide text-white/60 mb-3 uppercase">
              Navigation
            </h3>
            <nav aria-label="Footer">
              <ul className="space-y-2">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xs font-condensed font-semibold tracking-wide text-white/60 mb-3 uppercase">
              Lokation
            </h3>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-accent-yellow" />
              <p className="text-sm text-white/80">
                Grindsted Vandtårn
                <br />
                Grindsted, Danmark
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} {siteConfig.brandName ?? siteConfig.name}
            </p>
            <p className="text-xs text-white/60">
              Kærlig hilsen Vandtårnets Venner!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
