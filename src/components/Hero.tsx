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
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${heroImage}")` }}
          />
        ) : null}
        <div className="absolute inset-0 bg-black/25" aria-hidden />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/70">
          Fotograf
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          {headline}
        </h1>
        <p className="mt-6 text-lg text-white/85">
          {subline}
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            href="#galleri"
            className="inline-flex items-center justify-center rounded-full bg-[hsl(var(--accent))] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 hover:bg-accent-dark hover:shadow-xl hover:shadow-black/25 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
          >
            Se portfolio
          </Link>
          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/70 bg-white/10 backdrop-blur-sm px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/20 hover:border-white transition-colors duration-200"
          >
            Kontakt
          </Link>
        </div>
      </div>

      <Link
        href="#om-mig"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 p-2 text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
        aria-label="Scroll ned"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </Link>
    </section>
  );
}
