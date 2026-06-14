'use client';

import { useLanguage } from '../../../(core)/i18n/context';
import { FiUsers, FiTrendingUp, FiZap, FiCheckCircle } from 'react-icons/fi';
import { softSkillGroups } from './skillsData';

const icons = [
  <FiUsers key="users" className="w-5 h-5 text-primary" />,
  <FiTrendingUp key="trend" className="w-5 h-5 text-primary" />,
  <FiZap key="zap" className="w-5 h-5 text-primary" />,
  <FiCheckCircle key="check" className="w-5 h-5 text-primary" />,
];

export default function SoftSkills() {
  const { t } = useLanguage();

  const softSkills = softSkillGroups.map((group, i) => ({
    category: t(group.categoryKey),
    icon: icons[i % icons.length],
    skills: group.skillKeys.map((k) => t(k)),
  }));

  return (
    <div className="panel p-8">
      <h3 className="mono-label mb-8">{t('skills.soft')}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {softSkills.map((category, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10">
                {category.icon}
              </div>
              <h4 className="font-semibold text-foreground">{category.category}</h4>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-start gap-2 text-sm text-muted">
                  <span className="text-primary mt-1">›</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
