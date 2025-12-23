// app/components/home/experience/ExperienceCard.tsx
'use client';

import { FiCalendar, FiMapPin, FiBriefcase, FiCode, FiServer, FiCpu } from 'react-icons/fi';
import { Language } from '../../../(core)/i18n/translations';
import { ExperienceType } from './experienceData';
import TechnologyBadges from './TechnologyBadges';
import ExperienceHeader from './ExperienceHeader';

interface ExperienceCardProps {
  experience: ExperienceType;
  currentLanguage: Language;
}

export default function ExperienceCard({ experience, currentLanguage }: ExperienceCardProps) {
  const getIcon = () => {
    switch (experience.icon) {
      case 'robot':
        return <FiCpu className="w-6 h-6 text-slate-600 dark:text-slate-400" />;
      case 'code':
        return <FiCode className="w-6 h-6 text-slate-600 dark:text-slate-400" />;
      case 'server':
        return <FiServer className="w-6 h-6 text-slate-600 dark:text-slate-400" />;
      default:
        return <FiBriefcase className="w-6 h-6 text-slate-600 dark:text-slate-400" />;
    }
  };

  return (
    <div className="glass-morphism rounded-3xl p-8 shadow-xl border border-white/20 dark:border-white/10 hover:shadow-primary/10 transition-all duration-500 group relative">
      <div className="flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 dark:bg-primary/20 rounded-2xl p-3 shadow-inner group-hover:scale-110 transition-transform duration-300">
              {getIcon()}
            </div>
            <div>
              <ExperienceHeader
                company={experience.company}
                position={experience.position[currentLanguage] || experience.position.en || ''}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider">
            <div className="flex items-center px-3 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/10">
              <FiCalendar className="mr-2" />
              {experience.period[currentLanguage] || experience.period.en}
            </div>
            <div className="flex items-center px-3 py-1.5 rounded-full bg-secondary/5 text-secondary border border-secondary/10">
              <FiMapPin className="mr-2" />
              {experience.location}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            {experience.description[currentLanguage] || experience.description.en}
          </p>

          <div className="pt-4 border-t border-gray-100 dark:border-white/5">
            <TechnologyBadges
              technologies={experience.technologies}
              currentLanguage={currentLanguage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
