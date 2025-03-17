'use client';

import { useLanguage } from '../../i18n/context';

export default function SkillsSection() {
  const { t } = useLanguage();

  const technicalSkills = [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'ReactJS', level: 80 },
    { name: 'VueJS', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'SQL', level: 82 },
    { name: 'Git', level: 85 },
    { name: 'Linux', level: 88 },
    { name: 'C/C++', level: 75 },
  ];

  const softSkills = [
    'Proactive Learning',
    'Effective Communication',
    'Teamwork',
    'Problem-Solving',
    'Adaptability',
    'Critical Thinking',
    'Accountability',
  ];

  const languages = [
    { name: 'English', level: 'Fluent', icon: '🇺🇸' },
    { name: 'Portuguese', level: 'Fluent', icon: '🇧🇷' },
    { name: 'German', level: 'Beginner', icon: '🇩🇪' },
    { name: 'Spanish', level: 'Intermediate', icon: '🇪🇸' },
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-800 dark:text-white">
          {t('skills.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6 text-blue-700 dark:text-blue-300">
              {t('skills.technical')}
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6 text-blue-700 dark:text-blue-300">
              {t('skills.soft')}
            </h3>
            <ul className="space-y-3">
              {softSkills.map((skill, index) => (
                <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6 text-blue-700 dark:text-blue-300">
              {t('skills.languages')}
            </h3>
            <ul className="space-y-4">
              {languages.map((language, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-2xl mr-3">{language.icon}</span>
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">{language.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{language.level}</p>
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
