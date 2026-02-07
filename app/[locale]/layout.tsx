import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { LazyWhatsApp } from '@/components/layout/lazy-whatsapp';
import { ToastProvider } from '@/components/ui/toast';
import { COMPANY_INFO, SOCIAL_LINKS } from '@/lib/constants';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://eatransport.al';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadata = messages.metadata as { title: string; description: string };

  const title = metadata?.title || "EA Transport";
  const description = metadata?.description || "International Freight Transport";

  // Generate hreflang links for all locales
  const languages: Record<string, string> = {};
  routing.locales.forEach((loc) => {
    languages[loc] = loc === routing.defaultLocale ? `${BASE_URL}` : `${BASE_URL}/${loc}`;
  });

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: locale === routing.defaultLocale ? `${BASE_URL}` : `${BASE_URL}/${locale}`,
      languages,
    },
    openGraph: {
      title,
      description,
      url: locale === routing.defaultLocale ? `${BASE_URL}` : `${BASE_URL}/${locale}`,
      siteName: COMPANY_INFO.name,
      locale: locale === 'sq' ? 'sq_AL' : locale === 'it' ? 'it_IT' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Schema.org JSON-LD structured data - Organization
function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.phone,
      contactType: 'customer service',
      availableLanguage: ['Albanian', 'English', 'Italian'],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tirana',
      addressCountry: 'AL',
    },
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.linkedin,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Schema.org JSON-LD structured data - LocalBusiness
function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: COMPANY_INFO.name,
    image: `${BASE_URL}/logo.png`,
    url: BASE_URL,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rruga e Transportit, Nr. 123',
      addressLocality: 'Tirana',
      postalCode: '1001',
      addressCountry: 'AL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.3275,
      longitude: 19.8187,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    priceRange: '€€',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 41.3275,
        longitude: 19.8187,
      },
      geoRadius: '2000',
    },
    serviceType: ['Freight Transport', 'Logistics', 'Customs Services'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ToastProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <LazyWhatsApp />
          </ToastProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
