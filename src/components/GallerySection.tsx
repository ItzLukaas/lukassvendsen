'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { galleryImages } from '@/content/data';
import type { GalleryImageMeta } from '@/content/data';

export function GallerySection() {
  const [index, setIndex] = useState(-1);
  const open = useCallback((i: number) => setIndex(i), []);
  const close = useCallback(() => setIndex(-1), []);

  return (
    <section
      id="galleri"
      className="scroll-mt-28 bg-white pt-28 pb-14 sm:pt-36 sm:pb-16 lg:pt-44 lg:pb-20"
      aria-labelledby="galleri-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-20 lg:mb-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest text-themeB uppercase">
              Portfolio
            </span>
            <h2
              id="galleri-heading"
              className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl border-l-4 border-themeB pl-4"
            >
              Galleri
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm">
            Et udvalg af portrætter, events og kreative projekter.
          </p>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {galleryImages.map((img: GalleryImageMeta, i) => (
              <button
                key={img.id}
                type="button"
                onClick={() => open(i)}
                className="group relative w-full overflow-hidden rounded-2xl bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--extra))] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="block w-full h-auto transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-[1280px] mt-10 px-4 sm:px-6 lg:px-8 flex justify-center">
          <Link
            href="/galleri"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-[hsl(var(--extra))] bg-transparent px-6 py-3 text-sm font-medium text-[hsl(var(--extra))] transition-colors hover:bg-[hsl(var(--extra))] hover:text-white"
          >
            Se alle mine billeder
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </div>

      {/* Bølge-overgang ned til næste sektion – blød, organisk grænse */}
      <div className="relative w-full h-10 sm:h-12 lg:h-14 -mb-px" aria-hidden>
        <svg
          className="absolute bottom-0 left-0 w-full h-full text-white"
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50 C360 10 600 70 900 35 C1080 15 1260 55 1440 40 L1440 80 L0 80 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <Lightbox
        open={index >= 0}
        close={close}
        index={index}
        slides={galleryImages.map((img) => ({
          src: img.src,
          width: img.width,
          height: img.height,
          alt: img.alt,
          title: img.description ?? img.title,
        }))}
      />
    </section>
  );
}
