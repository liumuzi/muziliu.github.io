'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { games } from '@/data/games';
import { SECTIONS } from '@/lib/constants';

export function Games() {
  return (
    <section id={SECTIONS.GAMES} className="py-24 bg-white border-b-2 border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title={{ zh: '游戏作品', en: 'GAMES' }}
          subtitle={{
            zh: '独立游戏开发作品集',
            en: 'Independent game development portfolio',
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <ProjectCard key={game.id} project={game} />
          ))}
        </div>
      </div>
    </section>
  );
}
