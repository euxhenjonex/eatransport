'use client';

import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUp, fadeIn, slideLeft, slideRight, scaleUp } from '@/lib/animations';

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  as?: 'div' | 'section' | 'article' | 'aside';
}

const animationVariants: Record<AnimationType, Variants> = {
  'fade-up': fadeUp,
  'fade-in': fadeIn,
  'slide-left': slideLeft,
  'slide-right': slideRight,
  'scale-up': scaleUp,
};

export function AnimatedSection({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  duration,
  threshold = 0.1,
  once = true,
  as = 'div',
}: AnimatedSectionProps) {
  const variants = animationVariants[animation];

  const visibleVariant = variants.visible as Record<string, unknown> | undefined;
  const baseTransition = (visibleVariant?.transition as Record<string, unknown>) ?? {};

  const customVariants: Variants = {
    hidden: variants.hidden,
    visible: {
      ...variants.visible,
      transition: {
        ...baseTransition,
        delay,
        ...(duration && { duration }),
      },
    },
  };

  const Component = motion[as];

  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={customVariants}
    >
      {children}
    </Component>
  );
}
