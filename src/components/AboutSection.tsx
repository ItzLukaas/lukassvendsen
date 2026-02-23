import Image from 'next/image';
import { about } from '@/content/data';

export function AboutSection() {
  const hasImage = about.image && about.image.length > 0;

  return (
    <section
      id="om-mig"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24"
      aria-labelledby="om-mig-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="om-mig-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {about.heading}
        </h2>
        <p className="mt-2 text-muted-foreground">
          {about.title}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <div className="lg:col-span-5">
            {hasImage ? (
              <div className="relative aspect-[3/4] max-w-sm overflow-hidden rounded-lg">
                <Image
                  src={about.image}
                  alt="Portræt af Lukas Svendsen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            ) : (
              <div className="aspect-[3/4] max-w-sm rounded-lg bg-muted flex items-center justify-center">
                <span className="text-4xl font-light text-muted-foreground/50" aria-hidden>
                  LS
                </span>
              </div>
            )}
          </div>
          <div className="lg:col-span-7 space-y-5 text-muted-foreground text-[15px] leading-relaxed sm:text-base">
            {about.content.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
