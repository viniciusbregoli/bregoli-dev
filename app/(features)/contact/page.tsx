// app/(features)/contact/page.tsx
'use client';

import { useLanguage } from '../../(core)/i18n/context';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactForm from '../../components/contact/ContactForm';
import SectionTitle from '../../components/common/SectionTitle';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="py-14 bg-gradient-to-b from-gray-50 via-slate-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle className="text-gray-800 dark:text-blue-300">
          {t('contact.title')}
        </SectionTitle>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <ContactInfo />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-blue-300">
              {t('contact.sendMessage')}
            </h2>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
