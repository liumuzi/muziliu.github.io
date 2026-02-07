'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/content';
import { SECTIONS } from '@/lib/constants';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id={SECTIONS.CONTACT} className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title={{ zh: '联系方式', en: 'CONTACT' }}
          subtitle={{
            zh: '欢迎与我联系',
            en: 'Get in touch',
          }}
        />

        <div className="border-2 border-gray-800 bg-white brutalist-shadow-sm hover:brutalist-shadow-hover hover:-translate-y-1 transition-all duration-200 p-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-l-3 border-black pl-4">
              <p className="font-mono text-[10px] text-gray-500 mb-2 uppercase font-bold">
                EMAIL
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base font-bold text-black hover:text-gray-600 transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>
            <div className="border-l-3 border-black pl-4">
              <p className="font-mono text-[10px] text-gray-500 mb-2 uppercase font-bold">
                PHONE
              </p>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-base font-bold text-black hover:text-gray-600 transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="font-mono text-[10px] text-gray-500 mb-3 uppercase font-bold">
              SOCIAL
            </p>
            <div className="flex flex-wrap gap-3">
              {personalInfo.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black bg-white px-4 py-2 font-mono font-bold text-xs uppercase hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
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
