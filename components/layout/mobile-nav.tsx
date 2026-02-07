'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import Image from 'next/image';
import { NAV_LINKS, COMPANY_INFO } from '@/lib/constants';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  variant?: 'default' | 'transparent';
}

const LOCALE_LABELS: Record<string, string> = {
  sq: 'SQ',
  en: 'EN',
  it: 'IT',
};

export function MobileNav({ variant = 'default' }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={cn(
          'p-2 rounded-lg transition-colors',
          variant === 'transparent'
            ? 'text-white hover:bg-white/10'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        )}
        aria-label="Open menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Fullscreen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 animate-overlay-in">
          {/* Header */}
          <div className="flex items-center justify-between p-5">
            {/* Logo */}
            <Image
              src="/logo_eatransport.svg"
              alt="EA Transport"
              width={160}
              height={32}
              className="h-8 w-auto brightness-0 invert"
            />

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links - Centered */}
          <nav className="flex flex-col items-center justify-center h-[calc(100%-220px)] gap-2">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={handleLinkClick}
                className="animate-fade-up text-2xl sm:text-3xl font-bold text-white hover:text-primary-400 transition-colors py-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          {/* Bottom Section */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            {/* Language Switcher Inline */}
            <div
              className="flex justify-center gap-2 mb-6 animate-fade-up"
              style={{ animationDelay: `${NAV_LINKS.length * 50 + 50}ms` }}
            >
              {routing.locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocaleChange(loc)}
                  className={cn(
                    'px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200',
                    locale === loc
                      ? 'bg-primary-500 text-white'
                      : 'bg-transparent border border-white/30 text-white hover:border-white/60 hover:bg-white/10'
                  )}
                >
                  {LOCALE_LABELS[loc]}
                </button>
              ))}
            </div>

            {/* Contact Info */}
            <div
              className="flex flex-col items-center gap-3 animate-fade-up"
              style={{ animationDelay: `${NAV_LINKS.length * 50 + 100}ms` }}
            >
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-white/60 hover:text-white/80 transition-colors text-sm"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-white/60 hover:text-white/80 transition-colors text-sm"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
