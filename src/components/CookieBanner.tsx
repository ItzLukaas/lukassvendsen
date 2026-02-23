'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'lukas-photography-cookie-consent';
const CONSENT_VERSION = 1;

type Consent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  version: number;
  date: string;
};

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [consent, setConsent] = useState<Consent | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Consent;
        if (parsed.version === CONSENT_VERSION) setConsent(parsed);
      }
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  const save = (value: Consent) => {
    setConsent(value);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch {
      // ignore
    }
  };

  const acceptAll = () => {
    save({
      necessary: true,
      analytics: true,
      marketing: true,
      version: CONSENT_VERSION,
      date: new Date().toISOString(),
    });
  };

  const necessaryOnly = () => {
    save({
      necessary: true,
      analytics: false,
      marketing: false,
      version: CONSENT_VERSION,
      date: new Date().toISOString(),
    });
  };

  if (!mounted || consent) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookieindstillinger"
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-zinc-200 bg-white/98 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm p-4 sm:p-5"
    >
      <div className="mx-auto max-w-3xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-zinc-600 leading-relaxed">
          Vi bruger cookies for at sitet fungerer bedst og for at forstå hvordan det bruges. Du kan vælge kun nødvendige cookies eller acceptere alle.{' '}
          <Link
            href="/cookies"
            className="font-medium text-[hsl(var(--extra))] underline underline-offset-2 hover:no-underline"
          >
            Læs mere om cookies
          </Link>
        </p>
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={necessaryOnly}
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
          >
            Kun nødvendige
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-lg bg-[hsl(var(--extra))] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Accepter alle
          </button>
        </div>
      </div>
    </div>
  );
}
