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
      <div className="absolute inset-0 z-0 bg-zinc-950">
        {heroImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
            style={{ backgroundImage: `url("${heroImage}")` }}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          {headline}
        </h1>
        <p className="mt-5 text-base text-white/80 sm:text-lg">
          {subline}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="#galleri"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-zinc-900 hover:bg-white/90 transition-colors"
          >
            Se mit arbejde
          </Link>
          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            Kontakt mig
          </Link>
        </div>
      </div>

      <Link
        href="#om-mig"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 p-1.5 text-white/60 hover:text-white transition-colors rounded-full"
        aria-label="Scroll ned"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </Link>
    </section>
  );
}
