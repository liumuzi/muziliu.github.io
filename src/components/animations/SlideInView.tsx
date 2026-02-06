'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

interface SlideInViewProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
  className?: string;
}

export function SlideInView({
  children,
  direction = 'left',
  delay = 0,
  className
}: SlideInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const x = direction === 'left' ? -30 : 30;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
