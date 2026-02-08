'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { QuickQuoteForm } from '@/components/forms/quick-quote-form';
import { AnimatedSection } from '@/components/animation/animated-section';
import { slideLeft, slideRight } from '@/lib/animations';

export function HomepageQuoteSection() {
  const t = useTranslations('homepage_quote');

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left column: Visual + Map (on mobile, appears second) */}
          <AnimatedSection animation="slide-left" className="order-2 lg:order-1 space-y-6">
            {/* Transport image with overlay */}
            <div className="relative rounded-3xl overflow-hidden h-72 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1470&auto=format&fit=crop"
                alt={t('visual_title')}
                fill
                className="object-cover"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/20" />

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {t('visual_title')}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {t('visual_description')}
                </p>
              </div>
            </div>

          </AnimatedSection>

          {/* Right column: Form (on mobile, appears first for conversion) */}
          <AnimatedSection animation="slide-right" className="order-1 lg:order-2">
            <div className="mb-6">
              <Badge variant="dark" icon="star" className="mb-4">
                {t('badge')}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {t('title')}
              </h2>
              <p className="text-gray-600">
                {t('subtitle')}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100">
              <QuickQuoteForm />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
