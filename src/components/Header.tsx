'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/content/data';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#om-mig', label: 'Om mig' },
  { href: '#galleri', label: 'Galleri' },
  { href: '#kunder', label: 'Kunder' },
  { href: '#kontakt', label: 'Kontakt' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-sm'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Hovednavigation"
      >
        <Link
          href="#"
          className="font-heading text-xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          {siteConfig.name}
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-4 after:right-4 after:bottom-0 after:h-px after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 hover:after:scale-x-100 rounded-md"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Luk menu' : 'Åbn menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <ul className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-3 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
