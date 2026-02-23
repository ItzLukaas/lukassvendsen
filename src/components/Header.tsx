'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
        'fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-5 transition-[padding,background] duration-300',
        scrolled && 'pt-3 md:pt-4'
      )}
      role="banner"
    >
      <div className="relative mx-auto w-full max-w-4xl">
      {/* Glassmorphism bar */}
      <nav
        className={cn(
          'relative mx-auto flex w-full max-w-4xl items-center justify-between rounded-2xl border px-4 py-3 shadow-sm transition-all duration-300 md:px-6 md:py-2.5',
          'border-white/60 bg-white/75 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70',
          'dark:border-zinc-700/50 dark:bg-zinc-900/70 dark:supports-[backdrop-filter]:dark:bg-zinc-900/60',
          scrolled && 'shadow-md shadow-black/5 dark:shadow-black/20'
        )}
      >
        <Link
          href="#"
          className="relative text-[15px] font-semibold tracking-tight text-zinc-900 transition-colors hover:text-zinc-700 dark:text-white dark:hover:text-zinc-200"
        >
          {name}
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'group relative rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 transition-colors',
                  'hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                )}
              >
                <span className="absolute inset-0 rounded-lg bg-zinc-200/60 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-zinc-700/60" aria-hidden />
                <span className="relative z-10">{label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA – only on desktop */}
        <div className="hidden md:block">
          <Link
            href="#kontakt"
            className={cn(
              'inline-flex items-center rounded-xl bg-[hsl(var(--extra))] px-4 py-2 text-sm font-semibold text-white shadow-sm',
              'transition-all duration-200 hover:opacity-95 hover:shadow-md active:scale-[0.98]'
            )}
          >
            Kontakt
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={cn(
            'md:hidden flex h-10 w-10 items-center justify-center rounded-xl transition-colors',
            'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white'
          )}
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
            className="absolute left-0 right-0 top-full z-40 mt-2 overflow-hidden rounded-2xl border border-white/60 bg-white/90 shadow-xl backdrop-blur-xl dark:border-zinc-700/50 dark:bg-zinc-900/90 md:hidden"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ul className="py-2">
              {LINKS.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * i, duration: 0.2 }}
                >
                  <Link
                    href={href}
                    className="flex items-center justify-between px-5 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
              <li className="border-t border-zinc-100 dark:border-zinc-800">
                <Link
                  href="#kontakt"
                  className="flex items-center justify-center gap-2 rounded-xl mx-3 my-2 bg-[hsl(var(--extra))] px-4 py-3 text-sm font-semibold text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </header>
  );
}