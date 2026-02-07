'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CtaSection } from '@/components/sections/cta-section';
import { AnimatedSection } from '@/components/animation/animated-section';
import { AnimatedContainer } from '@/components/animation/animated-container';
import { fadeUp, slideLeft, slideRight } from '@/lib/animations';

const SERVICES = [
  {
    key: 'freight',
    image: 'https://images.unsplash.com/photo-1619551734325-81aaf323686c?q=80&w=1469&auto=format&fit=crop',
    featureKeys: ['freight.f1', 'freight.f2', 'freight.f3', 'freight.f4'],
  },
  {
    key: 'express',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1470&auto=format&fit=crop',
    featureKeys: ['express.f1', 'express.f2', 'express.f3', 'express.f4'],
  },
  {
    key: 'logistics',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1470&auto=format&fit=crop',
    featureKeys: ['logistics.f1', 'logistics.f2', 'logistics.f3', 'logistics.f4'],
  },
  {
    key: 'customs',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1471&auto=format&fit=crop',
    featureKeys: ['customs.f1', 'customs.f2', 'customs.f3', 'customs.f4'],
  },
] as const;

interface ServicesPageContentProps {
  locale: string;
  translations: {
    badge: string;
    title: string;
    subtitle: string;
    freightTitle: string;
    freightDescription: string;
    expressTitle: string;
    expressDescription: string;
    logisticsTitle: string;
    logisticsDescription: string;
    customsTitle: string;
    customsDescription: string;
    requestQuote: string;
    heroCta: string;
    features: Record<string, string>;
  };
}

export function ServicesPageContent({ translations }: ServicesPageContentProps) {
  const t = (key: string) => {
    const keys = key.split('.');
    let value: unknown = translations;
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    return String(value);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
            alt="Logistics services"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900" />
        </div>

        <Container className="relative z-10">
          <AnimatedSection animation="fade-up" className="max-w-3xl">
            <Badge variant="dark" icon="star" className="mb-6">
              {translations.badge}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {translations.title}
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {translations.subtitle}
            </p>

            <Link href="/contact">
              <Button size="lg" className="group">
                {translations.heroCta}
                <svg
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </AnimatedSection>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="space-y-20">
            {SERVICES.map((service, index) => (
              <div
                key={service.key}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <AnimatedSection
                  animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                  className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={t(`${service.key}Title`)}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Service number */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </AnimatedSection>

                {/* Content */}
                <AnimatedSection
                  animation={index % 2 === 0 ? 'slide-right' : 'slide-left'}
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {t(`${service.key}Title`)}
                  </h2>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {t(`${service.key}Description`)}
                  </p>

                  <AnimatedContainer as="ul" className="space-y-4 mb-8" staggerDelay={0.1}>
                    {service.featureKeys.map((featureKey) => (
                      <motion.li
                        key={featureKey}
                        variants={fadeUp}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{translations.features[featureKey]}</span>
                      </motion.li>
                    ))}
                  </AnimatedContainer>

                  <Link href="/contact">
                    <Button variant="dark" className="group">
                      {translations.requestQuote}
                      <svg
                        className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Button>
                  </Link>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
