import { setRequestLocale, getTranslations } from 'next-intl/server';
import { ServicesPageContent } from '@/components/sections/services-page-content';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  const tMeta = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: `${t('title')} | EA Transport`,
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
    expressTitle: t('express.title'),
    expressDescription: t('express.description'),
    logisticsTitle: t('logistics.title'),
    logisticsDescription: t('logistics.description'),
    customsTitle: t('customs.title'),
    customsDescription: t('customs.description'),
    requestQuote: t('request_quote'),
    heroCta: tHero('cta'),
    features: {
      'freight.f1': t('freight.f1'),
      'freight.f2': t('freight.f2'),
      'freight.f3': t('freight.f3'),
      'freight.f4': t('freight.f4'),
      'express.f1': t('express.f1'),
      'express.f2': t('express.f2'),
      'express.f3': t('express.f3'),
      'express.f4': t('express.f4'),
      'logistics.f1': t('logistics.f1'),
      'logistics.f2': t('logistics.f2'),
      'logistics.f3': t('logistics.f3'),
      'logistics.f4': t('logistics.f4'),
      'customs.f1': t('customs.f1'),
      'customs.f2': t('customs.f2'),
      'customs.f3': t('customs.f3'),
      'customs.f4': t('customs.f4'),
    },
  };

  return <ServicesPageContent locale={locale} translations={translations} />;
}
