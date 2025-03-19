'use client';

import { useLanguage } from '../../../(core)/i18n/context';

interface LanguageSkill {
  key: string;
  levelKey: string;
  icon: string;
  translations: {
    en: string;
    pt: string;
    de: string;
  };
  levels: {
    en: string;
    pt: string;
    de: string;
  };
}

export default function LanguageSkills() {
  const { language } = useLanguage();

  const languages: LanguageSkill[] = [
    {
      key: 'english',
      levelKey: 'fluent',
      icon: '🇺🇸',
      translations: {
        en: 'English',
        pt: 'Inglês',
        de: 'Englisch',
      },
      levels: {
        en: 'Fluent',
        pt: 'Fluente',
        de: 'Fließend',
      },
    },
    {
      key: 'portuguese',
      levelKey: 'fluent',
      icon: '🇧🇷',
      translations: {
        en: 'Portuguese',
        pt: 'Português',
        de: 'Portugiesisch',
      },
      levels: {
        en: 'Fluent',
        pt: 'Fluente',
        de: 'Fließend',
      },
    },
    {
      key: 'spanish',
      levelKey: 'intermediate',
      icon: '🇪🇸',
      translations: {
        en: 'Spanish',
        pt: 'Espanhol',
        de: 'Spanisch',
      },
      levels: {
        en: 'Intermediate',
        pt: 'Intermediário',
        de: 'Mittelstufe',
      },
    },
    {
      key: 'german',
      levelKey: 'beginner',
      icon: '🇩🇪',
      translations: {
        en: 'German',
        pt: 'Alemão',
        de: 'Deutsch',
      },
      levels: {
        en: 'Beginner',
        pt: 'Iniciante',
        de: 'Anfänger',
      },
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
      <h3 className="text-2xl font-semibold mb-8 text-blue-700 dark:text-blue-300">
        {language === 'en' ? 'Languages' : language === 'pt' ? 'Idiomas' : 'Sprachen'}
      </h3>
      <ul className="space-y-6">
        {languages.map((lang, index) => (
          <li key={index} className="flex items-center">
            <span className="text-4xl mr-4">{lang.icon}</span>
            <div>
              <p className="font-medium text-xl text-gray-800 dark:text-white">
                {lang.translations[language] || lang.translations.en}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                {lang.levels[language] || lang.levels.en}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
