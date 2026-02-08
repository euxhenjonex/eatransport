'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/animation/animated-section';
import { AnimatedContainer } from '@/components/animation/animated-container';
import { slideLeft, slideRight, fadeUp } from '@/lib/animations';

const DESTINATIONS = [
  { key: 'italy', flag: '/flag/italy-flag-icon.svg', days: '1-2' },
  { key: 'spain', flag: '/flag/spain-country-flag-icon.svg', days: '2-3' },
  { key: 'austria', flag: '/flag/austria-flag-icon.svg', days: '2-3' },
  { key: 'germany', flag: '/flag/germany-flag-icon.svg', days: '2-4' },
  { key: 'switzerland', flag: '/flag/switzerland-flag-icon.svg', days: '2-3' },
  { key: 'france', flag: '/flag/france-flag-icon.svg', days: '2-3' },
  { key: 'belgium', flag: '/flag/belgium-flag-icon.svg', days: '3-4' },
  { key: 'netherlands', flag: '/flag/netherlands-flag-icon.svg', days: '3-4' },
  { key: 'portugal', flag: '/flag/portugal-flag-icon.svg', days: '4-5' },
];

export function RouteCoverage() {
  const t = useTranslations('routes');

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Content */}
          <AnimatedSection animation="slide-left">
            <Badge variant="dark" icon="star" className="mb-6">
              {t('badge')}
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t('title')}
            </h2>

            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              {t('subtitle')}
            </p>

            <Link href="/contact">
              <Button variant="dark" size="lg" className="group">
                {t('cta')}
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

          {/* Right column - Visual route hub */}
          <AnimatedSection animation="slide-right" className="relative">
            <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-gray-100 shadow-sm">
              {/* Hub - Albania */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gray-900 rounded-full mx-auto flex items-center justify-center text-white mb-3 shadow-lg ring-4 ring-primary-500/20 animate-pulse-slow">
                  <Image
                    src="/flag/albania-flag-icon.svg"
                    alt="Flag of Albania"
                    width={40}
                    height={40}
                    className="rounded-sm"
                  />
                </div>
                <div className="font-bold text-gray-900 text-lg">Albania</div>
                <div className="text-sm text-gray-400">{t('hub')}</div>
              </div>

              {/* Divider with arrow */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex-1 h-px bg-gray-200" />
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>
                </div>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Destination grid */}
              <AnimatedContainer as="div" className="grid grid-cols-3 gap-3" staggerDelay={0.05}>
                {DESTINATIONS.map((dest) => (
                  <motion.div
                    key={dest.key}
                    variants={fadeUp}
                    className="text-center p-3 bg-gray-50 rounded-xl hover:bg-primary-50 transition-all duration-200 group/dest cursor-default hover:scale-105 hover:shadow-md"
                  >
                    <Image
                      src={dest.flag}
                      alt={`Flag of ${dest.key}`}
                      width={28}
                      height={28}
                      className="rounded-sm mx-auto mb-1"
                    />
                    <div className="text-xs font-medium text-gray-700 group-hover/dest:text-primary-700 transition-colors">
                      {t(`countries.${dest.key}`)}
                    </div>
                    <div className="inline-block mt-1 px-2 py-0.5 bg-primary-100 text-primary-700 text-[10px] font-medium rounded-full">
                      {dest.days} {t('delivery_days')}
                    </div>
                  </motion.div>
                ))}
              </AnimatedContainer>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
