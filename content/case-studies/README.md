# Case studies / blogindlæg

Hver case study er en Markdown-fil (`.md`) i denne mappe.

## Format

Øverst i filen skal der være **front matter** mellem `---`:

```yaml
---
title: "Titel der vises overalt"
date: "2024-01-15"
excerpt: "Kort beskrivelse til forsiden og listevisning."
image: "/images/case-studies/mit-billede.jpg"
client: "Kundenavn (valgfri)"
---
```

- **title** – vises som overskrift
- **date** – bruges til sortering (nyeste først)
- **excerpt** – kort teaser
- **image** – forsidebillede (fx i `public/images/case-studies/`)
- **client** – valgfri, vises som label

Efter front matter skriver du indholdet i **Markdown**. Du kan bruge:

- Overskrifter (`##`, `###`)
- **Fed**, *kursiv*
- Billeder: `![alt-tekst](/images/case-studies/billede.jpg)`
- Links, lister osv.

Filnavnet (uden .md) bliver URL-slugget, fx `event-fotografering.md` → `/case-studies/event-fotografering`.

## Billeder

Læg billeder i `public/images/case-studies/` og referer med `/images/case-studies/filnavn.jpg` i både front matter (`image`) og i markdown-teksten.
