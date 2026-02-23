'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const MIN_SHOW_MS = 600;
const FADE_DURATION_MS = 500;

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
        'fixed inset-0 z-[300] flex flex-col items-center justify-center bg-[hsl(var(--extra))] transition-opacity duration-500 ease-out',
        isHidden && 'opacity-0 pointer-events-none'
      )}
      aria-hidden
      style={{ transitionDuration: `${FADE_DURATION_MS}ms` }}
    >
      <div className="h-14 w-14 rounded-full border-4 border-white/25 border-t-white animate-case-study-spin" />
    </div>
  );
}
