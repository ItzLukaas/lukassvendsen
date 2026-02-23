'use client';

import { useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const name = siteConfig?.name ?? 'Lukas Svendsen';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200/60"
      role="banner"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-5 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="text-sm font-medium tracking-wide text-foreground transition-colors hover:text-zinc-700"
        >
          {name}
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[13px] font-medium tracking-wide uppercase text-zinc-600 hover:text-foreground transition-colors"
            >
              {label}
            </Link>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-foreground transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Luk menu' : 'Åbn menu'}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div
          className="md:hidden border-t border-zinc-200/80 bg-white"
          style={{ boxShadow: '0 12px 40px -8px rgba(0,0,0,0.12)' }}
        >
          <ul className="mx-auto max-w-6xl px-4 py-3">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-3.5 text-sm font-medium text-foreground hover:text-themeB transition-colors"
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
