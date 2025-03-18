'use client';

import { useLanguage } from '../../../(core)/i18n/context';

export default function LanguageSkills() {
  const { t } = useLanguage();

  const languages = [
    { key: 'skills.languages.english', levelKey: 'skills.level.fluent', icon: '🇺🇸' },
    { key: 'skills.languages.portuguese', levelKey: 'skills.level.fluent', icon: '🇧🇷' },
    { key: 'skills.languages.spanish', levelKey: 'skills.level.intermediate', icon: '🇪🇸' },
    { key: 'skills.languages.german', levelKey: 'skills.level.beginner', icon: '🇩🇪' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
      <h3 className="text-2xl font-semibold mb-8 text-blue-700 dark:text-blue-300">
        {t('skills.languages')}
      </h3>
      <ul className="space-y-6">
        {languages.map((language, index) => (
          <li key={index} className="flex items-center">
            <span className="text-4xl mr-4">{language.icon}</span>
            <div>
              <p className="font-medium text-xl text-gray-800 dark:text-white">{t(language.key)}</p>
              <p className="text-lg text-gray-500 dark:text-gray-400">{t(language.levelKey)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
