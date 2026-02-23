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
  /** Fullscreen hero – rediger tekster og baggrund her */
  heroImage:
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&q=80',
  heroHeadline: 'Jeg fortæller historier gennem mit kamera',
  heroSubline:
    'Personlig fotograf med fokus på ægte øjeblikke og visuel storytelling.',
};

export const about = {
  heading: 'Om mig',
  title: 'Passion for det perfekte øjeblik',
  /** Portrætbillede – læg fx i public/about/portrait.jpg og sæt til '/about/portrait.jpg'. Lad stå tom for placeholder. */
  image: '',
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

/** Spidskompetencer – vises mellem galleri og kunder-slider */
export const competencies = {
  sectionTitle: 'Mine spidskompetencer',
  sectionIntro:
    'Jeg kombinerer fotografi og video til et samlet visuelt udtryk – fra koncept til færdigt materiale.',
  skills: [
    {
      title: 'Fotografering',
      description:
        'Portrætter, events og kreative projekter med fokus på naturligt lys og ægte øjeblikke. Jeg leverer billeder, der fortæller historier og passer til både privat og erhverv.',
    },
    {
      title: 'Videoproduktion',
      description:
        'Korte film, reklamefilm, event-dækning og sociale medier. Fra idé og optagelse til klipning og lyd – så du får et færdigt produkt, der matcher dit behov.',
    },
  ],
  areasTitle: 'Event, sport, privat og erhverv',
  areasIntro: 'Jeg arbejder på tværs af disse områder – uanset om opgaven er stor eller lille.',
  areas: [
    {
      title: 'Event',
      description: 'Bryllupper, fester, konferencer og arrangementer. Jeg fanger stemningen og de afgørende øjeblikke.',
    },
    {
      title: 'Sport',
      description: 'Dynamik, tempo og udfordringer. Både træning, løb og konkurrencer – tæt på handlingen.',
    },
    {
      title: 'Privat',
      description: 'Familie, portrætter, fødselsdage og personlige projekter. Rolige og ægte billeder af jer.',
    },
    {
      title: 'Erhverv',
      description: 'Firmaportrætter, branding, reklame og virksomhedsevents. Professionelt udtryk til din virksomhed.',
    },
  ],
};

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
  phone: '+45 24 46 35 50',
  address: 'Ribersvej 90, Grindsted',
  instagram: 'https://instagram.com/lukassvendsen',
};
