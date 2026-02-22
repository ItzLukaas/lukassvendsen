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
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+';

/** Konverter til react-photo-album format (layout tilpasser automatisk forskellige formater). */
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
      className="scroll-mt-24 bg-gradient-to-b from-background to-muted/20 py-16 sm:py-24 lg:py-28"
      aria-labelledby="galleri-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2
            id="galleri-heading"
            className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-foreground"
          >
            Galleri
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            Et udvalg af mine bedste arbejder – portrætter, events og kreative projekter.
          </p>
        </header>

        <PhotoAlbum
          photos={photos}
          layout="masonry"
          columns={(containerWidth) => {
            if (containerWidth < 480) return 1;
            if (containerWidth < 768) return 2;
            if (containerWidth < 1024) return 2;
            return 3;
          }}
          spacing={12}
          padding={0}
          onClick={({ index: i }) => open(i)}
          render={({ photo, imageProps }) => (
            <div {...imageProps} className={imageProps.className}>
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:shadow-xl hover:ring-black/10 focus-within:ring-2 focus-within:ring-primary/50">
                <Image
                  src={photo.src}
                  alt={photo.alt ?? ''}
                  title={photo.title ?? undefined}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover cursor-pointer"
                  placeholder="blur"
                  blurDataURL={BLUR}
                />
              </div>
            </div>
          )}
        />

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
