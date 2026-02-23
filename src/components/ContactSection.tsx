'use client';

import { Mail } from 'lucide-react';
import { contact } from '@/content/data';

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-28 relative py-24 lg:py-32 overflow-hidden bg-themeB animate-fade-in-up animate-fade-in-up-delay-5"
      aria-labelledby="kontakt-heading"
    >
      {/* Abstrakte bølger i tema-farve omkring CTA – fader blødt ind */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
        <div className="relative w-full max-w-2xl h-[340px] sm:h-[400px]">
          {/* Blød teal-blob (tema #0A2E36 lysere) */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] animate-wave-fade-in animate-wave-fade-in-delay-2"
            viewBox="0 0 400 400"
            fill="none"
            style={{ stroke: 'hsl(191 50% 28% / 0.4)', strokeWidth: 1.5 }}
          >
            <path d="M200 200c0-60-40-100-100-100S0 140 0 200s40 100 100 100 100-40 100-100c0-30 15-60 50-60s50 30 50 60-20 60-50 60-50-30-50-60z" />
          </svg>
          {/* Bølge 1 – stor blød ring */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] animate-wave-fade-in"
            viewBox="0 0 400 400"
            fill="none"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1"
          >
            <circle cx="200" cy="200" r="180" />
          </svg>
          {/* Bølge 2 – bløde bølgelinjer */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] animate-wave-fade-in animate-wave-fade-in-delay-1"
            viewBox="0 0 500 300"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1.5"
          >
            <path d="M0 150 Q125 80 250 150 T500 150" strokeLinecap="round" />
            <path d="M0 180 Q125 110 250 180 T500 180" strokeLinecap="round" />
          </svg>
          {/* Bølge 3 – organisk kurve (tema-farve lysere) */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] animate-wave-fade-in animate-wave-fade-in-delay-2"
            viewBox="0 0 400 400"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          >
            <path d="M50 200 Q200 120 350 200 Q200 280 50 200" />
            <path d="M80 220 Q200 160 320 220" />
          </svg>
          {/* Bølge 4 – indre ringe omkring CTA */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] animate-wave-fade-in animate-wave-fade-in-delay-3"
            viewBox="0 0 200 200"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          >
            <ellipse cx="100" cy="100" rx="90" ry="90" />
            <ellipse cx="100" cy="100" rx="75" ry="75" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
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
