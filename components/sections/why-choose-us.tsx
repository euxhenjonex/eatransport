'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/animation/animated-section';
import { AnimatedContainer } from '@/components/animation/animated-container';
import { fadeUp } from '@/lib/animations';

const FEATURES = [
  {
    key: 'reliability',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    key: 'safety',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    key: 'professionalism',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

export function WhyChooseUs() {
  const t = useTranslations('about.values');

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <Badge variant="dark" icon="star" className="mb-6">
            {t('badge')}
          </Badge>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t('title')}
          </h2>
        </AnimatedSection>

        {/* Feature cards — matches services-overview style */}
        <AnimatedContainer
          as="div"
          className="grid md:grid-cols-3 gap-6"
          staggerDelay={0.15}
          childClassName="h-full"
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.key}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              variants={fadeUp}
              className="group relative bg-white rounded-3xl p-6 md:p-10 hover:bg-gray-900 transition-all duration-300 overflow-hidden cursor-default shadow-sm hover:shadow-xl border-2 border-transparent hover:border-primary-500/30 h-full"
            >
              {/* Decorative gradient blob */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-500/20 transition-colors" />

              {/* Icon */}
              <div className="relative w-14 h-14 bg-primary-100 text-primary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white transition-colors">
                {t(`${feature.key}.title`)}
              </h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors max-w-[85%]">
                {t(`${feature.key}.description`)}
              </p>

              {/* Number indicator */}
              <div className="absolute bottom-4 right-5 md:bottom-6 md:right-6 text-4xl md:text-5xl font-bold text-gray-200/50 group-hover:text-gray-700/50 transition-all duration-300 leading-none select-none pointer-events-none">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </AnimatedContainer>
      </Container>
    </section>
  );
}
