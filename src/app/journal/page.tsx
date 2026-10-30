import type { Metadata } from 'next';
import Link from 'next/link';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { Journal } from '@/components/sections/Journal';

export const metadata: Metadata = {
  title: 'Journal — Muzi Liu',
  description: 'Short notes from Muzi Liu on making, technology, and life.',
  robots: { index: false, follow: false },
};

export default function JournalPage() {
  return (
    <>
      <header className="h-14 bg-white border-b-2 border-gray-800 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-xs font-bold uppercase tracking-wider text-gray-900 hover:text-gray-500 transition-colors"
          >
            ← MUZI LIU
          </Link>
          <LanguageToggle />
        </div>
      </header>
      <main>
        <Journal />
      </main>
    </>
  );
}
