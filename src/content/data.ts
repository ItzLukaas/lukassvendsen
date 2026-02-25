export const siteConfig = {
  /** Branding – vises i header, footer og titler */
  brandName: 'Lukas Photography',
  name: 'Lukas Svendsen',
  title: 'Lukas Photography – Personlig fotograf i Danmark | Portræt, event & bryllup',
  description:
    'Lukas Photography – personlig fotograf i Danmark. Portrætfotografering, eventfotografering, bryllup og kreative projekter. Lukas Svendsen fanger øjeblikke og historier med kameraet. Kontakt for booking.',
  url: 'https://lukassvendsen.dk',
  keywords: [
    'fotograf',
    'Lukas Photography',
    'Lukas Svendsen',
    'portrætfotograf',
    'eventfotograf',
    'bryllupsfotograf',
    'Danmark',
    'personlig fotografering',
    'Grindsted',
  ],
  ogImage: '/og.jpg',
  /**
   * Hero-billeder – to måder at bruge billeder:
   *
   * 1) LOKALT: Læg filer i mappen "public" i projektet (fx public/images/hero.png).
   *    I stien herunder skriv KUN "/images/hero.png" – aldrig "public/" foran.
   *    Så: læg fil i public/images/hero.png → brug '/images/hero.png'.
   *
   * 2) SKY/URL: Brug fuld URL (https://...) fra fx Cloudinary, Google Photos, egen server.
   *    Indsæt bare URL'en i heroImages. For galleri + Next/Image: tilføj hostname i next.config.mjs under images.remotePatterns.
   */
  heroImage: '/images/hero.png',
  heroImages: ['https://i.postimg.cc/mb4Svcpk/585544018-122097576195133740-8603435135905782102-n.png', 'https://i.postimg.cc/mb4Svcpk/585544018-122097576195133740-8603435135905782102-n.png', 'https://picsum.photos/seed/hero3/1920/1080'],
  heroHeadline: 'Jeg fortæller historier gennem mit kamera',
  heroSubline:
    'Hej, jeg er Lukas. Jeg elsker at møde mennesker og fange det, der betyder noget – uanset om det er et portræt, en fest eller et kreativt projekt. Lad os snakke.',
  /** Kort linje under subline – freelance + klar til arrangement */
  heroTagline: 'Freelance fotograf – klar til dit næste arrangement, event eller bryllup.',
};

export const about = {
  heading: 'Om Lukas',
  title: 'Passion for det perfekte øjeblik',
  /** Portrætbillede – læg fx i public/about/portrait.jpg og sæt til '/about/portrait.jpg'. Lad stå tom for placeholder. */
  image: 'https://media.discordapp.net/attachments/980020447313797160/1476205978864193597/image.jpg?ex=69a04773&is=699ef5f3&hm=d268956e8c0e40d432d570cdac0e2b0d3bb58e312b44858dee5d028fac0a76cf&=&format=webp&width=1522&height=856',
  content: `Jeg er Lukas, og fotografi er mere end et job for mig – det er den måde jeg ser verden på. Jeg vil rigtig gerne lære dig at kende og fange det, der er vigtigt for dig.

Jeg arbejder med naturligt lys, rene billeder og øjeblikke der taler for sig selv. Portrætter, events eller kreative projekter – jeg tager det personligt og giver dig billeder, du kan lide at kigge tilbage på.

Jeg er baseret i Danmark og siger sjældent nej til en god historie. Skriv eller ring, så finder vi ud af det sammen.`,
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

/** Fuld galleri-side: alle billeder (forside-udvalg + flere). Udvid med egne billeder efter behov. */
export const galleryImagesFull: GalleryImageMeta[] = [
  ...galleryImages,
  { id: '7', src: 'https://picsum.photos/seed/g7/800/1000', width: 800, height: 1000, alt: 'Portræt udendørs', title: 'Portræt', description: 'Portrætfoto.' },
  { id: '8', src: 'https://picsum.photos/seed/g8/1000/800', width: 1000, height: 800, alt: 'Event stemning', title: 'Event', description: 'Eventfoto.' },
  { id: '9', src: 'https://picsum.photos/seed/g9/800/1200', width: 800, height: 1200, alt: 'Portræt vertikalt', title: 'Portræt', description: 'Portrætfoto.' },
  { id: '10', src: 'https://picsum.photos/seed/g10/1200/800', width: 1200, height: 800, alt: 'Landskab bred', title: 'Landskab', description: 'Landskabsfoto.' },
  { id: '11', src: 'https://picsum.photos/seed/g11/800/1000', width: 800, height: 1000, alt: 'Naturligt lys', title: 'Portræt', description: 'Portrætfoto.' },
  { id: '12', src: 'https://picsum.photos/seed/g12/1000/800', width: 1000, height: 800, alt: 'Arrangement', title: 'Event', description: 'Eventfoto.' },
  { id: '13', src: 'https://picsum.photos/seed/g13/800/1000', width: 800, height: 1000, alt: 'Kreativt portræt', title: 'Kreativt', description: 'Kreativt portræt.' },
  { id: '14', src: 'https://picsum.photos/seed/g14/800/800', width: 800, height: 800, alt: 'Kvadratisk format', title: 'Portræt', description: 'Portrætfoto.' },
  { id: '15', src: 'https://picsum.photos/seed/g15/1000/800', width: 1000, height: 800, alt: 'Stemning', title: 'Landskab', description: 'Stemningsbillede.' },
  { id: '16', src: 'https://picsum.photos/seed/g16/800/1000', width: 800, height: 1000, alt: 'Portræt tæt på', title: 'Portræt', description: 'Portrætfoto.' },
  { id: '17', src: 'https://picsum.photos/seed/g17/1200/800', width: 1200, height: 800, alt: 'Fest og folk', title: 'Event', description: 'Eventfoto.' },
  { id: '18', src: 'https://picsum.photos/seed/g18/800/1000', width: 800, height: 1000, alt: 'Detalje', title: 'Detalje', description: 'Detaljefoto.' },
  { id: '19', src: 'https://picsum.photos/seed/g19/800/1200', width: 800, height: 1200, alt: 'Høj format', title: 'Portræt', description: 'Portrætfoto.' },
  { id: '20', src: 'https://picsum.photos/seed/g20/1000/800', width: 1000, height: 800, alt: 'Område', title: 'Landskab', description: 'Landskabsfoto.' },
  { id: '21', src: 'https://picsum.photos/seed/g21/800/1000', width: 800, height: 1000, alt: 'Gruppe', title: 'Gruppe', description: 'Gruppebillede.' },
  { id: '22', src: 'https://picsum.photos/seed/g22/800/1000', width: 800, height: 1000, alt: 'Portræt natur', title: 'Portræt', description: 'Portrætfoto.' },
  { id: '23', src: 'https://picsum.photos/seed/g23/1000/800', width: 1000, height: 800, alt: 'Event bred', title: 'Event', description: 'Eventfoto.' },
  { id: '24', src: 'https://picsum.photos/seed/g24/800/1000', width: 800, height: 1000, alt: 'Kunstnerisk', title: 'Kreativt', description: 'Kreativt portræt.' },
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
    url: '/logos/logo1.png',
    logoSrc: 'logos/logo1.png',
  },
  {
    name: 'Event Bureau',
    role: 'Eventfotografering',
    url: 'logos/logo1.png',
    logoSrc: 'logos/logo1.png',
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
      'Vi starter med en uforpligtende snak – enten på mail eller telefon – om hvad du drømmer om. Så finder vi location, lys og stemning sammen. Under fotograferingen guider jeg dig, så du kan slappe af og være dig selv. Det er vigtigt for mig, at du har det godt.',
  },
  {
    question: 'Hvor lang tid går der, før jeg får mine billeder?',
    answer:
      'Som udgangspunkt leverer jeg de færdige billeder inden for 7–10 hverdage. Har du brug for dem hurtigere, siger du bare til – så finder vi en løsning.',
  },
  {
    question: 'Arbejder du kun i et bestemt område?',
    answer:
      'Jeg er baseret i Danmark og kører gerne rundt i hele landet. Skal det være udlandet, kan vi også tale om det.',
  },
  {
    question: 'Kan vi lave noget der passer præcis til mit projekt?',
    answer:
      'Ja, det er lige det jeg vil. Ingen projekter er ens – så skriv eller ring, og så finder vi ud af hvad der giver mening for dig og din situation.',
  },
];

export const contact = {
  email: 'kontakt@lukassvendsen.dk',
  phone: '+45 24 46 35 50',
  address: 'Ribersvej 90, Grindsted',
  instagram: 'https://instagram.com/lukassvendsen',
  /** CTA-tekster til kontaktsektionen */
  ctaHeading: 'Lad os skabe noget sammen',
  ctaText:
    'Har du en idé, et event eller bare lyst til at høre hvad jeg kan tilbyde? Jeg svarer gerne – skriv eller ring, så tager vi den derfra.',
  ctaButtonEmail: 'Skriv til mig',
};
