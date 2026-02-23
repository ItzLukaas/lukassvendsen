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
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const name = siteConfig?.name ?? 'Lukas Svendsen';
  const isLight = scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className={`text-lg font-bold tracking-tight transition-colors hover:opacity-90 ${
            isLight ? 'text-zinc-900' : 'text-white'
          }`}
        >
          {name}
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-semibold transition-colors hover:opacity-90 ${
                  isLight ? 'text-zinc-700' : 'text-white/95'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg transition-colors touch-manipulation"
          style={{ color: isLight ? '#27272a' : 'rgba(255,255,255,0.95)' }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Luk menu' : 'Åbn menu'}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div
          className={`md:hidden border-t px-4 py-4 ${
            isLight
              ? 'bg-white border-zinc-200'
              : 'bg-black/30 border-white/20 backdrop-blur-md'
          }`}
        >
          <ul className="flex flex-col gap-1">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block py-3 px-3 rounded-lg text-base font-semibold transition-colors ${
                    isLight
                      ? 'text-zinc-800 hover:bg-zinc-100'
                      : 'text-white hover:bg-white/10'
                  }`}
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
