'use client';

import { useState, useCallback } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { galleryImages } from '@/content/data';
import type { GalleryImageMeta } from '@/content/data';
import type { Photo } from 'react-photo-album';

function toPhotoAlbumPhotos(images: GalleryImageMeta[]): Photo[] {
  return images.map((img) => ({
    src: img.src,
    width: img.width,
    height: img.height,
    alt: img.alt,
    title: img.title,
    key: img.id,
  }));
}

const photos = toPhotoAlbumPhotos(galleryImages);

export function GallerySection() {
  const [index, setIndex] = useState(-1);
  const open = useCallback((i: number) => setIndex(i), []);
  const close = useCallback(() => setIndex(-1), []);

  return (
    <section
      id="galleri"
      className="scroll-mt-28 bg-white py-28 sm:py-36 lg:py-44"
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
          <PhotoAlbum
            photos={photos}
            layout="rows"
            targetRowHeight={420}
            spacing={12}
            padding={0}
            onClick={({ index: i }) => open(i)}
          />
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
        slides={photos.map((p, i) => ({
          src: p.src,
          width: p.width,
          height: p.height,
          alt: p.alt ?? undefined,
          title: galleryImages[i]?.description ?? p.title ?? undefined,
        }))}
      />
    </section>
  );
}
