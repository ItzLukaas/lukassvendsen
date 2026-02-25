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
        {/* Overlay for bedre laesbarhed */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.75) 100%)',
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <span className="inline-block text-[10px] font-semibold tracking-[0.35em] uppercase text-white/50 mb-5">
          Fotograf
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.25rem] leading-[1.15]">
          {headline}
        </h1>
        <p className="mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-lg mx-auto font-medium">
          {subline}
        </p>
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <Link
            href="#galleri"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-lg transition hover:bg-white/95 hover:shadow-xl hover:scale-[1.02]"
          >
            Se galleri
          </Link>
          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/90 bg-white/10 backdrop-blur-sm px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20 hover:border-white"
          >
            Kontakt
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
