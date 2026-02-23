'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/content/data';

const MIN_SHOW_MS = 1000;
const FADE_DURATION_MS = 700;

export function PagePreloader() {
  const [isHidden, setIsHidden] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const start = Date.now();

    const hide = () => {
      const elapsed = Date.now() - start;
      const delay = Math.max(0, MIN_SHOW_MS - elapsed);
      setTimeout(() => {
        setIsHidden(true);
        setTimeout(() => setIsRemoved(true), FADE_DURATION_MS);
      }, delay);
    };

    if (typeof document === 'undefined') return;

    if (document.readyState === 'complete') {
      hide();
      return;
    }

    const onLoad = () => hide();
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  if (isRemoved) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-[300] flex flex-col items-center justify-center bg-[hsl(var(--extra))] transition-opacity',
        isHidden && 'opacity-0 pointer-events-none'
      )}
      aria-hidden
      style={{
        transitionDuration: `${FADE_DURATION_MS}ms`,
        transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)',
      }}
    >
      <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl mb-8">
        {siteConfig?.brandName ?? 'Lukas Photography'}
      </p>
      <div className="h-14 w-14 rounded-full border-4 border-white/25 border-t-white animate-case-study-spin" />
    </div>
  );
}
