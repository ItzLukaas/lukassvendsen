'use client';

import Link from 'next/link';
import { useCaseStudyLoading } from '@/context/CaseStudyLoadingContext';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function CaseStudyLink({ href, children, className }: Props) {
  const { setCaseStudyLoading } = useCaseStudyLoading();

  return (
    <Link
      href={href}
      className={className}
      onClick={() => setCaseStudyLoading(true)}
    >
      {children}
    </Link>
  );
}
