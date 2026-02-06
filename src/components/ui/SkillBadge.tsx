'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  skill: string;
  delay?: number;
}

export function SkillBadge({ skill, delay = 0 }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        'inline-block px-4 py-2 bg-neutral-100 text-neutral-700',
        'rounded-full text-sm font-medium',
        'transition-all duration-200',
        'hover:bg-primary hover:text-white cursor-default'
      )}
    >
      {skill}
    </motion.span>
  );
}
