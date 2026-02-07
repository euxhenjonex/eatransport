'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion } from '@/components/ui/accordion';

const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4'];

interface FaqAccordionProps {
  showCta?: boolean;
}

export function FaqAccordion({ showCta = true }: FaqAccordionProps) {
  const t = useTranslations('faq');
  const tHero = useTranslations('hero');

  const items = FAQ_KEYS.map((key) => ({
    title: t(`questions.${key}.question`),
    content: t(`questions.${key}.answer`),
  }));

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Header */}
          <div>
            <Badge variant="dark" icon="star" className="mb-6">
              FAQ
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t('title')}
            </h2>

            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              {t('subtitle')}
            </p>

            {showCta && (
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-2">Still have questions?</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Can&apos;t find the answer you&apos;re looking for? Please contact our friendly team.
                </p>
                <Link href="/contact">
                  <Button variant="dark" className="group">
                    {tHero('cta')}
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
              </div>
            )}

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div className="bg-primary-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary-600">&lt;24h</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
            </div>
          </div>

          {/* Right column - Accordion */}
          <div>
            <Accordion items={items} variant="numbered" />
          </div>
        </div>
      </Container>
    </section>
  );
}
