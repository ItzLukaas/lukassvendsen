import { Camera, Trophy, Users, Sparkles } from 'lucide-react';
import { specialties } from '@/content/data';

export function SpecialtiesSection() {
  const icons = [Camera, Trophy, Users, Sparkles];

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
          {specialties.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
            <article
                key={item.title}
                className="rounded-2xl border border-border/80 bg-card/80 shadow-sm hover:shadow-lg hover:border-accent/60 transition-all duration-200 p-6 sm:p-7 flex flex-col group"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4 group-hover:scale-105 group-hover:bg-accent/15 transition-transform duration-200">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm sm:text-base text-muted-foreground">
          Tøv ikke med at hyre mig til dine projekter – store som små. Sammen
          finder vi den visuelle stil, der passer til dig.
        </p>
      </div>
    </section>
  );
}

