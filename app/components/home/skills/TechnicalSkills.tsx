'use client';

import { useLanguage } from '../../../(core)/i18n/context';
import { FiCode, FiServer, FiTool } from 'react-icons/fi';

export default function TechnicalSkills() {
  const { t } = useLanguage();

  const technicalSkills = [
    {
      category: 'Programming',
      icon: <FiCode className="w-5 h-5 text-primary" />,
      skills: ['Python', 'Java', 'JavaScript', 'Next.js', 'C', 'PHP'],
    },
    {
      category: 'Infrastructure & Databases',
      icon: <FiServer className="w-5 h-5 text-primary" />,
      skills: ['SQL', 'PostgreSQL', 'Windows', 'Linux', 'Docker', 'AWS'],
    },
    {
      category: 'Tools',
      icon: <FiTool className="w-5 h-5 text-primary" />,
      skills: ['Git', 'VS Code', 'IntelliJ', 'Postman', 'YouTrack', 'Jira'],
    },
  ];

  return (
    <div className="panel p-8">
      <h3 className="mono-label mb-8">{t('skills.technical')}</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {technicalSkills.map((category, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10">
                {category.icon}
              </div>
              <h4 className="font-semibold text-foreground">{category.category}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-foreground/5 text-foreground/80 border border-line hover:border-primary/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
