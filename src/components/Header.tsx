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
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 transition-all duration-300"
      role="banner"
    >
      <nav
        className={`flex items-center justify-between py-4 px-5 sm:px-6 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'mt-4 rounded-2xl bg-white/95 backdrop-blur-md border border-zinc-200/80 shadow-lg shadow-[hsl(var(--accent))]/10'
            : 'mt-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10'
        }`}
      >
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
                  ? 'text-muted-foreground hover:text-[hsl(var(--accent))]'
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
        <div className="md:hidden mt-2 w-full max-w-6xl rounded-2xl border border-zinc-200 bg-white shadow-lg shadow-[hsl(var(--accent))]/10 overflow-hidden">
          <ul className="flex flex-col py-2 px-2 gap-0.5">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-3 px-4 rounded-xl text-sm font-medium text-foreground hover:bg-[hsl(var(--accent))]/10 hover:text-[hsl(var(--accent))] transition-colors"
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
