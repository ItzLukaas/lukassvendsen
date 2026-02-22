import Image from 'next/image';
import { clients } from '@/content/data';

export function ClientsSection() {
  const doubled = [...clients, ...clients];

  return (
    <section
      id="kunder"
      className="scroll-mt-24 py-16 sm:py-24 lg:py-28 bg-muted/10"
      aria-labelledby="kunder-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2
            id="kunder-heading"
            className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-foreground"
          >
            Kunder & samarbejdspartnere
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            Udvalgte virksomheder og samarbejdspartnere jeg har arbejdet med.
          </p>
        </header>

        <div className="relative overflow-hidden">
          <div
            className="flex items-center gap-10 sm:gap-14 py-4 animate-logo-marquee"
            aria-label="Logo-slider med tidligere kunder"
          >
            {doubled.map((client) => (
              <a
                key={`${client.name}-${client.logoSrc}-${client.url}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center min-w-[120px] sm:min-w-[150px] h-16 sm:h-20 opacity-80 hover:opacity-100 transition-all"
              >
                <div className="relative h-10 sm:h-12 w-auto">
                  <Image
                    src={client.logoSrc}
                    alt={client.name}
                    width={160}
                    height={48}
                    className="h-full w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-200"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
