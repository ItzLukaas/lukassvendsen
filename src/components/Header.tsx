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

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/70 backdrop-blur-md border-b border-border/40'
          : 'bg-white/5 backdrop-blur-sm'
      )}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Hovednavigation"
      >
        <Link
          href="#"
          className="font-heading text-xl font-bold tracking-tight text-foreground hover:text-foreground/90 transition-colors"
        >
          {siteConfig.name}
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-semibold text-foreground/90 hover:text-foreground transition-colors relative after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-px after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 rounded-lg text-foreground/90 hover:text-foreground hover:bg-white/10 transition-colors touch-manipulation"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Luk menu' : 'Åbn menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-background/80 backdrop-blur-md border-t border-border/40">
          <ul className="flex flex-col px-4 py-4 gap-0">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-3.5 px-3 text-base font-semibold text-foreground hover:bg-white/5 rounded-lg transition-colors -mx-3"
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
