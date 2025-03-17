'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '../../(core)/i18n/context';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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

export default function ContactPage() {
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

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 text-blue-800 dark:text-white">
        {t('contact.title')}
      </h1>
      <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mb-8"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 dark:text-blue-300">
            {t('contact.getInTouch')}
          </h2>
          <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg">
            {t('contact.description')}
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaEnvelope className="h-6 w-6 text-blue-600 dark:text-blue-300" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 dark:text-white text-lg">
                  {t('contact.email')}
                </h3>
                <a
                  href="mailto:vinibregoli@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                >
                  vinibregoli@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="h-6 w-6 text-blue-600 dark:text-blue-300" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 dark:text-white text-lg">
                  {t('contact.location')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Ingolstadt, Bavaria - Germany</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 dark:text-blue-300">
            {t('contact.sendMessage')}
          </h2>

          {submitted ? (
            <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-300 px-6 py-5 rounded-lg">
              <h3 className="font-medium text-lg mb-2">
                {language === 'en'
                  ? 'Thank you!'
                  : language === 'pt'
                    ? 'Obrigado!'
                    : 'Vielen Dank!'}
              </h3>
              <p>{t('contact.submitSuccess')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-500 dark:border-red-500'
                      : 'border-gray-300 focus:ring-blue-500 dark:border-gray-600'
                  }`}
                  placeholder={
                    language === 'en' ? 'Your name' : language === 'pt' ? 'Seu nome' : 'Ihr Name'
                  }
                />
                {errors.name && (
                  <p className="mt-1 text-red-600 dark:text-red-400 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >
                  {t('contact.emailField')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500 dark:border-red-500'
                      : 'border-gray-300 focus:ring-blue-500 dark:border-gray-600'
                  }`}
                  placeholder={
                    language === 'en'
                      ? 'your-email@example.com'
                      : language === 'pt'
                        ? 'seu-email@exemplo.com'
                        : 'ihre-email@beispiel.de'
                  }
                />
                {errors.email && (
                  <p className="mt-1 text-red-600 dark:text-red-400 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                >
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-500 dark:border-red-500'
                      : 'border-gray-300 focus:ring-blue-500 dark:border-gray-600'
                  }`}
                  placeholder={
                    language === 'en'
                      ? 'Your message here...'
                      : language === 'pt'
                        ? 'Sua mensagem aqui...'
                        : 'Ihre Nachricht hier...'
                  }
                />
                {errors.message && (
                  <p className="mt-1 text-red-600 dark:text-red-400 text-sm">{errors.message}</p>
                )}
              </div>

              {submitError && (
                <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-300 px-4 py-3 rounded-lg">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {t('contact.sending')}
                  </>
                ) : (
                  t('contact.send')
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
