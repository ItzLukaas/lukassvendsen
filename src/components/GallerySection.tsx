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
      className="scroll-mt-20 bg-white py-20 lg:py-28"
      aria-labelledby="galleri-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[hsl(var(--accent))] uppercase">
              Portfolio
            </span>
            <h2
              id="galleri-heading"
              className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
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
        <div className="mx-auto max-w-7xl">
          <PhotoAlbum
            photos={photos}
            layout="rows"
            targetRowHeight={300}
            spacing={10}
            padding={0}
            onClick={({ index: i }) => open(i)}
          />
        </div>
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
