import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { GallerySection } from '@/components/GallerySection';
import { CompetenciesSection } from '@/components/CompetenciesSection';
import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { ContactSection } from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <GallerySection />
      <AboutSection />
      <CompetenciesSection />
      {/* Case studies er valgfrit – men matcher stadig foto-branding */}
      {/* @ts-expect-error Async Server Component */}
      <CaseStudiesSection />
      <ContactSection />
    </>
  );
}
