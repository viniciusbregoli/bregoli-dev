'use client';

import { useLanguage } from '../../../(core)/i18n/context';
import { FiCode, FiServer, FiTool } from 'react-icons/fi';
import { technicalSkills as data } from './skillsData';

const icons = [
  <FiCode key="code" className="w-5 h-5 text-primary" />,
  <FiServer key="server" className="w-5 h-5 text-primary" />,
  <FiTool key="tool" className="w-5 h-5 text-primary" />,
];

export default function TechnicalSkills() {
  const { t } = useLanguage();

  const technicalSkills = data.map((group, i) => ({ ...group, icon: icons[i % icons.length] }));

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
