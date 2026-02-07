'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/animation/animated-section';
import { AnimatedContainer } from '@/components/animation/animated-container';
import { fadeUp, slideLeft, slideRight } from '@/lib/animations';

export function AboutSection() {
  const t = useTranslations('about');

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Content */}
          <AnimatedSection animation="slide-left">
            <Badge variant="dark" icon="star" className="mb-6">
              {t('subtitle')}
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t('title')}
            </h2>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {t('description')}
            </p>

            {/* Feature cards */}
            <AnimatedContainer className="space-y-4 mb-10" staggerDelay={0.1}>
              {/* Feature 1 - Dark card */}
              <motion.div variants={fadeUp} className="bg-gray-900 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    {t('values.reliability.title')}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {t('values.reliability.description')}
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 - Light card */}
              <motion.div variants={fadeUp} className="bg-white rounded-2xl p-6 flex items-start gap-4 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {t('values.safety.title')}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {t('values.safety.description')}
                  </p>
                </div>
              </motion.div>
            </AnimatedContainer>

            <Link href="/about">
              <Button variant="dark" size="lg" className="group">
                {t('cta_button')}
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

          {/* Right column - Visual */}
          <AnimatedSection animation="slide-right" className="relative">
            {/* Main image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/camionea.png"
                alt="EA Transport truck"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
            </div>

          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
