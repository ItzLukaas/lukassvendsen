'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/content/data';

const LINKS = [
  { href: '#galleri', label: 'Portfolio' },
  { href: '#om-mig', label: 'Om mig' },
  { href: '#kontakt', label: 'Kontakt' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const name = siteConfig?.name ?? 'Lukas Svendsen';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-100"
      role="banner"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="text-[15px] font-normal text-zinc-800 hover:text-zinc-900 transition-colors"
        >
          {name}
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-normal text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              {label}
            </Link>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-zinc-600 hover:text-zinc-900 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Luk menu' : 'Åbn menu'}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white">
          <ul className="px-4 py-4 space-y-1">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-2.5 text-sm text-zinc-700 hover:text-zinc-900 transition-colors"
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
