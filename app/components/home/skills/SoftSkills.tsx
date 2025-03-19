'use client';

import { useLanguage } from '../../../(core)/i18n/context';

interface SoftSkill {
  key: string;
  translations: {
    en: string;
    pt: string;
    de: string;
  };
}

export default function SoftSkills() {
  const { t, language } = useLanguage();

  const softSkills: SoftSkill[] = [
    {
      key: 'proactiveLearning',
      translations: {
        en: 'Proactive Learning',
        pt: 'Aprendizado Proativo',
        de: 'Proaktives Lernen',
      },
    },
    {
      key: 'communication',
      translations: {
        en: 'Effective Communication',
        pt: 'Comunicação Eficaz',
        de: 'Effektive Kommunikation',
      },
    },
    {
      key: 'teamwork',
      translations: {
        en: 'Teamwork',
        pt: 'Trabalho em Equipe',
        de: 'Teamarbeit',
      },
    },
    {
      key: 'problemSolving',
      translations: {
        en: 'Problem-Solving',
        pt: 'Resolução de Problemas',
        de: 'Problemlösung',
      },
    },
    {
      key: 'adaptability',
      translations: {
        en: 'Adaptability',
        pt: 'Adaptabilidade',
        de: 'Anpassungsfähigkeit',
      },
    },
    {
      key: 'criticalThinking',
      translations: {
        en: 'Critical Thinking',
        pt: 'Pensamento Crítico',
        de: 'Kritisches Denken',
      },
    },
    {
      key: 'accountability',
      translations: {
        en: 'Accountability',
        pt: 'Responsabilidade',
        de: 'Verantwortlichkeit',
      },
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
      <h3 className="text-2xl font-semibold mb-8 text-blue-700 dark:text-blue-300">
        {t('skills.soft')}
      </h3>
      <ul className="space-y-5">
        {softSkills.map((skill, index) => (
          <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3 mr-4">
              <svg
                className="w-6 h-6 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-xl">{skill.translations[language] || skill.translations.en}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
