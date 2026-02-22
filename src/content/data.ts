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

// Brug dine egne billeder: læg dem i public/gallery/ og skift src til f.eks. '/gallery/1.jpg'
// Du kan også bruge eksterne URLs (tilføj hostname i next.config.mjs under images.remotePatterns)
export const galleryImages = [
  {
    id: '1',
    src: 'https://picsum.photos/seed/portrait1/800/1000',
    alt: 'Portrætfoto – naturligt lys og stemning',
    title: 'Portræt',
  },
  {
    id: '2',
    src: 'https://picsum.photos/seed/event2/800/1000',
    alt: 'Eventfotografi – fest og mennesker',
    title: 'Event',
  },
  {
    id: '3',
    src: 'https://picsum.photos/seed/landscape3/800/1000',
    alt: 'Natur og landskab – stemningsbillede',
    title: 'Landskab',
  },
  {
    id: '4',
    src: 'https://picsum.photos/seed/creative4/800/1000',
    alt: 'Kreativt portræt – kunstnerisk udtryk',
    title: 'Kreativt',
  },
  {
    id: '5',
    src: 'https://picsum.photos/seed/detail5/800/1000',
    alt: 'Detalje og tekstur – tæt på',
    title: 'Detalje',
  },
  {
    id: '6',
    src: 'https://picsum.photos/seed/group6/800/1000',
    alt: 'Gruppebillede – sammenhold',
    title: 'Gruppe',
  },
];

export const clients = [
  { name: 'Virksomhed A', role: 'Branding & portrætter' },
  { name: 'Event Bureau', role: 'Eventfotografering' },
  { name: 'Kulturhuset', role: 'Kulturprojekter' },
  { name: 'Privatkunde', role: 'Familie & portrætter' },
];

export const contact = {
  email: 'kontakt@lukassvendsen.dk',
  phone: '+45 12 34 56 78',
  instagram: 'https://instagram.com/lukassvendsen',
};
