'use client';

import { Mail } from 'lucide-react';
import { contact } from '@/content/data';

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-28 relative pt-0 py-24 lg:py-32 overflow-hidden bg-themeB animate-fade-in-up animate-fade-in-up-delay-5"
      aria-labelledby="kontakt-heading"
    >
      {/* Bølget topgrænse – fra Section Divider Generator (TWColors), så bølgen er tydelig */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none" style={{ height: '100px' }} aria-hidden>
        <svg
          className="relative block w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          fill="#0A2E36"
        >
          <path d="M0,100 C200,20 400,100 600,50 C800,0 1000,80 1200,30 L1200,100 L0,100 Z" />
        </svg>
      </div>

      {/* Solide bølgeformer omkring CTA (som referencebilledet) – fader ind */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
        <div className="relative w-full max-w-2xl h-[320px] sm:h-[380px]">
          {/* Bølge 1 – solid form med bølget overkant */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[100%] animate-wave-fade-in"
            viewBox="0 0 600 200"
            fill="currentColor"
            style={{ color: 'hsl(var(--extra) / 0.25)' }}
          >
            <path d="M0 200 L0 120 Q100 80 200 120 Q300 160 400 100 Q500 50 600 100 L600 200 Z" />
          </svg>
          {/* Bølge 2 – blød rullebølge */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[90%] animate-wave-fade-in animate-wave-fade-in-delay-1"
            viewBox="0 0 500 180"
            fill="currentColor"
            style={{ color: 'hsl(var(--extra) / 0.2)' }}
          >
            <path d="M0 180 L0 100 Q125 60 250 100 Q375 140 500 100 L500 180 Z" />
          </svg>
          {/* Bølge 3 – mindre ripple-lignende bølge */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[70%] animate-wave-fade-in animate-wave-fade-in-delay-2"
            viewBox="0 0 400 140"
            fill="currentColor"
            style={{ color: 'hsl(var(--extra) / 0.15)' }}
          >
            <path d="M0 140 L0 90 Q50 70 100 90 Q150 110 200 90 Q250 70 300 90 Q350 110 400 90 L400 140 Z" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center pt-12">
        <h2
          id="kontakt-heading"
          className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Klar til at skabe noget sammen?
        </h2>
        <p className="mt-4 text-lg text-white/85 sm:text-xl">
          Uanset om det er et portræt, et event eller et kreativt projekt – så skriv. Jeg vender tilbage hurtigst muligt.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-themeB shadow-lg hover:bg-white/95 active:scale-[0.99] transition-all duration-200"
          >
            <Mail className="h-5 w-5" />
            Kontakt mig
          </a>
          <a
            href={`tel:${contact.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/80 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:border-white transition-colors duration-200"
          >
            Ring
          </a>
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
