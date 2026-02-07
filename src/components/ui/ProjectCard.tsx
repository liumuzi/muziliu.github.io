'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { GameProject } from '@/types/content';

interface ProjectCardProps {
  project: GameProject;
  delay?: number;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <div className="group relative h-full">
      <div className="h-full border-2 border-gray-800 bg-white brutalist-shadow-sm hover:brutalist-shadow-hover hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col">
        {/* Image */}
        {project.image && (
          <div className={`relative w-full bg-gray-100 border-b-2 border-gray-800 overflow-hidden ${featured ? 'aspect-[21/9]' : 'aspect-video'}`}>
            <Image
              src={project.image}
              alt={t(project.title)}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={project.id === 'dating-show'}
            />
          </div>
        )}
        
        {/* Content */}
        <div className={`space-y-2.5 flex flex-col flex-1 ${featured ? 'p-8' : 'p-6'}`}>
          {/* Header with status */}
          <div className="flex items-start justify-between gap-3 border-b border-gray-200 pb-3">
            <div className="flex-1">
              <h3 className={`font-bold text-gray-900 uppercase tracking-tight leading-tight ${featured ? 'text-2xl' : 'text-xl'}`}>
                {t(project.title)}
              </h3>
              <p className={`text-gray-600 mt-1 font-mono ${featured ? 'text-sm' : 'text-xs'}`}>{t(project.subtitle)}</p>
            </div>
            {project.status && (
              <div className="border border-gray-800 bg-gray-100 px-2 py-1.5 flex-shrink-0 flex items-center">
                <span className="font-mono text-[10px] font-bold text-gray-900 uppercase leading-none">
                  {t(project.status)}
                </span>
              </div>
            )}
          </div>

          <p className="font-mono text-[10px] text-gray-500 font-bold uppercase">{t(project.period)}</p>

          {/* Description */}
          <p className={`text-gray-600 leading-snug flex-1 ${featured ? 'text-xs' : 'text-[11px]'}`}>
            {t(project.description)}
          </p>

          {/* Achievements */}
          {project.achievements && project.achievements.length > 0 && (
            <div className="space-y-1.5 py-2.5 border-t border-gray-200">
              {project.achievements.map((achievement, idx) => (
                <div key={idx} className={`flex items-start gap-2 ${featured ? 'text-sm' : 'text-xs'}`}>
                  <span className="text-gray-800 font-bold mt-0.5">▸</span>
                  <span className="text-gray-800 leading-snug font-medium">{t(achievement)}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-gray-300 px-2 py-1 text-[10px] font-mono font-bold uppercase bg-white hover:bg-gray-100 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="flex gap-2 pt-2.5 border-t border-gray-200">
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-800 bg-white px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
                >
                  {t(link.label)} →
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
