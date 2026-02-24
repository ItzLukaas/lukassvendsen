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
      <div className="absolute inset-0 z-0 bg-zinc-800">
        {heroImage ? (
          <div
            className="absolute inset-0 hero-bg-image"
            style={{ backgroundImage: `url("${heroImage}")` }}
            aria-hidden
          />
        ) : null}
        {/* Grå gradient over billedet så teksten står tydeligt frem */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.6) 100%)',
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white/40">
          Fotograf
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          {headline}
        </h1>
        <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-lg mx-auto">
          {subline}
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            href="#galleri"
            className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-medium text-zinc-900 shadow-md transition hover:bg-white/95 hover:shadow-lg"
          >
            Se galleri
          </Link>
          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-xl border border-white/80 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/15 hover:border-white"
          >
            Kontakt
          </Link>
        </div>
      </div>

      <Link
        href="#om-mig"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 p-2 text-white/35 hover:text-white/60 transition-colors"
        aria-label="Scroll ned"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </Link>
    </section>
  );
}
