'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/content';
import { SECTIONS } from '@/lib/constants';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id={SECTIONS.CONTACT} className="py-24 bg-gray-100 border-t-6 border-black">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          title={{ zh: '联系方式', en: 'CONTACT' }}
          subtitle={{
            zh: '欢迎与我联系',
            en: 'Get in touch',
          }}
        />

        <div className="border-8 border-black bg-white p-8 brutalist-shadow-red">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border-l-6 border-primary pl-4">
              <p className="font-mono text-xs text-gray-600 mb-2 uppercase font-bold">
                // {t({ zh: '邮箱', en: 'EMAIL' })}
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-xl font-bold text-black hover:text-primary transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>
            <div className="border-l-6 border-primary pl-4">
              <p className="font-mono text-xs text-gray-600 mb-2 uppercase font-bold">
                // {t({ zh: '电话', en: 'PHONE' })}
              </p>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-xl font-bold text-black hover:text-primary transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>

          <div className="border-t-3 border-black pt-6">
            <p className="font-mono text-xs text-gray-600 mb-4 uppercase font-bold">
              // {t({ zh: '社交媒体', en: 'SOCIAL' })}
            </p>
            <div className="flex flex-wrap gap-3">
              {personalInfo.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-3 border-black bg-white px-6 py-3 font-mono font-bold text-sm uppercase hover:bg-black hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
