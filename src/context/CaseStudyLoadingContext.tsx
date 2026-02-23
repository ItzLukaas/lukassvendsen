'use client';

import { createContext, useContext, useState, useRef, useCallback, ReactNode } from 'react';
import { siteConfig } from '@/content/data';

const MIN_SHOW_MS = 900;

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
  const [caseStudyLoading, setCaseStudyLoadingState] = useState(false);
  const shownAtRef = useRef<number | null>(null);

  const setCaseStudyLoading = useCallback((value: boolean) => {
    if (value) {
      shownAtRef.current = Date.now();
      setCaseStudyLoadingState(true);
      return;
    }
    const elapsed = Date.now() - (shownAtRef.current ?? 0);
    const delay = Math.max(0, MIN_SHOW_MS - elapsed);
    setTimeout(() => {
      shownAtRef.current = null;
      setCaseStudyLoadingState(false);
    }, delay);
  }, []);

  return (
    <Context.Provider value={{ caseStudyLoading, setCaseStudyLoading }}>
      {children}
      {caseStudyLoading && (
        <div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[hsl(var(--extra))]"
          aria-live="polite"
          aria-label="Indlæser case study"
        >
          <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl mb-8">
            {siteConfig?.brandName ?? 'Lukas Photography'}
          </p>
          <div className="h-14 w-14 rounded-full border-4 border-white/25 border-t-white animate-case-study-spin" />
        </div>
      )}
    </Context.Provider>
  );
}
