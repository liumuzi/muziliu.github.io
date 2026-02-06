'use client';

import { useEffect, useState, RefObject } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
  once?: boolean;
  margin?: string;
}

export function useInView(ref: RefObject<HTMLElement>, options?: UseInViewOptions) {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    if (options?.once && hasBeenInView) return;

    const { once, margin, ...observerOptions } = options || {};

    const finalOptions: IntersectionObserverInit = {
      ...observerOptions,
      rootMargin: margin,
    };

    const observer = new IntersectionObserver(([entry]) => {
      const inView = entry.isIntersecting;
      setIsInView(inView);

      if (inView && once) {
        setHasBeenInView(true);
      }
    }, finalOptions);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options, hasBeenInView]);

  return options?.once ? (isInView || hasBeenInView) : isInView;
}
