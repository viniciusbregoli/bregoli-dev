'use client';

import { useLanguage } from '../../../(core)/i18n/context';
import { FaCode, FaServer, FaTools } from 'react-icons/fa';

export default function TechnicalSkills() {
  const { t } = useLanguage();

  const technicalSkills = [
    {
      category: 'Programming',
      icon: <FaCode className="w-7 h-7 text-white" />,
      skills: ['Python', 'Java', 'JavaScript', 'Next.js', 'C', 'PHP'],
    },
    {
      category: 'Infrastructure & Databases',
      icon: <FaServer className="w-7 h-7 text-white" />,
      skills: ['SQL', 'PostgreSQL', 'Windows', 'Linux', 'Docker', 'AWS'],
    },
    {
      category: 'Tools',
      icon: <FaTools className="w-7 h-7 text-white" />,
      skills: ['Git', 'VS Code', 'IntelliJ', 'Postman', 'YouTrack', 'Jira'],
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
      <h3 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-blue-300">
        {t('skills.technical')}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technicalSkills.map((category, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-slate-500 dark:bg-blue-500 rounded-full p-3">{category.icon}</div>
              <h4 className="text-xl font-medium text-gray-700 dark:text-gray-200">
                {category.category}
              </h4>
            </div>
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg px-5 py-3 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-blue-400"></div>
                  <span className="text-lg text-gray-700 dark:text-gray-200 font-medium">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
