import Image from 'next/image';
import { about } from '@/content/data';

export function AboutSection() {
  const hasImage = about.image && about.image.length > 0;

  return (
    <section
      id="om-mig"
      className="scroll-mt-24 relative py-20 sm:py-28 lg:py-32 overflow-hidden"
      aria-labelledby="om-mig-heading"
    >
      {/* Baggrund: blå gradient + diskret pattern */}
      <div className="absolute inset-0 bg-gradient-section-soft" />
      <div className="absolute inset-0 bg-pattern-dots opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.04] via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-14 sm:mb-16">
          <h2
            id="om-mig-heading"
            className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-foreground"
          >
            {about.heading}
          </h2>
          <p className="mt-4 text-xl text-muted-foreground font-medium">
            {about.title}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portræt eller dekorativ plads */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-end">
            {hasImage ? (
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <Image
                  src={about.image}
                  alt="Portræt af Lukas Svendsen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority={false}
                />
              </div>
            ) : (
              <div className="w-full max-w-sm aspect-[3/4] rounded-2xl bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center ring-1 ring-black/5 shadow-lg">
                <span className="text-6xl font-light text-blue-300/80 select-none" aria-hidden>
                  LS
                </span>
              </div>
            )}
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
            {about.content.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
