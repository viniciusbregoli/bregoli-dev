// app/(features)/contact/page.tsx
'use client';

import { useLanguage } from '../../(core)/i18n/context';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactForm from '../../components/contact/ContactForm';

export default function ContactPage() {
  const { t } = useLanguage();

  // Update app/(features)/contact/page.tsx
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 text-blue-800 dark:text-white">
        {t('contact.title')}
      </h1>
      <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mb-8"></div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <ContactInfo />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 dark:text-blue-300">
            {t('contact.sendMessage')}
          </h2>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
