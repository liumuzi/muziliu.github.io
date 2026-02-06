'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { GameProject } from '@/types/content';

interface ProjectCardProps {
  project: GameProject;
  delay?: number;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <div className="group relative h-full">
      <div className="h-full border-6 border-black bg-white p-6 hover:brutalist-shadow transition-all duration-200">
        {/* Content */}
        <div className="space-y-4 h-full flex flex-col">
          {/* Header with status */}
          <div className="flex items-start justify-between gap-4 border-b-3 border-black pb-4">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-black uppercase tracking-tight leading-tight">
                {t(project.title)}
              </h3>
              <p className="text-sm text-gray-700 mt-2 font-mono">{t(project.subtitle)}</p>
            </div>
            {project.status && (
              <div className="border-3 border-black bg-primary px-3 py-1">
                <span className="font-mono text-xs font-bold text-white uppercase">
                  {t(project.status)}
                </span>
              </div>
            )}
          </div>

          <p className="font-mono text-xs text-gray-600 font-bold uppercase">{t(project.period)}</p>

          {/* Description */}
          <p className="text-black leading-relaxed text-sm flex-1">
            {t(project.description)}
          </p>

          {/* Achievements */}
          {project.achievements && project.achievements.length > 0 && (
            <div className="space-y-2 py-3 border-t-3 border-black">
              {project.achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  <span className="text-primary font-bold mt-1">▸</span>
                  <span className="text-black font-medium">{t(achievement)}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border-2 border-black px-3 py-1 text-xs font-mono font-bold uppercase bg-white hover:bg-black hover:text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="flex gap-3 pt-3 border-t-3 border-black">
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-3 border-black bg-white px-4 py-2 font-mono text-xs font-bold uppercase hover:bg-primary hover:text-white hover:border-primary transition-colors"
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
