import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/hero';

// Lazy load below-the-fold sections for faster initial load
const ServicesOverview = dynamic(() => import('@/components/sections/services-overview').then(m => m.ServicesOverview), {
  loading: () => <SectionSkeleton />,
});
const HowItWorks = dynamic(() => import('@/components/sections/how-it-works').then(m => m.HowItWorks), {
  loading: () => <SectionSkeleton />,
});
const AboutSection = dynamic(() => import('@/components/sections/about-section').then(m => m.AboutSection), {
  loading: () => <SectionSkeleton />,
});
const RouteCoverage = dynamic(() => import('@/components/sections/route-coverage').then(m => m.RouteCoverage), {
  loading: () => <SectionSkeleton />,
});
const Testimonials = dynamic(() => import('@/components/sections/testimonials').then(m => m.Testimonials), {
  loading: () => <SectionSkeleton />,
});
const PartnersGrid = dynamic(() => import('@/components/sections/partners-grid').then(m => m.PartnersGrid), {
  loading: () => <SectionSkeleton height="h-64" />,
});
const CtaSection = dynamic(() => import('@/components/sections/cta-section').then(m => m.CtaSection), {
  loading: () => <SectionSkeleton height="h-64" />,
});

function SectionSkeleton({ height = 'h-96' }: { height?: string }) {
  return <div className={`${height} bg-gray-50 animate-pulse`} />;
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Suspense>
        <ServicesOverview />
        <HowItWorks />
        <AboutSection />
        <RouteCoverage />
        <Testimonials />
        <PartnersGrid />
        <CtaSection />
      </Suspense>
    </>
  );
}
