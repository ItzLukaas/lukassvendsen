import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { GallerySection } from '@/components/GallerySection';
import { ClientsSection } from '@/components/ClientsSection';
import { ContactSection } from '@/components/ContactSection';
import { JsonLd } from '@/components/JsonLd';
import { siteConfig, galleryImages } from '@/content/data';

export default function HomePage() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: 'Fotograf',
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    knowsAbout: ['Fotografi', 'Portrætfotografering', 'Eventfotografering'],
  };

  const galleryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Fotogalleri – ' + siteConfig.name,
    description: siteConfig.description,
    author: { '@type': 'Person', name: siteConfig.name },
    image: galleryImages.map((img) => ({
      '@type': 'ImageObject',
      contentUrl: img.src.startsWith('http') ? img.src : `${siteConfig.url}${img.src}`,
      name: img.title,
      description: img.description ?? img.alt,
    })),
  };

  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={galleryJsonLd} />
      <Hero />
      <AboutSection />
      <GallerySection />
      <ClientsSection />
      <ContactSection />
    </>
  );
}
