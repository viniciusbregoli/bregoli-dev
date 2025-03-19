'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '../../(core)/i18n/context';
import FormField from './FormField';
import SubmitButton from './SubmitButton';
import SuccessMessage from './SuccessMessage';
import ErrorMessage from './ErrorMessage';

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactForm() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name =
        language === 'en'
          ? 'Name is required'
          : language === 'pt'
            ? 'Nome é obrigatório'
            : 'Name ist erforderlich';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email =
        language === 'en'
          ? 'Email is required'
          : language === 'pt'
            ? 'Email é obrigatório'
            : 'E-Mail ist erforderlich';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email =
        language === 'en'
          ? 'Please enter a valid email address'
          : language === 'pt'
            ? 'Por favor, insira um endereço de email válido'
            : 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message =
        language === 'en'
          ? 'Message is required'
          : language === 'pt'
            ? 'Mensagem é obrigatória'
            : 'Nachricht ist erforderlich';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        language === 'en'
          ? 'Message must be at least 10 characters long'
          : language === 'pt'
            ? 'A mensagem deve ter pelo menos 10 caracteres'
            : 'Die Nachricht muss mindestens 10 Zeichen lang sein';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send data to the API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(
        language === 'en'
          ? 'There was a problem sending your message. Please try again later.'
          : language === 'pt'
            ? 'Houve um problema ao enviar sua mensagem. Por favor, tente novamente mais tarde.'
            : 'Beim Senden Ihrer Nachricht ist ein Problem aufgetreten. Bitte versuchen Sie es später erneut.',
      );
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
        placeholder={language === 'en' ? 'Your name' : language === 'pt' ? 'Seu nome' : 'Ihr Name'}
      />

      <FormField
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        label={t('contact.emailField')}
        placeholder={
          language === 'en'
            ? 'your-email@example.com'
            : language === 'pt'
              ? 'seu-email@exemplo.com'
              : 'ihre-email@beispiel.de'
        }
      />

      <FormField
        type="textarea"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        label={t('contact.message')}
        placeholder={
          language === 'en'
            ? 'Your message here...'
            : language === 'pt'
              ? 'Sua mensagem aqui...'
              : 'Ihre Nachricht hier...'
        }
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
