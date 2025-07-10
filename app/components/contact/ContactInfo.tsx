'use client';

import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../../(core)/i18n/context';

export default function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-blue-300">
        {t('contact.getInTouch')}
      </h2>
      <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        {t('contact.description')}
      </p>

      <div className="space-y-6">
        <div className="flex items-start group">
          <div className="bg-slate-100 dark:bg-blue-900 p-3 rounded-xl mr-4 transform transition-transform duration-300 group-hover:scale-110">
            <FaEnvelope className="h-6 w-6 text-slate-600 dark:text-blue-300" />
          </div>
          <div>
            <h3 className="font-medium text-gray-800 dark:text-white text-lg mb-1">
              {t('contact.email')}
            </h3>
            <a
              href="mailto:vinibregoli@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-blue-300 transition-colors duration-200"
            >
              me@viniciusbregoli.dev
            </a>
          </div>
        </div>

        <div className="flex items-start group">
          <div className="bg-slate-100 dark:bg-blue-900 p-3 rounded-xl mr-4 transform transition-transform duration-300 group-hover:scale-110">
            <FaLinkedin className="h-6 w-6 text-slate-600 dark:text-blue-300" />
          </div>
          <div>
            <h3 className="font-medium text-gray-800 dark:text-white text-lg mb-1">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/viniciusbregoli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-slate-800 dark:hover:text-blue-300 transition-colors duration-200"
            >
              linkedin.com/in/viniciusbregoli
            </a>
          </div>
        </div>

        <div className="flex items-start group">
          <div className="bg-slate-100 dark:bg-blue-900 p-3 rounded-xl mr-4 transform transition-transform duration-300 group-hover:scale-110">
            <FaMapMarkerAlt className="h-6 w-6 text-slate-600 dark:text-blue-300" />
          </div>
          <div>
            <h3 className="font-medium text-gray-800 dark:text-white text-lg mb-1">
              {t('contact.location')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Ingolstadt, Bavaria - Germany</p>
          </div>
        </div>
      </div>
    </div>
  );
}
