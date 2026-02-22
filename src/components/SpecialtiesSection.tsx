import { specialties } from '@/content/data';

export function SpecialtiesSection() {
  return (
    <section
      id="specialer"
      className="scroll-mt-24 py-16 sm:py-24 lg:py-28 bg-grid-soft/40"
      aria-labelledby="specialer-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2
            id="specialer-heading"
            className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-foreground"
          >
            Mine specialområder
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            Jeg hjælper brands, virksomheder og mennesker med visuel fortælling
            – fra sport og events til sociale medier og personlige projekter.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {specialties.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border/80 bg-card/70 shadow-sm hover:shadow-md hover:border-accent/60 transition-all duration-200 p-6 sm:p-7 flex flex-col"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm sm:text-base text-muted-foreground">
          Tøv ikke med at hyre mig til dine projekter – store som små. Sammen
          finder vi den visuelle stil, der passer til dig.
        </p>
      </div>
    </section>
  );
}

