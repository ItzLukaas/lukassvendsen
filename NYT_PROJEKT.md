# Opret nyt projekt for Musik ved Vandtårnet

Dette projekt er nu konfigureret som en helt ny hjemmeside for "Musik ved Vandtårnet", uafhængigt af lukassvendsen hjemmesiden.

## Valg 1: Nyt GitHub Repository (Anbefalet)

For at have det som et helt separat projekt:

1. **Opret et nyt repository på GitHub:**
   - Gå til GitHub og opret et nyt repository (fx `musik-ved-vandtarnet`)
   - Vælg at det skal være tomt (ingen README, .gitignore osv.)

2. **Push til det nye repository:**
   ```bash
   git remote remove origin
   git remote add origin https://github.com/DIT-BRUGERNAVN/musik-ved-vandtarnet.git
   git push -u origin main
   ```

3. **Deploy på Vercel:**
   - Gå til [vercel.com](https://vercel.com)
   - Log ind med GitHub
   - Klik **Add New** → **Project**
   - Vælg det nye repository
   - Vercel genkender Next.js automatisk – klik **Deploy**
   - Din hjemmeside får en URL som `musik-ved-vandtarnet.vercel.app`

## Valg 2: Behold i samme repository, men separat branch

Hvis du vil beholde det i samme repository:

1. **Opret en ny branch:**
   ```bash
   git checkout -b musik-ved-vandtarnet
   git push -u origin musik-ved-vandtarnet
   ```

2. **Deploy på Vercel:**
   - I Vercel kan du konfigurere hver branch til at have sin egen deployment
   - Eller opret et nyt projekt i Vercel der peger på denne branch

## Valg 3: Lokal udvikling

For at køre hjemmesiden lokalt:

```bash
npm install
npm run dev
```

Åbn [http://localhost:3000](http://localhost:3000) i din browser.

## Næste skridt

Når hjemmesiden er deployet, kan du:
- Tilpasse arrangementer i `src/content/events.ts`
- Opdatere farver/design i `src/app/globals.css` hvis nødvendigt
- Tilføje custom domain i Vercel under Settings → Domains
