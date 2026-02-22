'use client';

import { useState } from 'react';
import Image from 'next/image';
import { galleryImages } from '@/content/data';
import { cn } from '@/lib/utils';

export function GallerySection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="galleri"
      className="scroll-mt-20 bg-muted/30 py-20 sm:py-28"
      aria-labelledby="galleri-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="galleri-heading"
          className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-center text-foreground"
        >
          Galleri
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          Et udvalg af mine bedste arbejder – portrætter, events og kreative projekter.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setActiveId(activeId === image.id ? null : image.id)}
              className={cn(
                'group relative aspect-[4/5] overflow-hidden rounded-xl bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                activeId === image.id && 'ring-2 ring-primary ring-offset-2'
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-4 left-4 right-4 text-left text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                {image.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
