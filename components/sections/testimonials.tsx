'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/animation/animated-section';
import { AnimatedContainer } from '@/components/animation/animated-container';
import { slideUpVariants } from '@/lib/animations';

const REVIEWS = ['review1', 'review2', 'review3'] as const;

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section className="py-20 md:py-28 bg-white">
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

        {/* Testimonials grid */}
        <AnimatedContainer as="div" className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15} childVariants={slideUpVariants}>
          {REVIEWS.map((reviewKey) => (
            <motion.div
              key={reviewKey}
              variants={slideUpVariants}
              className="relative bg-gray-50 rounded-3xl p-8 hover:shadow-md transition-shadow border-l-4 border-primary-500/30"
            >
              {/* Decorative quote mark */}
              <div className="absolute top-5 right-7 text-5xl font-serif text-primary-200/60 leading-none select-none pointer-events-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-gray-600 leading-relaxed mb-6 relative">
                {t(`reviews.${reviewKey}.text`)}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-200">
                <div className="w-11 h-11 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0">
                  {t(`reviews.${reviewKey}.initials`)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {t(`reviews.${reviewKey}.name`)}
                  </div>
                  <div className="text-xs text-gray-400">
                    {t(`reviews.${reviewKey}.role`)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatedContainer>
      </Container>
    </section>
  );
}
