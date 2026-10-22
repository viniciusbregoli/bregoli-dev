'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '../../(core)/i18n/context';
import FormField from './FormField';
import SubmitButton from './SubmitButton';
import SuccessMessage from './SuccessMessage';
import ErrorMessage from './ErrorMessage';
import { ContactFormData, ContactFormErrors, submitContact, validateContact } from './contactApi';

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors = validateContact(formData, t);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await submitContact(formData);

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(t('contact.submitError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return <SuccessMessage message={t('contact.submitSuccess')} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        label={t('contact.name')}
        placeholder={t('contact.placeholder.name')}
      />

      <FormField
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        label={t('contact.emailField')}
        placeholder={t('contact.placeholder.email')}
      />

      <FormField
        type="textarea"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        label={t('contact.message')}
        placeholder={t('contact.placeholder.message')}
        rows={5}
      />

      {submitError && <ErrorMessage message={submitError} />}

      <SubmitButton
        isSubmitting={isSubmitting}
        label={t(isSubmitting ? 'contact.sending' : 'contact.send')}
      />
    </form>
  );
}
