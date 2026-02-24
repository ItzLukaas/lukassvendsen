'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Camera } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { siteConfig } from '@/content/data';
import { cn } from '@/lib/utils';

const LINKS = [
  { href: '/', label: 'Forside' },
  { href: '/galleri', label: 'Galleri' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/#om-mig', label: 'Om Lukas' },
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
        'fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200',
        'border-zinc-100 bg-white/90 backdrop-blur-sm',
        'dark:border-zinc-800/80 dark:bg-zinc-900/90',
        scrolled && 'bg-white border-zinc-100 dark:bg-zinc-900 dark:border-zinc-800'
      )}
      role="banner"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-zinc-800 transition-colors hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
        >
          <Camera className="h-4 w-4 text-[hsl(var(--extra))]" aria-hidden />
          {brandName}
        </Link>

        {/* Desktop links – tekst direkte på baggrunden */}
        <ul className="hidden md:flex items-center gap-6">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-semibold text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop: theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--extra))] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Kontakt
          </Link>
        </div>

        {/* Mobile: theme toggle + menu button */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-white"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Luk menu' : 'Åbn menu'}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            className="absolute left-0 right-0 top-full z-40 border-t border-zinc-100 bg-white dark:border-zinc-800 dark:bg-zinc-900 md:hidden"
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
                    className="block py-2.5 text-sm font-semibold text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
              <li className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                <Link
                  href="/#kontakt"
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