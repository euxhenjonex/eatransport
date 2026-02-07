# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Panoramica Progetto

**Cliente:** EA Transport (Albania)
**Tipo:** Sito web aziendale per trasporti internazionali
**Lingue:** Albanese (default), Inglese, Italiano
**Stack:** Next.js 16, React 19, Tailwind CSS 4, TypeScript
**Deploy:** Vercel via GitHub

### Descrizione
Sito web corporate per una compagnia di trasporti internazionali che opera tra Albania e Europa. Include pagine informative, form per richiesta preventivo con invio email, integrazione WhatsApp e supporto multilingua.

---

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Fasi di Implementazione

### ✅ FASE 1: Setup Fondamentale (COMPLETATA)
- [x] Installazione dipendenze (next-intl, zod, clsx, tailwind-merge, resend, @react-google-maps/api)
- [x] Configurazione i18n (`/i18n/routing.ts`, `/i18n/request.ts`, `/i18n/navigation.ts`)
- [x] Middleware per routing multilingua (`/middleware.ts`)
- [x] Aggiornamento `next.config.ts` con plugin next-intl
- [x] Struttura cartelle `/app/[locale]/`
- [x] File traduzioni (`/messages/sq.json`, `en.json`, `it.json`)
- [x] Design tokens in `globals.css` (palette Corporate Blue)
- [x] Utility `cn()` in `/lib/utils.ts`

### ✅ FASE 2: Componenti UI + Layout (COMPLETATA)
- [x] Componenti UI: Button, Input, Textarea, Select, Card, Accordion, Container
- [x] Componenti Layout: Header, Footer, LanguageSwitcher, MobileNav, WhatsAppButton
- [x] Navigazione responsive con menu mobile
- [x] Integrazione layout nel `/app/[locale]/layout.tsx`

### ✅ FASE 3: Home Page (COMPLETATA)
- [x] Sezione Hero con CTA
- [x] ServicesOverview (preview servizi)
- [x] ValuesSection (valori aziendali)
- [x] CtaSection (call-to-action)

### ✅ FASE 4: Pagine Contenuto (COMPLETATA)
- [x] `/services` - Descrizioni dettagliate servizi
- [x] `/about` - Storia e valori aziendali
- [x] `/partners` - Grid loghi partner (placeholder)
- [x] `/faq` - Accordion con domande/risposte

### ✅ FASE 5: Form Preventivo + Email (COMPLETATA)
- [x] Schema validazione Zod (`/lib/validations.ts`)
- [x] Server Action per email (`/actions/send-quote.ts`)
- [x] Componente QuoteForm con tutti i campi richiesti
- [x] Pagina contatti (`/contact`) con form e info aziendali
- [x] Stati loading/success/error

### ✅ FASE 6: Integrazioni (COMPLETATA)
- [x] Componente MapSection per Google Maps (richiede API key)
- [x] Pulsante WhatsApp floating

### ✅ FASE 7: SEO (COMPLETATA)
- [x] Metadata dinamici per ogni pagina
- [x] `/app/sitemap.ts` - Sitemap dinamico
- [x] `/app/robots.ts` - robots.txt

---

## Cose da Fare / Miglioramenti Futuri

### 🔲 Da Completare (richiede input cliente)
- [ ] **Logo:** Sostituire placeholder con logo SVG reale
- [ ] **Partner:** Aggiungere loghi partner reali in `/components/sections/partners-grid.tsx`
- [ ] **Contenuti:** Verificare/aggiornare testi in tutte le lingue
- [ ] **Immagini:** Aggiungere immagini per hero, about, servizi

### 🔲 Configurazione Ambiente
- [ ] Configurare `RESEND_API_KEY` per invio email
- [ ] Configurare `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` per mappa (opzionale)
- [ ] Aggiornare numero WhatsApp in `/lib/constants.ts`
- [ ] Aggiornare info aziendali in `/lib/constants.ts`

### 🔲 Deploy
- [ ] Push su GitHub
- [ ] Collegare a Vercel
- [ ] Configurare variabili ambiente su Vercel
- [ ] Configurare dominio personalizzato

### 🔲 Miglioramenti Opzionali
- [ ] Aggiungere animazioni (framer-motion)
- [ ] Aggiungere tracking analytics
- [ ] Ottimizzare immagini con next/image
- [ ] Aggiungere Open Graph images per social sharing

---

## Struttura Progetto

```
app/
├── [locale]/
│   ├── layout.tsx          # Root layout con i18n, Header, Footer
│   ├── page.tsx            # Home page
│   ├── services/page.tsx   # Pagina servizi
│   ├── about/page.tsx      # Pagina chi siamo
│   ├── partners/page.tsx   # Pagina partner
│   ├── faq/page.tsx        # Pagina FAQ
│   └── contact/page.tsx    # Pagina contatti con form
├── globals.css             # Design tokens e stili globali
├── sitemap.ts              # Sitemap dinamico
└── robots.ts               # robots.txt

components/
├── ui/                     # Button, Input, Select, Textarea, Card, Accordion, Container
├── layout/                 # Header, Footer, LanguageSwitcher, MobileNav, WhatsAppButton
├── sections/               # Hero, ServicesOverview, ValuesSection, CtaSection, FaqAccordion, PartnersGrid, MapSection
└── forms/                  # QuoteForm

lib/
├── utils.ts               # Funzione cn() per class merging
├── constants.ts           # NAV_LINKS, COMPANY_INFO, SOCIAL_LINKS
└── validations.ts         # Schema Zod per form

actions/
└── send-quote.ts          # Server Action per invio email

messages/
├── sq.json                # Traduzioni Albanese
├── en.json                # Traduzioni Inglese
└── it.json                # Traduzioni Italiano

i18n/
├── routing.ts             # Configurazione locales
├── request.ts             # getRequestConfig
└── navigation.ts          # Link/redirect helpers
```

---

## Palette Colori

```css
--primary-500: #3b82f6   /* Blu principale */
--primary-600: #2563eb   /* Blu hover */
--primary-700: #1d4ed8   /* Blu scuro */
--gray-50: #f9fafb       /* Background chiaro */
--gray-800: #1f2937      /* Testo scuro */
--gray-900: #111827      /* Titoli */
```

---

## Variabili Ambiente

Copiare `.env.example` in `.env.local`:

```bash
NEXT_PUBLIC_BASE_URL=https://eatransport.al
RESEND_API_KEY=re_xxxxxxxxxx
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaxxxxxxxx
NEXT_PUBLIC_WHATSAPP_NUMBER=+355691234567
```

---

## URL di Test

- `http://localhost:3000` - Albanese (default)
- `http://localhost:3000/en` - English
- `http://localhost:3000/it` - Italiano

---

## Path Aliases

Use `@/*` to import from the project root (configured in tsconfig.json).
