'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-black text-white border-t-8 border-primary py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-mono text-3xl font-bold mb-2">ML</p>
            <p className="font-mono text-sm text-gray-400">
              {language === 'zh' ? '刘木子' : 'MUZI LIU'}
            </p>
          </div>
          <div className="border-l-3 border-primary pl-4">
            <p className="font-mono text-xs text-gray-400 uppercase mb-2">// BUILT WITH</p>
            <p className="font-sans text-sm text-white">
              NEXT.JS · TYPESCRIPT · TAILWIND CSS
            </p>
          </div>
          <div className="border-l-3 border-primary pl-4">
            <p className="font-mono text-xs text-gray-400 uppercase mb-2">// COPYRIGHT</p>
            <p className="font-sans text-sm text-white">
              © 2024 {language === 'zh' ? '刘木子' : 'MUZI LIU'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
