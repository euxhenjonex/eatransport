'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { HeroAnimation, HeroStaggerItem } from '@/components/animation/hero-animation';

const TRUST_STATS = [
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
    valueKey: 'countries_value',
    labelKey: 'countries_label',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
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
] as const;

export function Hero() {
  const t = useTranslations('hero');
  const tStats = useTranslations('stats');

  return (
    <section className="relative h-screen h-dvh flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/ea_transport_hero.webp"
          className="absolute inset-0 w-full h-full object-cover object-[70%_center] md:object-center"
        >
          <source src="/video1.webm" type="video/webm" />
          <source src="/video1.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay — layered for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/75 to-gray-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-gray-900/50" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary-500/5 rounded-full blur-2xl" />

      <Container className="relative z-10">
        <div className="pt-16 pb-12 md:pt-28 md:pb-16">
          <div className="flex justify-start">
            {/* Content */}
            <HeroAnimation className="max-w-2xl">
              <HeroStaggerItem>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(3rem,6vh,4.5rem)] font-bold text-white mb-4 leading-[1.1]">
                  {t('title')}
                </h1>
              </HeroStaggerItem>

              <HeroStaggerItem>
                <p className="text-lg md:text-xl text-gray-300 mb-5 leading-relaxed">
                  {t('description')}
                </p>
              </HeroStaggerItem>

              <HeroStaggerItem>
                <div className="flex flex-row gap-3">
                  <Link href="/contact">
                    <Button size="sm" className="group border-2 border-transparent md:px-5 md:py-2.5 md:text-base">
                      {t('cta')}
                      <svg
                        className="w-4 h-4 ml-1.5 md:w-5 md:h-5 md:ml-2 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline-light" size="sm" className="group md:px-5 md:py-2.5 md:text-base">
                      {t('secondary_cta')}
                      <svg
                        className="w-4 h-4 ml-1.5 md:w-5 md:h-5 md:ml-2 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Button>
                  </Link>
                </div>
              </HeroStaggerItem>

              {/* Trust bar */}
              <HeroStaggerItem>
                <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/15">
                  <div className="bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 md:px-6">
                    <div className="grid grid-cols-3 divide-x divide-white/10">
                      {TRUST_STATS.map((stat) => (
                        <div
                          key={stat.valueKey}
                          className="flex items-center gap-2.5 md:gap-3 px-2 first:pl-0 last:pr-0 md:px-4 md:first:pl-0 md:last:pr-0"
                        >
                          <div className="hidden md:flex w-11 h-11 rounded-full bg-white/10 border border-white/15 items-center justify-center text-primary-200 shrink-0 [&_svg]:w-5 [&_svg]:h-5">
                            {stat.icon}
                          </div>
                          <div className="min-w-0">
                            <div className="text-base md:text-xl font-bold text-white leading-none tracking-tight">
                              {tStats(stat.valueKey)}
                            </div>
                            <div className="text-[10px] md:text-[13px] text-gray-400 mt-0.5 leading-tight">
                              {tStats(stat.labelKey)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </HeroStaggerItem>
            </HeroAnimation>

          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-white/50 text-xs tracking-widest uppercase">{t('scroll')}</span>
        <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
}
