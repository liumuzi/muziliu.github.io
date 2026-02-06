'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { personalInfo } from '@/data/content';
import { SECTIONS } from '@/lib/constants';

export function Hero() {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const element = document.getElementById(SECTIONS.ABOUT);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id={SECTIONS.HERO}
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden"
    >
      {/* Brutalist grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Massive typography */}
        <div className="space-y-8">
          <div className="border-8 border-black p-8 bg-white brutalist-shadow">
            <h1 className="font-sans text-hero font-bold text-black leading-none tracking-tighter">
              {t(personalInfo.name)}
            </h1>
          </div>

          <div className="ml-16 border-6 border-black p-6 bg-white brutalist-shadow-sm">
            <p className="font-sans text-subheading font-bold text-black uppercase tracking-wide">
              {t(personalInfo.title)}
            </p>
          </div>

          {/* Monospace accent */}
          <div className="ml-32">
            <p className="font-mono text-lg text-black font-bold">
              [ {t({ zh: '探索 / 创造 / 工程', en: 'EXPLORE / CREATE / ENGINEER' })} ]
            </p>
          </div>

          {/* Stark CTA */}
          <div className="mt-12 flex gap-4">
            <button
              onClick={scrollToAbout}
              className="border-6 border-black bg-black text-white px-8 py-4 font-sans font-bold text-xl uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-200"
            >
              {t({ zh: '查看作品', en: 'VIEW WORK' })}
            </button>
            <a
              href="#contact"
              className="border-6 border-black bg-primary text-white px-8 py-4 font-sans font-bold text-xl uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-200"
            >
              {t({ zh: '联系', en: 'CONTACT' })}
            </a>
          </div>

          {/* Technical meta info */}
          <div className="mt-16 border-t-3 border-black pt-4">
            <p className="font-mono text-sm text-black">
              <span className="text-primary">►</span> {personalInfo.email} / {personalInfo.location.zh}
            </p>
          </div>
        </div>
      </div>

      {/* Geometric accent */}
      <div className="absolute top-10 right-10 w-32 h-32 border-8 border-primary bg-white rotate-12" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-black" />
    </section>
  );
}
