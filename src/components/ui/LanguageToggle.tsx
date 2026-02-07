'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-0 border border-gray-300 bg-white/80 backdrop-blur shadow-sm">
      <button
        onClick={() => setLanguage('zh')}
        className={cn(
          'px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide transition-colors border-r border-gray-200',
          language === 'zh'
            ? 'bg-black text-white shadow'
            : 'text-gray-700 hover:text-black'
        )}
      >
        中文
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          'px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide transition-colors',
          language === 'en'
            ? 'bg-black text-white shadow'
            : 'text-gray-700 hover:text-black'
        )}
      >
        EN
      </button>
    </div>
  );
}
