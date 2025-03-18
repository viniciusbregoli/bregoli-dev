// app/components/home/experience/ExperienceCard.tsx
'use client';

import { FiCalendar, FiMapPin } from 'react-icons/fi';
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
    <div className="bg-blue-50 dark:bg-gray-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
        <ExperienceHeader
          company={experience.company}
          position={experience.position[currentLanguage] || experience.position.en || ''}
        />
        <div className="mt-4 md:mt-0 flex flex-col md:items-end">
          <div className="flex items-center text-gray-700 dark:text-gray-300 mb-2">
            <FiCalendar className="mr-2" />
            <span>{experience.period[currentLanguage] || experience.period.en}</span>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FiMapPin className="mr-2" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {experience.description[currentLanguage] || experience.description.en}
      </p>

      <TechnologyBadges technologies={experience.technologies} currentLanguage={currentLanguage} />
    </div>
  );
}
