'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-0 border-3 border-black">
      <button
        onClick={() => setLanguage('zh')}
        className={cn(
          'px-4 py-2 font-mono text-sm font-bold uppercase transition-colors border-r-3 border-black',
          language === 'zh'
            ? 'bg-black text-white'
            : 'bg-white text-black hover:bg-gray-100'
        )}
      >
        中文
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          'px-4 py-2 font-mono text-sm font-bold uppercase transition-colors',
          language === 'en'
            ? 'bg-black text-white'
            : 'bg-white text-black hover:bg-gray-100'
        )}
      >
        EN
      </button>
    </div>
  );
}
