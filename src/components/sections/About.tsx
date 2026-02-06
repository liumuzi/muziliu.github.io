'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeInView } from '@/components/animations/FadeInView';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/content';
import { SECTIONS } from '@/lib/constants';

export function About() {
  const { t } = useLanguage();

  return (
    <section id={SECTIONS.ABOUT} className="py-24 bg-gray-100 border-y-6 border-black">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          title={{ zh: '关于我', en: 'ABOUT' }}
        />

        <div className="border-6 border-black bg-white p-8 brutalist-shadow">
          <p className="text-black leading-relaxed text-lg mb-8">
            {t(personalInfo.bio)}
          </p>

          <div className="flex flex-wrap gap-4 border-t-3 border-black pt-6">
            {personalInfo.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-3 border-black bg-white px-6 py-3 font-mono font-bold text-sm uppercase hover:bg-black hover:text-white transition-colors"
              >
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
