'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { personalInfo } from '@/data/content';
import { SECTIONS } from '@/lib/constants';

export function Hero() {
  const { t, language } = useLanguage();

  const scrollToAbout = () => {
    const element = document.getElementById(SECTIONS.ABOUT);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById(SECTIONS.CONTACT);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Timeline items based on resume
  const timelineItems = [
    {
      period: { zh: '2024.09 - 至今', en: '2024.09 - PRESENT' },
      title: { zh: '独立游戏开发', en: 'INDIE GAME DEV' },
      subtitle: { zh: '腾讯游戏大赛AI玩法奖', en: 'TENCENT GAME AWARD' },
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
      className="min-h-screen flex items-center p-4 sm:p-10 bg-gray-200 relative overflow-hidden"
    >
      {/* Background diagonal line */}
      <div
        className="absolute top-1/2 left-1/2 w-[200vw] h-[1px] bg-gray-300 pointer-events-none"
        style={{
          transform: 'translate(-50%, -50%) rotate(35deg)',
          zIndex: 0,
        }}
      />

      {/* Left aligned container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Main card container - left aligned */}
        <div className="relative bg-white border border-black shadow-2xl w-full max-w-[420px] flex flex-col h-[85vh] max-h-[700px]">
          {/* Corner crosshairs */}
          <div className="absolute top-2 left-2 w-2.5 h-2.5 pointer-events-none z-20">
            <div className="absolute top-1 left-0 w-full h-[1px] bg-black" />
            <div className="absolute left-1 top-0 h-full w-[1px] bg-black" />
          </div>
          <div className="absolute top-2 right-2 w-2.5 h-2.5 pointer-events-none z-20">
            <div className="absolute top-1 left-0 w-full h-[1px] bg-black" />
            <div className="absolute left-1 top-0 h-full w-[1px] bg-black" />
          </div>
          <div className="absolute bottom-2 left-2 w-2.5 h-2.5 pointer-events-none z-20">
            <div className="absolute top-1 left-0 w-full h-[1px] bg-black" />
            <div className="absolute left-1 top-0 h-full w-[1px] bg-black" />
          </div>
          <div className="absolute bottom-2 right-2 w-2.5 h-2.5 pointer-events-none z-20">
            <div className="absolute top-1 left-0 w-full h-[1px] bg-black" />
            <div className="absolute left-1 top-0 h-full w-[1px] bg-black" />
          </div>

          {/* Header: Name */}
          <div className="px-5 pt-8 pb-4 border-b border-black">
            <h1 className="text-[3.5rem] leading-none font-black tracking-tighter text-gray-900 uppercase whitespace-nowrap overflow-hidden">
              {language === 'zh' ? '刘 木子' : 'MUZI LIU'}
            </h1>
          </div>

          {/* Timeline list area */}
          <div className="flex-1 overflow-y-auto font-mono text-[11px]">
            {timelineItems.map((item, idx) => (
              <div
                key={idx}
                className="border-b border-gray-200 px-5 py-3 group cursor-default hover:bg-gray-50 transition-colors"
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
                  <span className="text-gray-400 text-[10px]">{t(item.subtitle)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom buttons */}
          <div className="p-5 mt-auto border-t border-black bg-white">
            <div className="grid grid-cols-2 gap-3 font-mono text-[11px]">
              <button
                onClick={scrollToContact}
                className="border border-gray-300 py-2 px-4 text-center uppercase tracking-wider text-black font-bold hover:bg-black hover:text-white transition-all"
              >
                {t({ zh: '联系', en: 'CONTACT' })}
              </button>
              <button
                onClick={scrollToAbout}
                className="border border-gray-300 py-2 px-4 text-center uppercase tracking-wider text-black font-bold hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2"
              >
                {t({ zh: '作品集', en: 'PORTFOLIO' })}
                <span className="text-[9px] transform -rotate-45">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating social icons */}
      <div className="fixed bottom-6 right-6 z-20 flex flex-col gap-0 bg-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
        {personalInfo.links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all border-b border-gray-200 last:border-0"
            title={link.label}
          >
            <span className="font-mono text-xs font-bold">
              {link.label === 'GitHub' ? 'GH' : link.label === 'LinkedIn' ? 'LI' : link.label.substring(0, 2).toUpperCase()}
            </span>
          </a>
        ))}
        <a
          href={`mailto:${personalInfo.email}`}
          className="w-9 h-9 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
          title="Email"
        >
          <span className="font-mono text-xs font-bold">@</span>
        </a>
      </div>
    </section>
  );
}
