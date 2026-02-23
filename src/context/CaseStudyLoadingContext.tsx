'use client';

import { createContext, useContext, useState, useRef, useCallback, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/content/data';

const MIN_SHOW_MS = 1000;
const FADE_DURATION_MS = 700;

type ContextType = {
  caseStudyLoading: boolean;
  setCaseStudyLoading: (v: boolean) => void;
};

const Context = createContext<ContextType | null>(null);

export function useCaseStudyLoading() {
  const ctx = useContext(Context);
  return ctx ?? { caseStudyLoading: false, setCaseStudyLoading: () => {} };
}

export function CaseStudyLoadingProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const shownAtRef = useRef<number | null>(null);
  const caseStudyLoading = visible || fadingOut;

  const setCaseStudyLoading = useCallback((value: boolean) => {
    if (value) {
      shownAtRef.current = Date.now();
      setFadingOut(false);
      setVisible(true);
      return;
    }
    const elapsed = Date.now() - (shownAtRef.current ?? 0);
    const delay = Math.max(0, MIN_SHOW_MS - elapsed);
    setTimeout(() => {
      setFadingOut(true);
      setTimeout(() => {
        shownAtRef.current = null;
        setVisible(false);
        setFadingOut(false);
      }, FADE_DURATION_MS);
    }, delay);
  }, []);

  const overlay = caseStudyLoading && typeof document !== 'undefined' ? createPortal(
    <div
      className={cn(
        'fixed inset-0 z-[2147483647] flex flex-col items-center justify-center bg-[hsl(var(--extra))] transition-preloader-fade',
        fadingOut && 'opacity-0 pointer-events-none'
      )}
      aria-live="polite"
      aria-label="Indlæser case study"
    >
      <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl mb-8">
        {siteConfig?.brandName ?? 'Lukas Photography'}
      </p>
      <div className="h-14 w-14 rounded-full border-4 border-white/25 border-t-white animate-case-study-spin" />
    </div>,
    document.body
  ) : null;

  return (
    <Context.Provider value={{ caseStudyLoading, setCaseStudyLoading }}>
      {children}
      {overlay}
    </Context.Provider>
  );
}
