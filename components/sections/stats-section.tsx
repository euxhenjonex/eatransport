'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { AnimatedContainer } from '@/components/animation/animated-container';
import { scaleUp } from '@/lib/animations';

const STATS = [
  {
    valueKey: 'years_value',
    labelKey: 'years_label',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    valueKey: 'countries_value',
    labelKey: 'countries_label',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    valueKey: 'fleet_value',
    labelKey: 'fleet_label',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    valueKey: 'clients_value',
    labelKey: 'clients_label',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export function StatsSection() {
  const t = useTranslations('stats');

  return (
    <section className="py-12 md:py-16 bg-gray-900">
      <Container>
        <AnimatedContainer
          as="div"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          staggerDelay={0.1}
          childVariants={scaleUp}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.valueKey}
              variants={scaleUp}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {t(stat.valueKey)}
              </div>
              <div className="text-sm md:text-base text-gray-400">
                {t(stat.labelKey)}
              </div>
            </motion.div>
          ))}
        </AnimatedContainer>
      </Container>
    </section>
  );
}
