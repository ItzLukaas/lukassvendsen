import Image from 'next/image';
import { clients } from '@/content/data';

export function ClientsSection() {
  const doubled = [...clients, ...clients];

  return (
    <section
      id="kunder"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 border-t border-border"
      aria-labelledby="kunder-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="kunder-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Kunder & samarbejdspartnere
        </h2>
        <p className="mt-2 text-muted-foreground text-sm sm:text-base">
          Udvalgte virksomheder jeg har arbejdet med.
        </p>

        <div className="mt-10 overflow-hidden">
          <div
            className="flex items-center gap-12 sm:gap-16 py-4 animate-logo-marquee"
            aria-label="Logo-slider"
          >
            {doubled.map((client) => (
              <a
                key={`${client.name}-${client.logoSrc}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center min-w-[100px] sm:min-w-[120px] h-12 opacity-70 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={client.logoSrc}
                  alt={client.name}
                  width={120}
                  height={36}
                  className="h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
