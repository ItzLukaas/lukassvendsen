import Link from 'next/link';
import { Mail, MapPin, Camera } from 'lucide-react';
import { siteConfig, contact } from '@/content/data';

const NAV_LINKS = [
  { href: '/#galleri', label: 'Galleri' },
  { href: '/#om-mig', label: 'Om mig' },
  { href: '/#spidskompetencer', label: 'Spidskompetencer' },
  { href: '/#case-studies', label: 'Cases' },
  { href: '/#kontakt', label: 'Kontakt' },
];

export function Footer() {
  return (
    <footer
      className="border-t border-zinc-200 bg-secondary py-10 sm:py-12"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-10 sm:gap-16">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="h-5 w-5 text-[hsl(var(--extra))]" />
              <h3 className="font-condensed font-bold text-xl text-foreground uppercase tracking-tight">
                {siteConfig.brandName ?? siteConfig.name}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Fotograf i Billund og omegn – portrætter, events og kreative projekter.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-condensed font-semibold tracking-wide text-muted-foreground mb-3 uppercase">
              Navigation
            </h3>
            <nav aria-label="Footer">
              <ul className="space-y-2">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[hsl(var(--extra))]" />
              <p className="text-sm text-muted-foreground">
                {contact.address}
                <br />
                Danmark
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.brandName ?? siteConfig.name}
            </p>
          <p className="text-xs text-muted-foreground">
              Kontakt: {contact.email} · {contact.phone}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
