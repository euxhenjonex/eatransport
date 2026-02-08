'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CtaSection } from '@/components/sections/cta-section';
import { AnimatedSection } from '@/components/animation/animated-section';

import { fadeUp } from '@/lib/animations';

const SERVICES = [
  {
    key: 'freight',
    image: '/trasportocamion.webp',
    featureKeys: ['freight.f1', 'freight.f2', 'freight.f3', 'freight.f4'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0h-2.25m0 0V6.375c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v3.75m-7.5 0h7.5" />
      </svg>
    ),
  },
  {
    key: 'frigo',
    image: '/trasportorefrigerato.webp',
    featureKeys: ['frigo.f1', 'frigo.f2', 'frigo.f3', 'frigo.f4'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20m0-20l4 4m-4-4L8 6m4 14l4-4m-4 4l-4-4m-6-4h20m-20 0l4-4m-4 4l4 4m12-8l4 4m-4-4v0m4 4v0" />
      </svg>
    ),
  },
  {
    key: 'express',
    image: '/trasportofurgone.webp',
    featureKeys: ['express.f1', 'express.f2', 'express.f3', 'express.f4'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
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
    frigoTitle: string;
    frigoDescription: string;
    expressTitle: string;
    expressDescription: string;
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
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />

        {/* Decorative blobs */}
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary-500/5 rounded-full blur-2xl" />

        <Container className="relative z-10">
          <AnimatedSection animation="fade-up" className="max-w-3xl">
            <Badge variant="dark" icon="star" className="mb-6">
              {translations.badge}
            </Badge>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {translations.title}
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              {translations.subtitle}
            </p>

            <Link href="/contact">
              <Button size="lg" className="group border-2 border-transparent">
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

      {/* Services Detail Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <Container>
          <div className="space-y-24 md:space-y-32">
            {SERVICES.map((service, index) => (
              <div
                key={service.key}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
              >
                {/* Image */}
                <AnimatedSection
                  animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                  className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
                    <Image
                      src={service.image}
                      alt={t(`${service.key}Title`)}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    {/* Gradient overlay like about-section */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                  </div>
                  {/* Service number badge — matches how-it-works style */}
                  <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-12 h-12 md:w-14 md:h-14 bg-gray-900 rounded-full flex items-center justify-center shadow-lg ring-4 ring-gray-900/10">
                    <span className="text-lg md:text-xl font-bold text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </AnimatedSection>

                {/* Content */}
                <AnimatedSection
                  animation={index % 2 === 0 ? 'slide-right' : 'slide-left'}
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                >
                  {/* Icon badge */}
                  <div className="w-12 h-12 bg-primary-100 text-primary-500 rounded-2xl flex items-center justify-center mb-5">
                    {service.icon}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {t(`${service.key}Title`)}
                  </h2>

                  <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                    {t(`${service.key}Description`)}
                  </p>

                  {/* Feature list — styled like about-section feature cards */}
                  <motion.ul
                    className="space-y-3 mb-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                    }}
                  >
                    {service.featureKeys.map((featureKey) => (
                      <motion.li
                        key={featureKey}
                        variants={fadeUp}
                        className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 border border-gray-100 shadow-sm"
                      >
                        <div className="w-8 h-8 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{translations.features[featureKey]}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <Link href="/contact">
                    <Button variant="dark" size="lg" className="group">
                      {translations.requestQuote}
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
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
