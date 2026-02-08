import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Container } from '@/components/ui/container';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });

  return {
    title: `${t('title')} | EA Transport`,
    description: t('intro').slice(0, 160),
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'terms' });

  const sections = [
    { title: t('services_title'), text: t('services_text') },
    { title: t('quotes_title'), text: t('quotes_text') },
    { title: t('liability_title'), text: t('liability_text') },
    { title: t('obligations_title'), text: t('obligations_text') },
    { title: t('prohibited_title'), text: t('prohibited_text') },
    { title: t('termination_title'), text: t('termination_text') },
    { title: t('law_title'), text: t('law_text') },
    { title: t('contact_title'), text: t('contact_text') },
  ];

  return (
    <>
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('title')}
            </h1>
            <p className="text-gray-400 text-sm">{t('last_updated')}</p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              {t('intro')}
            </p>

            <div className="space-y-8">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
