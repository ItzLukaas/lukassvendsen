# Lukas Svendsen – Fotografi

Personlig one-pager hjemmeside til fotografi med Next.js, Tailwind CSS og shadcn/ui.

## Kør lokalt

```bash
npm install
npm run dev
```

Åbn [http://localhost:3000](http://localhost:3000).

## Deploy på Vercel (push → GitHub → automatisk live)

**Første gang:** Følg [DEPLOY.md](./DEPLOY.md) – der står præcis hvad du skal gøre for at pushe til GitHub og knytte Vercel, så **hver push til `main` automatisk deployer**.

To måder at komme i gang:

### 1. Via GitHub (anbefalet)

1. Opret et repository på GitHub og push dette projekt.
2. Gå til [vercel.com](https://vercel.com) og log ind (evt. med GitHub).
3. Klik **Add New** → **Project** og importer dit GitHub-repo.
4. Vercel genkender Next.js automatisk – klik **Deploy**.
5. Siden får en URL som `dit-projekt.vercel.app`. Du kan tilknytte eget domæne under **Settings → Domains**.

Ved hver push til `main` deployer Vercel automatisk en ny version.

### 2. Via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Følg promptene (link til projekt, build-kommando osv.). Herefter: `vercel --prod` for at gå live.

## Tilpasning

- **Tekst og branding:** Rediger `src/content/data.ts` (om mig, kunder, kontakt, SEO-tekst).
- **Galleri:** Rediger `galleryImages` i `src/content/data.ts`. For hvert billede kan du sætte `src`, `width`, `height` (proportioner), `alt`, `title` og `description` (SEO). Layoutet tilpasser automatisk forskellige formater (masonry). Brug lokale filer (`/gallery/1.jpg`) eller eksterne URLs (tilføj hostname i `next.config.mjs`).
- **SEO:** Opdater `siteConfig` i `src/content/data.ts` med din rigtige URL og evt. Google Search Console-verifikation i `src/app/layout.tsx`.

## Teknisk

- **Next.js 14** (App Router)
- **Tailwind CSS** + **shadcn/ui**-inspireret komponenter
- **SEO:** semantisk HTML, metadata, JSON-LD, sitemap, robots, billedoptimering (Next/Image)
