'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/content';
import { SECTIONS } from '@/lib/constants';

export function About() {
  const { t } = useLanguage();

  return (
    <section id={SECTIONS.ABOUT} className="py-20 bg-gray-200 border-y border-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title={{ zh: '关于我', en: 'ABOUT' }}
        />

        <div className="bg-white border border-black shadow-2xl p-8 max-w-4xl">
          <p className="text-black leading-relaxed text-base mb-8 font-mono text-sm">
            {t(personalInfo.bio)}
          </p>

          <div className="flex flex-wrap gap-3 border-t border-gray-200 pt-6">
            {personalInfo.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 bg-white px-6 py-3 font-mono font-bold text-xs uppercase hover:bg-black hover:text-white transition-all"
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
