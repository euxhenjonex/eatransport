'use client';

import { motion, type Transition } from 'framer-motion';
import { cn } from '@/lib/utils';
import { heroStagger, heroFadeUp } from '@/lib/animations';

const easeOutQuad: Transition['ease'] = [0.25, 0.1, 0.25, 1];

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
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

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
  const customVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOutQuad,
        ...(delay !== undefined && { delay }),
      },
    },
  };

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
