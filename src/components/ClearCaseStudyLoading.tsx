'use client';

import { useEffect } from 'react';
import { useCaseStudyLoading } from '@/context/CaseStudyLoadingContext';

export function ClearCaseStudyLoading() {
  const { setCaseStudyLoading } = useCaseStudyLoading();
  useEffect(() => {
    setCaseStudyLoading(false);
  }, [setCaseStudyLoading]);
  return null;
}
