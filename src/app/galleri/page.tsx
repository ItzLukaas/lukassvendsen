'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { galleryImagesFull } from '@/content/data';
import type { GalleryImageMeta } from '@/content/data';

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

        {/* Galleri – ens containere, object-fit: cover, ingen stretching */}
        <div className="w-full px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <div className="mx-auto max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {galleryImagesFull.map((img: GalleryImageMeta, i) => (
              <button
                key={img.id}
                type="button"
                onClick={() => open(i)}
                className="group relative aspect-square w-full overflow-hidden rounded-2xl bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--extra))] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
