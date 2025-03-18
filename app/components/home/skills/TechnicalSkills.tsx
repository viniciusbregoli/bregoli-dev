'use client';

import { useLanguage } from '../../../(core)/i18n/context';
import SkillCard from './SkillCard';

export default function TechnicalSkills() {
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

  return (
    <SkillCard title={t('skills.technical')}>
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
    </SkillCard>
  );
}
