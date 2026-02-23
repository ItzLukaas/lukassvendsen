import Image from 'next/image';
import { clients } from '@/content/data';

export function ClientsSection() {
  const doubled = [...clients, ...clients];

  return (
    <section
      id="kunder"
      className="scroll-mt-28 relative bg-themeB py-16 lg:py-20 overflow-hidden bg-pattern-grid-on-dark"
      aria-labelledby="kunder-heading"
    >
      <p
        id="kunder-heading"
        className="text-center text-xs font-semibold tracking-widest text-white/70 uppercase mb-10"
      >
        Samarbejdspartnere
      </p>
      <div className="overflow-hidden">
        <div
          className="flex items-center gap-14 sm:gap-20 py-2 animate-logo-marquee"
          aria-label="Logo-slider"
        >
          {doubled.map((client) => (
            <a
              key={`${client.name}-${client.logoSrc}`}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center min-w-[110px] sm:min-w-[130px] h-10 opacity-80 hover:opacity-100 transition-opacity grayscale brightness-0 invert"
            >
              <Image
                src={client.logoSrc}
                alt={client.name}
                width={130}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
