import { TranslationKey } from '../../(core)/i18n/translations';

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Shared by every contact form UI so they all enforce the same rules. */
export function validateContact(
  data: ContactFormData,
  t: (key: TranslationKey) => string,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) errors.name = t('contact.validation.nameRequired');

  if (!data.email.trim()) errors.email = t('contact.validation.emailRequired');
  else if (!EMAIL_REGEX.test(data.email)) errors.email = t('contact.validation.emailInvalid');

  if (!data.message.trim()) errors.message = t('contact.validation.messageRequired');
  else if (data.message.trim().length < 10)
    errors.message = t('contact.validation.messageTooShort');

  return errors;
}

/** POSTs a contact submission; throws with the server's error message on failure. */
export async function submitContact(data: ContactFormData): Promise<void> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const body = await response.json();
  if (!response.ok) throw new Error(body.error || 'Something went wrong');
}
