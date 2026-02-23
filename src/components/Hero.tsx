'use client';

import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/content/data';

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100dvh] min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-28 text-center sm:px-6"
      aria-label="Velkommen"
    >
      {/* Parallax background */}
      <div
        className="absolute inset-0 -z-20 bg-neutral-900"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat min-[900px]:bg-fixed"
          style={{
            backgroundImage: `url(${siteConfig.heroImage})`,
          }}
        />
      </div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/75"
        aria-hidden
      />

      {/* Centered content with optional glass */}
      <div className="relative z-0 max-w-3xl mx-auto">
        <div className="rounded-2xl bg-white/[0.06] backdrop-blur-md px-6 py-10 sm:px-10 sm:py-12 shadow-2xl shadow-black/20 border border-white/10">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl animate-in opacity-0 [animation-name:fadeInUp] [animation-delay:0.15s]">
            {siteConfig.name}
          </h1>
          <p className="mt-5 text-lg text-white/85 sm:text-xl animate-in opacity-0 [animation-name:fadeInUp] [animation-delay:0.35s] drop-shadow-md">
            {siteConfig.heroSubline}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-in opacity-0 [animation-name:fadeInUp] [animation-delay:0.55s]">
            <Button
              asChild
              size="lg"
              className="min-h-12 px-8 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/25 border-0"
            >
              <Link href="#galleri">Se portfolio</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-h-12 px-8 rounded-xl border-2 border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white/60 font-semibold"
            >
              <Link href="#kontakt">Kontakt</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#om-mig"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
        aria-label="Scroll ned"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </Link>
    </section>
  );
}
