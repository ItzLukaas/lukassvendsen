'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/content/data';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#galleri', label: 'Portfolio' },
  { href: '#om-mig', label: 'About' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const overHero = !scrolled;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out',
        overHero
          ? 'bg-transparent'
          : 'bg-white/90 backdrop-blur-md border-b border-border/50 shadow-sm'
      )}
      role="banner"
    >
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-out',
          overHero ? 'py-5' : 'py-3'
        )}
        aria-label="Hovednavigation"
      >
        <Link
          href="#"
          className={cn(
            'font-heading font-bold tracking-tight transition-all duration-300 ease-out',
            overHero
              ? 'text-xl text-white hover:text-white/90'
              : 'text-lg text-foreground hover:text-foreground/90'
          )}
        >
          {siteConfig.name}
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'text-sm font-semibold transition-all duration-300 ease-out relative after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-px after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100',
                  overHero
                    ? 'text-white/95 hover:text-white after:bg-white'
                    : 'text-foreground/90 hover:text-foreground after:bg-accent'
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={cn(
            'md:hidden p-2 -mr-2 rounded-lg transition-all duration-300 ease-out touch-manipulation',
            overHero
              ? 'text-white/95 hover:text-white hover:bg-white/10'
              : 'text-foreground/90 hover:text-foreground hover:bg-muted/80'
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Luk menu' : 'Åbn menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div
          className={cn(
            'md:hidden border-t backdrop-blur-md transition-colors duration-300',
            overHero
              ? 'bg-black/20 border-white/20'
              : 'bg-white/95 border-border/50'
          )}
        >
          <ul className="flex flex-col px-4 py-4 gap-0">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'block py-3.5 px-3 text-base font-semibold rounded-lg transition-colors -mx-3',
                    overHero
                      ? 'text-white hover:bg-white/10'
                      : 'text-foreground hover:bg-muted/80'
                  )}
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
