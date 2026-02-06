import { Navigation } from '@/components/layout/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Games } from '@/components/sections/Games';
import { Experience } from '@/components/sections/Experience';
import { Research } from '@/components/sections/Research';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Games />
        <Experience />
        <Research />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
