'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FadeInView } from '@/components/animations/FadeInView';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { research } from '@/data/research';
import { SECTIONS } from '@/lib/constants';

export function Research() {
  const { t } = useLanguage();

  return (
    <section id={SECTIONS.RESEARCH} className="py-24 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6">
        <FadeInView>
          <SectionHeading
            title={{ zh: '研究项目', en: 'Research Projects' }}
            subtitle={{
              zh: '在香港中文大学进行的学术研究与项目',
              en: 'Academic research and projects at The Chinese University of Hong Kong',
            }}
          />
        </FadeInView>

        <div className="space-y-8">
          {research.map((project, idx) => (
            <FadeInView key={project.id} delay={idx * 0.1}>
              <div className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">
                      {t(project.title)}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-neutral-500 mt-2">
                      <span>{t(project.institution)}</span>
                      <span>•</span>
                      <span>{t(project.period)}</span>
                    </div>
                  </div>

                  <p className="text-neutral-700 leading-relaxed">
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

                  {project.publication && (
                    <div className="bg-neutral-50 rounded p-4 border border-neutral-200">
                      <p className="text-sm font-semibold text-neutral-800 mb-1">
                        {t({ zh: '发表论文', en: 'Publication' })}
                      </p>
                      <p className="text-sm text-neutral-700 font-medium">
                        {t(project.publication.title)}
                      </p>
                      <p className="text-xs text-neutral-600 mt-1">
                        {project.publication.authors}
                      </p>
                      <p className="text-xs text-neutral-500 mt-1">
                        {t(project.publication.venue)}, {project.publication.year}
                      </p>
                      {project.publication.url && (
                        <a
                          href={project.publication.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline mt-2 inline-block"
                        >
                          {t({ zh: '查看论文', en: 'View Paper' })} →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
