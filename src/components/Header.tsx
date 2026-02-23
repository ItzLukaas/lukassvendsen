'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/content/data';

const LINKS = [
  { href: '#', label: 'Home' },
  { href: '#galleri', label: 'Portfolio' },
  { href: '#om-mig', label: 'About' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const name = siteConfig?.name ?? 'Lukas Svendsen';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="#"
          className={`text-base font-semibold tracking-tight transition-colors ${
            scrolled ? 'text-foreground' : 'text-white'
          }`}
        >
          {name}
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/90 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 rounded-md transition-colors touch-manipulation"
          style={{ color: scrolled ? 'hsl(var(--foreground))' : 'rgba(255,255,255,0.9)' }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Luk menu' : 'Åbn menu'}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col py-3 px-4">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-2.5 text-sm font-medium text-foreground hover:text-muted-foreground"
                  onClick={() => setMenuOpen(false)}
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
