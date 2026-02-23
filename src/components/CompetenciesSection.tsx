import {
  Camera,
  Video,
  CalendarDays,
  Trophy,
  Home,
  Briefcase,
} from 'lucide-react';
import { competencies } from '@/content/data';

const SKILL_ICONS = [Camera, Video];
const AREA_ICONS = [CalendarDays, Trophy, Home, Briefcase];

export function CompetenciesSection() {
  return (
    <section
      id="spidskompetencer"
      className="scroll-mt-28 bg-white pt-12 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
      aria-labelledby="spidskompetencer-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 lg:mb-12">
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

        {/* Hovedkompetencer: Fotografering + Videoproduktion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mb-10 lg:mb-12">
          {competencies.skills.map((skill, i) => {
            const Icon = SKILL_ICONS[i] ?? Camera;
            return (
              <article
                key={skill.title}
                className="rounded-xl bg-zinc-50/80 p-5 sm:p-6 border border-zinc-200/60 hover:border-themeB/20 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-themeB/10 text-themeB mb-4">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {skill.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Områder: Event, sport, privat, erhverv */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-foreground mb-1">
            {competencies.areasTitle}
          </h3>
          <p className="text-sm text-muted-foreground mb-5 max-w-xl">
            {competencies.areasIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {competencies.areas.map((area, i) => {
              const Icon = AREA_ICONS[i] ?? Briefcase;
              return (
                <div
                  key={area.title}
                  className="flex gap-3 rounded-lg border border-zinc-200/60 bg-zinc-50/50 p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-themeB/10 text-themeB">
                    <Icon className="h-4 w-4" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-foreground text-sm">
                      {area.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-snug">
                      {area.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
