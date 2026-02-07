'use client';

import dynamic from 'next/dynamic';

const WhatsAppButton = dynamic(
  () => import('./whatsapp-button').then(m => m.WhatsAppButton),
  { ssr: false }
);

export function LazyWhatsApp() {
  return <WhatsAppButton />;
}
