// app/components/home/experience/TechnologyBadges.tsx
'use client';

import { Language } from '../../../(core)/i18n/translations';
import { FiCode } from 'react-icons/fi';

interface TechnologyBadgesProps {
  technologies: {
    en: string;
    pt: string;
    de: string;
  }[];
  currentLanguage: Language;
}

export default function TechnologyBadges({ technologies, currentLanguage }: TechnologyBadgesProps) {
  return (
    <div>
      <h5 className="text-gray-700 dark:text-gray-200 font-medium mb-3 flex items-center">
        <FiCode className="mr-2 text-blue-500 dark:text-blue-400" />
        {currentLanguage === 'en'
          ? 'Technologies'
          : currentLanguage === 'pt'
            ? 'Tecnologias'
            : 'Technologien'}
      </h5>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm px-3 py-1.5 rounded-full font-medium border border-blue-100 dark:border-blue-800"
          >
            {tech[currentLanguage] || tech.en}
          </span>
        ))}
      </div>
    </div>
  );
}
