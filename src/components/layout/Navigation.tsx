'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { SECTIONS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { id: SECTIONS.ABOUT, label: { zh: '关于', en: 'ABOUT' } },
  { id: SECTIONS.GAMES, label: { zh: '游戏', en: 'GAMES' } },
  { id: SECTIONS.EXPERIENCE, label: { zh: '经历', en: 'WORK' } },
  { id: SECTIONS.RESEARCH, label: { zh: '研究', en: 'RESEARCH' } },
  { id: SECTIONS.SKILLS, label: { zh: '技能', en: 'SKILLS' } },
  { id: SECTIONS.CONTACT, label: { zh: '联系', en: 'CONTACT' } },
];

export function Navigation() {
  const { t } = useLanguage();
  const activeSection = useScrollSpy();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white border-b border-gray-800'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 font-bold',
                  activeSection === item.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-100'
                )}
              >
                {t(item.label)}
              </button>
            ))}
          </div>

          {/* Language Toggle */}
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
