'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Music } from 'lucide-react';

import { siteConfig } from '@/content/data';
import { cn } from '@/lib/utils';

const LINKS = [
  { href: '/', label: 'Forside' },
  { href: '/#arrangementer', label: 'Arrangementer' },
];

const TOPBAR_MESSAGES = [
  'Gratis koncerter ved Grindsted Vandtårn',
  'Alle arrangementer er gratis',
  'Sommer 2026',
];

const TOPBAR_STORAGE_KEY = 'topbar-dismissed';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [topbarIndex, setTopbarIndex] = useState(0);
  const [topbarClosed, setTopbarClosed] = useState(false);
  const brandName = siteConfig?.brandName ?? siteConfig?.name ?? 'Musik ved Vandtårnet';

  useEffect(() => {
    try {
      setTopbarClosed(localStorage.getItem(TOPBAR_STORAGE_KEY) === '1');
    } catch {
      /* ignore */
    }
  }, []);

  const closeTopbar = () => {
    setTopbarClosed(true);
    try {
      localStorage.setItem(TOPBAR_STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const n = TOPBAR_MESSAGES.length;
    const t = setInterval(() => setTopbarIndex((i) => (i + 1) % n), 5000);
    return () => clearInterval(t);
  }, []);

  const topbarText =
    typeof TOPBAR_MESSAGES[topbarIndex] === 'function'
      ? (TOPBAR_MESSAGES[topbarIndex] as () => string)()
      : (TOPBAR_MESSAGES[topbarIndex] as string);

  return (
    <header
      className={cn(
        'w-full border-b transition-colors duration-200',
        'border-white/20 bg-background/90 backdrop-blur-sm',
        scrolled && 'bg-background border-white/20'
      )}
      role="banner"
    >
      {/* Topbar med roterende tekst og luk-kryds */}
      {!topbarClosed && (
        <div className="bg-accent-red text-white">
          <div className="flex w-full items-center justify-center gap-4 px-4 py-2 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative">
            <div className="min-w-0 flex-1 flex justify-center">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={topbarIndex}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                  className="text-[11px] font-condensed font-semibold uppercase tracking-[0.18em] sm:text-xs text-center truncate"
                >
                  {topbarText}
                </motion.p>
              </AnimatePresence>
            </div>
            <button
              type="button"
              onClick={closeTopbar}
              className="absolute right-4 sm:right-6 lg:right-8 xl:right-12 2xl:right-16 shrink-0 p-1.5 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Luk topbar"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-[15px] font-condensed font-bold tracking-tight text-white uppercase transition-opacity hover:opacity-80"
        >
          <Music className="h-4 w-4 text-accent-yellow" aria-hidden />
          {brandName}
        </Link>

        {/* Desktop links – tekst direkte på baggrunden */}
        <ul className="hidden md:flex items-center gap-6">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/#arrangementer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-yellow px-4 py-2 text-sm font-condensed font-semibold text-background uppercase transition-opacity hover:opacity-90"
          >
            Arrangementer
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white"
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
            className="absolute left-0 right-0 top-full z-40 border-t border-white/20 bg-background md:hidden"
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
                    className="block py-2.5 text-sm font-medium text-white/80 transition-colors hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
              <li className="mt-4 pt-4 border-t border-white/20">
                <Link
                  href="/#arrangementer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-accent-yellow px-4 py-3 text-sm font-condensed font-semibold text-background uppercase transition-opacity hover:opacity-90"
                  onClick={() => setMenuOpen(false)}
                >
                  Arrangementer
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}