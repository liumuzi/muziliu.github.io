'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { research } from '@/data/research';
import { SECTIONS } from '@/lib/constants';

export function Research() {
  const { t } = useLanguage();

  return (
    <section id={SECTIONS.RESEARCH} className="py-24 bg-white border-b-2 border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title={{ zh: '研究项目', en: 'RESEARCH' }}
          subtitle={{
            zh: '在香港中文大学进行的学术研究',
            en: 'Academic research at CUHK',
          }}
        />

        <div className="space-y-6 max-w-4xl">
          {research.map((project) => (
            <div key={project.id} className="bg-white border-2 border-gray-800 brutalist-shadow-sm hover:brutalist-shadow hover:-translate-y-0.5 transition-all duration-200 p-6">
              <div className="space-y-3">
                <div className="border-b border-gray-200 pb-3">
                  <h3 className="text-lg font-bold text-black uppercase tracking-tight">
                    {t(project.title)}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 mt-2 font-mono">
                    <span>{t(project.institution)}</span>
                    <span>•</span>
                    <span>{t(project.period)}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed">
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

                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link, lidx) => (
                      <a
                        key={lidx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-gray-800 bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
                      >
                        {t(link.label)} →
                      </a>
                    ))}
                  </div>
                )}

                {project.publication && (
                  <div className="bg-gray-100 border border-gray-300 p-4 mt-3">
                    <p className="text-xs font-bold text-black uppercase mb-2 font-mono">
                      PUBLICATION
                    </p>
                    <p className="text-sm text-black font-bold">
                      {t(project.publication.title)}
                    </p>
                    <p className="text-xs text-gray-600 mt-1 font-mono">
                      {project.publication.authors}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 font-mono">
                      {t(project.publication.venue)}, {project.publication.year}
                    </p>
                    {project.publication.url && (
                      <a
                        href={project.publication.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-gray-800 bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 transition-all duration-200 mt-2"
                      >
                        {t({ zh: '查看论文', en: 'VIEW PAPER' })} →
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
