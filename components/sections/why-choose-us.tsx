'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/animation/animated-section';
import { AnimatedContainer } from '@/components/animation/animated-container';
import { fadeUp, slideUpVariants } from '@/lib/animations';

const FEATURES = [
  {
    key: 'reliability',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1470&auto=format&fit=crop',
    height: 'h-80',
  },
  {
    key: 'safety',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1470&auto=format&fit=crop',
    height: 'h-96',
  },
  {
    key: 'professionalism',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1365&auto=format&fit=crop',
    height: 'h-80',
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

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
        </AnimatedSection>

        {/* Feature cards grid */}
        <AnimatedContainer
          as="div"
          className="grid md:grid-cols-3 gap-6"
          staggerDelay={0.15}
          childVariants={slideUpVariants}
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.key}
              variants={slideUpVariants}
              className={`group relative rounded-3xl overflow-hidden ${feature.height} ${
                index === 1 ? 'md:-mt-8' : ''
              }`}
            >
              {/* Background image */}
              <Image
                src={feature.image}
                alt={t(`${feature.key}.title`)}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                {/* Number indicator */}
                <div className="text-primary-500 text-5xl font-bold opacity-50 mb-2">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {t(`${feature.key}.title`)}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t(`${feature.key}.description`)}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </AnimatedContainer>

      </Container>
    </section>
  );
}
