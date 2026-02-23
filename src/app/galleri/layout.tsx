import type { Metadata } from 'next';
import { siteConfig } from '@/content/data';

export const metadata: Metadata = {
  title: 'Galleri',
  description: `Fuld galleri med portrætter, events og kreative projekter fra ${siteConfig.brandName}. Se alle billeder.`,
};

export default function GalleriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
