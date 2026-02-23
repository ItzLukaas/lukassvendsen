'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { galleryImages } from '@/content/data';
import type { GalleryImageMeta } from '@/content/data';
import type { Photo } from 'react-photo-album';

const BLUR =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTgxODFiIi8+PC9zdmc+';

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
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 border-t border-border"
      aria-labelledby="galleri-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2
          id="galleri-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Galleri
        </h2>
        <p className="mt-2 text-muted-foreground text-sm sm:text-base">
          Et udvalg af mine arbejder.
        </p>

        <div className="mt-10">
          <PhotoAlbum
            photos={photos}
            layout="rows"
            targetRowHeight={280}
            spacing={8}
            padding={0}
            onClick={({ index: i }) => open(i)}
          />
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
      </div>
    </section>
  );
}
