'use client';

import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/content/data';

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100dvh] min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-24 text-center sm:px-6"
      aria-label="Velkommen"
    >
      {/* Baggrundsbillede med let nedsænket brightness */}
      <div className="absolute inset-0 -z-20 bg-neutral-900" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-[0.85] min-[900px]:bg-fixed"
          style={{ backgroundImage: `url(${siteConfig.heroImage})` }}
        />
      </div>

      {/* Mørk gradient overlay (50–65%+) for kontrast og læsbarhed */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/55 to-black/70"
        aria-hidden
      />

      {/* Ekstra gradient bag tekst (top → bund) + semi-transparent container */}
      <div className="relative z-0 max-w-3xl mx-auto">
        <div className="relative rounded-2xl bg-black/30 backdrop-blur-sm px-6 py-10 sm:px-12 sm:py-14 shadow-2xl border border-white/10">
          {/* Inder gradient for ekstra læsbarhed */}
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none"
            aria-hidden
          />
          <div className="relative">
            <h1
              className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-in opacity-0 [animation-name:fadeInUp] [animation-delay:0.15s]"
              style={{
                textShadow:
                  '0 2px 10px rgba(0,0,0,0.4), 0 4px 24px rgba(0,0,0,0.3)',
              }}
            >
              {siteConfig.heroHeadline}
            </h1>
            <p
              className="mt-6 text-lg text-white/95 sm:text-xl max-w-2xl mx-auto animate-in opacity-0 [animation-name:fadeInUp] [animation-delay:0.35s]"
              style={{
                textShadow: '0 1px 8px rgba(0,0,0,0.35)',
              }}
            >
              {siteConfig.heroSubline}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-in opacity-0 [animation-name:fadeInUp] [animation-delay:0.55s]">
              <Button
                asChild
                size="lg"
                className="min-h-12 px-8 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg border-0 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Link href="#galleri">Se mit arbejde</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-h-12 px-8 rounded-xl border-2 border-white/50 bg-white/5 text-white hover:bg-white/15 hover:border-white/70 font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Link href="#kontakt">Kontakt mig</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="#om-mig"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
        aria-label="Scroll ned"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </Link>
    </section>
  );
}
