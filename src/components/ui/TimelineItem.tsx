'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExperienceItem } from '@/types/content';

interface TimelineItemProps {
  item: ExperienceItem;
  delay?: number;
}

export function TimelineItem({ item }: TimelineItemProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-white border-2 border-black brutalist-shadow-sm hover:brutalist-shadow hover:-translate-y-0.5 transition-all duration-200 p-6">
      <div className="space-y-4">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-2xl font-black text-black uppercase tracking-tight">{t(item.company)}</h3>
          <p className="text-base text-gray-700 mt-1 font-bold">{t(item.role)}</p>
          <div className="flex gap-3 text-xs text-gray-500 mt-2 font-mono">
            <span>{t(item.period)}</span>
            {item.location && <span>• {t(item.location)}</span>}
          </div>
        </div>

        <div className="space-y-4">
          {item.projects.map((project, idx) => (
            <div key={idx} className="border-l-3 border-gray-300 pl-4 hover:border-black transition-colors">
              <h4 className="text-sm font-bold text-black uppercase mb-2">
                {t(project.title)}
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                {t(project.description)}
              </p>
              {project.achievements && project.achievements.length > 0 && (
                <ul className="space-y-1">
                  {project.achievements.map((achievement, aidx) => (
                    <li key={aidx} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="text-black font-bold mt-0.5">▸</span>
                      <span>{t(achievement)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
