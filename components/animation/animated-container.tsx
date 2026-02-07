'use client';

import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { staggerContainer, fadeUp } from '@/lib/animations';

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  threshold?: number;
  once?: boolean;
  as?: 'div' | 'section' | 'ul' | 'ol';
  childClassName?: string;
  childVariants?: Variants;
}

export function AnimatedContainer({
  children,
  className,
  staggerDelay = 0.1,
  delayChildren = 0.1,
  threshold = 0.1,
  once = true,
  as = 'div',
  childClassName,
  childVariants = fadeUp,
}: AnimatedContainerProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
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
      variants={containerVariants}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              className={childClassName}
            >
              {child}
            </motion.div>
          ))
        : children}
    </Component>
  );
}

interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}

export function AnimatedItem({ children, className, variants = fadeUp }: AnimatedItemProps) {
  return (
    <motion.div variants={variants} className={cn(className)}>
      {children}
    </motion.div>
  );
}
