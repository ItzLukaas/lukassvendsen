'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { galleryImagesFull } from '@/content/data';
import type { GalleryImageMeta } from '@/content/data';

function getGridSpanClasses(img: GalleryImageMeta, index: number, total: number): string {
  const ratio = img.width / img.height;
  const isLandscape = ratio > 1.2;
  const isVeryWide = ratio > 2.0;

  if (total === 1 && isLandscape) {
    return 'col-span-full';
  }

  if (index === 0 && isVeryWide && total > 2) {
    return 'md:col-span-2 lg:col-span-3';
  }

  if (isLandscape) {
    return 'md:col-span-2';
  }

  return '';
}

export default function GalleriPage() {
  const [index, setIndex] = useState(-1);
  const open = useCallback((i: number) => setIndex(i), []);
  const close = useCallback(() => setIndex(-1), []);

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Top-sektion med titel – samme stil som resten af sitet */}
        <div className="bg-white pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-44 lg:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="text-xs font-semibold tracking-widest text-themeB uppercase">
                  Portfolio
                </span>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl border-l-4 border-themeB pl-4">
                  Galleri
                </h1>
              </div>
              <p className="text-muted-foreground text-sm max-w-sm">
                Et udvalg af portrætter, events og kreative projekter fra Lukas Photography.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/"
                className="text-sm text-themeB hover:underline"
              >
                ← Tilbage til forsiden
              </Link>
            </div>
          </div>
        </div>

        {/* Galleri – editorial grid uden faste højder */}
        <div className="w-full px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <div className="mx-auto max-w-[1280px] grid gap-4 sm:gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] [grid-auto-flow:dense]">
            {galleryImagesFull.map((img: GalleryImageMeta, i) => (
              <button
                key={img.id}
                type="button"
                onClick={() => open(i)}
                className={`group relative w-full overflow-hidden rounded-2xl bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--extra))] focus-visible:ring-offset-2 focus-visible:ring-offset-white ${getGridSpanClasses(img, i, galleryImagesFull.length)}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="block w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        close={close}
        index={index}
        slides={galleryImagesFull.map((img) => ({
          src: img.src,
          width: img.width,
          height: img.height,
          alt: img.alt,
          title: img.description ?? img.title,
        }))}
      />
    </>
  );
}
