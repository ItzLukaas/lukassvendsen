'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { siteConfig } from '@/content/data';
import { cn } from '@/lib/utils';

const LINKS = [
  { href: '#', label: 'Home' },
  { href: '#galleri', label: 'Portfolio' },
  { href: '#om-mig', label: 'Om mig' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const name = siteConfig?.name ?? 'Lukas Svendsen';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200',
        'border-zinc-100 bg-white/90 backdrop-blur-sm',
        'dark:border-zinc-800/80 dark:bg-zinc-900/90',
        scrolled && 'bg-white border-zinc-100 dark:bg-zinc-900 dark:border-zinc-800'
      )}
      role="banner"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="text-[15px] font-medium tracking-tight text-zinc-800 transition-colors hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
        >
          {name}
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA – desktop */}
        <div className="hidden md:block">
          <Link
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--extra))] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Kontakt
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-white"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Luk menu' : 'Åbn menu'}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            className="absolute left-0 right-0 top-full z-40 border-t border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-900 md:hidden"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
            <ul className="py-3 px-4">
              {LINKS.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.02 * i, duration: 0.15 }}
                >
                  <Link
                    href={href}
                    className="block py-2.5 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
              <li className="mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                <Link
                  href="#kontakt"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[hsl(var(--extra))] px-4 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  onClick={() => setMenuOpen(false)}
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  Kontakt
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}