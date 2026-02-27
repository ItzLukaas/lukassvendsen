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
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 py-28"
      aria-label="Velkommen"
    >
      <div className="absolute inset-0 z-0 bg-zinc-900">
        {heroImage ? (
          <div
            className="absolute inset-0 hero-bg-image"
            style={{ backgroundImage: `url("${heroImage}")` }}
            aria-hidden
          />
        ) : null}
        {/* Overlay: mørkere nedefra + blød mørkning i midten så teksten ikke frynser */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.82) 100%)',
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 45%, rgba(0,0,0,0.5) 0%, transparent 70%)',
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-white/70 mb-4 [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">
          Fotograf · Billund
        </p>
        <h1
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.5rem] leading-[1.12] [text-shadow:0_2px_20px_rgba(0,0,0,0.8),0_0_1px_rgba(0,0,0,0.9)]"
        >
          {headline}
        </h1>
        {subline ? (
          <p className="mt-6 text-base sm:text-lg text-white/95 leading-relaxed max-w-lg mx-auto font-medium [text-shadow:0_2px_12px_rgba(0,0,0,0.75),0_0_1px_rgba(0,0,0,0.8)]">
            {subline}
          </p>
        ) : null}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <Link
            href="#galleri"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-lg transition hover:bg-white/95 hover:shadow-xl hover:scale-[1.02]"
          >
            Se mine billeder
          </Link>
          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/90 bg-white/10 backdrop-blur-sm px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20 hover:border-white"
          >
            Skriv til mig
          </Link>
        </div>
      </div>

      <Link
        href="#om-mig"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 p-2 rounded-full text-white/40 hover:text-white/70 hover:bg-white/10 transition-colors"
        aria-label="Scroll ned"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </Link>
    </section>
  );
}
