'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BilingualText } from '@/types/content';

interface SectionHeadingProps {
  title: BilingualText;
  subtitle?: BilingualText;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const { t } = useLanguage();

  return (
    <div className="mb-12 max-w-4xl">
      <div className="border-l-3 border-black pl-4">
        <h2 className="font-sans text-3xl font-black text-black uppercase tracking-tight mb-2">
          {t(title)}
        </h2>
        {subtitle && (
          <p className="text-sm text-gray-600 leading-relaxed font-mono">
            {t(subtitle)}
          </p>
        )}
      </div>
    </div>
  );
}
