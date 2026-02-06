'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { games } from '@/data/games';
import { SECTIONS } from '@/lib/constants';

export function Games() {
  return (
    <section id={SECTIONS.GAMES} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title={{ zh: '游戏作品', en: 'GAMES' }}
          subtitle={{
            zh: '独立游戏开发作品集',
            en: 'Independent game development portfolio',
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, idx) => (
            <ProjectCard key={game.id} project={game} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
