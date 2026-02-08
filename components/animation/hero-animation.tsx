'use client';

import { useMemo } from 'react';
import { motion, type Transition } from 'framer-motion';
import { cn } from '@/lib/utils';
import { heroFadeUp } from '@/lib/animations';

const easeOutQuad: Transition['ease'] = [0.25, 0.1, 0.25, 1];

const DEFAULT_ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutQuad,
    },
  },
};

interface HeroAnimationProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

export function HeroAnimation({
  children,
  className,
  staggerDelay = 0.12,
  delayChildren = 0.2,
}: HeroAnimationProps) {
  const containerVariants = useMemo(() => ({
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  }), [staggerDelay, delayChildren]);

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

interface HeroItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function HeroItem({ children, className, delay }: HeroItemProps) {
  const customVariants = useMemo(() => {
    if (delay === undefined) return DEFAULT_ITEM_VARIANTS;
    return {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: easeOutQuad,
          delay,
        },
      },
    };
  }, [delay]);

  return (
    <motion.div variants={customVariants} className={cn(className)}>
      {children}
    </motion.div>
  );
}

interface HeroStaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroStaggerItem({ children, className }: HeroStaggerItemProps) {
  return (
    <motion.div variants={heroFadeUp} className={cn(className)}>
      {children}
    </motion.div>
  );
}
