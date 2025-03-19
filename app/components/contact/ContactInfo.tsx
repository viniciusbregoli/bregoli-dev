'use client';

import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../../(core)/i18n/context';

export default function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-blue-700 dark:text-blue-300">
        {t('contact.getInTouch')}
      </h2>
      <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg">{t('contact.description')}</p>

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
  );
}
