import { setRequestLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { CtaSection } from '@/components/sections/cta-section';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  const tMeta = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: `${t('title')} | EA Transport`,
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1470&auto=format&fit=crop"
            alt="Transport fleet"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="dark" icon="star" className="mb-6">
              {t('subtitle')}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t('title')}
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              {t('description')}
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">15+</div>
              <div className="text-gray-500">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">30+</div>
              <div className="text-gray-500">Countries Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">500+</div>
              <div className="text-gray-500">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">10K+</div>
              <div className="text-gray-500">Deliveries/Year</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1470&auto=format&fit=crop"
                  alt="Warehouse operations"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t('insured_title')}</div>
                    <div className="text-sm text-gray-500">{t('insured_subtitle')}</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Badge variant="dark" icon="star" className="mb-6">
                {t('subtitle')}
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('story_title')}
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
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
