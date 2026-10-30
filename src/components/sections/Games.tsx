'use client';

import { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { games } from '@/data/games';
import { SECTIONS } from '@/lib/constants';
import { GameProject } from '@/types/content';

const mainGameIds = ['bug-decor', 'wardrobe-shop', 'dating-show', 'not-again-hero'];
const moreGameIds = ['farty-party', 'error-guide'];

function gamesInOrder(ids: string[]): GameProject[] {
  return ids.flatMap((id) => games.filter((game) => game.id === id));
}

export function Games() {
  const [showMore, setShowMore] = useState(false);
  const { t } = useLanguage();
  const mainGames = gamesInOrder(mainGameIds);
  const moreGames = gamesInOrder(moreGameIds);

  return (
    <section id={SECTIONS.GAMES} className="border-b-2 border-gray-800 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title={{ zh: '游戏作品', en: 'GAMES' }}
          subtitle={{
            zh: '独立游戏开发作品集',
            en: 'Independent game development portfolio',
          }}
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {mainGames.slice(0, 2).map((game, index) => (
            <div key={game.id} className={index === 0 ? 'lg:col-span-2' : ''}>
              <ProjectCard project={game} featured={index === 0} delay={index * 0.08} />
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-7 md:grid-cols-2 lg:gap-8">
          {mainGames.slice(2).map((game, index) => (
            <ProjectCard key={game.id} project={game} delay={index * 0.08} />
          ))}
        </div>

        <div className="mt-10 flex justify-center border-t border-gray-200 pt-6">
          <button
            type="button"
            aria-expanded={showMore}
            aria-controls="more-games"
            onClick={() => setShowMore((current) => !current)}
            className="group inline-flex min-h-11 items-center gap-3 border-b-2 border-gray-800 px-1 py-2 text-sm font-bold text-gray-900 transition-colors hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
          >
            {t(showMore ? { zh: '收起作品', en: 'Show less' } : { zh: '查看更多作品', en: 'View more games' })}
            <span className="font-mono text-xs text-gray-500" aria-hidden="true">
              {showMore ? '↑' : `+${moreGames.length} ↓`}
            </span>
          </button>
        </div>

        <div id="more-games" className={showMore ? 'mt-8 grid gap-7 md:grid-cols-2 lg:gap-8' : ''}>
          {showMore && moreGames.map((game, index) => (
            <ProjectCard key={game.id} project={game} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
