import { Camera, Trophy, Users, Sparkles } from 'lucide-react';
import { specialties } from '@/content/data';

const icons = [Camera, Trophy, Users, Sparkles];

export function SpecialtiesSection() {
  return (
    <section
      id="specialer"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 border-t border-border"
      aria-labelledby="specialer-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="specialer-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Mine specialområder
        </h2>
        <p className="mt-2 text-muted-foreground text-sm sm:text-base max-w-xl">
          Sport, events, sociale medier og arrangementer – og alt derimellem.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article
                key={item.title}
                className="rounded-lg border border-border bg-card/50 py-5 px-5"
              >
                <Icon className="h-5 w-5 text-muted-foreground" aria-hidden />
                <h3 className="mt-3 text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Tøv ikke med at kontakte mig til dine projekter – store som små.
        </p>
      </div>
    </section>
  );
}
