import Link from 'next/link';
import Image from 'next/image';
import { getCaseStudies } from '@/lib/case-studies';

const FRONT_PAGE_COUNT = 3;

export async function CaseStudiesSection() {
  const all = await getCaseStudies();
  const studies = all.slice(0, FRONT_PAGE_COUNT);

  if (studies.length === 0) return null;

  return (
    <section
      id="case-studies"
      className="scroll-mt-28 bg-zinc-50/80 py-14 sm:py-16 lg:py-20"
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 lg:mb-10">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[hsl(var(--extra))] uppercase">
              Projekter
            </span>
            <h2
              id="case-studies-heading"
              className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl border-l-4 border-[hsl(var(--extra))] pl-4"
            >
              Case studies
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="text-sm font-medium text-[hsl(var(--extra))] hover:underline shrink-0"
          >
            Se alle case studies →
          </Link>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    <div className="flex h-full items-center justify-center text-zinc-300 text-3xl font-light">
                      LS
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-5">
                  {study.client && (
                    <p className="text-xs font-medium text-[hsl(var(--extra))] uppercase tracking-wider">
                      {study.client}
                    </p>
                  )}
                  <h3 className="mt-1 text-lg font-semibold text-zinc-900 group-hover:text-[hsl(var(--extra))] transition-colors">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {study.excerpt}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
