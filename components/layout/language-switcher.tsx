'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';

const LOCALE_LABELS: Record<string, string> = {
  sq: 'SQ',
  en: 'EN',
  it: 'IT',
};

interface LanguageSwitcherProps {
  variant?: 'default' | 'transparent';
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function LanguageSwitcher({ variant = 'default' }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  const handleLocaleChange = (newLocale: string) => {
    setIsOpen(false);
    router.replace(pathname, { locale: newLocale });
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger Button */}
      <button
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200',
          variant === 'transparent'
            ? 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
        )}
      >
        <GlobeIcon className="opacity-70" />
        <span className="text-sm font-medium">{LOCALE_LABELS[locale]}</span>
        <ChevronIcon
          className={cn(
            'opacity-60 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          aria-activedescendant={locale}
          className={cn(
            'absolute right-0 z-50 mt-2 min-w-[100px] py-1 rounded-lg shadow-lg',
            'origin-top-right animate-in',
            variant === 'transparent'
              ? 'bg-gray-900/90 backdrop-blur-md border border-white/10'
              : 'bg-white border border-gray-200'
          )}
        >
          {routing.locales.map((loc) => (
            <button
              key={loc}
              id={loc}
              role="option"
              aria-selected={locale === loc}
              onClick={() => handleLocaleChange(loc)}
              className={cn(
                'flex items-center w-full px-4 py-2 text-sm transition-colors duration-150',
                variant === 'transparent'
                  ? locale === loc
                    ? 'text-primary-400 font-medium'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                  : locale === loc
                    ? 'text-primary-600 font-medium bg-primary-50'
                    : 'text-gray-700 hover:bg-gray-50'
              )}
            >
              <span className="w-5 flex-shrink-0">
                {locale === loc && (
                  <CheckIcon className={variant === 'transparent' ? 'text-primary-400' : 'text-primary-600'} />
                )}
              </span>
              <span>{LOCALE_LABELS[loc]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
