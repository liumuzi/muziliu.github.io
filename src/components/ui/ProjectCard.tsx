'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { GameProject } from '@/types/content';

interface ProjectCardProps {
  project: GameProject;
  delay?: number;
  featured?: boolean;
}

export function ProjectCard({ project, delay = 0, featured = false }: ProjectCardProps) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="group relative h-full"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`flex h-full flex-col overflow-hidden border-2 border-gray-800 bg-white brutalist-shadow-sm ${featured ? 'lg:min-h-[410px] lg:flex-row' : ''}`}>
        {/* Image */}
        {project.image && (
          <div className={`relative w-full overflow-hidden border-b-2 border-gray-800 bg-gray-100 ${featured ? 'aspect-[2/1] lg:aspect-auto lg:w-[58%] lg:flex-none lg:border-b-0 lg:border-r-2' : 'aspect-video'}`}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}${project.image}`}
              alt={t(project.title)}
              fill
              className={`object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transform-none ${project.id === 'bug-decor' ? 'object-top' : 'object-center'}`}
              sizes={featured ? '(max-width: 1024px) 100vw, 58vw' : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'}
              priority={project.id === 'bug-decor'}
            />
          </div>
        )}
        
        {/* Content */}
        <div className={`flex flex-1 flex-col ${featured ? 'gap-5 p-6 sm:p-8 lg:w-[42%]' : 'gap-4 p-5 sm:p-6'}`}>
          {/* Header */}
          <div>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2 font-mono text-xs font-semibold text-gray-500">
              <span>{t(project.period)}</span>
              {project.status && (
                <span className="border border-gray-800 bg-gray-100 px-2 py-1 text-[11px] font-bold leading-none text-gray-900">
                  {t(project.status)}
                </span>
              )}
            </div>
            <h3 className={`font-bold leading-tight text-gray-900 ${featured ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
              {t(project.title)}
            </h3>
            <p className="mt-1.5 font-mono text-xs leading-relaxed text-gray-500 sm:text-sm">{t(project.subtitle)}</p>
            {project.socialMetrics && (
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] font-semibold text-gray-600">
                <span className="text-gray-500">{t(project.socialMetrics.platform)}</span>
                <span className="text-gray-400">|</span>
                <span>
                  <span className="text-gray-900">{t(project.socialMetrics.views)}</span> {t({ zh: '浏览', en: 'Views' })}
                </span>
                <span className="text-gray-400">|</span>
                <span>
                  <span className="text-gray-900">{t(project.socialMetrics.likes)}</span> {t({ zh: '点赞', en: 'Likes' })}
                </span>
                <span className="text-gray-400">|</span>
                <span>
                  <span className="text-gray-900">{t(project.socialMetrics.saves)}</span> {t({ zh: '收藏', en: 'Saves' })}
                </span>
                <span className="text-gray-400">|</span>
                <span>
                  <span className="text-gray-900">{t(project.socialMetrics.followers)}</span> {t({ zh: '粉丝', en: 'Followers' })}
                </span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className={`max-w-[66ch] flex-1 leading-relaxed text-gray-600 ${featured ? 'text-base' : 'text-sm'}`}>
            {t(project.description)}
          </p>

          {/* Achievements */}
          {project.achievements && project.achievements.length > 0 && (
            <div className="space-y-2 border-t border-gray-200 pt-4">
              {project.achievements.map((achievement, idx) => (
                <div key={idx} className={`flex items-start gap-2 ${featured ? 'text-base' : 'text-sm'}`}>
                  <span aria-hidden="true" className="mt-0.5 font-bold text-gray-800">▸</span>
                  <span className="font-semibold leading-snug text-gray-900">{t(achievement)}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-gray-200 bg-gray-50 px-2 py-1 font-mono text-[10px] font-semibold text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="flex gap-2 border-t border-gray-200 pt-4">
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center border border-gray-800 bg-white px-3 py-2 font-mono text-xs font-bold hover:bg-gray-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-colors"
                >
                  {t(link.label)} →
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
