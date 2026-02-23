import { Camera, Video } from 'lucide-react';
import { competencies } from '@/content/data';

const SKILL_ICONS = [Camera, Video];

export function CompetenciesSection() {
  return (
    <section
      id="spidskompetencer"
      className="scroll-mt-28 bg-zinc-50/80 py-14 sm:py-16 lg:py-20"
      aria-labelledby="spidskompetencer-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <header className="mb-8 lg:mb-10">
          <span className="text-xs font-semibold tracking-widest text-themeB uppercase">
            Kompetencer
          </span>
          <h2
            id="spidskompetencer-heading"
            className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl border-l-4 border-themeB pl-4"
          >
            {competencies.sectionTitle}
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl">
            {competencies.sectionIntro}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {competencies.skills.map((skill, i) => {
            const Icon = SKILL_ICONS[i] ?? Camera;
            return (
              <article
                key={skill.title}
                className="group rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 ease-out hover:border-themeB/30 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-themeB/10 text-themeB mb-5 group-hover:bg-themeB group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {skill.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </article>
            );
          })}
        </div>

        {competencies.areas?.length > 0 && (
          <div className="mt-10 lg:mt-12">
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">
              {competencies.areasTitle}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {competencies.areas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-xl border border-zinc-200/80 bg-white/80 p-4 text-center transition-colors hover:border-themeB/20 hover:bg-white"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {area.title}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground leading-snug">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
