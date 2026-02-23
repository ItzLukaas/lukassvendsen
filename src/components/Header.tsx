'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/content/data';

const LINKS = [
  { href: '#', label: 'Home' },
  { href: '#galleri', label: 'Portfolio' },
  { href: '#om-mig', label: 'About' },
  { href: '#kontakt', label: 'Kontakt' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const name = siteConfig?.name ?? 'Lukas Svendsen';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200/80 shadow-sm'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="#"
          className={`text-base font-semibold tracking-tight transition-colors ${
            scrolled ? 'text-foreground' : 'text-white'
          }`}
        >
          {name}
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-muted-foreground hover:text-foreground'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: scrolled ? 'hsl(var(--foreground))' : 'rgba(255,255,255,0.95)' }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Luk menu' : 'Åbn menu'}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white">
          <ul className="flex flex-col py-4 px-4 gap-1">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-3 px-3 rounded-lg text-sm font-medium text-foreground hover:bg-zinc-50"
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
