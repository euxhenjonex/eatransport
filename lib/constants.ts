export const NAV_LINKS = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/services' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
] as const;

export const COMPANY_INFO = {
  name: 'EA Transport',
  email: 'info@eatransport.al',
  phone: '+355 69 123 4567',
  address: 'Vllazërimi, Fllakë, Durrës 2001, Albania',
  whatsapp: '+355691234567',
} as const;

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/eatransport',
  instagram: 'https://instagram.com/eatransport',
  linkedin: 'https://linkedin.com/company/eatransport',
} as const;
