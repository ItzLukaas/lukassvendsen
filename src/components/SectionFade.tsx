'use client';

import { motion } from 'framer-motion';

type SectionFadeProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function SectionFade({ children, className, delay = 0 }: SectionFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
