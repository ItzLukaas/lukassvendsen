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
      className="scroll-mt-28 bg-zinc-50 py-16 sm:py-20 lg:py-24"
      aria-labelledby="spidskompetencer-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-2xl mb-12 lg:mb-16">
          <h2
            id="spidskompetencer-heading"
            className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl border-l-4 border-themeB pl-4"
          >
            {competencies.sectionTitle}
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            {competencies.sectionIntro}
          </p>
        </header>

        {/* Hovedkompetencer: Fotografering + Videoproduktion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14 lg:mb-16">
          {competencies.skills.map((skill, i) => {
            const Icon = SKILL_ICONS[i] ?? Camera;
            return (
              <article
                key={skill.title}
                className="rounded-2xl bg-white p-6 sm:p-8 border border-zinc-200/80 shadow-sm hover:shadow-md hover:border-themeB/20 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-themeB/10 text-themeB mb-5">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  {skill.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                  {skill.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Områder: Event, sport, privat, erhverv */}
        <div>
          <h3 className="text-base font-semibold text-zinc-800 mb-2">
            {competencies.areasTitle}
          </h3>
          <p className="text-sm text-zinc-600 mb-8 max-w-xl">
            {competencies.areasIntro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {competencies.areas.map((area, i) => {
              const Icon = AREA_ICONS[i] ?? Briefcase;
              return (
                <div
                  key={area.title}
                  className="flex gap-4 rounded-xl bg-white p-5 border border-zinc-200/80 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-themeB">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900">
                      {area.title}
                    </h4>
                    <p className="mt-1 text-sm text-zinc-600 leading-snug">
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
