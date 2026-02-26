'use client';

import { motion } from 'framer-motion';

export function MusicHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light cloud-like shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-illustration-light/30 blur-3xl" />
        <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-illustration-medium/20 blur-3xl" />
        <div className="absolute bottom-32 left-1/4 w-36 h-36 rounded-full bg-illustration-light/25 blur-3xl" />
      </div>

      {/* White border frame */}
      <div className="absolute inset-4 border-4 border-white/20 rounded-sm pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Branding box - matching poster style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-block"
        >
          <div className="relative bg-accent-red border-2 border-white px-6 py-4 sm:px-8 sm:py-5">
            <div className="text-accent-yellow font-condensed font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight">
              MUSIK
            </div>
            <div className="text-white font-condensed font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wide mt-1">
              VED VANDTÅRNET
            </div>
            <div className="text-white font-condensed font-medium text-xs sm:text-sm uppercase tracking-wider mt-1">
              PRÆSENTERER
            </div>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-condensed font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-tight leading-tight mb-6"
        >
          SOMMER 2026
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-sans text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8"
        >
          Gratis koncerter ved Grindsted Vandtårn
        </motion.p>

        {/* Location info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <div className="bg-accent-yellow px-6 py-3 font-condensed font-bold text-background text-sm sm:text-base uppercase tracking-wide">
            GRINDSTED VANDTÅRN
          </div>
        </motion.div>
      </div>
    </section>
  );
}
