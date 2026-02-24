# Billeder til sitet

Læg dine billeder her (fx `hero.png`, `hero2.jpg`). De serveres automatisk fra roden.

## Sådan bruger du dem i data.ts

- Filen `public/images/hero.png` → i **data.ts** skriv: **`'/images/hero.png'`**
- Filen `public/images/galleri-1.jpg` → i **data.ts** skriv: **`'/images/galleri-1.jpg'`**

**Vigtigt:** Stien skal starte med `/` og må **ikke** indeholde ordet `public`.

## Sky / eksterne links

Du kan også bruge billeder fra nettet: indsæt den fulde URL (https://...) direkte i `heroImages` eller `galleryImages` i **src/content/data.ts**.  
Hvis du bruger Next.js `<Image>`-komponenten med eksterne billeder, skal hostname tilføjes i **next.config.mjs** under `images.remotePatterns`.
