import { Camera, Trophy, Users, Sparkles } from 'lucide-react';
import { specialties } from '@/content/data';

const icons = [Camera, Trophy, Users, Sparkles];

export function SpecialtiesSection() {
  return (
    <section
      id="specialer"
      className="scroll-mt-20 bg-zinc-50/70 py-20 lg:py-28"
      aria-labelledby="specialer-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[hsl(var(--accent))] uppercase">
              Services
            </span>
            <h2
              id="specialer-heading"
              className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Mine specialområder
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-md">
            Fra sport og events til sociale medier og arrangementer – jeg tilpasser stilen til dit projekt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article
                key={item.title}
                className="group relative rounded-2xl bg-white p-6 sm:p-7 shadow-sm border border-zinc-200/80 hover:border-[hsl(var(--accent))]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] group-hover:bg-[hsl(var(--accent))]/15 transition-colors">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Tøv ikke med at kontakte mig – store som små projekter.
        </p>
      </div>
    </section>
  );
}
