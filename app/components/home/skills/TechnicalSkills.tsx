'use client';

import { useLanguage } from '../../../(core)/i18n/context';
import SkillCard from './SkillCard';

interface Skill {
  key: string;
  icon: string;
  translations: {
    en: string;
    pt: string;
    de: string;
  };
}

export default function TechnicalSkills() {
  const { t, language } = useLanguage();

  const technicalSkills: Skill[] = [
    {
      key: 'javascript',
      icon: '📝',
      translations: {
        en: 'JavaScript',
        pt: 'JavaScript',
        de: 'JavaScript',
      },
    },
    {
      key: 'python',
      icon: '🐍',
      translations: {
        en: 'Python',
        pt: 'Python',
        de: 'Python',
      },
    },
    {
      key: 'htmlcss',
      icon: '🌐',
      translations: {
        en: 'HTML/CSS',
        pt: 'HTML/CSS',
        de: 'HTML/CSS',
      },
    },
    {
      key: 'reactjs',
      icon: '⚛️',
      translations: {
        en: 'ReactJS',
        pt: 'ReactJS',
        de: 'ReactJS',
      },
    },
    {
      key: 'vuejs',
      icon: '🔧',
      translations: {
        en: 'VueJS',
        pt: 'VueJS',
        de: 'VueJS',
      },
    },
    {
      key: 'sql',
      icon: '💾',
      translations: {
        en: 'SQL',
        pt: 'SQL',
        de: 'SQL',
      },
    },
    {
      key: 'git',
      icon: '📊',
      translations: {
        en: 'Git',
        pt: 'Git',
        de: 'Git',
      },
    },
    {
      key: 'linux',
      icon: '🐧',
      translations: {
        en: 'Linux',
        pt: 'Linux',
        de: 'Linux',
      },
    },
    {
      key: 'java',
      icon: '☕',
      translations: {
        en: 'Java',
        pt: 'Java',
        de: 'Java',
      },
    },
    {
      key: 'cpp',
      icon: '⚙️',
      translations: {
        en: 'C/C++',
        pt: 'C/C++',
        de: 'C/C++',
      },
    },
  ];

  // Update app/components/home/skills/TechnicalSkills.tsx in the return statement
  return (
    <SkillCard title={t('skills.technical')}>
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
        {technicalSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 sm:p-4 flex items-center justify-center transform transition-all duration-200 hover:scale-105"
          >
            <span className="text-base sm:text-lg font-medium text-blue-700 dark:text-blue-300">
              {skill.translations[language] || skill.translations.en}
            </span>
          </div>
        ))}
      </div>
    </SkillCard>
  );
}
