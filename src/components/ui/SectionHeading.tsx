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
    <div className="mb-16 max-w-4xl">
      <div className="border-l-8 border-black pl-6">
        <h2 className="font-sans text-heading font-bold text-black uppercase tracking-tight mb-4">
          {t(title)}
        </h2>
        {subtitle && (
          <p className="text-lg text-gray-700 leading-relaxed font-mono">
            // {t(subtitle)}
          </p>
        )}
      </div>
    </div>
  );
}
