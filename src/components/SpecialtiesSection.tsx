import { Camera, Trophy, Users, Sparkles } from 'lucide-react';
import { specialties } from '@/content/data';

const icons = [Camera, Trophy, Users, Sparkles];

export function SpecialtiesSection() {
  return (
    <section
      id="specialer"
      className="scroll-mt-24 relative py-20 sm:py-28 lg:py-32"
      aria-labelledby="specialer-heading"
    >
      {/* Tydelig adskillelse: mørkeblå baggrund */}
      <div className="absolute inset-0 bg-gradient-dark-blue" />
      <div className="absolute inset-0 bg-pattern-grid-dark" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2
            id="specialer-heading"
            className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-white"
          >
            Mine specialområder
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Jeg hjælper brands, virksomheder og mennesker med visuel fortælling
            – fra sport og events til sociale medier og personlige projekter.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {specialties.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article
                key={item.title}
                className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-7 flex flex-col group hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300 mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mt-12 text-center text-sm sm:text-base text-slate-400">
          Tøv ikke med at hyre mig til dine projekter – store som små. Sammen
          finder vi den visuelle stil, der passer til dig.
        </p>
      </div>
    </section>
  );
}
