'use client';

import React from 'react';
import { FadeInView } from '@/components/animations/FadeInView';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TimelineItem } from '@/components/ui/TimelineItem';
import { experience } from '@/data/experience';
import { SECTIONS } from '@/lib/constants';

export function Experience() {
  return (
    <section id={SECTIONS.EXPERIENCE} className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <FadeInView>
          <SectionHeading
            title={{ zh: '工作经历', en: 'Work Experience' }}
            subtitle={{
              zh: '在游戏行业和算法工程领域的专业经验',
              en: 'Professional experience in game industry and algorithm engineering',
            }}
          />
        </FadeInView>

        <div className="mt-12">
          {experience.map((item, idx) => (
            <TimelineItem key={item.id} item={item} delay={idx * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
