import Image from 'next/image';
import { about } from '@/content/data';

export function AboutSection() {
  const hasImage = about.image && about.image.length > 0;

  return (
    <section
      id="om-mig"
      className="scroll-mt-28 bg-gradient-mesh py-20 lg:py-28 animate-fade-in-up"
      aria-labelledby="om-mig-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 lg:order-2">
            {hasImage ? (
              <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-2xl shadow-accent-lg ring-1 ring-themeB/20 transition-transform duration-300 hover:-translate-y-1">
                <Image
                  src={about.image}
                  alt="Portræt af Lukas Svendsen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
              </div>
            ) : (
              <div className="aspect-[4/5] max-w-md rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-100 flex items-center justify-center">
                <span className="text-5xl font-extralight text-zinc-400" aria-hidden>
                  LS
                </span>
              </div>
            )}
          </div>
          <div className="lg:col-span-7 lg:order-1">
            <span className="text-xs font-semibold tracking-widest text-themeB uppercase">
              Om mig
            </span>
            <h2
              id="om-mig-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl border-l-4 border-themeB pl-4"
            >
              {about.heading}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground font-medium">
              {about.title}
            </p>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              {about.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-[15px] sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
