import { z } from 'zod';

export const quoteFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(5, 'Phone number is required'),
  company: z.string().optional(),
  origin: z.string().min(2, 'Origin is required'),
  destination: z.string().min(2, 'Destination is required'),
  weight: z.string().optional(),
  dimensions: z.string().optional(),
  cargoType: z.string().min(1, 'Cargo type is required'),
  notes: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
