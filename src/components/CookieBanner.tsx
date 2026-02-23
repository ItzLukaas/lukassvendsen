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
      className="fixed bottom-4 right-4 z-[100] w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl shadow-black/10"
    >
      <p className="text-sm text-zinc-600 leading-relaxed">
        Vi bruger cookies, så sitet fungerer bedst. Du kan vælge kun nødvendige eller acceptere alle.
      </p>
      <Link
        href="/cookies"
        className="mt-2 inline-block text-sm font-medium text-[hsl(var(--extra))] hover:underline"
      >
        Læs mere om cookies
      </Link>
      <div className="mt-4 flex flex-col gap-2">
        <button
          type="button"
          onClick={acceptAll}
          className="w-full rounded-xl bg-[hsl(var(--extra))] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Accepter alle
        </button>
        <button
          type="button"
          onClick={necessaryOnly}
          className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100"
        >
          Kun nødvendige
        </button>
      </div>
    </div>
  );
}
