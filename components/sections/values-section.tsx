'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';

const VALUES = [
  {
    key: 'reliability',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    key: 'safety',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    key: 'professionalism',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export function ValuesSection() {
  const t = useTranslations('about.values');

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <Badge variant="dark" icon="star" className="mb-6">
            {t('badge')}
          </Badge>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((value) => (
            <div
              key={value.key}
              className="group relative bg-white rounded-3xl p-8 hover:bg-gray-900 transition-all duration-300 overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-500/20 transition-colors" />

              {/* Icon */}
              <div className="relative w-16 h-16 bg-primary-100 text-primary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                {value.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white transition-colors">
                {t(`${value.key}.title`)}
              </h3>
              <p className="text-muted group-hover:text-gray-400 transition-colors">
                {t(`${value.key}.description`)}
              </p>

              {/* Number indicator */}
              <div className="absolute bottom-6 right-6 text-6xl font-bold text-gray-100 group-hover:text-gray-800 transition-colors">
                {String(VALUES.indexOf(value) + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
