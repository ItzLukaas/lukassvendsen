# Musik ved Vandtårnet

Hjemmeside for gratis koncerter ved Grindsted Vandtårn. Bygget med Next.js, Tailwind CSS og design baseret på den officielle poster.

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

- **Arrangementer:** Rediger `src/content/events.ts` for at tilføje eller opdatere arrangementer.
- **Tekst og branding:** Rediger `src/content/data.ts` for at opdatere site config, SEO-tekst osv.
- **Design:** Farver og typografi er defineret i `src/app/globals.css` og `tailwind.config.ts` baseret på den officielle poster.
- **SEO:** Opdater `siteConfig` i `src/content/data.ts` med din rigtige URL og evt. Google Search Console-verifikation i `src/app/layout.tsx`.

## Teknisk

- **Next.js 14** (App Router)
- **Tailwind CSS** + **shadcn/ui**-inspireret komponenter
- **SEO:** semantisk HTML, metadata, JSON-LD, sitemap, robots, billedoptimering (Next/Image)
