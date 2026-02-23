import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { GallerySection } from '@/components/GallerySection';
import { CompetenciesSection } from '@/components/CompetenciesSection';
import { ClientsSection } from '@/components/ClientsSection';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { SectionFade } from '@/components/SectionFade';
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
      <SectionFade>
        <AboutSection />
      </SectionFade>
      <SectionFade delay={0.05}>
        <GallerySection />
      </SectionFade>
      <SectionFade delay={0.05}>
        <CaseStudiesSection />
      </SectionFade>
      <SectionFade delay={0.05}>
        <CompetenciesSection />
      </SectionFade>
      <SectionFade delay={0.05}>
        <ClientsSection />
      </SectionFade>
      <SectionFade delay={0.05}>
        <FAQSection />
      </SectionFade>
      <SectionFade delay={0.05}>
        <ContactSection />
      </SectionFade>
    </>
  );
}
