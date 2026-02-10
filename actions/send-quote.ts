'use server';

import { Resend } from 'resend';
import { quoteFormSchema, type QuoteFormData } from '@/lib/validations';
import { COMPANY_INFO } from '@/lib/constants';

const resend = new Resend(process.env.RESEND_API_KEY);

export type ActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function sendQuoteRequest(
  prevState: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  const rawData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    company: formData.get('company') as string,
    origin: formData.get('origin') as string,
    destination: formData.get('destination') as string,
    weight: formData.get('weight') as string,
    dimensions: formData.get('dimensions') as string,
    cargoType: formData.get('cargoType') as string,
    notes: formData.get('notes') as string,
  };

  const result = quoteFormSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: 'Validation failed',
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const data: QuoteFormData = result.data;

  try {
    if (!process.env.RESEND_API_KEY) {
      console.log('Quote request received (email disabled):', data);
      return {
        success: true,
        message: 'Request received successfully!',
      };
    }

    await resend.emails.send({
      from: 'EA Transport <noreply@transport-ea.com>',
      to: [COMPANY_INFO.email],
      replyTo: data.email,
      subject: `New Quote Request from ${data.name}`,
      html: `
        <h2>New Quote Request</h2>

        <h3>Contact Information</h3>
        <ul>
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone:</strong> ${data.phone}</li>
          ${data.company ? `<li><strong>Company:</strong> ${data.company}</li>` : ''}
        </ul>

        <h3>Shipment Details</h3>
        <ul>
          <li><strong>Origin:</strong> ${data.origin}</li>
          <li><strong>Destination:</strong> ${data.destination}</li>
          <li><strong>Cargo Type:</strong> ${data.cargoType}</li>
          ${data.weight ? `<li><strong>Weight:</strong> ${data.weight} kg</li>` : ''}
          ${data.dimensions ? `<li><strong>Dimensions:</strong> ${data.dimensions}</li>` : ''}
        </ul>

        ${data.notes ? `<h3>Additional Notes</h3><p>${data.notes}</p>` : ''}
      `,
    });

    return {
      success: true,
      message: 'Request sent successfully!',
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      success: false,
      message: 'Failed to send request. Please try again.',
    };
  }
}
