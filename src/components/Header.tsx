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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'w-full border-b transition-colors duration-200',
        'border-zinc-100 bg-white/90 backdrop-blur-sm',
        scrolled && 'bg-white border-zinc-100'
      )}
      role="banner"
    >
      {/* Topbar med stærkt budskab */}
      <div className="bg-[hsl(var(--extra))] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-2 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] sm:text-xs text-center">
            Unikke billeder, konkurrencedygtige priser
          </p>
        </div>
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-zinc-800 transition-colors hover:text-zinc-600"
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
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--extra))] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Kontakt
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800"
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
            className="absolute left-0 right-0 top-full z-40 border-t border-zinc-100 bg-white md:hidden"
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
                    className="block py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
              <li className="mt-4 pt-4 border-t border-zinc-200">
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