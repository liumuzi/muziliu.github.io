'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { journalEntries } from '@/data/journal';

export function Journal() {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 bg-gray-100 min-h-[calc(100vh-3.5rem)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title={{ zh: '日志', en: 'JOURNAL' }}
          subtitle={{ zh: '关于创作、技术与生活的短记录', en: 'Short notes on making, technology, and life' }}
        />

        <div className="max-w-3xl space-y-8">
          {journalEntries.map((entry, index) => (
            <motion.article
              key={entry.id}
              className="bg-white border-2 border-gray-800 brutalist-shadow-sm p-6 md:p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.24) }}
            >
              <header className="flex flex-col gap-4 border-b-2 border-gray-800 pb-5 mb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">
                    {language === 'zh' ? '日志' : 'ENTRY'} #{String(journalEntries.length - index).padStart(2, '0')}
                  </p>
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">{t(entry.title)}</h3>
                </div>
                <time dateTime={entry.date} className="shrink-0 bg-gray-900 text-white px-3 py-2 font-mono text-xs font-bold tracking-wider">
                  {entry.date.replaceAll('-', ' / ')}
                </time>
              </header>

              <div className="space-y-5">
                {entry.paragraphs.map((paragraph, paragraphIndex) => (
                  <div key={paragraphIndex} className="grid grid-cols-[2rem_1fr] gap-2">
                    <span className="font-mono text-xs font-bold text-gray-400 pt-1">{String(paragraphIndex + 1).padStart(2, '0')}</span>
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed">{t(paragraph)}</p>
                  </div>
                ))}
              </div>

              {entry.tags && (
                <footer className="flex flex-wrap gap-2 border-t border-gray-200 mt-7 pt-5">
                  {entry.tags.map((tag) => (
                    <span key={t(tag)} className="border border-gray-400 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-gray-600">
                      # {t(tag)}
                    </span>
                  ))}
                </footer>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
