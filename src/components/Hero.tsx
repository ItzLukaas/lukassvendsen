'use client';

import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { siteConfig } from '@/content/data';

export function Hero() {
  const headline = siteConfig.heroHeadline ?? 'Jeg fortæller historier gennem mit kamera';
  const subline = siteConfig.heroSubline ?? 'Personlig fotograf med fokus på ægte øjeblikke og visuel storytelling.';
  const heroImage = siteConfig.heroImage ?? '';

  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 py-24"
      aria-label="Velkommen"
    >
      {/* Baggrund */}
      <div className="absolute inset-0 z-0 bg-zinc-900">
        {heroImage ? (
          <div
            className="absolute inset-0 opacity-90 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${heroImage}")` }}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Indhold */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
          {headline}
        </h1>
        <p className="mt-6 text-lg text-white/90 sm:text-xl drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)]">
          {subline}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="#galleri"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-blue-700 transition-colors"
          >
            Se mit arbejde
          </Link>
          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white/60 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            Kontakt mig
          </Link>
        </div>
      </div>

      <Link
        href="#om-mig"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
        aria-label="Scroll ned"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </Link>
    </section>
  );
}
