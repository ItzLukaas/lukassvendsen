'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Camera } from 'lucide-react';
import { siteConfig } from '@/content/data';
import { cn } from '@/lib/utils';

const LINKS = [
  { href: '/', label: 'Forside' },
  { href: '/galleri', label: 'Galleri' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/#om-mig', label: 'Om mig' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const brandName = siteConfig?.brandName ?? siteConfig?.name ?? 'Lukas Photography';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'border-b border-zinc-200/80 bg-white/80 backdrop-blur-md',
        'dark:border-zinc-700/50 dark:bg-zinc-900/80',
        scrolled && 'border-zinc-200/90 bg-white/95 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/95 dark:shadow-zinc-950/20'
      )}
      role="banner"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-zinc-800 transition-colors hover:text-[hsl(var(--extra))] dark:text-white dark:hover:text-[hsl(var(--extra))]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(var(--extra))]/10 text-[hsl(var(--extra))] transition-colors group-hover:bg-[hsl(var(--extra))]/20">
            <Camera className="h-4 w-4" aria-hidden />
          </span>
          <span className="font-heading font-semibold tracking-tight text-[15px]">{brandName}</span>
        </Link>

        {/* Desktop links – pill container */}
        <ul className="hidden md:flex items-center gap-0.5 rounded-full bg-zinc-100/80 px-1.5 py-1 dark:bg-zinc-800/80">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-white hover:text-zinc-900 hover:shadow-sm dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA – desktop */}
        <div className="hidden md:block">
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--extra))] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Kontakt
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-white"
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
            className="absolute left-0 right-0 top-full z-40 border-t border-zinc-200/80 bg-white/95 backdrop-blur-md dark:border-zinc-700 dark:bg-zinc-900/95 md:hidden"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            <ul className="py-4 px-4 space-y-0.5">
              {LINKS.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * i, duration: 0.2 }}
                >
                  <Link
                    href={href}
                    className="block rounded-xl py-3 px-4 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
              <li className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                <Link
                  href="/#kontakt"
                  className="flex items-center justify-center gap-2 rounded-full bg-[hsl(var(--extra))] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
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