'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { BilingualText } from '@/types/content';

interface SectionHeadingProps {
  title: BilingualText;
  subtitle?: BilingualText;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      className="mb-16 max-w-4xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="border-l-3 border-black pl-4">
        <h2 className="font-sans text-5xl font-black text-gray-900 uppercase tracking-tight mb-2">
          {t(title)}
        </h2>
        {subtitle && (
          <p className="text-sm text-gray-500 leading-relaxed font-mono">
            {t(subtitle)}
          </p>
        )}
      </div>
    </motion.div>
  );
}
