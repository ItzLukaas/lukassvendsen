import Link from 'next/link';
import Image from 'next/image';
import { getCaseStudies } from '@/lib/case-studies';
import { siteConfig } from '@/content/data';

export const metadata = {
  title: 'Case studies',
  description: `Projekter og opgaver fra Lukas Photography – ${siteConfig.name}. Bryllupper, firma, portrætter og mere.`,
};

export default async function CaseStudiesPage() {
  const studies = await getCaseStudies();

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <header>
          <span className="text-xs font-semibold tracking-widest text-[hsl(var(--extra))] uppercase">
            Portfolio
          </span>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl border-l-4 border-[hsl(var(--extra))] pl-4">
            Case studies
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Her deler jeg udvalgte projekter og kundeopgaver – fra events og firma til portrætter og kreative projekter.
          </p>
        </header>

        {studies.length === 0 ? (
          <p className="mt-12 text-muted-foreground">Ingen case studies endnu. Kom snart igen.</p>
        ) : (
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {studies.map((study) => (
              <li key={study.slug}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:border-zinc-300 hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] bg-zinc-100">
                    {study.image ? (
                      <Image
                        src={study.image}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-zinc-300 text-4xl font-light">
                        LS
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    {study.client && (
                      <p className="text-xs font-medium text-[hsl(var(--extra))] uppercase tracking-wider">
                        {study.client}
                      </p>
                    )}
                    <h2 className="mt-1 text-lg font-semibold text-zinc-900 group-hover:text-[hsl(var(--extra))] transition-colors">
                      {study.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {study.excerpt}
                    </p>
                    <span className="mt-3 inline-block text-sm font-medium text-[hsl(var(--extra))]">
                      Læs mere →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
