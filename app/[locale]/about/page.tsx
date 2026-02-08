import { setRequestLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { CtaSection } from '@/components/sections/cta-section';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://transport-ea.com';

const ABOUT_STATS = [
  {
    valueKey: 'years_value',
    labelKey: 'years_label',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    valueKey: 'fleet_value',
    labelKey: 'fleet_label',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0h-2.25m0 0V6.375c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v3.75m-7.5 0h7.5" />
      </svg>
    ),
  },
  {
    valueKey: 'clients_value',
    labelKey: 'clients_label',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tMeta = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: tMeta('about_title'),
    description: tMeta('about_description'),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'about' });
  const tStats = await getTranslations({ locale, namespace: 'stats' });

  const localePrefix = locale === 'sq' ? '' : `/${locale}`;
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}${localePrefix || '/'}` },
      { '@type': 'ListItem', position: 2, name: t('title'), item: `${BASE_URL}${localePrefix}/about` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />

        {/* Decorative blobs */}
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary-500/5 rounded-full blur-2xl" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="dark" icon="star" className="mb-6">
              {t('subtitle')}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t('title')}
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed">
              {t('description')}
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Section — same style as hero trust bar */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-3 gap-6 md:gap-8">
            {ABOUT_STATS.map((stat) => (
              <div key={stat.valueKey} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-100 border border-primary-200 flex items-center justify-center text-primary-500">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 leading-none">
                    {tStats(stat.valueKey)}
                  </div>
                  <div className="text-sm md:text-base text-gray-500 mt-1">
                    {tStats(stat.labelKey)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Story Section — matches about-section on home */}
      <section className="py-20 md:py-28 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image column */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
                <Image
                  src="/eatransport.webp"
                  alt="EA Transport fleet"
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Content column */}
            <div>
              <Badge variant="dark" icon="star" className="mb-6">
                {t('subtitle')}
              </Badge>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {t('story_title')}
              </h2>

              <div className="space-y-4 text-lg text-gray-500 leading-relaxed">
                <p>{t('story_p1')}</p>
                <p>{t('story_p2')}</p>
                <p>{t('story_p3')}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <CtaSection />
    </>
  );
}
