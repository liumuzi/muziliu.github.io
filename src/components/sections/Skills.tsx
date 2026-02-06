'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skills } from '@/data/skills';
import { SECTIONS } from '@/lib/constants';

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id={SECTIONS.SKILLS} className="py-24 bg-white border-t-6 border-black">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title={{ zh: '技能', en: 'SKILLS' }}
          subtitle={{
            zh: '专业技能与能力',
            en: 'Professional capabilities',
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, idx) => (
            <div key={category.id} className="border-6 border-black bg-gray-100 p-6">
              <h3 className="font-mono text-xl font-bold text-black uppercase mb-4 border-b-3 border-black pb-2">
                [{t(category.category)}]
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sidx) => (
                  <span
                    key={sidx}
                    className="border-2 border-black px-3 py-1 text-sm font-sans font-bold bg-white hover:bg-black hover:text-white transition-colors"
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
