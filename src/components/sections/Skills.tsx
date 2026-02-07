'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skills } from '@/data/skills';
import { SECTIONS } from '@/lib/constants';

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id={SECTIONS.SKILLS} className="py-20 bg-gray-100 border-b-2 border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title={{ zh: '技能', en: 'SKILLS' }}
          subtitle={{
            zh: '专业技能与能力',
            en: 'Professional capabilities',
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {skills.map((category) => (
            <div key={category.id} className="border-2 border-gray-800 bg-white p-6 brutalist-shadow-sm hover:brutalist-shadow hover:-translate-y-0.5 transition-all duration-200">
              <h3 className="font-mono text-sm font-bold text-black uppercase mb-4 border-b border-gray-200 pb-2">
                {t(category.category)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sidx) => (
                  <span
                    key={sidx}
                    className="border border-gray-800 px-3 py-1 text-xs font-mono font-bold bg-white hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {t(skill)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
