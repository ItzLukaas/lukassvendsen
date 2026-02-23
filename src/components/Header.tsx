'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/content/data';
import { cn } from '@/lib/utils';

const LINKS = [
  { href: '#', label: 'Home' },
  { href: '#galleri', label: 'Gallery' },
  { href: '#om-mig', label: 'About' },
  { href: '#kontakt', label: 'Contact' },
];

const SCROLL_THRESHOLD = 48;

function NavLinkWithUnderline({
  href,
  label,
  isTransparent,
}: { href: string; label: string; isTransparent: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        'relative inline-block py-1 text-sm font-medium',
        'after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left',
        'after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out after:content-[""]',
        isTransparent
          ? 'text-white/90 hover:text-white after:bg-white'
          : 'text-zinc-600 hover:text-zinc-900 after:bg-zinc-900'
      )}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const name = siteConfig?.name ?? 'Lukas Svendsen';
  const isTransparent = !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300',
        isTransparent
          ? 'border-white/10 bg-transparent'
          : 'border-zinc-100 bg-white/95 backdrop-blur-sm'
      )}
      role="banner"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="#"
          className={cn(
            'text-[15px] font-semibold transition-colors',
            isTransparent ? 'text-white hover:text-white' : 'text-zinc-800 hover:text-zinc-900'
          )}
        >
          {name}
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <NavLinkWithUnderline href={href} label={label} isTransparent={isTransparent} />
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={cn(
            'md:hidden p-2 -mr-2 transition-colors rounded-lg',
            isTransparent ? 'text-white/90 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
          )}
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Luk menu' : 'Åbn menu'}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            className="md:hidden border-t overflow-hidden touch-none"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.y > 60 || info.velocity.y > 300) setMenuOpen(false);
            }}
            style={{
              borderColor: isTransparent ? 'rgba(255,255,255,0.1)' : 'rgb(228 228 231)',
              background: isTransparent ? 'rgba(10,46,54,0.95)' : 'white',
              backdropFilter: 'blur(8px)',
            }}
          >
            <ul className="px-4 py-4 space-y-1">
              {LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'block py-3 text-sm font-medium transition-colors rounded-lg px-2 -mx-2',
                      isTransparent
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50'
                    )}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
