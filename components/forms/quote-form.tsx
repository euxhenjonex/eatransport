'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { sendQuoteRequest, type ActionState } from '@/actions/send-quote';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/toast';

export function QuoteForm() {
  const t = useTranslations('contact');
  const tCommon = useTranslations('common');
  const { addToast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const prevStateRef = useRef<ActionState | null>(null);

  const [state, formAction, isPending] = useActionState<ActionState | null, FormData>(
    sendQuoteRequest,
    null
  );

  // Show toast on state change
  useEffect(() => {
    if (state && state !== prevStateRef.current) {
      if (state.success) {
        addToast(t('form.success'), 'success');
        formRef.current?.reset();
      } else if (state.success === false && state.message) {
        addToast(t('form.error'), 'error');
      }
      prevStateRef.current = state;
    }
  }, [state, addToast, t]);

  const cargoOptions = [
    { value: 'general', label: t('cargo_types.general') },
    { value: 'palletized', label: t('cargo_types.palletized') },
    { value: 'fragile', label: t('cargo_types.fragile') },
    { value: 'refrigerated', label: t('cargo_types.refrigerated') },
    { value: 'hazardous', label: t('cargo_types.hazardous') },
    { value: 'oversized', label: t('cargo_types.oversized') },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">{t('form.contact_info')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                id="quote-name"
                name="name"
                label={t('form.name')}
                placeholder={t('form.name')}
                required
                autoComplete="name"
                error={state?.errors?.name?.[0]}
              />
              <Input
                id="quote-email"
                name="email"
                type="email"
                label={t('form.email')}
                placeholder={t('form.email')}
                required
                autoComplete="email"
                error={state?.errors?.email?.[0]}
              />
              <Input
                id="quote-phone"
                name="phone"
                type="tel"
                label={t('form.phone')}
                placeholder={t('form.phone')}
                required
                autoComplete="tel"
                error={state?.errors?.phone?.[0]}
              />
              <Input
                id="quote-company"
                name="company"
                label={`${t('form.company')} (${tCommon('optional')})`}
                placeholder={t('form.company')}
                autoComplete="organization"
                error={state?.errors?.company?.[0]}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">{t('form.shipment_details')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                id="quote-origin"
                name="origin"
                label={t('form.origin')}
                placeholder={t('form.origin')}
                required
                error={state?.errors?.origin?.[0]}
              />
              <Input
                id="quote-destination"
                name="destination"
                label={t('form.destination')}
                placeholder={t('form.destination')}
                required
                error={state?.errors?.destination?.[0]}
              />
              <Input
                id="quote-weight"
                name="weight"
                label={`${t('form.weight')} (${tCommon('optional')})`}
                placeholder={t('form.weight')}
                error={state?.errors?.weight?.[0]}
              />
              <Input
                id="quote-dimensions"
                name="dimensions"
                label={`${t('form.dimensions')} (${tCommon('optional')})`}
                placeholder={t('form.dimensions')}
                error={state?.errors?.dimensions?.[0]}
              />
            </div>
            <Select
              id="quote-cargo-type"
              name="cargoType"
              label={t('form.cargo_type')}
              options={cargoOptions}
              placeholder={t('form.cargo_type')}
              required
              defaultValue=""
              error={state?.errors?.cargoType?.[0]}
            />
          </div>

          <Textarea
            id="quote-notes"
            name="notes"
            label={`${t('form.notes')} (${tCommon('optional')})`}
            placeholder={t('form.notes')}
            rows={4}
            error={state?.errors?.notes?.[0]}
          />

          <Button type="submit" size="lg" className="w-full" disabled={isPending}>
            {isPending ? tCommon('loading') : t('form.submit')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
