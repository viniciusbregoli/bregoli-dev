'use client';

import { useLanguage } from '../../../(core)/i18n/context';
import { FaGlobe } from 'react-icons/fa';

export default function LanguageSkills() {
  const { t } = useLanguage();

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Portuguese', level: 'Native' },
    { name: 'Spanish', level: 'Advanced' },
    { name: 'German', level: 'Intermediate' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
      <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-blue-300">
        {t('skills.languages')}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {languages.map((language, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg px-5 py-3 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <div className="bg-slate-500 dark:bg-blue-500 rounded-full p-3">
              <FaGlobe className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="text-lg font-medium text-gray-700 dark:text-gray-200">
                {language.name}
              </div>
              <div className="text-base text-gray-500 dark:text-gray-400">{language.level}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
