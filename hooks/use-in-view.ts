'use client';

import { useRef } from 'react';
import { useInView as useFramerInView } from 'framer-motion';

interface UseInViewOptions {
  threshold?: number;
  once?: boolean;
  amount?: 'some' | 'all' | number;
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold, once = true, amount = 0.3 } = options;

  const ref = useRef<HTMLDivElement>(null);

  const isInView = useFramerInView(ref, {
    once,
    amount: threshold ?? amount,
  });

  return { ref, isInView };
}
