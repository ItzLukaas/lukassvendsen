'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Send, Camera, Mail } from 'lucide-react';

/** LinkedIn logo – rent SVG så det ikke ser forkert ud i topbaren */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import { siteConfig, contact } from '@/content/data';
import { cn } from '@/lib/utils';

const LINKS = [
  { href: '/', label: 'Forside' },
  { href: '/galleri', label: 'Galleri' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/#om-mig', label: 'Om Lukas' },
];

const TOPBAR_MESSAGES = [
  '5-stjernet fotograf i Billund Kommune',
  'Unikke billeder, konkurrencedygtige priser',
  () => `${contact.email} | ${contact.phone}`,
];

const TOPBAR_STORAGE_KEY = 'topbar-dismissed';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [topbarIndex, setTopbarIndex] = useState(0);
  const [topbarClosed, setTopbarClosed] = useState(false);
  const brandName = siteConfig?.brandName ?? siteConfig?.name ?? 'Lukas Photography';

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
        'border-zinc-100 bg-white/90 backdrop-blur-sm',
        scrolled && 'bg-white border-zinc-100'
      )}
      role="banner"
    >
      {/* Topbar med ikoner, roterende tekst og luk-kryds */}
      {!topbarClosed && (
        <div className="bg-[hsl(var(--extra))] text-white">
          <div className="flex w-full items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`mailto:${contact.email}`}
                className="p-1.5 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Send e-mail"
              >
                <Send className="h-4 w-4 stroke-[1.5]" />
              </a>
              <a
                href={contact.linkedin || 'https://linkedin.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </div>
            <div className="min-w-0 flex-1 flex justify-center">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={topbarIndex}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                  className="text-[11px] font-semibold uppercase tracking-[0.18em] sm:text-xs text-center truncate"
                >
                  {topbarText}
                </motion.p>
              </AnimatePresence>
            </div>
            <button
              type="button"
              onClick={closeTopbar}
              className="shrink-0 p-1.5 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
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