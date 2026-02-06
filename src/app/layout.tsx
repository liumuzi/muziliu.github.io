import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Muzi Liu - Indie Game Developer & Algorithm Engineer',
  description: 'Portfolio of Muzi Liu (刘木子), indie game developer and algorithm engineer with experience at miHoYo and CUHK.',
  keywords: ['game development', 'indie games', 'algorithm engineer', 'AI', 'Unity', 'miHoYo'],
  authors: [{ name: 'Muzi Liu' }],
  openGraph: {
    title: 'Muzi Liu - Indie Game Developer & Algorithm Engineer',
    description: 'Portfolio showcasing indie games, algorithm engineering work, and research projects.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
