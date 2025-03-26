// app/components/home/experience/ExperienceCard.tsx
'use client';

import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi';
import { Language } from '../../../(core)/i18n/translations';
import { ExperienceType } from './experienceData';
import TechnologyBadges from './TechnologyBadges';
import ExperienceHeader from './ExperienceHeader';

interface ExperienceCardProps {
  experience: ExperienceType;
  currentLanguage: Language;
}

export default function ExperienceCard({ experience, currentLanguage }: ExperienceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 transform transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
        <div className="flex items-start space-x-4">
          <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3">
            <FiBriefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <ExperienceHeader
            company={experience.company}
            position={experience.position[currentLanguage] || experience.position.en || ''}
          />
        </div>
        <div className="mt-4 md:mt-0 flex flex-col md:items-end space-y-2">
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FiCalendar className="mr-2 text-blue-500 dark:text-blue-400" />
            <span className="font-medium">{experience.period[currentLanguage] || experience.period.en}</span>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FiMapPin className="mr-2 text-blue-500 dark:text-blue-400" />
            <span className="font-medium">{experience.location}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {experience.description[currentLanguage] || experience.description.en}
        </p>

        <TechnologyBadges technologies={experience.technologies} currentLanguage={currentLanguage} />
      </div>
    </div>
  );
}
