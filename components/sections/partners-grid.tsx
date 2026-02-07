'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from '@/components/animation/animated-section';

// Partner logos - using placeholder company names
// These would be replaced with actual partner logos
const PARTNERS = [
  { name: 'DHL', initials: 'DHL' },
  { name: 'FedEx', initials: 'FE' },
  { name: 'UPS', initials: 'UPS' },
  { name: 'Maersk', initials: 'MK' },
  { name: 'DB Schenker', initials: 'DB' },
  { name: 'Kuehne Nagel', initials: 'KN' },
  { name: 'DSV', initials: 'DSV' },
  { name: 'Expeditors', initials: 'EX' },
];

function PartnerLogo({ name, initials }: { name: string; initials: string }) {
  return (
    <div className="flex-shrink-0 group">
      <div className="w-36 h-16 mx-6 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-100 grayscale hover:grayscale-0 transition-all duration-300 hover:border-primary-200 hover:shadow-md hover:scale-105">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 group-hover:bg-primary-100 rounded-lg flex items-center justify-center transition-colors">
            <span className="text-xs font-bold text-gray-500 group-hover:text-primary-600 transition-colors">
              {initials}
            </span>
          </div>
          <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}

export function PartnersGrid() {
  const t = useTranslations('partners');

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <Container>
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <Badge variant="light" icon="star" className="mb-6">
            {t('badge')}
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>

          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            {t('subtitle')}
          </p>
        </AnimatedSection>
      </Container>

      {/* Marquee container */}
      <div className="relative py-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {/* First set of logos */}
          {PARTNERS.map((partner, index) => (
            <PartnerLogo key={`first-${index}`} name={partner.name} initials={partner.initials} />
          ))}
          {/* Duplicate for seamless loop */}
          {PARTNERS.map((partner, index) => (
            <PartnerLogo key={`second-${index}`} name={partner.name} initials={partner.initials} />
          ))}
        </div>
      </div>

    </section>
  );
}
