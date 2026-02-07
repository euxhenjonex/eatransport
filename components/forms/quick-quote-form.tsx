'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { sendQuoteRequest, type ActionState } from '@/actions/send-quote';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast';

export function QuickQuoteForm() {
  const t = useTranslations('contact');
  const tCommon = useTranslations('common');
  const { addToast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const prevStateRef = useRef<ActionState | null>(null);

  const [state, formAction, isPending] = useActionState<ActionState | null, FormData>(
    sendQuoteRequest,
    null
  );

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
    <form ref={formRef} action={formAction} className="space-y-4">
      {/* Hidden fields for optional form fields the server action expects */}
      <input type="hidden" name="company" value="" />
      <input type="hidden" name="weight" value="" />
      <input type="hidden" name="dimensions" value="" />
      <input type="hidden" name="notes" value="" />

      <Input
        id="quick-name"
        name="name"
        label={t('form.name')}
        placeholder={t('form.name')}
        required
        autoComplete="name"
        error={state?.errors?.name?.[0]}
      />

      <Input
        id="quick-email"
        name="email"
        type="email"
        label={t('form.email')}
        placeholder={t('form.email')}
        required
        autoComplete="email"
        error={state?.errors?.email?.[0]}
      />

      <Input
        id="quick-phone"
        name="phone"
        type="tel"
        label={t('form.phone')}
        placeholder={t('form.phone')}
        required
        autoComplete="tel"
        error={state?.errors?.phone?.[0]}
      />

      <Input
        id="quick-origin"
        name="origin"
        label={t('form.origin')}
        placeholder={t('form.origin')}
        required
        error={state?.errors?.origin?.[0]}
      />

      <Input
        id="quick-destination"
        name="destination"
        label={t('form.destination')}
        placeholder={t('form.destination')}
        required
        error={state?.errors?.destination?.[0]}
      />

      <Select
        id="quick-cargo-type"
        name="cargoType"
        label={t('form.cargo_type')}
        options={cargoOptions}
        placeholder={t('form.cargo_type')}
        required
        defaultValue=""
        error={state?.errors?.cargoType?.[0]}
      />

      <Button type="submit" size="lg" className="w-full" disabled={isPending}>
        {isPending ? tCommon('loading') : t('form.submit')}
      </Button>
    </form>
  );
}
