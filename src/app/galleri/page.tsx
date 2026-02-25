'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { galleryImagesFull } from '@/content/data';
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

const photos = toPhotoAlbumPhotos(galleryImagesFull);

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

        {/* Galleri – samme layout og komponenter som forsiden */}
        <div className="w-full px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <div className="mx-auto max-w-[1280px]">
            <PhotoAlbum
              photos={photos}
              layout="columns"
              columns={(containerWidth) => (containerWidth && containerWidth >= 900 ? 3 : containerWidth && containerWidth >= 600 ? 2 : 1)}
              spacing={12}
              padding={0}
              onClick={({ index: i }) => open(i)}
              componentsProps={(containerWidth) => ({
                image: { style: { objectFit: 'contain' as const } },
              })}
            />
          </div>
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
          title: galleryImagesFull[i]?.description ?? p.title ?? undefined,
        }))}
      />
    </>
  );
}
