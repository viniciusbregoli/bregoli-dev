'use client';

import { useLanguage } from '../../(core)/i18n/context';

export default function SkillsSection() {
  const { t } = useLanguage();

  const technicalSkills = [
    { key: 'skills.technical.javascript', icon: '📝' },
    { key: 'skills.technical.python', icon: '🐍' },
    { key: 'skills.technical.htmlcss', icon: '🌐' },
    { key: 'skills.technical.reactjs', icon: '⚛️' },
    { key: 'skills.technical.vuejs', icon: '🔧' },
    { key: 'skills.technical.sql', icon: '💾' },
    { key: 'skills.technical.git', icon: '📊' },
    { key: 'skills.technical.linux', icon: '🐧' },
    { key: 'skills.technical.java', icon: '☕' },
    { key: 'skills.technical.cpp', icon: '⚙️' },
  ];

  const softSkills = [
    { key: 'skills.soft.proactiveLearning' },
    { key: 'skills.soft.communication' },
    { key: 'skills.soft.teamwork' },
    { key: 'skills.soft.problemSolving' },
    { key: 'skills.soft.adaptability' },
    { key: 'skills.soft.criticalThinking' },
    { key: 'skills.soft.accountability' },
  ];

  const languages = [
    { key: 'skills.languages.english', levelKey: 'skills.level.fluent', icon: '🇺🇸' },
    { key: 'skills.languages.portuguese', levelKey: 'skills.level.fluent', icon: '🇧🇷' },
    { key: 'skills.languages.spanish', levelKey: 'skills.level.intermediate', icon: '🇪🇸' },
    { key: 'skills.languages.german', levelKey: 'skills.level.beginner', icon: '🇩🇪' },
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-800 dark:text-white">
          {t('skills.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Technical Skills */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-8 text-blue-700 dark:text-blue-300">
              {t('skills.technical')}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 flex items-center justify-center transform transition-all duration-200 hover:scale-105"
                >
                  <span className="text-lg font-medium text-blue-700 dark:text-blue-300">
                    {t(skill.key)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
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
                  <span className="text-xl">{t(skill.key)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-8 text-blue-700 dark:text-blue-300">
              {t('skills.languages')}
            </h3>
            <ul className="space-y-6">
              {languages.map((language, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-4xl mr-4">{language.icon}</span>
                  <div>
                    <p className="font-medium text-xl text-gray-800 dark:text-white">
                      {t(language.key)}
                    </p>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                      {t(language.levelKey)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
