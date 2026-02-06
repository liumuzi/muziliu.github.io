'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExperienceItem } from '@/types/content';

interface TimelineItemProps {
  item: ExperienceItem;
  delay?: number;
}

export function TimelineItem({ item, delay = 0 }: TimelineItemProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full"></div>
      <div className="absolute left-[5px] top-5 w-0.5 h-full bg-neutral-200"></div>

      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-neutral-900">{t(item.company)}</h3>
          <p className="text-lg text-neutral-600 mt-1">{t(item.role)}</p>
          <div className="flex gap-3 text-sm text-neutral-500 mt-1">
            <span>{t(item.period)}</span>
            {item.location && <span>• {t(item.location)}</span>}
          </div>
        </div>

        <div className="space-y-6">
          {item.projects.map((project, idx) => (
            <div key={idx} className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
              <h4 className="text-lg font-semibold text-neutral-800 mb-2">
                {t(project.title)}
              </h4>
              <p className="text-neutral-700 leading-relaxed mb-3">
                {t(project.description)}
              </p>
              {project.achievements && project.achievements.length > 0 && (
                <ul className="space-y-1">
                  {project.achievements.map((achievement, aidx) => (
                    <li key={aidx} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="text-primary mt-1">•</span>
                      <span>{t(achievement)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
