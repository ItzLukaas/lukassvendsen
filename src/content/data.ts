export const siteConfig = {
  name: 'Lukas Svendsen',
  title: 'Lukas Svendsen – Fotograf',
  description:
    'Personlig fotografi af Lukas Svendsen. Professionel fotografering, portrætter, events og kreative projekter. Kontakt mig for et samarbejde.',
  url: 'https://lukassvendsen.dk',
  keywords: [
    'fotograf',
    'Lukas Svendsen',
    'portrætfotograf',
    'eventfotograf',
    'Danmark',
    'professionel fotografering',
  ],
  ogImage: '/og.jpg',
};

export const about = {
  heading: 'Om mig',
  title: 'Passion for det perfekte øjeblik',
  content: `Jeg er Lukas, og fotografi er mere end et erhverv for mig – det er en måde at fange livet på. Med kameraet i hånden stræber jeg efter at skabe billeder, der fortæller historier og bevarer følelser og stemninger.

Min stil er gennemtænkt og æstetisk: jeg elsker naturligt lys, rene kompositioner og øjeblikke der taler for sig selv. Uanset om det er portrætter, events eller kreative projekter, er målet altid det samme – at levere billeder, du vil huske.

Jeg arbejder primært i Danmark og er altid åben for nye samarbejder og udfordringer. Lad os skabe noget sammen.`,
};

/**
 * Galleri: Rediger alt tekst og metadata her for SEO.
 * width/height bruges til layout – tilpas efter billedets proportioner (fx 800x600 = landskab, 600x800 = portræt).
 * Du kan bruge lokale filer: '/gallery/1.jpg' eller eksterne URLs (tilføj hostname i next.config.mjs).
 */
export interface GalleryImageMeta {
  id: string;
  src: string;
  width: number;
  height: number;
  /** Brugt som alt-tekst og til søgemaskiner – beskriv billedet kort. */
  alt: string;
  /** Titel vist i galleri og lightbox. */
  title: string;
  /** Længere beskrivelse til SEO og evt. lightbox – valgfri. */
  description?: string;
}

export const galleryImages: GalleryImageMeta[] = [
  {
    id: '1',
    src: 'https://picsum.photos/seed/portrait1/800/1000',
    width: 800,
    height: 1000,
    alt: 'Portrætfoto – naturligt lys og stemning',
    title: 'Portræt',
    description: 'Portrætfotografering med naturligt lys, Lukas Svendsen.',
  },
  {
    id: '2',
    src: 'https://picsum.photos/seed/event2/800/1000',
    width: 800,
    height: 1000,
    alt: 'Eventfotografi – fest og mennesker',
    title: 'Event',
    description: 'Eventfotografering til fest og arrangementer.',
  },
  {
    id: '3',
    src: 'https://picsum.photos/seed/landscape3/1200/800',
    width: 1200,
    height: 800,
    alt: 'Natur og landskab – stemningsbillede',
    title: 'Landskab',
    description: 'Landskabsfotografi og stemningsbilleder.',
  },
  {
    id: '4',
    src: 'https://picsum.photos/seed/creative4/800/1000',
    width: 800,
    height: 1000,
    alt: 'Kreativt portræt – kunstnerisk udtryk',
    title: 'Kreativt',
    description: 'Kreativt portræt med kunstnerisk udtryk.',
  },
  {
    id: '5',
    src: 'https://picsum.photos/seed/detail5/1000/800',
    width: 1000,
    height: 800,
    alt: 'Detalje og tekstur – tæt på',
    title: 'Detalje',
    description: 'Detaljefotografi og tekstur.',
  },
  {
    id: '6',
    src: 'https://picsum.photos/seed/group6/800/1000',
    width: 800,
    height: 1000,
    alt: 'Gruppebillede – sammenhold',
    title: 'Gruppe',
    description: 'Gruppebilleder og sammenhold.',
  },
];

export type ClientLogo = {
  name: string;
  role: string;
  url: string;
  /** Logo-fil – læg i /public/logos/ og opdatér stien her. */
  logoSrc: string;
};

export const clients: ClientLogo[] = [
  {
    name: 'Virksomhed A',
    role: 'Branding & portrætter',
    url: 'https://example.com',
    logoSrc: '/logos/virksomhed-a.svg',
  },
  {
    name: 'Event Bureau',
    role: 'Eventfotografering',
    url: 'https://example.com',
    logoSrc: '/logos/event-bureau.svg',
  },
  {
    name: 'Kulturhuset',
    role: 'Kulturprojekter',
    url: 'https://example.com',
    logoSrc: '/logos/kulturhuset.svg',
  },
  {
    name: 'Privatkunde',
    role: 'Familie & portrætter',
    url: 'https://example.com',
    logoSrc: '/logos/privatkunde.svg',
  },
];

export const specialties = [
  {
    title: 'Sport',
    description:
      'Intense øjeblikke, tempo og energi – fanget midt i bevægelsen, uden at miste detaljerne.',
  },
  {
    title: 'Events',
    description:
      'Alt fra intime sammenkomster til store arrangementer – fokus på stemning, mennesker og øjeblikke.',
  },
  {
    title: 'Sociale medier',
    description:
      'Indhold der er skabt til at performe på sociale platforme – skarpe, visuelt stærke billeder til dine kanaler.',
  },
  {
    title: 'Arrangementer og alt derimellem',
    description:
      'Bryllupper, receptioner, firmaarrangementer og personlige projekter – vi tilpasser stilen til dit behov.',
  },
];

export const faqs = [
  {
    question: 'Hvordan foregår en typisk fotografering?',
    answer:
      'Vi starter med en kort snak om dine ønsker og forventninger. Herefter finder vi de rigtige locations, lys og stemning. Under selve fotograferingen guider jeg dig, så du kan slappe af og være dig selv.',
  },
  {
    question: 'Hvor lang tid går der, før jeg modtager mine billeder?',
    answer:
      'Som udgangspunkt leverer jeg de færdigredigerede billeder inden for 7–10 hverdage, afhængigt af opgavens størrelse. Har du en deadline, kan vi aftale en hurtigere levering.',
  },
  {
    question: 'Arbejder du kun i et bestemt område?',
    answer:
      'Jeg er baseret i Danmark, men kører gerne ud til opgaver i hele landet – og efter aftale også i udlandet.',
  },
  {
    question: 'Kan vi skræddersy en løsning til mit projekt?',
    answer:
      'Ja, meget gerne. Ingen opgaver er ens, og vi finder sammen en løsning, der passer til både budget og behov.',
  },
];

export const contact = {
  email: 'kontakt@lukassvendsen.dk',
  phone: '+45 12 34 56 78',
  instagram: 'https://instagram.com/lukassvendsen',
};
