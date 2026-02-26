import { MusicHero } from '@/components/MusicHero';
import { EventsSection } from '@/components/EventsSection';
import { JsonLd } from '@/components/JsonLd';
import { siteConfig } from '@/content/data';
import { events } from '@/content/events';

export default function HomePage() {
  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EventSeries',
    name: 'Musik ved Vandtårnet',
    description: siteConfig.description,
    url: siteConfig.url,
    location: {
      '@type': 'Place',
      name: 'Grindsted Vandtårn',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Grindsted',
        addressCountry: 'DK',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Vandtårnets Venner',
    },
    event: events.map((event) => ({
      '@type': 'Event',
      name: `${event.artist} - ${event.dateFull}`,
      startDate: event.dateFull,
      location: {
        '@type': 'Place',
        name: 'Grindsted Vandtårn',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'DKK',
        availability: 'https://schema.org/InStock',
      },
    })),
  };

  return (
    <>
      <JsonLd data={eventJsonLd} />
      <MusicHero />
      <EventsSection />
    </>
  );
}
