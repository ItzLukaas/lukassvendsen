import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { GallerySection } from '@/components/GallerySection';
import { ClientsSection } from '@/components/ClientsSection';
import { ContactSection } from '@/components/ContactSection';
import { JsonLd } from '@/components/JsonLd';
import { siteConfig } from '@/content/data';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: 'Fotograf',
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    knowsAbout: ['Fotografi', 'Portrætfotografering', 'Eventfotografering'],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />
      <AboutSection />
      <GallerySection />
      <ClientsSection />
      <ContactSection />
    </>
  );
}
