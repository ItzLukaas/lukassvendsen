'use client';

import { motion } from 'framer-motion';

type Variant = 'hero' | 'cta';

const shapes: Record<Variant, { viewBox: string; path: string; className: string }> = {
  hero: {
    viewBox: '0 0 400 120',
    path: 'M0,80 Q100,20 200,60 T400,40 L400,120 L0,120 Z',
    className: 'text-white/[0.06]',
  },
  cta: {
    viewBox: '0 0 600 100',
    path: 'M0,60 Q150,10 300,50 T600,30 L600,100 L0,100 Z',
    className: 'text-white/[0.08]',
  },
};

export function AbstractShape({ variant }: { variant: Variant }) {
  const { viewBox, path, className } = shapes[variant];
  return (
    <motion.div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${variant === 'hero' ? 'bottom-0' : 'top-0'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut', delay: variant === 'hero' ? 0.3 : 0.2 }}
      aria-hidden
    >
      <svg
        viewBox={viewBox}
        preserveAspectRatio="none"
        className={`absolute w-full h-32 sm:h-40 ${variant === 'cta' ? 'top-0' : 'bottom-0'} left-0 fill-current ${className}`}
      >
        <path d={path} />
      </svg>
    </motion.div>
  );
}
