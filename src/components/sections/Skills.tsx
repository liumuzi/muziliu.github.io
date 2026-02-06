'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skills } from '@/data/skills';
import { SECTIONS } from '@/lib/constants';

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id={SECTIONS.SKILLS} className="py-20 bg-gray-200 border-y border-black">
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
            <div key={category.id} className="border border-black bg-white p-5">
              <h3 className="font-mono text-sm font-bold text-black uppercase mb-4 border-b border-gray-200 pb-2">
                {t(category.category)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sidx) => (
                  <span
                    key={sidx}
                    className="border border-gray-300 px-3 py-1 text-xs font-mono font-bold bg-white hover:bg-black hover:text-white hover:border-black transition-all"
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
