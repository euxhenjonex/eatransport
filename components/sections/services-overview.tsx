'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/animation/animated-section';
import { AnimatedContainer, AnimatedItem } from '@/components/animation/animated-container';
import { fadeUp, staggerContainer } from '@/lib/animations';

const SERVICES = [
  {
    key: 'freight',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0h-2.25m0 0V6.375c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v3.75m-7.5 0h7.5" />
      </svg>
    ),
  },
  {
    key: 'frigo',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m0-20l4 4m-4-4L8 6m4 14l4-4m-4 4l-4-4m-6-4h20m-20 0l4-4m-4 4l4 4m12-8l4 4m-4-4v0m4 4v0" />
      </svg>
    ),
  },
  {
    key: 'express',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export function ServicesOverview() {
  const t = useTranslations('services');
  const tHero = useTranslations('hero');

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <Container>
        {/* Section header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <Badge variant="dark" icon="star" className="mb-6">
            {t('badge')}
          </Badge>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t('title')}
          </h2>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </AnimatedSection>

        {/* Services grid */}
        <AnimatedContainer
          as="div"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.15}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.key}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="group relative bg-white rounded-3xl p-6 md:p-10 hover:bg-gray-900 transition-all duration-300 overflow-hidden cursor-default shadow-sm hover:shadow-xl border-2 border-transparent hover:border-primary-500/30"
            >
              {/* Decorative gradient blob */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-500/20 transition-colors" />

              {/* Icon */}
              <div className="relative w-14 h-14 bg-primary-100 text-primary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white transition-colors">
                {t(`${service.key}.title`)}
              </h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors max-w-md">
                {t(`${service.key}.description`)}
              </p>

              {/* Number indicator */}
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-5xl md:text-7xl font-bold text-gray-100/80 group-hover:text-gray-800 transition-all duration-300 leading-none group-hover:scale-110 origin-bottom-right">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </AnimatedContainer>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={0.3} className="text-center mt-12">
          <Link href="/services">
            <Button variant="dark" size="lg" className="group">
              {tHero('secondary_cta')}
              <svg
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
          </Link>
        </AnimatedSection>
      </Container>
    </section>
  );
}
