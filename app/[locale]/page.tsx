import dynamic from 'next/dynamic';
import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/hero';

// Lazy load below-the-fold sections for faster initial load
const ServicesOverview = dynamic(() => import('@/components/sections/services-overview').then(m => m.ServicesOverview));
const HowItWorks = dynamic(() => import('@/components/sections/how-it-works').then(m => m.HowItWorks));
const AboutSection = dynamic(() => import('@/components/sections/about-section').then(m => m.AboutSection));
const StatsSection = dynamic(() => import('@/components/sections/stats-section').then(m => m.StatsSection));
const WhyChooseUs = dynamic(() => import('@/components/sections/why-choose-us').then(m => m.WhyChooseUs));
const RouteCoverage = dynamic(() => import('@/components/sections/route-coverage').then(m => m.RouteCoverage));
const Testimonials = dynamic(() => import('@/components/sections/testimonials').then(m => m.Testimonials));
const PartnersGrid = dynamic(() => import('@/components/sections/partners-grid').then(m => m.PartnersGrid));
const HomepageQuoteSection = dynamic(() => import('@/components/sections/homepage-quote-section').then(m => m.HomepageQuoteSection));
const CtaSection = dynamic(() => import('@/components/sections/cta-section').then(m => m.CtaSection));

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
      <ServicesOverview />
      <HowItWorks />
      <AboutSection />
      <StatsSection />
      <WhyChooseUs />
      <RouteCoverage />
      <Testimonials />
      <PartnersGrid />
      <HomepageQuoteSection />
      <CtaSection />
    </>
  );
}
