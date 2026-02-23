'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

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
  const [caseStudyLoading, setCaseStudyLoading] = useState(false);

  return (
    <Context.Provider value={{ caseStudyLoading, setCaseStudyLoading }}>
      {children}
      {caseStudyLoading && (
        <div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-[hsl(var(--extra))]"
          aria-live="polite"
          aria-label="Indlæser"
        >
          <div className="h-12 w-12 rounded-full border-4 border-white/25 border-t-white animate-case-study-spin" />
          <p className="text-sm font-medium text-white/90">Indlæser case study</p>
        </div>
      )}
    </Context.Provider>
  );
}
