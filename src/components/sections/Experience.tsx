'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { experience } from '@/data/experience';
import { SECTIONS } from '@/lib/constants';

export function Experience() {
  return (
    <section id={SECTIONS.EXPERIENCE} className="py-20 bg-gray-200 border-y border-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title={{ zh: '工作经历', en: 'EXPERIENCE' }}
          subtitle={{
            zh: '在游戏行业和算法工程领域的专业经验',
            en: 'Professional experience in game industry',
          }}
        />

        <div className="space-y-6 max-w-4xl">
          {experience.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
