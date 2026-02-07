'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { NAV_LINKS } from '@/lib/constants';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './language-switcher';
import { MobileNav } from './mobile-nav';
import { cn } from '@/lib/utils';

export function Header() {
  const t = useTranslations('nav');
  const tHero = useTranslations('hero');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if we're on the homepage
  const isHomepage = pathname === '/' || pathname === '/en' || pathname === '/it' || pathname === '/sq';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine header style based on page and scroll
  const isTransparent = isHomepage && !isScrolled;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isTransparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo_eatransport.svg"
              alt="EA Transport"
              width={180}
              height={35}
              className={cn(
                'h-8 w-auto transition-all',
                isTransparent && 'brightness-0 invert'
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div
              className={cn(
                'flex items-center gap-1 px-2 py-2 rounded-full transition-colors',
                isTransparent
                  ? 'bg-white/10 backdrop-blur-sm'
                  : 'bg-gray-100'
              )}
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname.includes(link.href) && link.href !== '/';
                return (
                  <Link
                    key={link.key}
                    href={link.href}
                    className={cn(
                      'px-4 py-2 text-sm font-medium rounded-full transition-all',
                      isActive
                        ? isTransparent
                          ? 'bg-white text-gray-900'
                          : 'bg-white text-primary-600 shadow-sm'
                        : isTransparent
                          ? 'text-white/90 hover:text-white hover:bg-white/10'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                    )}
                  >
                    {t(link.key)}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <LanguageSwitcher variant={isTransparent ? 'transparent' : 'default'} />
            </div>
            <Link href="/contact" className="hidden sm:block">
              <Button
                size="sm"
                variant="primary"
                className="group"
              >
                {tHero('cta')}
                <svg
                  className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
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
            <MobileNav variant={isTransparent ? 'transparent' : 'default'} />
          </div>
        </div>
      </Container>
    </header>
  );
}
