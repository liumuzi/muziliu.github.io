'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { personalInfo } from '@/data/content';
import { SECTIONS } from '@/lib/constants';

export function Hero() {
  const { t, language } = useLanguage();

  // Timeline items based on resume
  const timelineItems = [
    {
      period: { zh: '2024.09 - 至今', en: '2024.09 - PRESENT' },
      title: { zh: '独立游戏开发', en: 'INDIE GAME DEV' },
      subtitle: { zh: '多平台游戏设计与开发', en: 'GAME DESIGN & DEVELOPMENT' },
      index: '01',
    },
    {
      period: { zh: '2021.02 - 2024.09', en: '2021.02 - 2024.09' },
      title: { zh: '图形算法工程师', en: 'GRAPHICS ALGO ENG' },
      subtitle: { zh: '米哈游', en: 'MIHOYO' },
      index: '02',
    },
    {
      period: { zh: '2020.06 - 2020.08', en: '2020.06 - 2020.08' },
      title: { zh: '算法实习生', en: 'ALGO INTERN' },
      subtitle: { zh: '腾讯光子工作室', en: 'TENCENT PHOTON' },
      index: '03',
    },
    {
      period: { zh: '2018 - 2019', en: '2018 - 2019' },
      title: { zh: '研究助理', en: 'RESEARCH ASSISTANT' },
      subtitle: { zh: '香港中文大学', en: 'CUHK' },
      index: '04',
    },
    {
      period: { zh: '教育背景', en: 'EDUCATION' },
      title: { zh: '计算机科学学士', en: 'B.S. COMPUTER SCI' },
      subtitle: { zh: '香港中文大学 / AI方向', en: 'CUHK / AI FOCUS' },
      index: 'EDU',
    },
  ];

  return (
    <section
      id={SECTIONS.HERO}
      className="min-h-screen flex items-center p-4 sm:p-10 bg-gray-100 relative overflow-hidden"
    >
      {/* Background diagonal line */}
      <div
        className="absolute top-1/2 left-1/2 w-[200vw] h-[1px] bg-gray-300 pointer-events-none"
        style={{
          transform: 'translate(-50%, -50%) rotate(35deg)',
          zIndex: 0,
        }}
      />

      {/* Identity and awards */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 md:flex-row md:items-end lg:gap-10">
          {/* Main identity card */}
          <div
            className="relative flex w-full max-w-[460px] flex-col border-2 border-gray-800 bg-white brutalist-shadow-sm"
          >
          {/* Corner crosshairs */}
          <div className="absolute top-2 left-2 w-2.5 h-2.5 pointer-events-none z-20">
            <div className="absolute top-1 left-0 w-full h-[1px] bg-gray-800" />
            <div className="absolute left-1 top-0 h-full w-[1px] bg-gray-800" />
          </div>
          <div className="absolute top-2 right-2 w-2.5 h-2.5 pointer-events-none z-20">
            <div className="absolute top-1 left-0 w-full h-[1px] bg-gray-800" />
            <div className="absolute left-1 top-0 h-full w-[1px] bg-gray-800" />
          </div>
          <div className="absolute bottom-2 left-2 w-2.5 h-2.5 pointer-events-none z-20">
            <div className="absolute top-1 left-0 w-full h-[1px] bg-gray-800" />
            <div className="absolute left-1 top-0 h-full w-[1px] bg-gray-800" />
          </div>
          <div className="absolute bottom-2 right-2 w-2.5 h-2.5 pointer-events-none z-20">
            <div className="absolute top-1 left-0 w-full h-[1px] bg-gray-800" />
            <div className="absolute left-1 top-0 h-full w-[1px] bg-gray-800" />
          </div>

          {/* Header: Name */}
          <div className="px-5 pt-8 pb-4 border-b-2 border-gray-800">
            <h1 className={`leading-none font-black tracking-tighter text-gray-900 uppercase ${language === 'zh' ? 'text-7xl md:text-8xl' : 'text-6xl md:text-7xl'}`}>
              {language === 'zh' ? '刘木子' : 'MUZI LIU'}
            </h1>
          </div>

          {/* Timeline list area */}
          <div className="font-mono text-xs">
            {timelineItems.map((item, idx) => (
              <div
                key={idx}
                className="group cursor-default border-b border-gray-200 px-5 py-3 transition-colors hover:bg-gray-50"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-black">{t(item.period)}</span>
                  <span className="text-gray-400 group-hover:text-black transition-colors text-[10px]">
                    {item.index}
                  </span>
                </div>
                <div className="text-gray-600 uppercase tracking-wide leading-tight">
                  {t(item.title)}
                  <br />
                  <span className={idx === 0 ? 'text-gray-900 text-sm font-bold' : 'text-gray-500 text-[11px]'}>
                    {t(item.subtitle)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          </div>

          {/* Awards are proof points, not navigation. */}
          <aside
            aria-labelledby="hero-awards-title"
            className="relative w-full max-w-[460px] border-2 border-gray-800 bg-white font-mono brutalist-shadow-sm md:max-w-[340px]"
          >
            <div className="absolute top-2 left-2 w-2.5 h-2.5 pointer-events-none">
              <div className="absolute top-1 left-0 w-full h-[1px] bg-gray-800" />
              <div className="absolute left-1 top-0 h-full w-[1px] bg-gray-800" />
            </div>
            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 pointer-events-none">
              <div className="absolute top-1 left-0 w-full h-[1px] bg-gray-800" />
              <div className="absolute left-1 top-0 h-full w-[1px] bg-gray-800" />
            </div>

            <div className="border-b-2 border-gray-800 px-5 pb-4 pt-8">
              <p className="mb-1 text-[10px] font-bold tracking-[0.2em] text-gray-400">// 03</p>
              <h2 id="hero-awards-title" className="text-2xl font-black tracking-tight text-gray-900">
                {t({ zh: '获奖作品', en: 'AWARDS' })}
              </h2>
            </div>

            <ol className="divide-y divide-gray-200">
              {[
                {
                  year: '2026',
                  event: { zh: '光子游戏大赛', en: 'Photon Game Competition' },
                  award: { zh: '概念赛道银奖', en: 'Concept Track · Silver Award' },
                  project: { zh: '《虫虫家装》', en: 'Bug Décor' },
                },
                {
                  year: '2026',
                  event: { zh: '上海 AIGC 国际大赛', en: 'Shanghai International AIGC Competition' },
                  award: { zh: 'AI 游戏赛道优秀作品奖', en: 'AI Game Track · Outstanding Work' },
                  project: { zh: '《虫虫家装》', en: 'Bug Décor' },
                },
                {
                  year: '2025',
                  event: { zh: '腾讯游戏创作大赛', en: 'Tencent Game Creation Competition' },
                  award: { zh: 'AI 玩法创作奖', en: 'AI Gameplay Innovation Award' },
                  project: { zh: '《我的恋综超失控》', en: 'Love Mission 404' },
                },
              ].map((item) => (
                <li key={item.year + item.event.en} className="px-5 py-4">
                  <div className="mb-1 flex items-baseline justify-between gap-3 text-[11px] font-semibold text-gray-500">
                    <span>{t(item.event)}</span>
                    <span>{item.year}</span>
                  </div>
                  <p className="text-sm font-bold leading-snug text-gray-900">{t(item.award)}</p>
                  <p className="mt-1 text-[11px] text-gray-500">{t(item.project)}</p>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>

      {/* Floating social icons */}
      <div className="fixed bottom-6 right-6 z-20 flex flex-col gap-0 bg-white border border-gray-800 brutalist-shadow-sm">
        {personalInfo.links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 transition-all duration-200 border-b border-gray-200 last:border-0"
            title={link.label}
          >
            <span className="font-mono text-xs font-bold">
              {link.label === 'GitHub' ? 'GH' : link.label === 'LinkedIn' ? 'LI' : link.label.substring(0, 2).toUpperCase()}
            </span>
          </a>
        ))}
        <a
          href={`mailto:${personalInfo.email}`}
          className="w-9 h-9 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
          title="Email"
        >
          <span className="font-mono text-xs font-bold">@</span>
        </a>
      </div>
    </section>
  );
}
