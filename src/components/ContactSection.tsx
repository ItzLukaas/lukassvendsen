'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { contact } from '@/content/data';

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-28 relative py-24 lg:py-32 overflow-hidden bg-themeB"
      aria-labelledby="kontakt-heading"
    >
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="kontakt-heading"
          className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {contact.ctaHeading ?? 'Lad os skabe noget sammen'}
        </h2>
        <p className="mt-4 text-lg text-white/85 sm:text-xl">
          {contact.ctaText ?? 'Har du en idé eller et projekt? Jeg vil rigtig gerne høre fra dig – skriv eller ring.'}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-themeB shadow-lg hover:bg-white/95 transition-colors duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="h-5 w-5" />
            {contact.ctaButtonEmail ?? 'Skriv til mig'}
          </motion.a>
          <motion.a
            href={`tel:${contact.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/80 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:border-white transition-colors duration-200"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Ring
          </motion.a>
        </div>
        <p className="mt-8 text-sm text-white/70">
          eller skriv direkte til{' '}
          <a
            href={`mailto:${contact.email}`}
            className="font-medium text-white underline decoration-white/50 underline-offset-2 hover:decoration-white"
          >
            {contact.email}
          </a>
        </p>
      </div>
    </section>
  );
}
