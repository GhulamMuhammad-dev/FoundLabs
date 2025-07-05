// actions/contact.ts
'use server';

import { Resend } from 'resend';
import ContactFormEmail from '@/components/emails/contact-form';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  try {
    await resend.emails.send({
      from: 'contact@yourdomain.com',
      to: 'hello@foundlabs.ai',
      subject: `New contact form submission from ${name}`,
      react: ContactFormEmail({ name, email, message }),
    });

    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false };
  }
}