import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { getCaseStudies, getCaseStudyBySlug } from '@/lib/case-studies';
import { siteConfig } from '@/content/data';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const studies = await getCaseStudies();
  return studies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) return { title: 'Case study' };
  return {
    title: study.title,
    description: study.excerpt,
    openGraph: {
      title: study.title,
      description: study.excerpt,
      images: study.image ? [study.image] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <main className="min-h-screen bg-white">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 pb-24">
        <Link
          href="/case-studies"
          className="inline-block text-sm font-medium text-[hsl(var(--extra))] hover:underline mb-8"
        >
          ← Alle case studies
        </Link>

        <header className="mb-10">
          {study.client && (
            <p className="text-xs font-semibold tracking-widest text-[hsl(var(--extra))] uppercase">
              {study.client}
            </p>
          )}
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            {study.title}
          </h1>
          {study.date && (
            <time className="mt-2 block text-sm text-muted-foreground" dateTime={study.date}>
              {new Date(study.date).toLocaleDateString('da-DK', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}
        </header>

        {study.image && (
          <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100 mb-12">
            <Image
              src={study.image}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </figure>
        )}

        <div className="case-study-body text-zinc-600 leading-relaxed space-y-6 text-base [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-zinc-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_a]:text-[hsl(var(--extra))] [&_a]:underline [&_img]:rounded-xl [&_img]:my-8 [&_p]:leading-relaxed">
          <ReactMarkdown
            components={{
              img({ src, alt }) {
                if (!src) return null;
                const isLocal = src.startsWith('/');
                if (isLocal)
                  return (
                    <span className="my-6 block relative aspect-video overflow-hidden rounded-xl">
                      <Image
                        src={src}
                        alt={alt ?? ''}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 672px"
                      />
                    </span>
                  );
                return <img src={src} alt={alt ?? ''} className="rounded-xl my-4 max-w-full" />;
              },
            }}
          >
            {study.body}
          </ReactMarkdown>
        </div>

        <footer className="mt-14 pt-8 border-t border-zinc-200">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-sm font-medium text-[hsl(var(--extra))] hover:underline"
          >
            ← Tilbage til case studies
          </Link>
        </footer>
      </article>
    </main>
  );
}
