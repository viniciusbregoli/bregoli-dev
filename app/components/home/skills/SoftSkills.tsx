'use client';

import { useLanguage } from '../../../(core)/i18n/context';
import { FiUsers, FiTrendingUp, FiZap, FiCheckCircle } from 'react-icons/fi';

export default function SoftSkills() {
  const { t } = useLanguage();

  const softSkills = [
    {
      category: t('skills.soft.communication'),
      icon: <FiUsers className="w-5 h-5 text-primary" />,
      skills: [
        t('skills.soft.teamCollaboration'),
        t('skills.soft.clientCommunication'),
        t('skills.soft.problemSolving'),
      ],
    },
    {
      category: t('skills.soft.leadership'),
      icon: <FiTrendingUp className="w-5 h-5 text-primary" />,
      skills: [
        t('skills.soft.projectManagement'),
        t('skills.soft.teamLeadership'),
        t('skills.soft.strategicPlanning'),
      ],
    },
    {
      category: t('skills.soft.innovation'),
      icon: <FiZap className="w-5 h-5 text-primary" />,
      skills: [
        t('skills.soft.creativeThinking'),
        t('skills.soft.processOptimization'),
        t('skills.soft.technicalInnovation'),
      ],
    },
    {
      category: t('skills.soft.professional'),
      icon: <FiCheckCircle className="w-5 h-5 text-primary" />,
      skills: [
        t('skills.soft.agileMethodologies'),
        t('skills.soft.riskManagement'),
        t('skills.soft.qualityAssurance'),
      ],
    },
  ];

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
