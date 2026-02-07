'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLanguage('zh')}
        className={cn(
          'px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200',
          language === 'zh'
            ? 'bg-gray-900 text-white'
            : 'bg-white text-gray-800 hover:bg-gray-100'
        )}
      >
        中文
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          'px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200',
          language === 'en'
            ? 'bg-gray-900 text-white'
            : 'bg-white text-gray-800 hover:bg-gray-100'
        )}
      >
        EN
      </button>
    </div>
  );
}
