import { setRequestLocale, getTranslations } from 'next-intl/server';
import { ServicesPageContent } from '@/components/sections/services-page-content';
import { COMPANY_INFO } from '@/lib/constants';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://transport-ea.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tMeta = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: tMeta('services_title'),
    description: tMeta('services_description'),
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'services' });
  const tHero = await getTranslations({ locale, namespace: 'hero' });

  const translations = {
    badge: t('badge'),
    title: t('title'),
    subtitle: t('subtitle'),
    freightTitle: t('freight.title'),
    freightDescription: t('freight.description'),
    frigoTitle: t('frigo.title'),
    frigoDescription: t('frigo.description'),
    expressTitle: t('express.title'),
    expressDescription: t('express.description'),
    requestQuote: t('request_quote'),
    heroCta: tHero('cta'),
    features: {
      'freight.f1': t('freight.f1'),
      'freight.f2': t('freight.f2'),
      'freight.f3': t('freight.f3'),
      'freight.f4': t('freight.f4'),
      'frigo.f1': t('frigo.f1'),
      'frigo.f2': t('frigo.f2'),
      'frigo.f3': t('frigo.f3'),
      'frigo.f4': t('frigo.f4'),
      'express.f1': t('express.f1'),
      'express.f2': t('express.f2'),
      'express.f3': t('express.f3'),
      'express.f4': t('express.f4'),
    },
  };

  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const localePrefix = locale === 'sq' ? '' : `/${locale}`;
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}${localePrefix || '/'}` },
      { '@type': 'ListItem', position: 2, name: tNav('services'), item: `${BASE_URL}${localePrefix}/services` },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: BASE_URL,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t('title'),
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: t('freight.title'),
            description: t('freight.description'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: t('frigo.title'),
            description: t('frigo.description'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: t('express.title'),
            description: t('express.description'),
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicesPageContent locale={locale} translations={translations} />
    </>
  );
}
