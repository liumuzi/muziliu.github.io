'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { GameProject } from '@/types/content';

interface ProjectCardProps {
  project: GameProject;
  delay?: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <div className="group relative h-full">
      <div className="h-full border border-black bg-white p-5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-all duration-200">
        {/* Content */}
        <div className="space-y-3 h-full flex flex-col">
          {/* Header with status */}
          <div className="flex items-start justify-between gap-3 border-b border-gray-200 pb-3">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-black uppercase tracking-tight leading-tight">
                {t(project.title)}
              </h3>
              <p className="text-xs text-gray-600 mt-1 font-mono">{t(project.subtitle)}</p>
            </div>
            {project.status && (
              <div className="border border-black bg-gray-100 px-2 py-1">
                <span className="font-mono text-[10px] font-bold text-black uppercase">
                  {t(project.status)}
                </span>
              </div>
            )}
          </div>

          <p className="font-mono text-[10px] text-gray-500 font-bold uppercase">{t(project.period)}</p>

          {/* Description */}
          <p className="text-black leading-relaxed text-sm flex-1">
            {t(project.description)}
          </p>

          {/* Achievements */}
          {project.achievements && project.achievements.length > 0 && (
            <div className="space-y-2 py-3 border-t border-gray-200">
              {project.achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs">
                  <span className="text-black font-bold mt-0.5">▸</span>
                  <span className="text-gray-700">{t(achievement)}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
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
            <div className="flex gap-2 pt-3 border-t border-gray-200">
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-300 bg-white px-3 py-2 font-mono text-[10px] font-bold uppercase hover:bg-black hover:text-white hover:border-black transition-all"
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
